<template>
  <div class="text-center mb-12 animate-fade-in">
    <h2 class="text-4xl font-extrabold text-gray-50 mb-3">
      {{ title }}
    </h2>
    <p class="text-lg md:text-xl text-light-grey">
      {{ subtitle }}
    </p>
    <div class="w-20 h-1 bg-lemon-green-500 mx-auto mt-4 rounded-full"></div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  subtitle: String,
});
</script>

<style scoped>
</style>