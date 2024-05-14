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
 * Share button
 *
 */
if (document.querySelector('.btn--share') !== null) {
  import('./libs/_share.js')
    .then(({ default: share }) => {
      share()
    })
}
