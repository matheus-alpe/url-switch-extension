<template>
  <v-container
    class="rule-form"
    style=""
  >
    <rule-item
      v-if="showForm"
      :rule="rule"
      :disabled="false"
    />

    <v-row
      align="center"
      justify="end"
    >
      <v-btn
        @click="toggleForm"
        color="#149E8E"
        dark
      >
        <v-icon>mdi-plus</v-icon>
        Create new
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
import RuleItem from '@/components/RuleItem.vue';

export default {
  name: 'RuleCreate',

  components: {
    RuleItem,
  },

  data() {
    return {
      showForm: false,

      rule: {
        from: '',
        to: '',
        active: true,
      },
    };
  },

  methods: {
    toggleForm() {
      this.showForm = !this.showForm;
    },
  },
};
</script>
