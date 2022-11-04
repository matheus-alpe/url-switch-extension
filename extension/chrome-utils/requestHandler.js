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
 * @returns {Promise<DynamicRule[]>}
 */
export function getDynamicRules() {
  return new Promise((resolve, reject) => {
    try {
      chrome.declarativeNetRequest.getDynamicRules(resolve);
    } catch (error) {
      reject(error);
    }
  });
}

/**
 *
 * @param {LocalRule[]} unfilteredRules
 * @param {string} key
 * @param {any} value
 * @returns {LocalRule[]}
 */
function getFilteredRules(unfilteredRules, key, value) {
  return unfilteredRules.filter((rule) => rule[key] === value);
}

/**
 *
 * @param {LocalRule[]} activeRules
 */
async function getActiveRulesNotInserted(activeRules) {
  const dynamicRules = await getDynamicRules();

  return activeRules.filter((activeRule) => {
    return !dynamicRules.find(
      (dynamicRule) => dynamicRule.id === activeRule.id
    );
  });
}

/**
 *
 * @param {LocalRule[]} rules
 * @returns {Promise<LocalRule[]>}
 */
export async function saveRules(rules) {
  try {
    const activeRules = getFilteredRules(rules, 'active', true);
    const rulesNotInserted = await getActiveRulesNotInserted(activeRules);
    const inactiveRules = getFilteredRules(rules, 'active', false);

    const updateRuleOptions = {
      addRules: rulesNotInserted.map(createDynamicRule),
      removeRuleIds: inactiveRules.map((rule) => rule.id),
    };

    return chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions);
  } catch (error) {
    console.log(error);
  }
}
