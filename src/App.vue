<script lang="ts" setup>
import { closeView } from './utils'
import { useChangePage } from './pages'

const { pageComponent, changePage } = useChangePage('ListView')
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
