/**
 * Toggle color scheme
 *
 */
if (document.querySelector('.btn--color-scheme-switch') !== null) {
  import('./libs/_toggle-color-scheme.js')
    .then(({ default: toggleColorScheme }) => {
      toggleColorScheme()
    })
}

/**
 * Accordion
 *
 */
if (document.querySelector('.accordion') !== null) {
  import('./libs/_accordion.js')
    .then(({ default: accordion }) => {
      accordion()
    })
}
