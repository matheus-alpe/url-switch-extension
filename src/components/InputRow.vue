<script lang="ts" setup>
const fromUrl = defineModel('fromUrl')
const toUrl = defineModel('toUrl')
</script>

<template>
  <VRow class="input-row">
    <VCol cols="6">
      <VTextField
        v-model="fromUrl"
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
        v-model="toUrl"
        required
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
