<script setup>
import { ref } from "vue";

const imgs = ref([
  "text-logo1.svg",
  "text-logo2.svg",
  "text-logo3.svg",
  "text-logo1.svg",
  "text-logo2.svg",
  "text-logo3.svg",
]);

const func = (index) => {
  return imgs.value[index];
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
  <div class="flex bg-[#F4F6FC] justify-center">
    <div class="container flex justify-center flex-wrap mt-[57px]">
      <p
        class="font-medium text-[16px] text-center mt-[128px]"
        style="color: rgba(40, 41, w 56, 1)"
      >
        Features
      </p>
      <h2
        class="text-center md:px-[25%] leading-[45px] md:leading-[64px] text-2xl md:text-5xl font-semibold mt-3"
        style="color: rgba(40, 41, 56, 1)"
      >
        Design that solves problems, one product at a time
      </h2>
      <div
        class="grid md:grid-cols-3 grid-rows-2 gap-8 px-[14px] py[48px] mt-[47px] md:mb-[128px] pb-[64px]"
      >
        <div
          v-for="(item, index) in h6"
          :key="index"
          class="px-12 py-11 bg-white duration-300 hover:shadow-xl"
        >
          <img :src="func(index)" alt="" />
          <!-- Adjust index -->
          <h6 class="text-2xl mt-[25px]" style="color: rgba(40, 41, 56, 1)">
            {{ item }}
          </h6>
          <p class="mt-3 text-[16px]" style="color: rgba(40, 41, 56, 1)">
            {{ parag[0] }}
          </p>
          <!-- Access the first element of the 'parag' array -->
        </div>
      </div>
    </div>
  </div>
</template>
