import { storage } from '@utils';

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
        from: '//www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
        to: '//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
        active: true,
    },
    {
        from: '//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
        to: '//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
        active: true,
    },
];

chrome.runtime.onInstalled.addListener(() => {
    storage.set('rules', localRules);
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
    localRules = rules;
    changeExtensionIcon();
}

/**
 * Verifies if has an active rule and change icon state.
 */
function changeExtensionIcon() {
    const hasActiveRule = Boolean(localRules.find((rule) => rule.active));

    const iconConfig = {
        path: hasActiveRule ? 'icon-16x16.png' : 'icon-16x16-deactivated.png',
    };

    chrome.browserAction.setIcon(iconConfig);
}

/**
 * Handler to redirect request when match rule.
 * @param {Object} details
 * @returns {Object}
 */
function requestHandler(details) {
    // test on https://www.google.com.br/
    const matchedRule = localRules.find((rule) =>
        details.url.includes(rule.from)
    );

    if (!matchedRule || !matchedRule.active) {
        return;
    }

    return {
        redirectUrl: details.url.replace(matchedRule.from, matchedRule.to),
    };
}

const RequestConfig = {
    filter: {
        urls: ['<all_urls>'],
    },
    opt_extraInfoSpec: ['blocking'],
};

chrome.webRequest.onBeforeRequest.addListener(
    requestHandler,
    RequestConfig.filter,
    RequestConfig.opt_extraInfoSpec
);
