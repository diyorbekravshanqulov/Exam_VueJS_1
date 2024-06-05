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
  } else if (index === 2) {
    return "col-span-1";
  } else if (index === 4) {
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

<template>
  <div class="flex justify-center">
    <div class="container  max-md:px-[5%] flex flex-wrap mt-[57px] mb-[128px]">
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
          >View Pricing &#8594;</a
        >
      </div>
      <div
        class="overflow-hidden grid md:grid-cols-3 md:grid-rows-2 gap-[2%] w-full mt-[64px] relative"
      >
        <div
          v-for="(item, index) in imgs"
          :key="index"
          :class="['relative', 'group', getClassForIndex(index)]"
        >
          <img class="w-full" :src="item" alt="" />
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
          </div>
        </div>
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

.group-hover\:left-0 {
  left: 0 !important;
}

.group-hover\:right-0 {
  right: 0 !important;
}

.group-hover\:left-0,
.group-hover\:right-0 {
  transition: all 0.3s ease;
}

.group .group-hover\:left-0,
.group .group-hover\:right-0 {
  transition: all 0.3s ease;
}
</style>
