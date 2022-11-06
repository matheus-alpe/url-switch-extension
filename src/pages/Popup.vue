<template>
  <v-app
    class="popup"
    :class="{ 'has-rule': rules.length }"
  >
    <v-container fluid>
      <header class="header">
        <img
          src="@/assets/icons/icon-16x16.png"
          alt="logo"
        />
        <h1>Redirect switch</h1>
      </header>

      <rule-list>
        <rule-item
          v-for="(rule, index) in rules"
          :rule="rule"
          :key="index"
          ref="rule"
        />
      </rule-list>

      <rule-create @create="pushRule" />
    </v-container>
  </v-app>
</template>

<script>
import RuleCreate from '@/components/RuleCreate.vue';
import RuleList from '@/components/RuleList.vue';
import RuleItem from '@/components/RuleItem.vue';

// import { storage } from '@utils';

export default {
  name: 'PagePopup',

  components: {
    RuleCreate,
    RuleList,
    RuleItem,
  },

  data() {
    return {
      rules: [
        {
          id: 1,
          from: '//www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          to: '//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
          active: true,
        },
        {
          id: 2,
          from: '//www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
          to: '//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png',
          active: true,
        },
      ],
    };
  },

  methods: {
    pushRule(rule) {
      console.log('pushRule:', rule);
      this.rules.push({
        ...rule,
        id: this.rules.length,
      });
    },

    scrollToNewRule() {
      const ruleRefLength = this.$refs.rule && this.$refs.rule.length;
      const scrollHelper = ruleRefLength && this.$refs.rule[ruleRefLength - 1];
      if (!scrollHelper) return;
      scrollHelper.$el.scrollIntoView({ behavior: 'instant', block: 'end' });
    },
  },

  created() {
    // storage.get('rules').then((response) => {
    //     this.rules = response.rules;
    //     console.log(this.rules);
    // });
  },

  updated() {
    this.scrollToNewRule();
  },
};
</script>
