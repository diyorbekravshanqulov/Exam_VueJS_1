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
  } else if (index == 4) {
    return "three row-span-1 col-span-1";
  } else if (index == 1) {
    return "col-span-1 row-span-2 absolute left-0 top-0";
  } else {
    return "row-span-1 col-span-1 absolute top-0 right-0";
  }
};
</script>

<template>
  <div class="flex flex-wrap px-[3%] mt-[57px] mb-[128px]">
    <div class="flex w-full justify-between items-center mb-4">
      <h2 class="font-semibold text-[40px]" style="color: rgba(40, 41, 56, 1)">
        View our projects
      </h2>
      <a class="hover-underline-animation text-[16px] font-medium text-[#282938]" href="#"
        >View Pricing &#8594;</a
      >
    </div>
    <div class="grid grid-cols-3 grid-rows-2 gap-6 w-full relative mt-[64px]">
      <img
        v-for="(item, index) in imgs"
        :key="index"
        :src="item"
        alt=""
        :class="getClassForIndex(index)"
      />
    </div>
  </div>
</template>

<style scoped>
.hover-underline-animation {
  position: relative;
  /* color: white; */
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
  background: white;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
  /* background: white; */
  background: #282938;
}
</style>
