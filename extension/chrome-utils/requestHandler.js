/* eslint-disable no-undef */

/**
 * @typedef {Object} LocalRule
 * @property {number} id
 * @property {boolean} active
 * @property {string} from
 * @property {string} to
 */

/**
 *
 * @param {LocalRule} rule
 * @returns
 */
function createRule(rule) {
  return {
    id: rule.id,
    priority: 1,
    action: {
      type: 'redirect',
      redirect: {
        url: rule.to,
      },
    },
    condition: {
      urlFilter: rule.from,
      resourceTypes: [
        'main_frame',
        'sub_frame',
        'stylesheet',
        'script',
        'image',
        'font',
        'object',
        'xmlhttprequest',
        'ping',
        'csp_report',
        'media',
        'websocket',
        'webtransport',
        'webbundle',
        'other',
      ],
    },
  };
}

export function getRules() {
  return new Promise((resolve, reject) => {
    try {
      chrome.declarativeNetRequest.getDynamicRules(resolve);
    } catch (error) {
      reject(error);
    }
  });
}

export function saveRule(rule) {
  return new Promise((resolve, reject) => {
    try {
      const dynamicRule = createRule(rule);
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          addRules: [dynamicRule],
        },
        () => resolve(true, rule)
      );
    } catch (error) {
      reject(error);
    }
  });
}

/**
 *
 * @param {Number[]} rulesId
 * @returns
 */
export function removeRule(rulesId = []) {
  return new Promise((resolve, reject) => {
    try {
      chrome.declarativeNetRequest.updateDynamicRules(
        {
          removeRuleIds: rulesId,
        },
        () => resolve(true)
      );
    } catch (error) {
      reject(error);
    }
  });
}
