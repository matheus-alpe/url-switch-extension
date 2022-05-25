<template>
    <li class="rule-item" :class="{ active: rule.active }">
        <v-text-field
            :disabled="isDisabled"
            class="input-field from"
            v-model="rule.from"
            label="original url"
            outlined
        ></v-text-field>
        <v-text-field
            :disabled="isDisabled"
            class="input-field to"
            v-model="rule.to"
            label="redirect to"
            outlined
        ></v-text-field>

        <div class="actions">
            <template v-if="isDisabled">
                <v-switch x-small v-model="rule.active"></v-switch>

                <v-menu offset-y>
                    <template v-slot:activator="{ on, attrs }">
                        <v-icon v-bind="attrs" v-on="on" color="#000">
                            mdi-dots-vertical
                        </v-icon>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title @click="isDisabled = false"
                                >Edit</v-list-item-title
                            >
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Remove</v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-menu>
            </template>
            <template v-else>
                <v-btn @click="isDisabled = true">Save</v-btn>
            </template>
        </div>
    </li>
</template>

<script>
export default {
    name: 'RuleItem',

    props: ['rule'],

    data() {
        return {
            isDisabled: true,
        };
    },
};
</script>
