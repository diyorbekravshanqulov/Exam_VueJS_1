<script setup>
import { ref } from 'vue'

const h3 = ref(["Goal focussed", "Continuous improvement"])

</script>
<template>
  <div class="temp flex justify-center">

  <div class="container max-md:px-[5%] w-full md:my-[127px] my-[100px]">
    <div class="md:flex gap-y-6 gap-x-20 justify-between px-4 md:px-16 py-6 md:py-24 text-blackBlue">
        <div v-for="(item, index) in h3" :key="index" class="w-full md:w-1/2 mb-8 md:mb-0">
          <h3 class="leading-tight text-2xl md:text-4xl max-md:text-center font-semibold">{{ item }}</h3>
          <p class="mt-4 text-sm md:text-base leading-relaxed max-md:indent-6 text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    <img class="w-full md:m-0 mt-4" src="../../public/aboutMiddle.svg" alt="">
  </div>
  </div>
</template>
