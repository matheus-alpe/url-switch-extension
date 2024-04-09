<script lang="ts" setup>
import useRulesStore from '../stores/rules'
import { type ChangeView } from './index'

import ListItem from '../components/ListItem.vue'

const emit = defineEmits<ChangeView>()

const { rules, save, remove, currentRule } = useRulesStore()

function edit(rule: RuleForm) {
  currentRule.value = Object.assign({}, rule)
  emit('change-view', 'FormView')
}
</script>

<template>
  <div :class="{ empty: !rules.length }">
    <div
      v-if="rules.length"
      class="container-list my-4"
    >
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
          {{ rules.length ? 'Create New' : 'Create First Redirect' }}
        </VBtn>
      </VCol>
    </VRow>
  </div>
</template>

<style lang="scss" scoped>
.container-list {
  max-height: 400px;
  overflow-x: hidden;
  overflow-y: visible;
  padding: 5px 0;

  /* width */
  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 8px;
    border: 1px solid #e5e5e5;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    background: #c4c4c4;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #adadad;
  }
}
</style>
