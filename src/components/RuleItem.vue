<script setup>
import { ref } from 'vue';

const props = defineProps({
    rule: Object,
});

const isDisabled = ref(true);
</script>

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
                <input
                    type="checkbox"
                    class="checkbox"
                    name="active"
                    :checked="rule.active"
                />
                <button @click="isDisabled = false">Edit</button>
                <button class="removeRuleButton">Remove</button>
            </template>
            <template v-else>
                <button @click="isDisabled = true">Save</button>
            </template>
        </div>
    </li>
</template>
