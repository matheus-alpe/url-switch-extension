export async function getCurrentTab() {
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
    url: ['https://*/*', 'http://*/*'],
  })

  return tab && tab.id
}
export function createTab(url: string) {
  chrome.tabs.create({ url })
}
