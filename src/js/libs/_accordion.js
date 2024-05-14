export default function accordion () {
  const BROWSER_WINDOW = window

  const closeAllAccordions = () => {
    const OPEN_ACCORDION_ELS = document.querySelectorAll('details[open]')

    OPEN_ACCORDION_ELS.forEach((openAccordionEl) => {
      openAccordionEl.removeAttribute('open')
    })
  }

  const openAllAccordions = () => {
    const OPEN_ACCORDION_ELS = document.querySelectorAll('details')

    OPEN_ACCORDION_ELS.forEach((openAccordionEl) => {
      openAccordionEl.setAttribute('open', '')
    })
  }

  /**
   * Expand all accordions for printing, restore previously opened accordions
   * after printing
   *
   */
  let openAccordionEls

  BROWSER_WINDOW.addEventListener('beforeprint', () => {
    openAccordionEls = document.querySelectorAll('details[open]')

    openAllAccordions()
  })

  BROWSER_WINDOW.addEventListener('afterprint', () => {
    closeAllAccordions()

    openAccordionEls.forEach((openAccordionEl) => {
      openAccordionEl.setAttribute('open', '')
    })
  })
}
