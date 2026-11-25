function loadLowPriorityModules (elements) {
  if (elements.accordion !== null) {
    import('./libs/_accordion.js')
      .then(({ default: accordion }) => {
        accordion()
      })
      .catch((err) => {
        console.error('Error loading the accordion module: ', err)
      })
  }
}

function loadHighPriorityModules (elements) {
  if (elements.colorSchemeToggle !== null) {
    import('./libs/_color-scheme-toggle.js')
      .then(({ default: colorSchemeToggle }) => {
        colorSchemeToggle()
      })
      .catch((err) => {
        console.error('Error loading the color scheme toggle module: ', err)
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
