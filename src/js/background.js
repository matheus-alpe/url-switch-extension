/**
 * Todo:
 *  [x] Listen to request
 *  [x] Rules definition
 *  [ ] CRUD of rules
 *  [ ] Create a function that handle request redirect
 */

/**
 * @typedef {Object} Rule
 * @property {string} from - Specific URL
 * @property {string} to - Specific URL
 * @property {boolean} active - Determines whether the rule is active
 */
const rule = {
    from: '//www.google.com.br/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    to: '//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
    active: true,
};

const requestHandler = function (details) {
    // test on https://www.google.com.br/
    if (rule.active && details.url.includes(rule.from)) {
        return {
            redirectUrl: details.url.replace(rule.from, rule.to),
        };
    }
};

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
