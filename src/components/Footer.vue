<script setup>
import { ref } from "vue";

const images = ref([
  "/facebook.svg",
  "/twitter.svg",
  "/insta.svg",
  "/linkdIn.svg",
]);

const getLink = (index) => {
  if (index === 0) {
    return 'https://facebook.com';
  } else if (index === 1) {
    return 'https://twitter.com';
  } else if (index === 2) {
    return 'https://instagram.com';
  } else {
    return 'https://linkedin.com';
  }
};
</script>

<template>
  <div class="flex justify-start flex-wrap px-[3%] mt-[57px] py-[96px] bg-[#1C1E53]">
    <div class="md:flex gap-[260px]">
      <div>
        <img class="mx-auto md:m-0" src="../../public/logo.svg" alt="Company Logo" />
        <p class="mt-[23px] text-white leading-[28px] font-medium">
          We are always open to discuss your project and improve your online presence.
        </p>
      </div>
      <div>
        <h2 class="text-white md:text-start text-center leading-[64px] font-semibold text-[40px]">
          Lets Talk!
        </h2>
        <p class="mt-[14px] text-[#F4F6FC] leading-[28px] mb-7">
          We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.
        </p>
        <div class="flex gap-[27px] items-center">
          <a :href="getLink(index)" v-for="(item, index) in images" :key="index" target="_blank">
            <img :src="item" alt="logo_social" />
          </a>
        </div>
      </div>
    </div>
    <div class="md:w-0 w-full md:py-4 md:pr-[137px] py-2 md:mt-0 mt-10 md:pl-[37px] px-5 flex items-center gap-[29px] bg-[#FCD980] text-[#282938]">
      <div>
        <h5 class="leading-[32px] text-[12px] md:text-[18px] font-medium">Email me at</h5>
        <p class="md:mt-1 md:text-[16px] text-[12px] leading-[28px]">contact@website.com</p>
      </div>
      <div>
        <h5 class="leading-[32px] text-[14px] md:text-[18px] font-medium">Call us</h5>
        <p class="md:mt-1 md:text-[16px] text-[12px] leading-[28px]">0927 6277 28525</p>
      </div>
    </div>
  </div>
</template>
