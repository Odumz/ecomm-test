<script setup lang="ts">
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <div class="overflow-x-hidden">
    <Header class="bg-offwhite" />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  @apply font-Saro;
}
</style>
