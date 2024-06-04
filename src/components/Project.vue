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
    return "one col-span-2 row-span-2";
  } else if (index === 2) {
    return "two row-span-1 col-span-1";
  } else if (index === 4) {
    return "three row-span-1 col-span-1";
  } else if (index === 1) {
    return "four col-span-1 row-span-2 duration-300 absolute -left-full";
  } else {
    return "five row-span-1 col-span-1 absolute duration-300 -right-full";
  }
};
</script>

<template>
  <div class="flex flex-wrap px-[3%] mt-[57px] mb-[128px]">
    <div class="flex w-full justify-between items-center mb-4">
      <h2 class="font-semibold text-xl md:text-[40px]" style="color: rgba(40, 41, 56, 1)">
        View our projects
      </h2>
      <a
        class="hover-underline-animation text-[14px] md:text-[16px] font-medium text-[#282938]"
        href="#"
        >View Pricing &#8594;</a
      >
    </div>
    <div
      class="overflow-hidden grid md:grid-cols-3 grid-rows-2 gap-[2%] w-full relative mt-[64px]"
    >
      <img
        v-for="(item, index) in imgs"
        :key="index"
        :src="item"
        alt=""
        :class="getClassForIndex(index)"
      />
      <div
        class="text_one -left-full duration-300 absolute z-25 w-[313px] bottom-[76px]"
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
        class="text_two -right-full duration-300 absolute z-25 w-[313px] pr-[2%] top-[22%]"
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
</template>

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

.orange:hover::after {
  background: #fcd980;
}

.four:hover ~ .text_one,
.text_one:hover {
  left: 48px;
}

.five:hover ~ .text_two,
.text_two:hover {
  right: 36px;
}

.one:hover ~ .four,
.four:hover {
  left: 0;
  top: 0;
}

.text_one:hover ~ .four,
.four:hover {
  left: 0;
  top: 0;
}

.two:hover ~ .five,
.five:hover {
  right: 0;
  top: 0;
}
</style>
