<template>
  <section class=" about-section py-20 md:py-24 animate-slide-up">
    <div class="container mx-auto px-6 max-w-5xl">
      <SectionHeading class="mt-8"
        title="About Me"
        subtitle="Crafting Digital Experiences, One Line of Code at a Time"
      />

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <div class="lg:col-span-1 flex justify-center lg:justify-start">
          <img
            src="@/assets/myProfilePix.jpg"
            alt="Your Name - Web Developer"
            class="rounded-full w-48 h-48 md:w-72 md:h-72 object-cover transform transition-transform duration-300 hover:scale-105" loading="lazy"
          />
        </div>

        <div class="lg:col-span-2 text-gray-200 leading-relaxed space-y-6">
          <p class="text-lg">
            Hello there! I'm <b>Edmund Obinna</b>, a dedicated Web Developer with
            3+ years of experience in bringing
            innovative web solutions to life. My journey began with a
            fascination for how technology can simplify complexities, and it has
            evolved into a passion for building robust, user-centric
            applications that truly make an impact.
          </p>
          <p>
            I specialize in transforming intricate ideas into elegant,
            high-performing web experiences. Whether it's architecting
            scalable full-stack platforms or meticulously crafting
            intuitive front-end interfaces, I thrive on the challenge of
            solving real-world problems with clean, efficient code. I've had the
            privilege of collaborating with dynamic teams on diverse projects,
            always striving to deliver products that exceed expectations.
          </p>
          <p>
            Beyond the keyboard, you'll find me exploring new hiking trails to clear my mind and find
            fresh perspectives, or diving into classic sci-fi novels, which
            often spark new ideas for problem-solving. I believe that a
            balanced life fuels creativity and sharpens problem-solving skills,
            allowing me to bring my best self to every project.
          </p>
          <div class="mt-8">
            <a
              href="@/assets/Resume.pdf"
              download="Resume.pdf"
              class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-md shadow-lg text-black bg-lemon-green-500 hover:bg-lemon-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lemon-green-500 transition-colors duration-200 uppercase tracking-wider"
            >
              Download My Resume
              <font-awesome-icon
                :icon="['fas', 'download']"
                class="ml-3 text-xl"
              />
            </a>
          </div>
        </div>
      </div>

      <div class="mt-16 md:mt-24">
        <h3 class="text-2xl font-bold text-gray-50 mb-8 text-center">
          My Toolkit & Expertise
        </h3>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <div
            v-for="skill in skills"
            :key="skill.name"
            class="flex flex-col items-center bg-charcoal-grey p-5 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-200 group"
          >
            <font-awesome-icon
              :icon="skill.icon"
              class="text-lemon-green-500 text-4xl mb-3 group-hover:scale-110 transition-transform duration-200"
              v-if="skill.icon"
            />
            <span class="text-gray-50 font-medium text-center">{{
              skill.name
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SectionHeading from "../components/SectionHeading.vue";
import { reactive } from "vue";

const skills = reactive([
  { name: "HTML 5", icon: ["fas", "code"] },
  { name: "CSS 3", icon: ["fab", "css3-alt"] },
  { name: "JavaScript", icon: ["fab", "js"] },
  { name: "TypeScript", icon: ["fas", "file-code"] },
  { name: "Vue.js", icon: ["fab", "vuejs"] },
  { name: "React", icon: ["fab", "react"] },
  { name: "Tailwind CSS", icon: ["fab", "css3-alt"] },
  { name: "Sass/Less", icon: ["fab", "sass"] },
  { name: "Pinia (Vuex)", icon: ["fab", "vuejs"] },
  { name: "Redux/Zustand", icon: ["fab", "react"] },
  { name: "Node.js", icon: ["fab", "node-js"] },
  { name: "Express.js", icon: ["fas", "server"] },
  { name: "PostgreSQL", icon: ["fas", "database"] },
  { name: "MongoDB", icon: ["fas", "leaf"] },
  { name: "Sequelize", icon: ["fas", "database"] },
  { name: "Mongoose", icon: ["fas", "leaf"] },
  { name: "RESTful APIs", icon: ["fas", "exchange-alt"] },
  { name: "GraphQL", icon: ["fas", "cube"] },
  { name: "WebSockets", icon: ["fas", "wave-square"] },
  { name: "Git & GitHub", icon: ["fab", "git-alt"] },
  { name: "npm/Yarn/pnpm", icon: ["fab", "npm"] },
  { name: "Vite (Build Tool)", icon: ["fas", "tools"] },
  { name: "Unit & Integration Testing", icon: ["fas", "vial"] },
  { name: "Docker", icon: ["fab", "docker"] },
  { name: "Cloud Platforms (AWS/GCP)", icon: ["fas", "cloud"] },
  { name: "CI/CD Pipelines", icon: ["fas", "robot"] },
  { name: "Basic Security Practices", icon: ["fas", "shield-alt"] },
  { name: "Performance Optimization", icon: ["fas", "tachometer-alt-alt"] },
]);
</script>
