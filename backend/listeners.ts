import { updateRequestRules } from './api'
import { modal, storage } from './utils'

/* MODAL */
chrome.action.onClicked.addListener(modal.inject)
chrome.runtime.onMessage.addListener(modal.handler)

/* REDIRECT */
const KEY = 'rules'
chrome.runtime.onInstalled.addListener(() => {
  getRules().then((response) => {
    storage.set(KEY, response || [])
  })
})

chrome.tabs.onActivated.addListener(() => {
  getRules().then(updateRequestRules)
})

chrome.storage.onChanged.addListener(() => {
  getRules().then(updateRequestRules)
})

function getRules() {
  return storage.get<RuleForm[]>(KEY)
}
