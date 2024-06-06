<template>
  <div class="temp flex justify-center">
    <div class="container max-md:px-[5%] mt-[57px] mb-[64px] md:mb-[128px]">
      <div class="flex w-full justify-between items-center mb-4">
        <h2
          class="font-semibold text-xl md:text-[40px]"
          style="color: rgba(40, 41, 56, 1)"
        >
          View our projects
        </h2>
        <a
          class="hover-underline-animation text-[14px] md:text-[16px] font-medium text-[#282938]"
          href="#"
        >
          View Pricing &#8594;
        </a>
      </div>
      <div class="md:grid grid-cols-3 max-md:flex max-md:flex-wrap gap-5 w-full mt-[64px]">
        <div
          v-for="(item, index) in imgs"
          :key="index"
          :class="index === 0 ? 'col-span-2 row-span-2' : ''"
          class="relative overflow-hidden group"
        >
          <div
            :class="index === 0 ? 'w-1/2' : 'w-full'"
            class="absolute top-0 left-0 duration-300 group-hover:left-0 h-full bg-gradient-to-br from-[#1C1E536B]/40 to-[#1C1E53] p-4 flex flex-col justify-end"
          >
            <div v-if="index == 0" class="md:px-12 md:py-[76px]">
              <h3 class="text-white font-semibold text-sm md:text-2xl">
                Workhub office Webflow Webflow Design
              </h3>
              <p class="text-white max-md:text-[10px] mt-4 max-md:mt-2 md:mb-10">
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <a
                class="hover-underline-animation imgText text-[12px] md:text-[16px] font-medium text-[#FCD980]"
                href="#"
              >
                View Pricing &#8594;
              </a>
            </div>
            <div v-if="index != 0" class="md:px-14 md:py-[45px] md:w-[350px]">
              <h3 class="text-white font-semibold md:text-2xl md:mb-[10px]">
                Unisaas Website Design
              </h3>
              <a
                class="hover-underline-animation imgText text-[14px] md:text-[16px] font-medium text-[#FCD980]"
                href="#"
              >
                View Pricing &#8594;
              </a>
            </div>
          </div>
          <img class="w-full" :src="item" :alt="`Project image ${index + 1}`" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const imgs = ref(["/project_women.svg", "/image.png", "/project_women2.svg"]);
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

.imgText::after {
  background: #fcd980;
}
.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
}

.group .absolute {
  left: -100%;
}

.group:hover .absolute {
  left: 0;
}

.text-white {
  color: white;
}
</style>
