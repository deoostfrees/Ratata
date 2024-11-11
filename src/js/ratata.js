/**
 * Toggle color scheme
 *
 */
if (document.querySelector('.btn--color-scheme-switch') !== null) {
  import('./libs/_color-scheme-toggle.js')
    .then(({ default: colorSchemeToggle }) => {
      colorSchemeToggle()
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
