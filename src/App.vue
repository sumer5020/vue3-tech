<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <section class="bg-indigo-900 min-h-screen w-full flex flex-col justify-center items-center text-center">
    <div class="flex">
      <a href="https://vuejs.org/" class="p-5 m-2 hover:drop-shadow-2xl " target="_blank">
        <img src="./assets/logo.png" class="h-28 w-28" alt="Vue logo" />
      </a>
    </div>
    <HelloWorld msg="Vue" />
  </section>
</template>

<style scoped>
</style>
