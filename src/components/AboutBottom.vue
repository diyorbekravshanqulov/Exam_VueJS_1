<script setup>
import { ref } from "vue";

const images = ref(["/simon.svg", "/paul.svg", "/simon.svg", "/sara.svg"]);
const names = ref(["John Smith", "Simon Adams", "Paul Jones", "Sara Hardin"]);
const fields = ref(["CEO", "CTO", "Design Lead", "Project Manager"]);

const logo = ref(["/facebook.svg", "/twitter.svg", "/linkdIn.svg"]);
</script>
<template>
  <div class="w-full px-[3%] py-[128px] text-blackBlue">
    <h2 class="text-center leading-[64px] text-5xl font-semibold">
      Meet our team
    </h2>
    <div class="flex mt-12 w-full justify-between">
      <div class="py-12 px-16" v-for="(item, index) in images" :key="index">
        <div class="relative group overflow-hidden rounded-full">
          <img class="rounded-full" :src="item" alt="" />
          <img
            class="top-full duration-300 absolute left-0 group-hover:top-0"
            src="../../public/aboutHover.svg"
            alt=""
          />
          <div
            class="top-full flex duration-300 absolute left-1/2 -translate-x-1/2 group-hover:top-1/2 translate-y-8"
          >
            <a href="#" class="flex gap-3"
              ><img
                v-for="(item_logo, index_logo) in logo"
                :key="index_logo"
                :src="item_logo"
                alt=""

                class="w-full"
              />
            </a>
          </div>
        </div>
        <h6 class="mt-[30px] text-center text-2xl font-medium">
          {{ names[index] }}
        </h6>
        <p class="mt-1 text-center">{{ fields[index] }}</p>
      </div>
    </div>
  </div>
</template>
