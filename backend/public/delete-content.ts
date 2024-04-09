;(function deleteIframe() {
  const CONTAINER_ID = 'extension-url-switch'
  const iframeAlreadyExist = document.getElementById(CONTAINER_ID)
  iframeAlreadyExist && iframeAlreadyExist.remove()
})()
