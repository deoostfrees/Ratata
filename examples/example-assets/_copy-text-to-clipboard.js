export default function copyTextToClipboard (text) {
  if (navigator.clipboard === undefined) {
    console.error('Error copying text: the Clipboard API needs a secure context (https or localhost).')

    return
  }

  navigator.clipboard.writeText(text)
    .catch((err) => {
      console.error('Error copying text: ', err)
    })
}
