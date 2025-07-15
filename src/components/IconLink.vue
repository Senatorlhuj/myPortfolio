<template>
  <a :href="href" target="_blank" rel="noopener noreferrer"
     class="flex flex-col items-center text-charcoal-grey hover:text-lemon-green-500 transition-colors duration-200">
    <font-awesome-icon :icon="[iconPrefix, icon]" class="text-3xl mb-2" />
    <span class="text-sm font-medium">{{ text }}</span>
  </a>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  href: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  isBrandIcon: {
    type: Boolean,
    default: true,
  }
});

const iconPrefix = computed(() => props.isBrandIcon ? 'fab' : 'fas');
</script>

<style scoped>
</style>