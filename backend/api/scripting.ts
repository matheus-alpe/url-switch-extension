export function injectContentScript(tabId: number, file: string) {
  return chrome.scripting.executeScript({
    target: { tabId },
    files: [file],
  })
}

export function injectAlertScript(tabId: number, param: any) {
  chrome.scripting.executeScript({
    target: { tabId },
    func: createAlert,
    args: [param],
  })
}

function createAlert(param: any) {
  alert('alert' + param)
}
