<script setup>
import { ref } from "vue";

// Initializing buttons array
const buttons = ref(['All', 'UI Design', 'Webflow Design', 'Figma Design'])

// Initializing active index to null
const activeIndex = ref(null)

// Function to set the active index
const func = (index) => {
  activeIndex.value = index
}
</script>

<template>
  <div class="flex justify-center">
    <div class="container border border-red-500 py-[96px]">
      <div class="flex gap-8 justify-center">
        <button 
          v-for="(item, index) in buttons" 
          :key="index" 
          @click="func(index)" 
          :class="{' text-blackBlue': activeIndex === index, 'text-#2405F2': activeIndex !== index}" 
          class="text-lg">
          {{ item }}
        </button>
      </div>

      <div class="grid grid-cols-2 gap-x-[34px] gap-y-16 mt-12">
        <div v-for="(item, index) in 6" :key="index" class="h-[576px] border border-green-400"></div>
      </div>
    </div>
  </div>
</template>

<style>
/* Add a custom style for the active button text color */
.text-blueBox {
  color: #2405F2;
}

/* Add a custom style for the inactive button text color */
.text-blackBlue {
  color: #2405F2;
}
</style>
