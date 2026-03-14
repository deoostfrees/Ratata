/**
 * Load low priority modules
 *
 * @param {object} elements Object containing the DOM elements
 */
function loadLowPriorityModules (elements) {
  // Accordion
  if (elements.accordion !== null) {
    import('./libs/_accordion.js')
      .then(({ default: accordion }) => {
        accordion()
      })
  }
}

/**
 * Load high priority modules
 *
 * @param {object} elements Object containing the DOM elements
 */
function loadHighPriorityModules (elements) {
  // Color scheme toggle
  if (elements.colorSchemeToggle !== null) {
    import('./libs/_color-scheme-toggle.js')
      .then(({ default: colorSchemeToggle }) => {
        colorSchemeToggle()
      })
  }
}

const elements = {
  colorSchemeToggle: document.querySelector('.btn--color-scheme-switch'),
  accordion: document.querySelector('.accordion')
}

loadHighPriorityModules(elements)

if ('requestIdleCallback' in window) {
  requestIdleCallback(() => loadLowPriorityModules(elements), {
    timeout: 1000
  })
} else {
  setTimeout(() => loadLowPriorityModules(elements), 100)
}
