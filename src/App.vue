<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { storage, closeView } from './utils'
import { useChangePage } from './pages'
import { type RuleForm } from './composables/form'

const { pageComponent, changePage } = useChangePage('ListView')

const KEY = 'rules'
const rules = ref<RuleForm[]>([])

async function save(rule: RuleForm) {
  console.log('save', rule)
  // TODO: implement save rules
  rules.value.push(rule)
  await storage.set(KEY, rules.value)
}

onBeforeMount(async () => {
  const value = await storage.get<RuleForm[]>(KEY)
  rules.value = value || []
})
</script>

<template>
  <VContainer class="container">
    <VBtn
      class="close"
      icon="mdi-close"
      variant="plain"
      @click="closeView"
    />

    <component
      :is="pageComponent"
      @save="save"
      @change-view="changePage"
    />
  </VContainer>
</template>

<style lang="scss" scoped>
.container {
  .close {
    position: absolute;
    right: 0;
    top: 0;
  }
}
</style>
