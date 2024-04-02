import { createTab, getCurrentTab, injectContentScript } from '../api'

export async function inject() {
  const tabId = await getCurrentTab()

  if (!tabId) {
    createTab('/index.html?ext-closable=true')
    return
  }

  injectContentScript(tabId, 'content.js')
    .then(() => console.log('injected'))
    .catch(() => createTab('/index.html?ext-closable=true'))
}

export async function handler({ message }: { message: string }) {
  const tabId = await getCurrentTab()
  if (!tabId) return

  if (message === 'close-modal') remove(tabId)
}

function remove(tabId: number) {
  injectContentScript(tabId, 'delete-content.js')
}
