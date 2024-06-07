<script setup>
import { reactive } from "vue";

const Accordion = (i) => {
  data[i].show = !data[i].show;
};

const data = reactive([
  {
    title: "How much time does it take ?",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    show: false, // Adding show property to each item
  },
  {
    title: "What is your class naming convention ?",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    show: false,
  },
  {
    title: "How do we communicate ?",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    show: false,
  },
  {
    title: "I have a bigger project. Can you handle it ?",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    show: false,
  },
  {
    title: "What is your class naming convention ?",
    more: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    show: false,
  },
]);
</script>

<template>
  <div class="temp flex justify-center md:mt-[92px]">
    <div class="container md:mb-[128px] md:grid grid-cols-3 gap-[25px] max-md:px-[5%] max-md:pb-10">
      <div>
        <h2 class="text-blackBlue leading-[64px] max-md:text-center text-3xl md:text-5xl font-semibold">
          Frequently asked questions
        </h2>
        <p class="mt-4 text-[#2405F2] max-md:text-sm max-md:text-center text-lg cursor-pointer">
          Contact us For More Info
        </p>
      </div>
      <div class="col-span-2 flex flex-wrap gap-2 max-md:mt-4">
        <div
          v-for="(item, index) in data"
          :key="index"
          @click="Accordion(index)"
          class="w-full cursor-pointer flex flex-wrap shadow-md items-center justify-between p-4 md:p-6"
        >
          <div class="items-center max-md:w-[90%] flex gap-4 md:gap-[58px]">
            <h6 class="text-[#2405F2] text-2xl">0{{ index + 1 }}</h6>
            <h6>{{ item.title }}</h6>
          </div>
          <span :class="!item.show ? 'rotate-0' : 'rotate-45'" class=" duration-500 ease-linear"
            ><svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.7"
                d="M18.36 10.908H11.088V18.36H7.272V10.908H0V7.452H7.272V0H11.088V7.452H18.36V10.908Z"
                fill="#282938"
              />
            </svg>
          </span>
          <div
            :class="item.show ? 'max-h-[150px]' : 'max-h-0'"
            class="overflow-hidden duration-500 ease-linear"
          >
            <p class="text-blackBlue md:text-lg max-md:text-justify max-md:ml-10 font-medium my-8 md:px-[80px]">
              {{ item.more }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
