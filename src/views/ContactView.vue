<template>
  <section
    class="contact-section py-16 md:py-24 animate-slide-up bg-gray-900 text-gray-50 min-h-screen flex items-center justify-center"
  >
    <div class="container mx-auto px-6 max-w-4xl">
      <SectionHeading class="mt-8"
        title="Get In Touch"
        subtitle="Let's Connect & Collaborate"
      />

      <p
        class="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
      >
        Have a project in mind, a question, or just want to say hello? I'd love
        to hear from you! Feel free to reach out through the form below or
        connect with me on social media.
      </p>

      <div
        class="bg-charcoal-grey p-8 md:p-12 rounded-xl shadow-2xl border border-gray-700"
      >
        <form
          @submit.prevent="submitForm"
          action="YOUR_FORMSPREE_ENDPOINT_URL"
          method="POST"
          class="space-y-8"
        >
          <div>
            <label
              for="name"
              class="block text-sm font-semibold text-gray-50 mb-2"
              >Name</label
            >
            <input
              type="text"
              id="name"
              name="name"
              v-model="form.name"
              @blur="validateField('name')"
              :class="{ 'border-red-500': formErrors.name }"
              class="w-full px-5 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-lemon-green-500 focus:border-lemon-green-500 bg-gray-800 text-gray-50 placeholder-gray-400 outline-none transition-all duration-200 ease-in-out shadow-sm"
              placeholder="Your Name"
            />
            <p v-if="formErrors.name" class="text-red-500 text-sm mt-1">
              {{ formErrors.name }}
            </p>
          </div>
          <div>
            <label
              for="email"
              class="block text-sm font-semibold text-gray-50 mb-2"
              >Email</label
            >
            <input
              type="email"
              id="email"
              name="email"
              v-model="form.email"
              @blur="validateField('email')"
              :class="{ 'border-red-500': formErrors.email }"
              class="w-full px-5 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-lemon-green-500 focus:border-lemon-green-500 bg-gray-800 text-gray-50 placeholder-gray-400 outline-none transition-all duration-200 ease-in-out shadow-sm"
              placeholder="your.email@example.com"
            />
            <p v-if="formErrors.email" class="text-red-500 text-sm mt-1">
              {{ formErrors.email }}
            </p>
          </div>
          <div>
            <label
              for="subject"
              class="block text-sm font-semibold text-gray-50 mb-2"
              >Subject</label
            >
            <input
              type="text"
              id="subject"
              name="subject"
              v-model="form.subject"
              @blur="validateField('subject')"
              :class="{ 'border-red-500': formErrors.subject }"
              class="w-full px-5 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-lemon-green-500 focus:border-lemon-green-500 bg-gray-800 text-gray-50 placeholder-gray-400 outline-none transition-all duration-200 ease-in-out shadow-sm"
              placeholder="Regarding a project, collaboration, etc."
            />
            <p v-if="formErrors.subject" class="text-red-500 text-sm mt-1">
              {{ formErrors.subject }}
            </p>
          </div>
          <div>
            <label
              for="message"
              class="block text-sm font-semibold text-gray-50 mb-2"
              >Message</label
            >
            <textarea
              id="message"
              name="message"
              v-model="form.message"
              rows="6"
              @blur="validateField('message')"
              :class="{ 'border-red-500': formErrors.message }"
              class="w-full px-5 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-lemon-green-500 focus:border-lemon-green-500 bg-gray-800 text-gray-50 placeholder-gray-400 outline-none transition-all duration-200 ease-in-out shadow-sm resize-y"
              placeholder="Your message..."
            ></textarea>
            <p v-if="formErrors.message" class="text-red-500 text-sm mt-1">
              {{ formErrors.message }}
            </p>
          </div>

          <BaseButton
            type="primary"
            class="w-full py-4 text-lg font-bold uppercase tracking-wider flex items-center justify-center"
            :disabled="isSubmitting || hasErrors"
          >
            <span v-if="!isSubmitting">
              Send Message
              <font-awesome-icon
                :icon="['fas', 'paper-plane']"
                class="ml-3 text-xl"
              />
            </span>
            <span v-else class="flex items-center">
              <svg
                class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          </BaseButton>

          <p
            v-if="successMessage"
            class="text-lemon-green-500 text-center mt-6 text-lg font-medium animate-fade-in"
          >
            {{ successMessage }}
          </p>
          <p
            v-if="errorMessage"
            class="text-red-500 text-center mt-6 text-lg font-medium animate-fade-in"
          >
            {{ errorMessage }}
          </p>
        </form>

        <div class="mt-12 pt-10 border-t border-gray-700 text-center">
          <h3 class="text-2xl font-bold text-gray-50 mb-6">
            Or Connect With Me
          </h3>
          <div class="flex justify-center space-x-8 md:space-x-12">
            <IconLink
              v-for="link in socialLinks"
              :key="link.text"
              :href="link.href"
              
              :icon="link.icon"
              :text="link.text"
              :isBrandIcon="link.isBrandIcon"
              class="transform transition-transform duration-200 hover:scale-110"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref, computed } from "vue";
