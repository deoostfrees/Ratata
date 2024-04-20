/**
 * Load this file in the <head> to avoid FART (Flash of inAccurate coloR Theme)
 *
 */
if (localStorage.getItem('theme')) {
  document.documentElement.setAttribute('data-theme', localStorage.getItem('theme'))
}
