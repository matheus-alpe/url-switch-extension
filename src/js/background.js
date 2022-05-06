import { storage } from './utils';

storage.set('rules', [
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
]);

/**
 * @typedef {Object} Rule
 * @property {string} from - Specific URL
 * @property {string} to - Specific URL
 * @property {boolean} active - Determines whether the rule is active
 */

/**
 * @type {Rule[]}
 */
const rules = [];

chrome.tabs.onActivated.addListener(() => {
    storage.get('rules').then((response) => {
        console.log('connected!', response);
    });
});

function requestHandler(details) {
    // test on https://www.google.com.br/
    const matchedRule = rules.find((rule) => details.url.includes(rule.from));

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
