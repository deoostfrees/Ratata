export default function accordion () {
  const BROWSER_WINDOW = window

  // Only the closed ones are touched, so an open accordion does not replay its transition.
  let collapsedBeforePrint = []

  BROWSER_WINDOW.addEventListener('beforeprint', () => {
    collapsedBeforePrint = Array.from(document.querySelectorAll('details.accordion:not([open])'))

    collapsedBeforePrint.forEach((accordionEl) => {
      accordionEl.setAttribute('open', '')
    })
  })

  BROWSER_WINDOW.addEventListener('afterprint', () => {
    collapsedBeforePrint.forEach((accordionEl) => {
      accordionEl.removeAttribute('open')
    })

    collapsedBeforePrint = []
  })
}
