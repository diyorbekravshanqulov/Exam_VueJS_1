<script setup>
import { ref } from "vue";

const parag = ref(["Andrew Jonson", "Posted on 27th January 2021"]);

const active = ref(false);
</script>
<template>
  <div class="temp flex justify-center">
    <div
      class="container max-md:px-[5%] w-full md:mb-[127px] md:mt-[220px] mt-[100px] mb-10 text-blackBlue flex flex-wrap justify-center"
    >
      <h2 class="text-center md:px-[15%] font-semibold text-3xl md:text-5xl leading-10 md:leading-[64px]">
        A UX Case Study on Creating a Studious Environment for Students
      </h2>
      <div class="flex gap-[6px] max-md:flex-wrap max-md:justify-center mt-4">
        <p v-for="(item, index) in parag" :key="index" class="font-medium ">
          {{ item }}
        </p>
      </div>
      <img src="../../public/blogTop.png" alt="Img" class="mt-8 w-full" />
      <div :class="active? '': 'md:px-[15%]'" class="overflow-hidden mt-12">
        <p class="text-center max-md:text-sm">
          Apparently we had reached a great height in the atmosphere, for the
          sky was a dead black, and the stars had ceased to twinkle. By the same
          illusion which lifts the horizon of the sea to the level of the
          spectator on a hillside.
        </p>
        <p v-if="active" class="text-center max-md:text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus rem
          cupiditate, saepe perferendis accusantium laudantium minima modi id
          recusandae placeat consequuntur quibusdam, necessitatibus, sed ratione
          officia quasi ab nam aliquid? Facere ad voluptas incidunt commodi quia
          doloremque quisquam quo enim pariatur! Totam blanditiis magni
          similique ipsa, quae quam. Itaque praesentium quaerat aliquid eligendi
          commodi animi facilis ipsam sunt odio officiis, distinctio
          reprehenderit et accusamus consequatur? Repellendus nisi delectus
          saepe esse, expedita voluptatum placeat perferendis odio, pariatur
          repudiandae quo repellat reprehenderit iste minus dolores assumenda
          velit eos hic sint consectetur libero nostrum qui? Sapiente architecto
          nihil dignissimos ratione hic ipsum maxime. lo
        </p>
      </div>
      <button @click="active = !active" class="text-[#2405F2] mt-4 max-md:text-sm">
        {{ !active ? "Read more" : "Hide" }}
      </button>
    </div>
  </div>
</template>
