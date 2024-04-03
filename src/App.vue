<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { storage, closeView } from './utils'

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

    <VForm>
      <VContainer>
        <VRow class="input-row">
          <VCol cols="6">
            <VTextField
              label="original url"
              required
            />
          </VCol>

          <VIcon
            class="sep"
            icon="mdi-chevron-right"
          />

          <VCol cols="6">
            <VTextField
              label="redirect to"
              required
            />
          </VCol>
        </VRow>
      </VContainer>
    </VForm>
  </div>
</template>

<style lang="scss">
.input-row {
  position: relative;

  .v-icon {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 30px;
    opacity: 0.5;
  }
}
</style>
