<template>
    <v-app class="popup">
        <h1>Redirect switch</h1>
        <div>
            Redirect Rule
            <ul>
                <RuleItem
                    v-for="(rule, index) in rules"
                    :rule="rule"
                    :key="index"
                    :data-rule-index="index"
                />
            </ul>
        </div>

        <div id="add-rule">
            <label for="from">
                From:
                <input type="text" id="from" />
            </label>
            <label for="to">
                To:
                <input type="text" id="to" />
            </label>
            <button type="submit" id="submit">Add</button>
        </div>
    </v-app>
</template>

<script>
import RuleItem from '@components/RuleItem.vue';

import { storage } from '@utils';

export default {
    name: 'Popup',

    components: {
        RuleItem,
    },

    data() {
        return {
            rules: [true],
        };
    },

    created() {
        storage.get('rules').then((response) => {
            this.rules = response.rules;
            console.log(this.rules);
        });
    },
};
</script>
