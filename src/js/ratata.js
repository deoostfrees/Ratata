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
