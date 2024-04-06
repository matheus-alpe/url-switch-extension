<script lang="ts" setup>
import { defineComponent } from 'vue'
import { type ChangeView } from './index'
defineEmits<ChangeView>()
</script>

<template>
  <div>
    <VRow> </VRow>

    <VRow justify="end">
      <VCol cols="auto">
        <VBtn
          prepend-icon="mdi-plus"
          @click="$emit('change-view', 'FormView')"
        >
          Create New
        </VBtn>
      </VCol>
    </VRow>
  </div>
</template>
