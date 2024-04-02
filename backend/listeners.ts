import { modal } from './utils'

chrome.action.onClicked.addListener(modal.inject)

chrome.runtime.onMessage.addListener(modal.handler)
