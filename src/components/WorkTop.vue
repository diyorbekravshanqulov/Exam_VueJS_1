<script setup>
import { ref } from "vue";

const images = ref([
  "/facebook copy.svg",
  "/twitter copy.svg",
  "/insta copy.svg",
  "/linkdIn copy.svg",
]);

const getLink = (index) => {
  if (index === 0) {
    return "https://facebook.com";
  } else if (index === 1) {
    return "https://twitter.com";
  } else if (index === 2) {
    return "https://instagram.com";
  } else {
    return "https://linkedin.com";
  }
};
</script>
<template>
  <div class="flex bg-[#F4F6FC] justify-center">
    <div class="container px-[25%] py-[96px]">
      <p class="text-blueBox text-center font-medium">What we created</p>
      <h2 class="text-center font-semibold text-5xl mt-1">
        Our Work Portfolio
      </h2>
      <p class="text-blueBox text-center font-medium mt-6">
        We help teams create great digital products by providing them with tools
        and technology to make the design-to-code process universally
        accessible.
      </p>
      <div
        class="flex md:gap-[27px] items-center max-md:w-full max-md:justify-between mt-8"
      >
        <a
          class="max-md:w-full"
          :href="getLink(index)"
          v-for="(item, index) in images"
          :key="index"
          target="_blank"
        >
          <img 
            class="max-md:w-1/3 max-md:mx-auto"
            :src="item"
            alt="logo_social"
          />
        </a>
      </div>
    </div>
  </div>
</template>
