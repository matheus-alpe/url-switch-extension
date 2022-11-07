/* eslint-disable no-undef */

/**
 * @typedef {Object} LocalRule
 * @property {number} id
 * @property {boolean} active
 * @property {string} from
 * @property {string} to
 */

/**
 * @typedef {Object} DynamicRule
 * @property {number} id
 * @property {number} priority
 * @property {object} action
 * @property {object} condition
 */

/**
 *
 * @param {LocalRule} rule
 * @returns {DynamicRule}
 */
function createDynamicRule(rule) {
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

/**
 *
 * @param {LocalRule[]} rules
 * @returns {LocalRule[]}
 */
function getActiveRulesList(rules) {
  return rules.filter((rule) => rule.active);
}

/**
 *
 * @param {LocalRule[]} rules
 * @returns {Promise<LocalRule[]>}
 */
export async function saveRules(rules) {
  try {
    const activeList = getActiveRulesList(rules);

    const updateRuleOptions = {
      removeRuleIds: rules.map((rule) => rule.id),
      addRules: activeList.map(createDynamicRule),
    };

    chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions);
    // TODO: remove this debug logs and add URL validation to input
    console.log(updateRuleOptions);
    chrome.declarativeNetRequest.getDynamicRules(console.log);
  } catch (error) {
    console.log(error);
  }
}
