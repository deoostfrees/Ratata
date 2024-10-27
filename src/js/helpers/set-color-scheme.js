/**
 * Load this file in the <head> to avoid FART (Flash of inAccurate coloR Theme)
 *
 */
if (localStorage.getItem('color-scheme')) {
  document.documentElement.setAttribute('data-color-scheme', localStorage.getItem('color-scheme'))
}
