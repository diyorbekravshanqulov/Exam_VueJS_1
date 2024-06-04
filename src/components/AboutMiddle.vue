<script setup>
import { ref } from 'vue'

const h3 = ref(["Goal focussed", "Continuous improvement"])

</script>
<template>
  <div class="w-full px-[3%] my-[127px]">
    <div class="flex px-[94px] py-[96px] text-blackBlue gap-[61px]">
      <div v-for="(item, index) in h3" :key="index">
        <h3 class="leading-[56px] text-[38px] font-semibold">{{ item }}</h3>
        <p class="mt-4 leading-[28px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
    <img class="w-full" src="../../public/aboutMiddle.svg" alt="">
  </div>
</template>
