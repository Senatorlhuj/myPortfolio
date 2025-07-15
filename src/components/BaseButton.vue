<template>
  <button
    :class="[
      'px-6 py-3 rounded-md text-base font-medium shadow-sm transition-colors duration-200 cursor-pointer',
      buttonClasses,
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "primary",
  },
});

const buttonClasses = computed(() => {
  switch (props.type) {
    case "primary":
      return "bg-lemon-green-500 text-black hover:bg-lemon-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lemon-green-500";
    case "secondary":
      return "bg-accent-gold text-black hover:bg-accent-gold-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-gold";
    case "outline":
      return "border border-lemon-green-500 text-lemon-green-500 hover:bg-lemon-green-900 hover:text-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lemon-green-500";
    default:
      return "";
  }
});
</script>


