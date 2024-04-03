type Rule = {
  id: number
  priority?: number
  action: RuleAction
  condition: RuleCondition
}

type RuleAction = {
  redirect: {
    url: string
  }
  type: 'redirect'
}

type RuleCondition = {
  urlFilter: string
  resourceTypes: ResourceType
}

type ResourceType =
  | 'main_frame'
  | 'sub_frame'
  | 'stylesheet'
  | 'script'
  | 'image'
  | 'font'
  | 'object'
  | 'xmlhttprequest'
  | 'ping'
  | 'csp_report'
  | 'media'
  | 'websocket'
  | 'webtransport'
  | 'webbundle'
  | 'other'
