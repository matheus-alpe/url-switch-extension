<template>
    <li :class="{ active: rule.active }">
        <input
            class="from"
            :title="rule.from"
            v-model="rule.from"
            :disabled="isDisabled"
        />

        <span class="seperator">&gt;</span>

        <input
            class="to"
            :title="rule.to"
            v-model="rule.to"
            :disabled="isDisabled"
        />

        <div class="actions">
            <template v-if="isDisabled">
                <v-container class="px-0" fluid>
                    <v-switch x-small v-model="rule.active"></v-switch>
                </v-container>
                <button @click="isDisabled = false">Edit</button>
                <button class="removeRuleButton">Remove</button>
                <v-btn elevation="2" x-small>Click</v-btn>
            </template>
            <template v-else>
                <button @click="isDisabled = true">Save</button>
            </template>
        </div>
    </li>
</template>

<script>
export default {
    name: 'RuleItem',

    props: {
        rule: Object,
    },

    data() {
        return {
            isDisabled: true,
        };
    },
};
</script>
