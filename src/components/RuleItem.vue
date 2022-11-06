<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-row
    justify="start"
    align="center"
    style="gap: 10px"
  >
    <text-input
      :form-data="rule"
      key-attr="from"
      :disabled="isDisabled"
      label="original url"
    />

    <v-icon x-small>mdi-arrow-right</v-icon>

    <text-input
      :form-data="rule"
      key-attr="to"
      :disabled="isDisabled"
      label="redirect to"
    />

    <div
      class="d-flex align-center justify-center"
      style="width: 70px"
    >
      <template v-if="isDisabled">
        <v-switch
          x-small
          color="#149E8E"
          v-model="rule.active"
          @change="$emit('update')"
        />

        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-icon
              v-bind="attrs"
              v-on="on"
            >
              mdi-dots-vertical
            </v-icon>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title @click="isDisabled = false">
                Edit
              </v-list-item-title>
            </v-list-item>

            <v-list-item>
              <v-list-item-title>Remove</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </template>

      <v-btn
        v-else
        @click="save"
        color="#149E8E"
        :disabled="isInvalid"
        plain
        min-height="66px"
      >
        Save
      </v-btn>
    </div>
  </v-row>
</template>

<script>
import TextInput from './shared/TextInput.vue';

export default {
  name: 'RuleItem',

  components: {
    TextInput,
  },

  props: {
    disabled: {
      type: Boolean,
      default: true,
    },

    rule: {
      type: Object,
      default: () => ({
        id: null,
        from: null,
        to: null,
        active: false,
      }),
    },
  },

  data() {
    return {
      isDisabled: this.disabled,
    };
  },

  computed: {
    isInvalid() {
      return !this.rule.from || !this.rule.to;
    },
  },

  methods: {
    save() {
      if (this.isInvalid) return;
      this.$emit('update');
      this.isDisabled = true;
    },
  },
};
</script>
