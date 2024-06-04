<script setup>
import { ref } from "vue";

const imgs = ref(["text-logo1.svg", "text-logo2.svg", "text-logo3.svg"]);

const func = (index) => {
  if (index == 2) {
    return imgs.value[0];
  } else if (index == 3) {
    return imgs.value[1];
  } else if (index == 4) {
    return imgs.value[2];
  }
  return "h-[35px]"
};

const h6 = ref([
  "Uses Client First",
  "Two Free Revision Round",
  "Template Customization",
  "24/7 Support",
  "Quick Delivery",
  "Hands-on approach",
]);

const parag = ref([
  "Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.",
]);
</script>

<template>
  <div class="flex justify-center flex-wrap px-[3%] mt-[57px]">
    <p
      class="font-medium text-[16px] text-center mt-[128px]"
      style="color: rgba(40, 41,w 56, 1)"
    >
      Features
    </p>
    <h2
      class="text-center px-[320px] leading-[64px] text-5xl font-semibold mt-3"
      style="color: rgba(40, 41, 56, 1)"
    >
      Design that solves problems, one product at a time
    </h2>
    <div class="grid grid-cols-3 grid-rows-2 gap-8 px-[38px] py[48px] mt-[47px]">
      <div v-for="(item, index) in h6" :key="index" class="p-12">
        <img :src="func(index)" alt="" :class="func()"/>
        <!-- Adjust index -->
        <h6
          class="text-2xl mt-[25px]"
          style="color: rgba(40, 41, 56, 1)"
        >
          {{ item }}
        </h6>
        <p
          class="mt-3 text-[16px]"
          style="color: rgba(40, 41, 56, 1)"
        >
          {{ parag[0] }}
        </p>
        <!-- Access the first element of the 'parag' array -->
      </div>
    </div>
  </div>
</template>
