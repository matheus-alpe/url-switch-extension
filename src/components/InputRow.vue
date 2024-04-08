<script lang="ts" setup>
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

const rules = {
  required: (value: string) => !!value || 'Required',
}
</script>

<template>
  <VRow class="input-row">
    <VCol cols="6">
      <VTextField
        v-model="fromUrl"
        :rules="[rules.required]"
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
        :rules="[rules.required]"
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
