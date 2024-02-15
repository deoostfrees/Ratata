export default function accordion () {
  // Select all accordion container that are not already marked as active
  const ACCORDIONS = document.querySelectorAll('.accordion:not(.accordion--active)')

  /**
   * Open accordion
   *
   * @param {HTMLElement} accordionItemTrigger
   */
  const openAccordion = (accordionItemTrigger) => {
    accordionItemTrigger.closest('.accordion__item').classList.add('accordion--open')
    accordionItemTrigger.setAttribute('aria-expanded', 'true')
  }

  /**
   * Close accordion
   *
   * @param {HTMLElement} accordionItemTrigger
   */
  const closeAccordion = (accordionItemTrigger) => {
    accordionItemTrigger.closest('.accordion__item').classList.remove('accordion--open')
    accordionItemTrigger.setAttribute('aria-expanded', 'false')
  }

  /**
   * Event handler for the click event
   *
   * @param {Event} event - The click event object
   */
  const clickHandler = (event) => {
    const { target } = event

    if (target.classList.contains('accordion__item-trigger')) {
      if (target.getAttribute('aria-expanded') === 'false') {
        openAccordion(target)
      } else {
        closeAccordion(target)
      }

      event.preventDefault()
    }
  }

  /**
   * Event handler for the keydown event
   *
   * @param {Event} event - The keydown event object
   */
  const keydownHandler = (event) => {
    const { target } = event

    // When focus is on an accordion header
    if (target.classList.contains('accordion__item-trigger')) {
      const ACCORDION_TRIGGER = Array.from(target.closest('.accordion').querySelectorAll('.accordion__item-trigger'))
      const ACCORDION_TRIGGER_LENGTH = ACCORDION_TRIGGER.length
      const CURRENT_INDEX = ACCORDION_TRIGGER.indexOf(target)
      let newIndex = CURRENT_INDEX

      // Moves focus to the previous/ next accordion header
      if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || (event.ctrlKey && (event.key === 'PageUp' || event.key === 'PageDown'))) {
        const DIRECTION = event.key === 'ArrowDown' || event.key === 'PageDown' ? 1 : -1

        newIndex = (CURRENT_INDEX + ACCORDION_TRIGGER_LENGTH + DIRECTION) % ACCORDION_TRIGGER_LENGTH

        event.preventDefault()
        // Go to first accordion when the HOME key is pressed
      } else if (event.key === 'Home') {
        newIndex = 0
        event.preventDefault()
        // Go to last accordion when the END key is pressed
      } else if (event.key === 'End') {
        newIndex = ACCORDION_TRIGGER_LENGTH - 1
        event.preventDefault()
      }

      if (newIndex !== CURRENT_INDEX) {
        ACCORDION_TRIGGER[newIndex].focus()
      }
    }
  }

  ACCORDIONS.forEach((accordion) => {
    accordion.addEventListener('click', clickHandler)
    accordion.addEventListener('keydown', keydownHandler)

    // Mark accordion container as active to prevent re-initialization
    accordion.classList.add('accordion--active')
  })
}
