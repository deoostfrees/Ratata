/**
 * Accordion
 */
if (document.querySelector('.accordion') !== null) {
  import('./libs/accordion.js').then(({ default: accordion }) => {
    accordion()
  })
}
