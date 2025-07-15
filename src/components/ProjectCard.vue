<template>
  <router-link
    :to="{ name: 'project-detail', params: { projectNameSlug: project.slug } }"
    class="project-card block bg-charcoal-grey rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
  >
    <img
      :src="project.image"
      :alt="project.title"
      class="w-full h-auto object-cover rounded-t-lg"
      loading="lazy"
    />
    <div class="p-6">
      <h3 class="text-xl font-bold text-gray-50 mb-2">{{ project.title }}</h3>
      <p class="text-light-grey text-sm mb-4 line-clamp-2">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-2 mb-4">
        <span
          v-for="tag in project.tags"
          :key="tag"
          class="px-2 py-1 bg-lemon-green-700 text-black rounded-full text-xs font-medium"
        >
          {{ tag }}
        </span>
      </div>
      <div class="text-lemon-green-500 font-semibold text-sm flex items-center">
        View Project
        <font-awesome-icon
          :icon="['fas', 'arrow-right']"
          class="ml-2 text-xs"
        />
      </div>
    </div>
  </router-link>
</template>

<script setup>
import { defineProps } from 'vue'; 

defineProps({
  project: Object,
});
</script>
