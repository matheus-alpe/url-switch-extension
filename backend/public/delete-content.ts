; (function deleteIframe() {
  const CONTAINER_ID = 'extension-redirect-switch'
  const iframeAlreadyExist = document.getElementById(CONTAINER_ID)
  iframeAlreadyExist && iframeAlreadyExist.remove()
})()
