/**
 * Load this file in the <head> to avoid FART (Flash of inAccurate coloR Theme)
 *
 */
if (localStorage.getItem('color-mode')) {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('color-mode'))
}
