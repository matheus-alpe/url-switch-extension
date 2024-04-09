<script lang="ts" setup>
import { unref } from 'vue'
import { resourceTypes, useForm } from '../composables/form'
import useLoading from '../composables/loading'
import useRulesStore from '../stores/rules'

import { type SubmitEventPromise } from 'vuetify/lib/framework.mjs'
import { type ChangeView } from './index'

import InputRow from '../components/InputRow.vue'
import { onBeforeUnmount } from 'vue'

type Actions = {
  (e: 'save', rule: RuleForm): void
  (e: 'delete', id: number): void
}

const emit = defineEmits<Actions & ChangeView>()

const { currentRule, create, update, removeById } = useRulesStore()
const { form, resetForm } = useForm(unref(currentRule))
const { loading: saving, setLoading: setSaving } = useLoading()
const { loading: deleting, setLoading: setDeleting } = useLoading()

function submit(event: SubmitEventPromise) {
  event.then(({ valid }) => {
    if (!valid) return
    setSaving(true)
    const dispatch = currentRule.value ? update : create

    dispatch(Object.assign({}, form.value))
      .then(redirect)
      .finally(() => setSaving(false))
  })
}

async function remove() {
  if (currentRule.value) {
    setDeleting(true)
    await removeById(currentRule.value.id)
    setDeleting(false)
  }
  redirect()
}

function redirect() {
  emit('change-view', 'ListView')
}

function reset() {
  currentRule.value = null
  resetForm()
}

onBeforeUnmount(reset)
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
          hide-details
          v-model="form.resources"
          color="surface"
        />
      </div>
    </div>

    <VRow justify="space-between">
      <VCol cols="auto">
        <VBtn
          :loading="deleting"
          :prepend-icon="
            currentRule ? 'mdi-delete-outline' : 'mdi-arrow-left-top'
          "
          variant="outlined"
          @click="remove"
        >
          {{ currentRule ? 'Remove' : 'Discard' }}
        </VBtn>
      </VCol>

      <VCol cols="auto">
        <VBtn
          :loading="saving"
          prepend-icon="mdi-content-save"
          type="submit"
        >
          Save
        </VBtn>
      </VCol>
    </VRow>
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
