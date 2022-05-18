<script setup>
import RuleItem from '@components/RuleItem.vue';

import { ref } from 'vue';
import { storage } from '@utils';
const rules = ref([]);

storage.get('rules').then((response) => {
    rules.value = response.rules;
});
</script>

<template>
    <main class="mdc-card rs-card">
        <h1 class="rs-title">Redirect switch</h1>
        <div id="rules">
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
    </main>
</template>
