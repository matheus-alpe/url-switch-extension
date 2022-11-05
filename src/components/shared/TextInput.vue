<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-text-field
    :disabled="disabled"
    v-model="formData[keyAttr]"
    :label="label"
    outlined
    dense
    hide-details
    :error="isEmpty"
    :color="color"
  />
</template>

<script>
export default {
  name: 'TextInput',

  props: {
    color: {
      type: String,
      default: '#149E8E',
    },

    disabled: {
      type: Boolean,
      default: false,
    },

    formData: {
      type: Object,
      default: () => {},
    },

    keyAttr: {
      type: String,
      required: true,
    },

    label: {
      type: String,
      default: '',
    },
  },

  computed: {
    isEmpty() {
      return !this.formData[this.keyAttr];
    },
  },
};
</script>
