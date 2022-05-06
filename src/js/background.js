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

const requestHandler = function(details) {
    console.log(details);
};


const RequestConfig = {
    filter: {
        urls: ['<all_urls>']
    },
    opt_extraInfoSpec: ['blocking']
}

chrome.webRequest.onBeforeRequest.addListener(requestHandler, RequestConfig.filter, RequestConfig.opt_extraInfoSpec);