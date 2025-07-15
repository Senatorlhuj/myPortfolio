<template>
  <header
    ref="headerRef"
    class="bg-white/90 backdrop-blur-md py-4 px-4 md:px-8 fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 shadow-sm"
    :class="{ 'bg-gray-900/95 border-gray-700/50': isMobileMenuOpenComputed }"
  >
    <nav class="container mx-auto flex justify-between items-center">
      <router-link
        to="/"
        class="text-xl md:text-2xl font-bold text-gray-900 hover:text-lemon-green-500 transition-all duration-300 flex-shrink-0 relative group"
      >
        <span class="relative z-10">&lt; Edmund Obinna /&gt;</span>
        <div class="absolute inset-0 bg-lemon-green-500/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
      </router-link>

      <div class="hidden md:flex items-center space-x-4 uppercase">
        <router-link to="/about" class="nav-link">
          <span>About</span>
        </router-link>
        <router-link to="/portfolio" class="nav-link">
          <span>Portfolio</span>
        </router-link>
        <router-link to="/contact" class="nav-link">
          <span>Contact</span>
        </router-link>
      </div>

      <button
        @click="toggleMobileMenu"
        class="md:hidden relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-lemon-green-500 focus:ring-offset-2 transition-all duration-200 touch-manipulation group"
        aria-label="Toggle mobile menu"
      >
        <font-awesome-icon :icon="isMobileMenuOpenComputed ? ['fas', 'xmark'] : ['fas', 'bars']" class="text-gray-700 text-xl" />
      </button>
    </nav>

    <transition name="mobile-menu">
      <div
        v-if="isMobileMenuOpenComputed"
        class="md:hidden absolute top-full left-0 w-full backdrop-blur-md border-t border-gray-700/50 shadow-xl z-[9998] bg-white"
      >
        <div class="container mx-auto py-4">
          <div class="flex flex-col space-y-3 text-xl uppercase">
            <router-link
              to="/about"
              @click="closeMobileMenu"
              class="mobile-nav-link group"
            >
              <div class="flex items-center space-x-3">
                <div class="w-1 h-6 bg-lemon-green-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <span>About</span>
              </div>
            </router-link>
            <router-link
              to="/portfolio"
              @click="closeMobileMenu"
              class="mobile-nav-link group"
            >
              <div class="flex items-center space-x-3">
                <div class="w-1 h-6 bg-lemon-green-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <span>Portfolio</span>
              </div>
            </router-link>
            <router-link
              to="/contact"
              @click="closeMobileMenu"
              class="mobile-nav-link group"
            >
              <div class="flex items-center space-x-3">
                <div class="w-1 h-6 bg-lemon-green-500 rounded-full scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <span>Contact</span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { computed, ref, watch, onMounted, onBeforeUnmount } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

library.add(faBars, faXmark);

const props = defineProps({
  isMobileMenuOpen: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:isMobileMenuOpen"]);

const isMobileMenuOpenComputed = computed({
  get: () => props.isMobileMenuOpen,
  set: (value) => emit("update:isMobileMenuOpen", value),
});

const toggleMobileMenu = () => {
  isMobileMenuOpenComputed.value = !isMobileMenuOpenComputed.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpenComputed.value = false;
};

// --- New code for closing menu on outside click/scroll ---
const headerRef = ref(null); // Create a ref for the header element

// Function to handle clicks outside the header
const handleClickOutside = (event) => {
  // Only close if the menu is open and the click is outside the header
  if (isMobileMenuOpenComputed.value && headerRef.value && !headerRef.value.contains(event.target)) {
    closeMobileMenu();
  }
};

// Function to handle scroll events
const handleScroll = () => {
  if (isMobileMenuOpenComputed.value) {
    closeMobileMenu();
  }
};

// Watch for changes in isMobileMenuOpenComputed to add/remove event listeners
watch(isMobileMenuOpenComputed, (isOpen) => {
  if (isOpen) {
    // Add event listeners when menu opens
    // Use setTimeout to ensure the click event has bubbled up and processed before adding the listener
    // This prevents the immediate click that opened the menu from also closing it
    setTimeout(() => {
      document.addEventListener("click", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }, 0); 
  } else {
    // Remove event listeners when menu closes
    document.removeEventListener("click", handleClickOutside);
    window.removeEventListener("scroll", handleScroll);
  }
});

// Ensure event listeners are cleaned up if component is unmounted while menu is open
onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Base styles for nav-link, including transitions for properties that will change on hover/active */
.nav-link {
  @apply relative px-4 py-2 text-gray-700 font-medium rounded-lg;
  transition: color 0.3s ease, background-color 0.3s ease, transform 0.3s ease; /* Explicit transitions */
}

.nav-link span {
  @apply relative z-10;
}

.nav-link::before {
  content: "";
  @apply absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-lemon-green-500 to-lemon-green-600 transition-all duration-300 -translate-x-1/2 rounded-full;
}

/* Generalized Hover effects for .nav-link (applies to all screen sizes where .nav-link is visible and hoverable) */
/* This will affect the desktop navbar links */
.nav-link:hover {
  @apply text-lemon-green-600 bg-lemon-green-50 transform -translate-y-0.5; /* Lift and change background/text */
}

.nav-link:hover::before {
  @apply w-3/4; /* Expand the underline on hover */
}

/* Styles for active link (unchanged) */
.router-link-active.nav-link {
  @apply text-lemon-green-600 bg-lemon-green-50;
}

/* Ensure active link also has the underline (unchanged) */
.router-link-active.nav-link::before {
  @apply w-3/4;
}

/* Mobile Nav Link Styles (unchanged from last working version for mobile) */
.mobile-nav-link {
  @apply block px-6 py-4 text-white font-medium rounded-lg mx-2 transition-all duration-300 hover:bg-gray-800/50 hover:text-lemon-green-400 touch-manipulation;
  min-height: 56px;
  display: flex;
  align-items: center;
}

.router-link-active.mobile-nav-link {
  @apply bg-lemon-green-500/20 text-lemon-green-400;
}

.router-link-active.mobile-nav-link .w-1 {
  @apply scale-y-100;
}

/* Mobile Menu Transitions (unchanged) */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}

.mobile-menu-enter-to,
.mobile-menu-leave-from {
  transform: translateY(0);
  opacity: 1;
}

/* Responsive adjustments (unchanged) */
@media (max-width: 360px) {
  .text-xl {
    font-size: 1.125rem;
  }

  .mobile-nav-link {
    @apply px-4 py-3;
    min-height: 48px;
  }
}

.container {
  @apply relative z-10;
}

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}

body {
  padding-top: 80px;
}

@media (max-width: 768px) {
  body {
    padding-top: 72px;
  }
}

@media (hover: hover) {
  .mobile-nav-link:hover {
    transform: translateX(4px);
  }
}

.nav-link:focus-visible,
.mobile-nav-link:focus-visible {
  @apply outline-none ring-2 ring-lemon-green-500 ring-offset-2;
}

@media (prefers-reduced-motion: no-preference) {
  html {
    scroll-behavior: smooth;
  }
}
</style>