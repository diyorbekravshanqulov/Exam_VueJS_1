<script setup>
import { ref } from 'vue';

const h3 = ref(["Goal focused", "Continuous improvement"]);
</script>

<template>
  <div class="flex justify-center">
    <div class="container w-full px-4 sm:px-6 md:px-8 my-20 md:my-32">
      <div class="md:flex gap-x-20 gap-y-6 justify-between px-4 md:px-16 py-6 md:py-24 text-blackBlue">
        <div v-for="(item, index) in h3" :key="index" class="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 class="leading-tight text-2xl md:text-4xl text-center font-semibold">{{ item }}</h3>
          <p class="mt-4 text-sm md:text-base leading-relaxed indent-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <img class="w-full mt-6" src="../../public/aboutMiddle.svg" alt="About Image">
    </div>
  </div>
</template>

<style scoped>
.text-blackBlue {
  color: #1a202c; /* Tailwind's black with a slight blue tint */
}
</style>
