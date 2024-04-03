import { reactive } from 'vue'

export type RuleForm = {
  id?: number
  fromUrl: string
  toUrl: string
  resources: ResourceType[]
}

export const resourceTypes: ResourceType[] = [
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
]

export function useForm<T>() {
  // TODO: add validation
  const form = reactive<RuleForm>({
    fromUrl: '',
    toUrl: '',
    resources: [],
  })

  function resetForm() {
    form.fromUrl = ''
    form.toUrl = ''
    form.resources = []
  }

  return {
    form,
    resetForm,
  }
}
