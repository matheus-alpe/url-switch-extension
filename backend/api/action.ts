/**
 * Verifies if has an active rule and change icon state.
 */
export function changeExtensionIcon(active: boolean) {
  const iconConfig = {
    path: active ? 'favicon-16x16.png' : 'favicon-16x16-deactivated.png',
  }

  chrome.action.setIcon(iconConfig)
}
