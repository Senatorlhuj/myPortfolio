<template>
  <section class="hero-section py-20 md:py-32 text-center animate-fade-in">
    <div class="container pt-12 md:pt-0 mx-auto px-6 max-w-3xl">
      <div class="mb-8">
        <img src="@/assets/myProfilePix.jpg" alt="profile picture" class="w-32 h-32 rounded-full mx-auto object-cover border-2 border-lemon-green-500 shadow-lg" loading="lazy"/>
      </div>
      <h1 class="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
        Hi, I'm <span class="text-lemon-green-500">Edmund Obinna</span>.
      </h1>
      <p class="text-2xl md:text-3xl font-semibold text-white mb-6">
        A passionate <span class="text-accent-gold">Web Developer</span>
      </p>
      <p class="text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
        I create intuitive digital experiences and build robust, scalable web applications. Explore my work to see how I bring ideas to life.
      </p>
      <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <router-link to="/portfolio">
          <BaseButton type="primary" class="transition-all duration-300 ease-in-out hover:bg-lemon-green-600 hover:scale-105">
            View My Work <font-awesome-icon :icon="['fas', 'arrow-right']" class="ml-2" />
          </BaseButton>
        </router-link>
        <router-link to="/contact">
          <BaseButton type="outline" class="transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105">
            Contact Me <font-awesome-icon :icon="['fas', 'envelope']" class="ml-2" />
          </BaseButton>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import BaseButton from '../components/BaseButton.vue';
</script>

<style scoped>
.hero-section {
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.9), rgba(0, 0, 0, 0.9));
}
</style>