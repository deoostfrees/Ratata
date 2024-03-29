/**
 * Theme switch
 */
if (document.querySelector('.btn--theme-switch') !== null) {
  import('./libs/_theme-switch.js')
    .then(({ default: themeSwitch }) => {
      themeSwitch()
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
