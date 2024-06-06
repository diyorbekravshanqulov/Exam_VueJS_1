<script setup>
import { ref, onMounted } from "vue";

const label = ref(["Name", "Email", "Subject", "Subject", "Message"]);
const input = ref([
  "Enter your name",
  "Enter your Email",
  "Provide context",
  "Select Subject",
  "Write your question here",
]);


const selectInput = (index) => {
  if (index == 0) {
    return inputone
  }else if (index  == 1) {
    return inputtwo
  } else if (index == 2) {
    return inputthree
  } return inputfour
}

const func = () => {
  if (inputone && inputtwo && inputthree && inputfour) {
    alert("Message successfully sent!");
  } else {
    alert("Require!!!")
  }
};

</script>

<template>
  <div class="temp flex justify-center">
    <div class="container md:py-[220px] py-[64px] max-md:mt-14">
      <div class="md:px-[30%] w-full max-md:px-[5%]">
        <h2
          class="text-blueBox text-center font-semibold md:text-5xl text-3xl leading-[64px]"
        >
          Contact Us
        </h2>
        <p class="mt-4 text-blueBox max-md:text-[14px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div class="w-full md:mt-16 mt-10 md:px-[110px]">
        <div
          class="bg-[#F4F6FC] mx-auto md:rounded-[12px] py-10 md:py-[55px] px-[5%] md:px-[77px]"
        >
          <form @submt.@click.prevent="handler"
            action=""
            class="w-full md:grid grid-cols-2 grid-rows-5 gap-x-8 gap-y-6"
          >
            <div
              v-for="(item, index) in label"
              :key="index"
              class="flex flex-col"
              :class="index == 4 ? 'col-span-2 row-span-2' : ''"
            >
              <label
                class="md:leading-[32px] md:text-[18px] max-md:mt-4"
                :for="'input-' + index"
              >
                {{ item }}
              </label>
              <input
                required
                autocomplete="off"
                v-if="index != 4"
                :id="'input-' + index"
                :type="index == 1 ? 'email': 'text'"
                :name="item.toLowerCase()"
                :placeholder="input[index]"
                class="border bg-transparent border-gray-300 text-[14px] rounded-[8px] mt-[6px] md:px-8 px-6 md:py-[18px] py-4 placeholder:text-[#000] max-md:mt-3"
              />
              <textarea
                name=""
                id=""
                :placeholder="input[index]"
                rows="5"
                style="resize: none"
                v-if="index == 4"
                class="border bg-transparent border-gray-300 p-2 w-full rounded-[8px] mt-[6px] md:px-8 px-6 md:py-[18px] py-4 placeholder:text-[#000]"
              ></textarea>
            </div>
            <button
              @click="func()"
              type="submit"
              class="cursor-pointer duration-300 max-md:w-full hover:text-gray-500 border border-transparent hover:bg-white hover:border-gray-500 px-8 w-[254px] py-4 rounded-[41px] bg-blackBlue text-[#F4F6FC] text-[18px] font-semibold mt-8"
            >Send message</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
input[type="submit"]:hover {
  box-shadow: 0 0 10px grey;
}
</style>
