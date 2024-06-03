<script setup>
import { ref } from "vue";

const imgs = ref([
  "/project_women.svg",
  "/before.svg",
  "/project_women.svg",
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
    return "row-span-1 col-span-1 absolute w-[490px] h-[349px] top-0 right-0";
  }
};
</script>

<template>
  <div class="flex flex-wrap px-[10%] mt-[57px] mb-[128px]">
    <div class="flex w-full justify-between items-center mb-4">
      <h2 class="font-semibold text-5xl" style="color: rgba(40, 41, 56, 1)">
        View our projects
      </h2>
      <a
        class="text-[16px] font-medium"
        style="color: rgba(255, 255, 255, 1)"
        href="#"
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

