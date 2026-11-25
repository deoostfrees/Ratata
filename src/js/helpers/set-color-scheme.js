/**
 * Load this file in the <head> to avoid FART (Flash of inAccurate coloR Theme)
 *
 */
;(function () {
  const COLOR_SCHEMES = ['system', 'light', 'dark']

  try {
    const storedColorScheme = localStorage.getItem('color-scheme')

    if (COLOR_SCHEMES.includes(storedColorScheme)) {
      document.documentElement.setAttribute('data-color-scheme', storedColorScheme)
    }
  } catch (error) {
    // Reading storage throws when the browser blocks it, in a sandboxed iframe for example.
  }
})()
