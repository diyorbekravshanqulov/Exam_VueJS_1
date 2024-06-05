<script setup>
import { ref } from 'vue'

const h3 = ref(["Goal focussed", "Continuous improvement"])

</script>
<template>
  <div class="temp flex justify-center">

  <div class="container max-md:px-[5%] w-full px-[3%] md:my-[127px] my-[100px]">
    <div class="md:flex md:px-[94px] px-4 md:py-[96px] text-blackBlue gap-[61px]">
      <div v-for="(item, index) in h3" :key="index">
        <h3 class="leading-[56px] text-2xl md:text-[38px] font-semibold">{{ item }}</h3>
        <p class="mt-4 max-md:text-[14px] leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <img class="w-full md:m-0 mt-6" src="../../public/aboutMiddle.svg" alt="">
  </div>
  </div>
</template>
