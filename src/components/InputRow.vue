<script lang="ts" setup>
import { URL_REGEX } from '../utils'

defineProps({
  hideDetails: {
    type: Boolean,
    default: false,
  },

  readonly: {
    type: Boolean,
    default: false,
  },
})

const fromUrl = defineModel('fromUrl')
const toUrl = defineModel('toUrl')

const rules = [
  (value: string) => !!value || 'Required',
  (value: string) => URL_REGEX.test(value) || 'Invalid URL',
]
</script>

<template>
  <VRow class="input-row">
    <VCol cols="6">
      <VTextField
        v-model="fromUrl"
        :rules="rules"
        :hide-details="hideDetails"
        label="original url"
        placeholder="https://www.google.com"
        variant="outlined"
        color="surface"
        :readonly="readonly"
      />
    </VCol>

    <VIcon
      class="sep"
      icon="mdi-chevron-right"
    />

    <VCol cols="6">
      <VTextField
        v-model="toUrl"
        :rules="rules"
        :hide-details="hideDetails"
        label="redirect to"
        placeholder="https://duckduckgo.com/"
        variant="outlined"
        color="surface"
        :readonly="readonly"
      />
    </VCol>
  </VRow>
</template>

<style scoped lang="scss">
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
