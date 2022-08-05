<template>
  <v-app class="popup" :class="{ 'has-rule': rules.length }">
    <v-container fluid>
      <header class="header">
        <img src="@/assets/icons/icon-16x16.png" alt="logo" />
        <h1>Redirect switch</h1>
      </header>

      <div>
        <ul class="list-rules">
          <RuleItem v-for="(rule, index) in rules" :rule="rule" :key="index" />
        </ul>
      </div>

      <form class="rule-form">
        <div class="form-inputs">
          <v-text-field
            class="input-field from"
            label="original url"
            outlined
          ></v-text-field>

          <v-text-field
            class="input-field to"
            label="redirect to"
            outlined
          ></v-text-field>
        </div>

        <v-btn color="#149E8E" dark>
          <v-icon>mdi-plus</v-icon>
          Create new
        </v-btn>
      </form>
    </v-container>
  </v-app>
</template>

<script>
import RuleItem from "@/components/RuleItem.vue";

// import { storage } from '@utils';

export default {
  name: "PagePopup",

  components: {
    RuleItem,
  },

  data() {
    return {
      rules: [
        {
          from: "//www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
          to: "//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png",
          active: true,
        },
        {
          from: "//www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
          to: "//i.pinimg.com/originals/78/cf/3e/78cf3eee0658dbf205e821f5a31db5e3.png",
          active: true,
        },
      ],
    };
  },

  created() {
    // storage.get('rules').then((response) => {
    //     this.rules = response.rules;
    //     console.log(this.rules);
    // });
  },
};
</script>
