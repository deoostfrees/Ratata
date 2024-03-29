export default function themeSwitch () {
  const DOCUMENT_EL = document.documentElement
  const BROWSER_WINDOW = window
  const THEME_TOGGLE = document.querySelectorAll('.btn--theme-switch')

  let currentTheme = 'system'

  /**
   * Set active button
   *
   */
  const setActiveButton = (theme) => {
    THEME_TOGGLE.forEach((themeToggle) => {
      if (themeToggle.getAttribute('data-theme') === theme) {
        themeToggle.setAttribute('aria-pressed', 'true')
      } else {
        themeToggle.setAttribute('aria-pressed', 'false')
      }
    })
  }

  /**
   * Set color mode
   *
   * @param {string} theme - Theme
   */
  const setTheme = (theme) => {
    DOCUMENT_EL.setAttribute('data-theme', theme)

    localStorage.setItem('color-mode', theme)
  }

  THEME_TOGGLE.forEach((themeToggle) => {
    themeToggle.addEventListener('click', () => {
      if (themeToggle.getAttribute('aria-pressed') !== 'true') {
        currentTheme = themeToggle.getAttribute('data-theme')

        setTheme(currentTheme)
        setActiveButton(currentTheme)
      }
    })
  })

  /**
   * Check prefers color scheme
   *
   */
  const COLOR_QUERY = BROWSER_WINDOW.matchMedia('(prefers-color-scheme: dark)')

  const prefersColorCheck = () => {
    if (localStorage.getItem('color-mode')) {
      currentTheme = localStorage.getItem('color-mode')
    } else if (COLOR_QUERY.matches) {
      currentTheme = 'dark'
    } else {
      currentTheme = 'light'
    }

    setTheme(currentTheme)
    setActiveButton(currentTheme)
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
    if (event.key === 'color-mode') {
      setTheme(event.newValue, true)
    }
  })
}
