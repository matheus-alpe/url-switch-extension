<template>
  <v-app
    class="popup"
    :class="{ 'has-rule': rules.length }"
  >
    <v-container fluid>
      <header class="header pl-3 mb-4">
        <v-row
          align="center"
          justify="start"
          style="gap: 10px"
        >
          <img
            src="@/assets/icons/icon-16x16.png"
            alt="logo"
          />
          <h1 class="text-h6">Redirect switch</h1>
        </v-row>
      </header>

      <rule-list>
        <rule-item
          v-for="(rule, index) in rules"
          :rule="rule"
          :key="index"
          @update="store"
          @remove="removeRule"
          ref="rule"
        />
      </rule-list>

      <rule-create @create="pushRule" />
    </v-container>
  </v-app>
</template>

<script>
import { storage } from '@/utils';

import RuleCreate from '@/components/RuleCreate.vue';
import RuleList from '@/components/RuleList.vue';
import RuleItem from '@/components/RuleItem.vue';

export default {
  name: 'PagePopup',

  components: {
    RuleCreate,
    RuleList,
    RuleItem,
  },

  data() {
    return {
      rules: [],
    };
  },

  methods: {
    pushRule(rule) {
      this.rules.push({
        ...rule,
        id: this.rules.length + 1,
      });

      this.store();
    },

    removeRule(rule) {
      this.rules = this.rules.filter((itemRule) => itemRule.id !== rule.id);
      this.store();
    },

    store() {
      storage.set('rules', this.rules);
    },

    scrollToNewRule() {
      const ruleRefLength = this.$refs.rule && this.$refs.rule.length;
      const scrollHelper = ruleRefLength && this.$refs.rule[ruleRefLength - 1];
      if (!scrollHelper) return;
      scrollHelper.$el.scrollIntoView({ behavior: 'instant', block: 'end' });
    },
  },

  created() {
    storage
      .get('rules')
      .then((response) => {
        this.rules = response.rules;
        console.log(this.rules);
      })
      .catch(() => {
        this.rules = [];
      });
  },

  updated() {
    this.scrollToNewRule();
  },
};
</script>
