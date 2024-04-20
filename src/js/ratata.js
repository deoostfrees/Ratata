/**
 * Toggle theme
 */
if (document.querySelector('.btn--theme-switch') !== null) {
  import('./libs/_toggle-theme.js')
    .then(({ default: toggleTheme }) => {
      toggleTheme()
    })
}

/**
 * Accordion
 */
if (document.querySelector('.accordion') !== null) {
  import('./libs/_accordion.js')
    .then(({ default: accordion }) => {
      accordion()
    })
}