import SectionHeading from "../components/SectionHeading.vue";
import BaseButton from "../components/BaseButton.vue";
import IconLink from "../components/IconLink.vue";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xnnzaywo";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const formErrors = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const isSubmitting = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const socialLinks = reactive([
  {
    href: "mailto:your.senatorlhuj@gmail.com",
    icon: "envelope",
    text: "Email",
    isBrandIcon: false,
  },
  {
    href: "https://www.linkedin.com/in/edmund-obinna-a1bb55263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    icon: "linkedin",
    text: "LinkedIn",
    isBrandIcon: true,
  },
  {
    href: "https://github.com/Senatorlhuj",
    icon: "github",
    text: "GitHub",
    isBrandIcon: true,
  },
  {
    href: "https://x.com/LhujSenator?t=2Z4xiFYoW6REqmk4e_KnmQ&s=09",
    icon: "twitter",
    text: "twitter",
    isBrandIcon: true,
  },
]);

const validateField = (field) => {
  formErrors[field] = ""; // Clear previous error for the field

  switch (field) {
    case "name":
      if (!form.name.trim()) {
        formErrors.name = "Name is required.";
      }
      break;
    case "email":
      if (!form.email.trim()) {
        formErrors.email = "Email is required.";
      } else if (!/\S+@\S+\.\S+/.test(form.email)) {
        formErrors.email = "Please enter a valid email address.";
      }
      break;
    case "subject":
      if (!form.subject.trim()) {
        formErrors.subject = "Subject is required.";
      }
      break;
    case "message":
      if (!form.message.trim()) {
        formErrors.message = "Message is required.";
      } else if (form.message.trim().length < 10) {
        formErrors.message = "Message must be at least 10 characters long.";
      }
      break;
  }
};

const validateForm = () => {
  let isValid = true;
  for (const field in form) {
    validateField(field);
    if (formErrors[field]) {
      isValid = false;
    }
  }
  return isValid;
};

const hasErrors = computed(() => {
  return Object.values(formErrors).some((error) => error !== "");
});

const submitForm = async () => {
  successMessage.value = "";
  errorMessage.value = "";

  if (!validateForm()) {
    errorMessage.value = "Please fill out the empty fields.";
    return;
  }

  isSubmitting.value = true;

  try {
    const formData = new FormData();
    for (const key in form) {
      formData.append(key, form[key]);
    }

    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      successMessage.value =
        "Message sent successfully! I will get back to you soon.";
      form.name = "";
      form.email = "";
      form.subject = "";
      form.message = "";
      // Clear all errors after successful submission
      for (const field in formErrors) {
        formErrors[field] = "";
      }
    } else {
      const data = await response.json();
      if (data && data.errors) {
        errorMessage.value = data.errors.map((err) => err.message).join(", ");
      } else {
        errorMessage.value = "Failed to send message. Please try again.";
      }
    }
  } catch (error) {
    errorMessage.value =
      "Network error. Please check your connection and try again.";
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
}
</style>