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

async function saveRules(rules: RuleForm[]) {
  try {
    const activeList = getActiveRulesList(rules)

    const updateRuleOptions: chrome.declarativeNetRequest.UpdateRuleOptions = {
      removeRuleIds: rules.map((rule) => rule.id),
      addRules: activeList.map(createDynamicRule),
    }
    console.log(updateRuleOptions)

    await chrome.declarativeNetRequest.updateDynamicRules(updateRuleOptions)
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
