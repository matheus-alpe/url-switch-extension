<script lang="ts" setup>
import { ref, onBeforeMount } from 'vue'
import { storage, closeView } from './utils'

const KEY = 'count'
const count = ref(0)

async function increment() {
  count.value++
  await storage.set(KEY, count.value)
}

onBeforeMount(async () => {
  const value = await storage.get<number>(KEY)
  count.value = value || 0
})
</script>

<template>
  <div class="container">
    <p @click="closeView">close</p>

    Counter: <button @click="increment">{{ count }}</button>
  </div>
</template>
