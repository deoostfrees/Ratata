/**
 * Copy text to the clipboard
 *
 * @param {string} text - Text content
 */
export default function copyTextToClipboard (text) {
  navigator.clipboard.writeText(text)
    .catch((err) => {
      console.error('Error copying text: ', err)
    })
}
