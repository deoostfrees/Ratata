export default function share () {
  const SHARE_EL = document.querySelectorAll('.btn--share')

  if (navigator.share) {
    SHARE_EL.forEach((shareEl) => {
      shareEl.addEventListener('click', () => {
        navigator.share({
          title: shareEl.getAttribute('data-title'),
          url: shareEl.getAttribute('data-href')
        })
      })
    })
  } else {
    SHARE_EL.forEach((shareEl) => {
      shareEl.parentNode.setAttribute('aria-disabled', 'true')
    })
  }
}
