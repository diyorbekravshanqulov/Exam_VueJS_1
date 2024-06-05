<script setup>
import { ref } from "vue";

const label = ref(["Name", "Email", "Subject", "Subject", "Message"]);
const input = ref([
  "Enter your name",
  "Enter your Email",
  "Provide context",
  "Select Subject",
  "Write your question here",
]);
</script>

<template>
  <div class="temp flex justify-center">
    <div class="container max-md:px-[5%] md:py-[228px] py-[64px]">
      <div class="px-[30%] w-full">
        <h2
          class="text-blueBox text-center font-semibold text-5xl leading-[64px]"
        >
          Contact Us
        </h2>
        <p class="mt-4 text-blueBox text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div class="w-full mt-16 px-[110px]">
        <div
          class="bg-[#F4F6FC] mx-auto border border-red-500 rounded-[12px] py-[55px] px-[77px]"
        >
          <form
            action=""
            class="w-full grid grid-cols-2 grid-rows-5 gap-x-8 gap-y-6"
          >
            <div
              v-for="(item, index) in label"
              :key="index"
              class="flex flex-col"
              :class="index == 4 ? 'col-span-2 row-span-2' : ''"
            >
              <label class="leading-[32px] text-[18px]" :for="'input-' + index">
                {{ item }}
              </label>
              <input
                v-if="index != 4"
                :id="'input-' + index"
                type="text"
                :name="item.toLowerCase()"
                :placeholder="input[index]"
                class="border border-gray-300 p-2 rounded-[8px] mt-[6px] px-8 py-[18px] placeholder:text-[#000]"
              />
              <textarea
                name=""
                id=""
                :placeholder="input[index]"
                rows="5"
                style="resize: none"
                v-if="index == 4"
                class="border border-gray-300 p-2 w-full rounded-[8px] mt-[6px] px-8 py-[18px] placeholder:text-[#000]"
              ></textarea>
            </div>
            <input
              type="submit"
              class="cursor-pointer duration-300 hover:text-gray-500 border border-transparent hover:bg-white hover:border-gray-500 px-8 w-[254px] py-4 rounded-[41px] bg-blackBlue text-[#F4F6FC] text-[18px] font-semibold mt-8"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped> 

input[type='submit']:hover {
  box-shadow: 0 0 10px grey;
}

</style>