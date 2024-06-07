<script setup>
import { ref, reactive } from "vue";

// Initializing buttons array
const buttons = ref(["All", "UI Design", "Webflow Design", "Figma Design"]);

// Initializing active index to null
const activeIndex = ref(null);

// Function to set the active index
const func = (index) => {
  activeIndex.value = index;
};

const data = reactive([
  {
    img: '/work1.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "View Portfolio",
  },
  {
    img: '/work2.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "View Portfolio",
  },
  {
    img: '/work3.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
  },
  {
    img: '/work4.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
  },
  {
    img: '/work5.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ",
    btn: "Read case study",
  },
  {
    img: '/work6.svg',
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
  },
]);
</script>

<template>
  <div class="flex justify-center">
    <div class="container py-[96px]">
      <div class="flex gap-8 justify-center">
        <button
          v-for="(item, index) in buttons"
          :key="index"
          @click="func(index)"
          :class="{
            'change': activeIndex === index,
            'text-blackBlue': activeIndex !== index,
          }"
          class="text-lg"
        >
          {{ item }}
        </button>
      </div>

      <div class="grid grid-cols-2 gap-x-[34px] gap-y-16 mt-12">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="h-[576px] text-blackBlue"
        >
          <img :src="item.img" alt="img" />
          <div class="mt-6">
            <h3 class="font-semibold text-[38px]">Template {{ index+ 1 }}</h3>
            <p class="mt-3 text-justify">{{ item.info }}</p>
            <p class="mt-6 font-medium">{{ item.btn }} &#8594;</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

/* Add a custom style for the inactive button text color */
.change {
  color: #2405f2;
}
</style>
