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

/**
 * Share button
 *
 */
if (document.querySelector('.btn--share') !== null) {
  import('./libs/_share.js')
    .then(({ default: share }) => {
      share()
    })
}
