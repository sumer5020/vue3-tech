<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: String
});

const count = ref(0)
</script>

<template>
<div class="text-green-100">
  <h1 class="font-extrabold text-4xl">{{ msg }}</h1>
  <div class="card">
    <button class="px-2 py-1 bg-blue-600 m-10 rounded-lg" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue
  </p>
  <p class="text-indigo-200 p-1 my-10">Click on the Vue logos to learn more</p>
</div>
</template>

<style scoped>
</style>
