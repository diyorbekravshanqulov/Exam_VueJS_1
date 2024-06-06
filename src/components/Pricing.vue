<template>
  <div class="temp flex justify-center md:mt-[92px]">
    <div class="container border border-red-500 md:my-[128px]">
      <div class="text-blueBox px-[25%]">
        <h2 class="text-center text-5xl font-semibold">Our Pricing Plans</h2>
        <p class="mt-4 font-medium text-center">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <div class="flex gap-8">
        <div
          v-for="(item, index) in pricing"
          :key="index"
          :class="index != 1 ? 'bg-[#F4F6FC]' : 'bg-[#1C1E53]'"
          class="rounded-xl px-12 py-16"
        >
          <div :class="index == 1? 'text-white':''" class="flex gap-4">
            <h3 class="text-4xl text-blueBox font-semibold">{{ item.price }}</h3>
            <p class="text-[#2405F2]">{{ item.type }}</p>
          </div>
          <h6 class="mt-5 text-blueBox text-2xl">{{ item.page }}</h6>
          <p class="mt-2 text-blackBlue leading-[28px]">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";

const pricing = reactive([
  {
    price: "$299",
    type: "Per Design",
    page: "Landing Page",
    desc: "When you’re ready to go beyond prototyping in Figma,",
    instruc: [ 
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", true],
      ["Unlimited users", true],
    ],
  },
  {
    price: "$399",
    type: "Multi Design",
    page: "Website Page",
    desc: "When you’re ready to go beyond prototyping in Figma, Webflow’s ready to help.",
    instruc: [
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", true],
      ["Unlimited users", true],
    ],
  },
  {
    price: "$499 +",
    type: "Per Design",
    page: "Complex Project",
    desc: "When you’re ready to go beyond prototyping in Figma,",
    instruc: [
      ["All limited links", true],
      ["Own analytics platform", true],
      ["Chat support", true],
      ["Optimize hashtags", true],
      ["Unlimited users", true],
      ["Assist and Help", true],
    ],
  },
]);

</script>

