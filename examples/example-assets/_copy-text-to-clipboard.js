/**
 * Copy text to the clipboard
 *
 * @param {string} text - Text content
 */
export default function copyTextToClipboard (text) {
  // The Clipboard API is only exposed in a secure context (https or localhost).
  if (navigator.clipboard === undefined) {
    console.error('Error copying text: the Clipboard API needs a secure context (https or localhost).')

    return
  }

  navigator.clipboard.writeText(text)
    .catch((err) => {
      console.error('Error copying text: ', err)
    })
}
