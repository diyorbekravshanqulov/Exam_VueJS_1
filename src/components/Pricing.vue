<template>
  <div class="temp flex justify-center md:mt-[92px]">
    <div class="container md:my-[128px] max-md:px-[5%] max-md:pt-[128px]">
      <div class="text-blueBox md:px-[28%]">
        <h2 class="text-center text-3xl md:text-5xl font-semibold">Our Pricing Plans</h2>
        <p class="mt-4 md:font-medium text-sm text-center">
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <div class="md:grid grid-cols-3 gap-8 max-md:flex max-md:flex-col max-md:gap-4 mt-8 md:mt-16">
        <div
          v-for="(item, index) in pricing"
          :key="index"
          :class="index != 1 ? 'bg-[#F4F6FC]' : 'bg-[#1C1E53]'"
          class="rounded-xl px-12 py-16 relative overflow-hidden flex flex-col justify-between"
        >
          <div
            v-if="index == 1"
            class="z-10 w-[1000px] h-[1000px] rounded-full absolute top-[12%] md:top-[17%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-[6%]"
          ></div>
          <div class="flex gap-4 items-center">
            <h3
              :class="index != 1 ? '' : 'text-white'"
              class="text-4xl text-blueBox font-semibold"
            >
              {{ item.price }}
            </h3>
            <p
              :class="index != 1 ? '' : 'text-[#FCD980]'"
              class="text-[#2405F2]"
            >
              {{ item.type }}
            </p>
          </div>
          <h6
            :class="index != 1 ? '' : 'text-white'"
            class="mt-5 text-blueBox text-2xl"
          >
            {{ item.page }}
          </h6>
          <p
            :class="index != 1 ? '' : 'text-white'"
            class="mt-2 text-blackBlue leading-[28px] mb-[79px]"
          >
            {{ item.desc }}
          </p>
          <div class="flex flex-wrap gap-5">
            <div
              v-for="(item_ins, index_ins) in item.instruc"
              :key="index_ins"
              class="w-full"
            >
              <div class="flex items-center gap-3">
                <span :class="index_ins[1] ? 'block' : 'hidden'">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z"
                      fill="#97DAAD"
                      stroke="url(#paint0_linear_174_502)"
                      stroke-width="3"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_174_502"
                        x1="-4.84615"
                        y1="-17"
                        x2="11.6069"
                        y2="11.3225"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span :class="!index_ins[1] ? 'block' : 'hidden'">
                  <svg
                    width="16"
                    height="21"
                    viewBox="0 0 16 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g style="mix-blend-mode: luminosity">
                      <path
                        d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z"
                        fill="#FC80AD"
                      />
                      <path
                        d="M13.7767 9.23707C14.5942 9.85191 14.5701 11.0868 13.729 11.6691L3.85392 18.5069C2.85908 19.1958 1.5 18.4838 1.5 17.2737L1.5 3.00968C1.5 1.77272 2.91294 1.06739 3.90155 1.81084L13.7767 9.23707Z"
                        stroke="url(#paint0_linear_174_512)"
                        stroke-width="3"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_174_512"
                        x1="-4.84615"
                        y1="-17"
                        x2="11.6069"
                        y2="11.3225"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>

                <p
                  :class="[
                    index !== 1 ? '' : 'text-white',
                    item_ins[1] === false ? 'opacity-[70%]' : '',
                  ]"
                  class="text-blueBox"
                >
                  {{ item_ins[0] }}
                </p>
              </div>
            </div>
            <div class="mt-20 w-full flex justify-center items-end">
              <button
                :class="index != 1 ? '' : '!bg-[#FCD980] text-blackBlue'"
                class="text-[#F4F6FC] bg-blackBlue px-[51px] py-[15px] rounded-[41px]"
              >
                Get started
              </button>
            </div>
          </div>
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
      ["Optimize hashtags", false],
      ["Unlimited users", false],
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
