/* eslint-disable no-undef */
import { storage } from '../src/utils';
import { getDynamicRules, saveRules } from './chrome-utils/requestHandler';

/**
 * @typedef {Object} Rule
 * @property {string} from - Specific URL
 * @property {string} to - Specific URL
 * @property {boolean} active - Determines whether the rule is active
 */

/**
 * @type {Rule[]}
 */
let localRules = [
  {
    id: 1,
    from: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
    to: 'https://i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
    active: true,
  },
  {
    id: 2,
    from: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    to: 'https://i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
    active: false,
  },
];

chrome.runtime.onInstalled.addListener(async () => {
  await storage.set('rules', localRules);
  await saveRules(localRules);
  const response = await getDynamicRules();
  console.log(response);
  changeExtensionIcon();
});

chrome.tabs.onActivated.addListener(() => {
  storage.get('rules').then(updateLocalRule);
});

chrome.storage.onChanged.addListener(() => {
  storage.get('rules').then(updateLocalRule);
});

/**
 * @param {Rule[]} rules
 */
function updateLocalRule({ rules }) {
  saveRules(rules)
    .then(() => (localRules = rules))
    .then(changeExtensionIcon);
}

/**
 * Verifies if has an active rule and change icon state.
 */
function changeExtensionIcon() {
  const hasActiveRule = Boolean(localRules.find((rule) => rule.active));

  const iconConfig = {
    path: `assets/${
      hasActiveRule ? 'icon-16x16.png' : 'icon-16x16-deactivated.png'
    }`,
  };

  chrome.action.setIcon(iconConfig);
}
