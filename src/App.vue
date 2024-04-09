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
    <header>
      <img src="/favicon-32x32.png" />
      <h1>URL Switch</h1>
    </header>

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

  header {
    display: flex;
    gap: 1rem;
    margin-bottom: 20px;

    img {
      $size: 26px;
      width: $size;
      height: $size;
    }

    h1 {
      font-size: 18px;
      color: #4f4f4f;
    }
  }
}
</style>
