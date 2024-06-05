<template>
  <div class="temp flex justify-center">
    <div class="container max-md:px-[5%] flex flex-wrap mt-[57px] mb-[64px] md:mb-[128px]">
      <div class="flex w-full justify-between items-center mb-4">
        <h2 class="font-semibold text-xl md:text-[40px]" style="color: rgba(40, 41, 56, 1)">
          View our projects
        </h2>
        <a class="hover-underline-animation text-[14px] md:text-[16px] font-medium text-[#282938]" href="#">
          View Pricing &#8594;
        </a>
      </div>
      <div class="grid md:grid-cols-3 md:grid-rows-2 gap-[2%] w-full mt-[64px] relative">
        <div
          v-for="(item, index) in imgs"
          :key="index"
          :class="['relative', 'group', getClassForIndex(index)]"
        >
          <img class="w-full" :src="item" :alt="`Project image ${index + 1}`" />
          <div
            v-if="index === 1 || index === 3"
            class="absolute top-0 w-full h-full z-10"
          >
            <img
              class="w-full h-full object-cover duration-300"
              :class="getClassForIndexImg(index)"
              :src="item"
              alt=""
            />
            <div
              v-if="index === 1"
              class="text_one absolute duration-300 z-25 w-[313px] bottom-[76px] left-full group-hover:left-0 opacity-0"
            >
              <h4 class="text-white leading-[36px] text-2xl font-semibold">
                Workhub office Webflow Webflow Design
              </h4>
              <p class="mt-4 text-white leading-[28px] mb-12">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam
              </p>
              <a
                class="hover-underline-animation orange text-[16px] font-medium text-[#FCD980]"
                href="#"
                >View Pricing &#8594;
              </a>
            </div>
            <div
              v-if="index === 3"
              class="text_two absolute duration-300 z-25 w-[313px] pr-[2%] top-[22%] right-full group-hover:right-0 opacity-0"
            >
              <h4 class="text-white leading-[36px] text-2xl font-semibold mb-[10px]">
                Unisaas Website Design
              </h4>
              <a
                class="hover-underline-animation orange text-[16px] font-medium text-[#FCD980]"
                href="#"
                >View Pricing &#8594;</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imgs = ref([
  "/project_women.svg",
  "/before.svg",
  "/image.png",
  "/before2.svg",
  "/project_women2.svg",
]);

const getClassForIndex = (index) => {
  if (index === 0) {
    return "col-span-2 row-span-2";
  } else if (index === 2 || index === 4) {
    return "col-span-1";
  } else {
    return "hidden";
  }
};

const getClassForIndexImg = (index) => {
  if (index === 1) {
    return "group-hover:left-0 -left-full";
  } else if (index === 3) {
    return "group-hover:right-0 -right-full";
  } else {
    return "";
  }
};
</script>

<style scoped>
.hover-underline-animation {
  position: relative;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #282938;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
}

.text_one,
.text_two {
  transition: opacity 0.3s ease;
}

.group:hover .text_one,
.group:hover .text_two {
  opacity: 1;
}
</style>
