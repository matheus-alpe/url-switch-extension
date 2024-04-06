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

export function useForm<T>() {
  const form = ref<RuleForm>({
    id: Date.now(),
    fromUrl: '',
    toUrl: '',
    resources: [],
    active: true,
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
