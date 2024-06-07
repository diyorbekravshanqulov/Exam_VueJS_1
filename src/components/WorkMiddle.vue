<script setup>
import { ref, reactive, computed } from "vue";

// Initializing buttons array
const buttons = ref(["All", "UI Design", "Webflow Design", "Figma Design"]);

const defaults = ref(["All"]);
// Initializing active index to null
const activeIndex = ref(null);

// Function to set the active index
const func = (index, item) => {
  activeIndex.value = index;
   data.filter((i) => {
    i.designType.toLocaleLowerCase() == item.toLocaleLowerCase()
  })
};


const data = reactive([
  {
    img: "/work1.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "View Portfolio",
    designType: 'UI design'
  },
  {
    img: "/work2.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "View Portfolio",
    designType: 'Webflow design'
  },
  {
    img: "/work3.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
    designType: 'UI design'
  },
  {
    img: "/work4.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
    designType: 'Webflow design'
  },
  {
    img: "/work5.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. ",
    btn: "Read case study",
    designType: 'UI design'
  },
  {
    img: "/work6.svg",
    info: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    btn: "Read case study",
    designType: 'Figma design'
  },
]);
</script>

<template>
  <div class="flex justify-center">
    <div class="container md:pt-[96px] pt-10 max-md:px-[5%]">
      <div class="flex md:gap-8 gap-4 max-md:grid grid-cols-2 justify-center">
        <button
          v-for="(item, index) in buttons"
          :key="index"
          @click="func(index, item)"
          :class="{
            change: activeIndex === index,
            'text-blackBlue': activeIndex !== index,
          }"
          class="md:text-lg"
        >
          {{ item }}
        </button>
      </div>

      <div
        class="md:grid grid-cols-2 gap-x-[34px] md:gap-y-10 mt-16 max-md:flex max-md:flex-wrap max-md:gap-4"
      >
        <div
          v-for="(item, index) in data"
          :key="index"
          class="text-blackBlue max-md:shadow-md"
        >
          <img :src="item.img" alt="img" class="w-full" />
          <div class="mt-6 max-md:px-4 max-md:pb-4">
            <h3 class="font-semibold text-3xl md:text-[38px]">
              Template {{ index + 1 }}
            </h3>
            <p class="mt-3 text-justify">{{ item.info }}</p>
            <div>
              <button
                class="hover-underline-animation cursor-pointer mt-6 font-medium"
              >
                {{ item.btn }} &#8594;
              </button>
            </div>
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

.hover-underline-animation::after {
  background: #282938;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
}
</style>
