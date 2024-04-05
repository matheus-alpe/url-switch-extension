<script lang="ts" setup>
import { resourceTypes, useForm, RuleForm } from '../composables/form'

import InputRow from '../components/InputRow.vue'

const emit = defineEmits<{
  (e: 'save', rule: RuleForm): void
  (e: 'delete', id: number): void
}>()

const { form, resetForm } = useForm()

function submit() {
  console.log(...arguments)
}
</script>

<template>
  <VForm @submit.prevent="submit">
    <VContainer>
      <InputRow
        v-model:from-url="form.fromUrl"
        v-model:to-url="form.toUrl"
      />

      <div class="checkboxes-container my-4">
        <VLabel>Filter:</VLabel>

        <div class="grid">
          <VCheckbox
            v-for="(label, key) in resourceTypes"
            :key="key"
            :label="label"
            :value="key"
            :hide-details="true"
            v-model="form.resources"
          />
        </div>
      </div>

      <VRow justify="space-between">
        <VCol cols="auto">
          <VBtn
            prepend-icon="mdi-delete-outline"
            variant="outlined"
            @click="resetForm"
          >
            Remove
          </VBtn>
        </VCol>

        <VCol cols="auto">
          <VBtn
            prepend-icon="mdi-content-save"
            variant="tonal"
            type="submit"
          >
            Save
          </VBtn>
        </VCol>
      </VRow>
    </VContainer>
    <VCode>{{ form }}</VCode>
  </VForm>
</template>

<style lang="scss" scoped>
.checkboxes-container {
  .v-label {
    font-weight: bold;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
