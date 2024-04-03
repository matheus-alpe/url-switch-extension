<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { storage, closeView } from './utils'

import FormView from './pages/FormView.vue'

const KEY = 'rules'
const rules = ref<Object[]>([])

async function save() {
  // TODO: implement save rules
  await storage.set(KEY, rules.value)
}

onBeforeMount(async () => {
  const value = await storage.get<Object[]>(KEY)
  rules.value = value || []
})
</script>

<template>
  <div class="container">
    <VBtn
      icon="mdi-close"
      variant="plain"
      @click="closeView"
    />

    <FormView />
  </div>
</template>
