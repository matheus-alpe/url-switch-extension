<script lang="ts" setup>
import InputRow from './InputRow.vue'

defineProps<{
  rule: RuleForm
}>()

defineEmits<{
  (e: 'activate'): void
  (e: 'edit', rule: RuleForm): void
  (e: 'delete'): void
}>()
</script>

<template>
  <VRow class="list-item">
    <VCol cols="10">
      <InputRow
        hide-details
        readonly
        v-model:from-url="rule.fromUrl"
        v-model:to-url="rule.toUrl"
      />
    </VCol>

    <VCol
      cols="2"
      class="actions"
    >
      <VSwitch
        v-model="rule.active"
        color="surface"
        hide-details
        @update:model-value="$emit('activate')"
      />

      <VMenu>
        <template #activator="{ props }">
          <VBtn
            icon="mdi-dots-vertical"
            variant="plain"
            v-bind="props"
          />
        </template>

        <VList bg-color="background">
          <VListItem @click="$emit('edit', rule)">
            <VListItemTitle>Edit</VListItemTitle>
          </VListItem>

          <VListItem @click="$emit('delete')">
            <VListItemTitle>Remove</VListItemTitle>
          </VListItem>
        </VList>
      </VMenu>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.list-item {
  .actions {
    display: flex;
    justify-content: space-around;
  }
}
</style>
