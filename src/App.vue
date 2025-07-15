<template>
  <div class="min-h-screen flex flex-col">
    <TheNavbar v-model:isMobileMenuOpen="isMobileMenuOpen" />

    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <TheFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import TheNavbar from './components/TheNavbar.vue';
import TheFooter from './components/TheFooter.vue';

const isMobileMenuOpen = ref(false);
</script>

<style scoped>
body {
  font-family: "Bricolage Grotesque", sans-serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>