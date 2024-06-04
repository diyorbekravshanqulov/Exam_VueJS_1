<script setup>
import { ref } from "vue";

const images = ref([
  "/facebook.svg",
  "/twitter.svg",
  "/insta.svg",
  "/linkdIn.svg",
]);
</script>
<template>
  <div
    class="flex justify-start flex-wrap px-[3%] mt-[57px] py-[96px] bg-[#1C1E53]"
  >
    <div class="flex gap-[260px]">
      <div>
        <img src="../../public/logo.svg" alt="" />
        <p class="mt-[23px] text-white leading-[28px] font-medium">
          We are always open to discuss your project and improve your online
          presence.
        </p>
      </div>
      <div>
        <h2 class="text-white leading-[64px] font-semibold text-[40px]">
          Lets Talk!
        </h2>
        <p class="mt-[14px] text-[#F4F6FC] leading-[28px] mb-7">
          We are always open to discuss your project, improve your online
          presence and help with your UX/UI design challenges.
        </p>
        <div class="flex gap-[27px] items-center">
          <img
            v-for="(item, index) in images"
            :key="index"
            :src="item"
            alt="logo_social"
          />
        </div>
      </div>
    </div>
    <div
      class="py-4 pr-[137px] pl-[37px] flex items-center gap-[29px] bg-[#FCD980] text-[#282938]"
    >
      <div>
        <h5 class="leading-[32px] text-[18px] font-medium">Email me at</h5>
        <p class="mt-1  leading-[28px]">contact@website.com</p>
      </div>
      <div>
        <h5 class="leading-[32px] text-[18px] font-medium">Call us</h5>
        <p class="mt-1 leading-[28px]">0927 6277 28525</p>
      </div>
    </div>
  </div>
</template>
