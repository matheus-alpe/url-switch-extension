<script lang="ts" setup>
import { SubmitEventPromise } from 'vuetify/lib/framework.mjs'
import { resourceTypes, useForm, RuleForm } from '../composables/form'
import { type ChangeView } from './index'

import InputRow from '../components/InputRow.vue'

type Actions = {
  (e: 'save', rule: RuleForm): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Actions & ChangeView>()

const { form, resetForm } = useForm()

function submit(event: SubmitEventPromise) {
  event.then(({ valid }) => {
    if (!valid) return
    emit('save', Object.assign({}, form.value))
    emit('change-view', 'ListView')
  })
}
</script>

<template>
  <VForm @submit.prevent="submit">
    <InputRow
      ref="inputRow"
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
          color="surface"
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
          type="submit"
        >
          Save
        </VBtn>
      </VCol>
    </VRow>
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
