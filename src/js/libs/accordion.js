export default function accordion () {
  const ACCORDIONS = document.querySelectorAll('.accordion:not(.accordion--active)')

  /**
   * Open accordion
   *
   * @param {HTMLElement} accordionItem
   * @param {HTMLElement} accordionItemTrigger
   */
  const openAccordion = (accordionItemTrigger) => {
    accordionItemTrigger.closest('.accordion__item').classList.add('accordion--open')
    accordionItemTrigger.setAttribute('aria-expanded', 'true')
  }

  /**
   * Close accordion
   *
   * @param {HTMLElement} accordionItem
   * @param {HTMLElement} accordionItemTrigger
   */
  const closeAccordion = (accordionItemTrigger) => {
    accordionItemTrigger.closest('.accordion__item').classList.remove('accordion--open')
    accordionItemTrigger.setAttribute('aria-expanded', 'false')
  }

  ACCORDIONS.forEach((accordion) => {
    const ACCORDION_TRIGGER = Array.from(accordion.querySelectorAll('.accordion__item-trigger'))

    accordion.addEventListener('click', (event) => {
      const { target } = event

      if (target.classList.contains('accordion__item-trigger')) {
        if (target.getAttribute('aria-expanded') === 'false') {
          openAccordion(target)
        } else {
          closeAccordion(target)
        }

        event.preventDefault()
      }
    })

    accordion.addEventListener('keydown', (event) => {
      const { target } = event
      const key = event.which.toString()

      // When focus is on an accordion header
      if (target.classList.contains('accordion__item-trigger')) {
        // Moves focus to the previous/ next accordion header
        // Up arrow/ Down arrow || Control + Page Up/ Page Down
        if (key.match(/38|40/) || (event.ctrlKey && key.match(/33|34/))) {
          const CURRENT_INDEX = ACCORDION_TRIGGER.indexOf(target)
          const DIRECTION = (key.match(/34|40/)) ? 1 : -1
          const { length } = ACCORDION_TRIGGER
          const NEW_INDEX = (CURRENT_INDEX + length + DIRECTION) % length

          ACCORDION_TRIGGER[NEW_INDEX].focus()

          event.preventDefault()
        } else if (key.match(/35|36/)) {
          switch (key) {
            // Go to first accordion when the HOME key is pressed
            case '36':
              ACCORDION_TRIGGER[0].focus()
              break
            // Go to last accordion when the END key is pressed
            case '35':
              ACCORDION_TRIGGER[ACCORDION_TRIGGER.length - 1].focus()
              break
            default:
              // Do nothing
          }

          event.preventDefault()
        }
      }
    })

    // Mark accordion as active to prevent re-initialization
    accordion.classList.add('accordion--active')
  })
}
