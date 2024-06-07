<script setup>
import { ref } from "vue";

const images = ref(["/simon.svg", "/paul.svg", "/simon.svg", "/sara.svg"]);
const names = ref(["John Smith", "Simon Adams", "Paul Jones", "Sara Hardin"]);
const fields = ref(["CEO", "CTO", "Design Lead", "Project Manager"]);

const logo = ref(["/facebook.svg", "/twitter.svg", "/linkdIn.svg"]);
const getLink = (index) => {
  if (index === 0) {
    return "https://facebook.com";
  } else if (index === 1) {
    return "https://twitter.com";
  } else {
    return "https://linkedin.com";
  }
};
</script>
<template>
  <div class="temp flex justify-center bg-[#F4F6FC]">

  <div class="container max-md:flex justify-center flex-wrap w-full px-[3%] md:py-[128px] text-blackBlue py-10">
    <h2 class="text-center leading-[64px] md:text-5xl text-4xl max-md:border-b-2 max-md:border-black font-semibold max-md:mx-4">
      Meet our team
    </h2>
    <div class="flex mt-12 w-full justify-center max-md:flex-wrap md:justify-betwen gap-6 max-md:px-4">
      <div class="py-12 md:px-16 px-12 w-full max-md:gap-4 bg-white group" v-for="(item, index) in images" :key="index" >
        <div class="relative overflow-hidden rounded-full max-md:flex max-md:justify-center">
          <img class="rounded-full w-full overflow-hidden mx-auto" :src="item" alt="" />
            <img

            class="top-full w-full duration-1000 absolute left-0 group-hover:top-0 max-md:left-1/2 max-md:-translate-x-1/2"
            src="../../public/aboutHover.svg"
            alt=""
          />
          <div
            class="top-full w-1/2 max-md:1/3 flex duration-1000 gap-4 absolute left-1/2 -translate-x-1/2 group-hover:top-1/2 translate-y-[200%] md:translate-y-9"
          >
            <a
              :href="getLink(index_logo)" class="w-full"
              v-for="(item_logo, index_logo) in logo"
              :key="index_logo"
              target="_blank"
              ><img :src="item_logo" alt="" class="w-full mx-auto" />
            </a>
          </div>
        </div>
        <h6 class="mt-[30px] text-center text-2xl font-medium">
          {{ names[index] }}
        </h6>
        <p class="mt-1 text-center">{{ fields[index] }}</p>
      </div>
    </div>
  </div>
  </div>
</template>
