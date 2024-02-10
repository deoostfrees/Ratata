export default function accordion () {
  const ACCORDION_ITEMS = document.querySelectorAll('.accordion:not(.accordion--active)')

  ACCORDION_ITEMS.forEach((accordionItem) => {
    const ACCORDION_ITEM_TITLE = accordionItem.querySelector('.accordion__title .btn')

    ACCORDION_ITEM_TITLE.addEventListener('click', (event) => {
      const isExpanded = ACCORDION_ITEM_TITLE.getAttribute('aria-expanded') === 'true'

      if (!isExpanded) {
        ACCORDION_ITEM_TITLE.setAttribute('aria-expanded', 'true')
        accordionItem.classList.add('accordion--open')
      } else if (isExpanded) {
        ACCORDION_ITEM_TITLE.setAttribute('aria-expanded', 'false')
        accordionItem.classList.remove('accordion--open')
      }

      event.preventDefault()
    })

    accordionItem.classList.add('accordion--active')
  })
}
