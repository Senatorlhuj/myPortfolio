<template>
  <section
    class="portfolio-section py-16 md:py-24 animate-slide-up bg-gray-900 text-gray-50"
  >
    <div class="container mx-auto px-6 max-w-6xl">
      <SectionHeading class="mt-8"
        title="My Portfolio"
        subtitle="Showcasing My Web Development Journey"
      />

      <div class="flex flex-wrap justify-center gap-4 md:gap-6 mb-16">
        <button
          @click="filterProjects('all')"
          :class="[
            'filter-button',
            { 'filter-button-active': activeFilter === 'all' },
          ]"
        >
          All Projects
        </button>
        <button
          @click="filterProjects('frontend')"
          :class="[
            'filter-button',
            { 'filter-button-active': activeFilter === 'frontend' },
          ]"
        >
          Frontend
        </button>
        <button
          @click="filterProjects('fullstack')"
          :class="[
            'filter-button',
            { 'filter-button-active': activeFilter === 'fullstack' },
          ]"
        >
          Fullstack
        </button>
      </div>

      <div
        v-if="filteredProjects.length === 0"
        class="text-center py-20 bg-charcoal-grey rounded-lg shadow-xl"
      >
        <font-awesome-icon
          :icon="['fas', 'folder-open']"
          class="text-lemon-green-500 text-5xl mb-6"
        />
        <p class="text-2xl text-gray-300 font-semibold mb-4">
          No projects found in this category.
        </p>
        <p class="text-lg text-gray-400">
          Try a different filter or check back later!
        </p>
      </div>

      <div
        v-else
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <ProjectCard
          v-for="project in filteredProjects"
          :key="project.id"
          :project="project"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import SectionHeading from "@/components/SectionHeading.vue";
import ProjectCard from "@/components/ProjectCard.vue";


import infinityDesktop from '@/assets/InfinityTab.png';
import portfolioDesktop from '@/assets/PorfolioTab.png';

const createSlug = (text) => {
  return text
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-");
};

const projects = ref([
  {
    id: "project-1",
    title: "Infinity Tech App",
    category: "fullstack",
    description:
      "A fullstack multipurpose web application for sales of products and courses",
    image: infinityDesktop,
    tags: ["Vue.js", "Node.js", "WebSockets", "MongoDB", "Express.js"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "project-2",
    title: "Portfolio Website (This Site!)",
    category: "frontend",
    description:
      "My personal portfolio website, showcasing frontend skills with Vue 3 and Tailwind CSS, designed for optimal performance and responsiveness.",
    image: portfolioDesktop,
    tags: ["Vue 3", "Composition API", "Tailwind CSS", "Vite"],
    liveLink: "#",
    githubLink: "#",
  },
]);

const projectsWithSlugs = computed(() => {
  return projects.value.map((project) => ({
    ...project,
    slug: createSlug(project.title),
  }));
});

const activeFilter = ref("all");

const filteredProjects = computed(() => {
  if (activeFilter.value === "all") {
    return projectsWithSlugs.value;
  }
  return projectsWithSlugs.value.filter(
    (project) => project.category === activeFilter.value
  );
});

const filterProjects = (category) => {
  activeFilter.value = category;
};
</script>

<style scoped>
.filter-button {
  @apply px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ease-in-out bg-gray-800 text-gray-300 hover:bg-lemon-green-600 hover:text-black shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-lemon-green-500 focus:ring-offset-2 focus:ring-offset-gray-900;
}

.filter-button-active {
  @apply bg-lemon-green-500 text-black shadow-xl scale-105;
}
</style>