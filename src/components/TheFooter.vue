<template>
  <footer class="bg-black py-8 mt-12 text-center text-gray-50 transition-colors duration-300">
    <div class="container mx-auto px-6">
      <p>&copy; {{ currentYear }} Edmund Obinna. All rights reserved.</p>
      <div class="mt-4 space-x-4">
        <a href="https://www.linkedin.com/in/edmund-obinna-a1bb55263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" class="footer-social-link">
          <font-awesome-icon :icon="['fab', 'linkedin']" class="text-xl" />
        </a>
        <a href="https://github.com/Senatorlhuj" target="_blank" rel="noopener noreferrer" class="footer-social-link">
          <font-awesome-icon :icon="['fab', 'github']" class="text-xl" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer-social-link {
  @apply text-charcoal-grey hover:text-lemon-green-500 transition-colors duration-200;
}
</style>