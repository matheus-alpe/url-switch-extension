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

type RuleForm = {
  id: number
  apiId?: number
  fromUrl: string
  toUrl: string
  resources: ResourceType[]
  active: boolean
}

type RULES_KEY = 'rules'
