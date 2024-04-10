import { changeExtensionIcon } from './action'

function createDynamicRule(rule: RuleForm): chrome.declarativeNetRequest.Rule {
  return {
    id: rule.id,
    priority: 1,
    action: {
      type: chrome.declarativeNetRequest.RuleActionType.REDIRECT,
      redirect: {
        url: rule.toUrl,
      },
    },
    condition: {
      urlFilter: rule.fromUrl,
      resourceTypes:
        rule.resources as chrome.declarativeNetRequest.ResourceType[],
    },
  }
}

function getActiveRulesList(rules: RuleForm[]) {
  return rules.filter((rule) => rule.active)
}

let CACHE_IDS: number[] = []
async function saveRules(rules: RuleForm[]) {
  try {
    const activeList = getActiveRulesList(rules)
    const ruleIds = rules.map((rule) => rule.id)

    const updateRuleOptions: chrome.declarativeNetRequest.UpdateRuleOptions = {
      removeRuleIds: [...ruleIds, ...CACHE_IDS],
      addRules: activeList.map(createDynamicRule),
    }

    await chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions)
    CACHE_IDS = ruleIds
  } catch (e) {
    console.log(e)
  }
}

export function updateRequestRules(rules: RuleForm[]) {
  saveRules(rules).finally(() => {
    const activeList = getActiveRulesList(rules)
    changeExtensionIcon(!!activeList.length)
  })
}
