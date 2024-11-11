export default function colorSchemeToggle () {
  const DOCUMENT_EL = document.documentElement
  const BROWSER_WINDOW = window
  const COLOR_SCHEME_TOGGLE_BTN = document.querySelectorAll('.btn--color-scheme-switch')

  let currentColorScheme = 'system'

  /**
   * Set active button
   *
   */
  const setActiveButton = (colorScheme) => {
    COLOR_SCHEME_TOGGLE_BTN.forEach((colorSchemeToggleBtn) => {
      if (colorSchemeToggleBtn.getAttribute('data-color-scheme') === colorScheme) {
        colorSchemeToggleBtn.setAttribute('aria-pressed', 'true')
      } else {
        colorSchemeToggleBtn.setAttribute('aria-pressed', 'false')
      }
    })
  }

  /**
   * Set color-scheme
   *
   * @param {string} colorScheme - Color-scheme
   */
  const setColorScheme = (colorScheme) => {
    DOCUMENT_EL.setAttribute('data-color-scheme', colorScheme)

    localStorage.setItem('color-scheme', colorScheme)
  }

  COLOR_SCHEME_TOGGLE_BTN.forEach((colorSchemeToggleBtn) => {
    colorSchemeToggleBtn.addEventListener('click', () => {
      if (colorSchemeToggleBtn.getAttribute('aria-pressed') !== 'true') {
        currentColorScheme = colorSchemeToggleBtn.getAttribute('data-color-scheme')

        setColorScheme(currentColorScheme)
        setActiveButton(currentColorScheme)
      }
    })
  })

  /**
   * Check prefers color scheme
   *
   */
  const COLOR_QUERY = BROWSER_WINDOW.matchMedia('(prefers-color-scheme: dark)')

  const prefersColorCheck = () => {
    if (localStorage.getItem('color-scheme')) {
      currentColorScheme = localStorage.getItem('color-scheme')

      setColorScheme(currentColorScheme)
    } else {
      currentColorScheme = 'system'
    }

    setActiveButton(currentColorScheme)
  }

  prefersColorCheck()

  // Check for any OS level changes to the preference
  COLOR_QUERY.addEventListener('change', prefersColorCheck)

  /**
   * Check for any storage changes
   * It fires on a page every time another page from the same domain has modified a value
   *
   */
  BROWSER_WINDOW.addEventListener('storage', (event) => {
    if (event.key === 'color-scheme') {
      setColorScheme(event.newValue, true)
    }
  })
}
