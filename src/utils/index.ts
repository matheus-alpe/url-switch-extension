export * as storage from './storage'

function emitMessage(message: string) {
  if (!chrome) return
  chrome.runtime.sendMessage({ message: message })
}

export function closeView() {
  if (window.location.search.includes('ext-closable')) {
    return window.close()
  }

  if (process.env.NODE_ENV === 'development') {
    return console.log('close')
  }
  emitMessage('close-modal')
}
