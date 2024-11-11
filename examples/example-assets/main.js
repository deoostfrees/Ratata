import copyToClipboard from './_copy-text-to-clipboard.js'

const codeBlocks = document.querySelectorAll('pre')

codeBlocks.forEach((pre) => {
  const wrapper = document.createElement('div')
  const copyButton = document.createElement('button')

  wrapper.classList.add('code-container')

  copyButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
    </svg>

    <span>Copy code sample</span>
  `

  copyButton.setAttribute('type', 'button')
  copyButton.classList.add('btn')
  copyButton.classList.add('btn--primary')
  copyButton.classList.add('btn--icon')
  copyButton.classList.add('btn--copy')

  copyButton.addEventListener('click', () => {
    copyToClipboard(pre.innerText)
  })

  pre.parentNode.insertBefore(wrapper, pre)

  wrapper.appendChild(pre)
  wrapper.appendChild(copyButton)
})
