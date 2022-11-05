<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-container
    class="rule-list"
    :style="`--max-height: ${maxHeight}px`"
  >
    <slot />
  </v-container>
</template>

<script>
export default {
  name: 'RuleList',

  props: {
    maxHeight: {
      type: Number,
      default: 269,
    },
  },
};
</script>

<style lang="scss">
.rule-list {
  --max-height: 0;
  overflow: hidden auto;
  max-height: var(--max-height);

  &::-webkit-scrollbar {
    -webkit-appearance: none;
    background: #f1f1f1;
    width: 3px;
    height: 3px;
  }

  &::-webkit-scrollbar-thumb {
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    background-color: #d0cece;
    -webkit-box-shadow: 0 0 1px #d0cece;
  }
}
</style>
