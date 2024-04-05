import { reactive } from 'vue'

export type RuleForm = {
  id: number
  fromUrl: string
  toUrl: string
  resources: ResourceType[]
  active: boolean
}

export const resourceTypes: { [key in ResourceType]: string } = {
  main_frame: 'Main Frame',
  sub_frame: 'Sub Frame',
  stylesheet: 'Stylesheet',
  script: 'Script',
  image: 'Image',
  font: 'Font',
  object: 'Object',
  xmlhttprequest: 'XML Http Request',
  ping: 'Ping',
  csp_report: 'CSP Report',
  media: 'Media',
  websocket: 'Websocket',
  webtransport: 'Web Transport',
  webbundle: 'Web Bundle',
  other: 'Other',
}

export function useForm<T>() {
  const form = reactive<RuleForm>({
    id: Date.now(),
    fromUrl: '',
    toUrl: '',
    resources: [],
    active: true,
  })

  function resetForm() {
    form.id = Date.now()
    form.fromUrl = ''
    form.toUrl = ''
    form.resources = []
    form.active = true
  }

  return {
    form,
    resetForm,
  }
}
