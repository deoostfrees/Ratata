const STORAGE_KEY = 'color-scheme'
const DEFAULT_COLOR_SCHEME = 'system'
const COLOR_SCHEMES = [DEFAULT_COLOR_SCHEME, 'light', 'dark']

const isSupportedColorScheme = (colorScheme) => COLOR_SCHEMES.includes(colorScheme)

// Reading storage throws when the browser blocks it, in a sandboxed iframe for example.
const readStoredColorScheme = () => {
  let storedColorScheme = null

  try {
    storedColorScheme = localStorage.getItem(STORAGE_KEY)
  } catch (error) {
    storedColorScheme = null
  }

  return isSupportedColorScheme(storedColorScheme) ? storedColorScheme : null
}

const writeStoredColorScheme = (colorScheme) => {
  try {
    localStorage.setItem(STORAGE_KEY, colorScheme)
  } catch (error) {
    // A blocked or full storage must not break the toggle.
  }
}

export default function colorSchemeToggle () {
  const DOCUMENT_EL = document.documentElement
  const BROWSER_WINDOW = window
  const COLOR_SCHEME_TOGGLE_BTN = document.querySelectorAll('.btn--color-scheme-switch')

  let currentColorScheme = DEFAULT_COLOR_SCHEME

  const setActiveButton = (colorScheme) => {
    COLOR_SCHEME_TOGGLE_BTN.forEach((colorSchemeToggleBtn) => {
      if (colorSchemeToggleBtn.getAttribute('data-color-scheme') === colorScheme) {
        colorSchemeToggleBtn.setAttribute('aria-pressed', 'true')
      } else {
        colorSchemeToggleBtn.setAttribute('aria-pressed', 'false')
      }
    })
  }

  const applyColorScheme = (colorScheme) => {
    DOCUMENT_EL.setAttribute('data-color-scheme', colorScheme)
    setActiveButton(colorScheme)
  }

  const setColorScheme = (colorScheme) => {
    applyColorScheme(colorScheme)

    writeStoredColorScheme(colorScheme)
  }

  COLOR_SCHEME_TOGGLE_BTN.forEach((colorSchemeToggleBtn) => {
    colorSchemeToggleBtn.addEventListener('click', () => {
      const colorScheme = colorSchemeToggleBtn.getAttribute('data-color-scheme')

      if (colorSchemeToggleBtn.getAttribute('aria-pressed') !== 'true' && isSupportedColorScheme(colorScheme)) {
        currentColorScheme = colorScheme

        setColorScheme(currentColorScheme)
      }
    })
  })

  // Without a stored preference the document keeps its `color-scheme: light dark` and follows the OS.
  const restoreColorScheme = () => {
    const storedColorScheme = readStoredColorScheme()

    if (storedColorScheme === null) {
      currentColorScheme = DEFAULT_COLOR_SCHEME

      setActiveButton(currentColorScheme)
    } else {
      currentColorScheme = storedColorScheme

      applyColorScheme(currentColorScheme)
    }
  }

  restoreColorScheme()

  // Another page of the same origin changed the preference; newValue is null once the key is removed.
  BROWSER_WINDOW.addEventListener('storage', (event) => {
    if (event.key === STORAGE_KEY) {
      currentColorScheme = isSupportedColorScheme(event.newValue) ? event.newValue : DEFAULT_COLOR_SCHEME

      applyColorScheme(currentColorScheme)
    }
  })
}
