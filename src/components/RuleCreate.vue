<template>
  <v-container
    class="rule-form"
    style=""
  >
    <rule-item
      v-if="showForm"
      :rule="rule"
      :disabled="false"
      :showError="false"
      @update="createRule"
    >
      <v-btn
        @click="showForm = false"
        plain
        x-small
      >
        <v-icon title="Cancel">mdi-delete-outline</v-icon>
      </v-btn>
    </rule-item>

    <v-row
      class="mt-1"
      align="center"
      justify="end"
    >
      <v-btn
        v-if="!showForm"
        @click="showForm = true"
        color="#149E8E"
        style="margin-bottom: 15px"
        dark
      >
        <v-icon>mdi-plus</v-icon>
        Create new
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import { cloneObject } from '@/utils';

import RuleItem from '@/components/RuleItem.vue';

const DEFAULT_RULE = {
  from: '',
  to: '',
  active: true,
};

export default {
  name: 'RuleCreate',

  components: {
    RuleItem,
  },

  data() {
    return {
      showForm: false,

      rule: cloneObject(DEFAULT_RULE),
    };
  },

  watch: {
    showForm(shouldShow) {
      if (shouldShow) return;
      this.rule = cloneObject(DEFAULT_RULE);
    },
  },

  methods: {
    createRule() {
      this.showForm = false;
      this.$emit('create', cloneObject(this.rule));
    },
  },
};
</script>
