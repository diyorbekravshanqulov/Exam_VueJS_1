<script setup>
import { ref } from 'vue'

const images = ref(["/simon.svg", "/paul.svg", "/simon.svg" , "/sara.svg"])
const names = ref(["John Smith", "Simon Adams", "Paul Jones", "Sara Hardin"])
const fields = ref(["CEO", "CTO", "Design Lead", "Project Manager"])

</script>
<template>
  <div class="w-full px-[3%] py-[128px] text-blackBlue">
    <h2 class="text-center leading-[64px] text-5xl font-semibold">Meet our team</h2>
    <div class="flex mt-12 w-full justify-between">
        <div class="py-12 px-16" v-for="(item, index) in images" :key="index">
            <img class="rounded-full" :src="item" alt="">
            <h6 class="mt-[30px] text-center text-2xl font-medium">{{ names[index] }}</h6>
            <p class="mt-1 text-center">{{ fields[index] }}</p>
        </div>
    </div>
  </div>
</template>
