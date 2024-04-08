import { ref } from 'vue'

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

export function useForm(rule: RuleForm | null) {
  const form = ref<RuleForm>({
    id: rule?.id || Date.now(),
    fromUrl: rule?.fromUrl || '',
    toUrl: rule?.toUrl || '',
    resources: rule?.resources || [],
    active: rule && typeof rule.active === 'boolean' ? rule.active : true,
  })

  function resetForm() {
    form.value.id = Date.now()
    form.value.fromUrl = ''
    form.value.toUrl = ''
    form.value.resources = []
    form.value.active = true
  }

  return {
    form,
    resetForm,
  }
}
