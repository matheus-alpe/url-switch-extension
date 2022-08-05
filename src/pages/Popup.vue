<template>
    <v-app class="popup" :class="{ 'has-rule': rules.length }">
        <v-container fluid>
            <header>
                <img src="@/assets/icons/icon-16x16.png" alt="logo" />
                <h1>Redirect switch</h1>
            </header>

            <div>
                <ul class="list-rules">
                    <RuleItem
                        v-for="(rule, index) in rules"
                        :rule="rule"
                        :key="index"
                    />
                </ul>
            </div>

            <v-form class="rule-form">
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
                <v-btn color="#149E8E">
                    <v-icon>mdi-plus</v-icon>
                    Create new</v-btn
                >
            </v-form>
        </v-container>
    </v-app>
</template>

<script>
import RuleItem from '@/components/RuleItem.vue';

// import { storage } from '@utils';

export default {
    name: 'PagePopup',

    components: {
        RuleItem,
    },

    data() {
        return {
            rules: [],
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
