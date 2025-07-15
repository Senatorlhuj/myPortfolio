<template>
  <section class="project-detail-section py-16 md:py-24 animate-slide-up">
    <div class="container mx-auto px-6 max-w-5xl">
      <router-link to="/portfolio" class="inline-flex items-center text-lemon-green-500 hover:underline mb-8">
        <font-awesome-icon :icon="['fas', 'arrow-left']" class="mr-2" /> Back to Portfolio
      </router-link>

      <div v-if="project" class="bg-charcoal-grey p-8 rounded-lg shadow-lg">
        <h1 class="text-4xl font-extrabold text-gray-50 mb-4">{{ project.title }}</h1>
        <p class="text-light-grey text-lg mb-6">{{ project.description }}</p>

        <img :src="project.fullImage || project.image" :alt="project.title" class="w-full md:w-3/4 lg:w-2/3 h-auto mx-auto rounded-lg mb-8 shadow-md object-cover" />

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-light-grey">
          <div>
            <h3 class="text-xl font-bold text-gray-50 mb-2">My Role</h3>
            <p>{{ project.role || 'Not specified' }}</p>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-50 mb-2">Technologies</h3>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 bg-lemon-green-700 text-black rounded-full text-sm font-medium">
                {{ tag }}
              </span>
            </div>
          </div>
          <div>
            <h3 class="text-xl font-bold text-gray-50 mb-2">Timeline</h3>
            <p>{{ project.timeline || 'Not specified' }}</p>
          </div>
        </div>

        <h2 class="text-3xl font-bold text-gray-50 mt-10 mb-4">Project Overview</h2>
        <div class="prose max-w-none text-light-grey">
          <p>
            {{ project.overview || 'Detailed overview of the project, including problem statement, goals, and initial research.' }}
          </p>
          <h3 class="text-2xl font-bold text-gray-50 mt-8 mb-3">The Process</h3>
          <p>
            {{ project.process || 'Describe your design or development process step-by-step. Include phases like discovery, design, development, testing, and deployment.' }}
          </p>
          <img v-if="project.processImage" :src="project.processImage" alt="Project Process" class="w-full md:w-3/4 lg:w-2/3 h-auto mx-auto rounded-lg my-6 shadow-md object-cover" />

          <h3 class="text-2xl font-bold text-gray-50 mt-8 mb-3">Challenges & Solutions</h3>
          <p>
            {{ project.challenges || 'Discuss any significant challenges faced during the project and how you or your team overcame them. This demonstrates problem-solving skills.' }}
          </p>

          <h3 class="text-2xl font-bold text-gray-50 mt-8 mb-3">Results & Impact</h3>
          <p>
            {{ project.results || 'Quantify the results if possible. E.g., "Increased conversion rates by X%", "Reduced page load time by Y seconds".' }}
          </p>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-4">
          <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer">
            <BaseButton type="primary">
              View Live Project <font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-2" />
            </BaseButton>
          </a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer">
            <BaseButton type="outline">
              View Code <font-awesome-icon :icon="['fab', 'github']" class="ml-2" />
            </BaseButton>
          </a>
        </div>
      </div>
      <div v-else class="text-center text-gray-400 py-20">
        <p class="text-2xl">Project not found.</p>
        <router-link to="/portfolio" class="mt-4 inline-block text-lemon-green-500 hover:underline">Go back to portfolio</router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import BaseButton from '@/components/BaseButton.vue';

import infinityDesktop from '@/assets/InfinityDesktop.png';
import infinityTab from '@/assets/InfinityTab.png';
import portfolioDesktop from '@/assets/PorfolioDesktop.png';
import portfolioPhone from '@/assets/PorfolioTab.png';

const route = useRoute();
const project = ref(null);

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

const allProjects = [
  {
    id: "project-1",
    title: "Infinity Tech App",
    category: "fullstack",
    description:
      "A fullstack multipurpose web application for sales of products and courses",
    image: infinityDesktop,
    fullImage: infinityDesktop,
    tags: ["Vue.js", "Node.js",  "MongoDB", "Express.js"],
    role: 'Full-Stack Developer',
    timeline: '2 Months',
    overview: 'This project involves developing a fullstack web application that enables the business organization sell both physical products and digital courses online. The application will feature comprehensive product catalog management, integrated learning management system (LMS), secure payment processing Built with Vue.js frontend and Node.js backend, along with supporting technologies including Express.js, MongoDB, JWT authentication, Paystack integration. The platform will provide a seamless experience across devices while supporting scalable business growth.',
    process: 'The project creation process begins with requirements gathering, system design, and database architecture planning, followed by frontend and backend development using modern frameworks and APIs. The development cycle includes iterative testing, third-party integrations (payment gateways), deployment to production servers, and ongoing maintenance with feature updates based on user feedback.',
    processImage: infinityTab,
    challenges: 'Key challenges include integrating complex payment systems, ensuring scalable architecture for handling both product inventory and course content, and maintaining secure user data across multiple user roles. Solutions involve implementing robust API architectures, employing industry-standard security protocols, and conducting thorough testing phases to ensure seamless integration between product and course management systems.',
    results: 'The final deliverable will be a fully functional, responsive web application capable of handling simultaneous product sales and course delivery with secure payment processing and user management. The platform will provide improved customer engagement through integrated learning experiences, and streamlined operations via comprehensive analytics and automated processes.',
    liveUrl: 'https://infinitytechworld.org',
    githubUrl: 'https://github.com/Senatorlhuj/InfinityTechApp',
  },
  {
    id: "project-2",
    title: "Portfolio Website (This Site!)",
    category: "frontend",
    description:
      "My personal portfolio website, showcasing frontend skills with Vue 3 and Tailwind CSS, designed for optimal performance and responsiveness.",
    image: portfolioDesktop,
    fullImage: portfolioDesktop,
    tags: ["Vue 3", "Composition API", "Tailwind CSS", "Vite"],
    role: 'Frontend Developer',
    timeline: '3 Weeks',
    overview: 'This project is my personal portfolio, built to demonstrate my frontend development skills. It focuses on clean UI, smooth transitions, and responsiveness across devices.',
    process: 'Designed with a mobile-first approach. Developed with Vue 3 and Composition API for modularity and reusability. Styled entirely with Tailwind CSS. Optimized for performance and SEO.',
    processImage: portfolioPhone,
    challenges: 'Optimizing image loading and ensuring consistent animations across different browsers were minor challenges. Achieved a highly performant and accessible site.',
    results: 'A highly performant personal website that effectively showcases my projects and skills.',
    liveUrl: 'https://yourportfolio.com',
    githubUrl: 'https://github.com/Senatorlhuj/myPortfolio',
  },
];

onMounted(() => {
  const projectNameSlug = route.params.projectNameSlug;
  project.value = allProjects.find(p => createSlug(p.title) === projectNameSlug);
});
</script>

<style scoped>
.prose {
  @apply text-base md:text-lg;
}
.prose h3 {
  @apply text-xl md:text-2xl mt-6 mb-3;
}
</style>