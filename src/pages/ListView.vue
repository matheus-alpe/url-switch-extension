<script lang="ts" setup>
import useRulesStore from '../stores/rules'
import { type ChangeView } from './index'
import { type RuleForm } from '../composables/form'

import ListItem from '../components/ListItem.vue'

const emit = defineEmits<ChangeView>()

const { rules, save, remove, currentRule } = useRulesStore()

function edit(rule: RuleForm) {
  currentRule.value = Object.assign({}, rule)
  emit('change-view', 'FormView')
}
</script>

<template>
  <div>
    <div class="container-list my-4">
      <ListItem
        v-for="(rule, index) in rules"
        :key="rule.id"
        :rule="rule"
        @activate="save"
        @edit="edit"
        @delete="remove(index)"
      />
    </div>

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
