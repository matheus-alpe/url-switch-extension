import { ref, type Ref } from 'vue'

export const resourceTypes: { [key in ResourceType]: string } = {
  main_frame: 'Main Frame (URL)',
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

export function useForm(rule: RuleForm | null, rules: Ref<RuleForm[]>) {
  const form = ref<RuleForm>({
    id: rule?.id || getNextId(),
    fromUrl: rule?.fromUrl || '',
    toUrl: rule?.toUrl || '',
    resources: rule?.resources || [],
    active: rule && typeof rule.active === 'boolean' ? rule.active : true,
  })

  function resetForm() {
    form.value.id = getNextId()
    form.value.fromUrl = ''
    form.value.toUrl = ''
    form.value.resources = []
    form.value.active = true
  }

  function getNextId() {
    const length = rules.value.length
    const lastRule = length && rules.value[length - 1]
    if (!lastRule) return 1
    return lastRule.id + 1
  }

  return {
    form,
    resetForm,
  }
}
