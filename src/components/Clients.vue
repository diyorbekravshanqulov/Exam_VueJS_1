<script setup></script>
<template>
  <div class="grid md:grid-cols-3 px-[3%] gap-[10%] md:mt-[57px] md:py-[128px] py-[64px]">
    <div class="md:col-span-1 col-span-2">
      <h3
        class="text-[38px] md:text-start text-center font-semibold leading-[56px]"
        style="color: rgba(40, 41, 56, 1)"
      >
        What our clients say about us
      </h3>
      <p class="md:mt-4 mt-8" style="color: rgba(40, 41, 56, 1)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
      </p>
    </div>
    <div class="col-span-2">
      <h5
        class="md:text-[32px] text-[24px] font-medium md:leading-[48px] leading-[36px]"
        style="color: rgba(40, 41, 56, 1)"
      >
        "The best agency we’ve worked with so far. They understand our product
        and are able to add new features with a great focus."
      </h5>
      <div class="mt-12 w-full justify-between flex">
        <div class="flex gap-[14px]">
          <img src="../../public/women_pic.svg" alt="" />
          <div>
            <h6 class="md:mt-4 mt-[2px] md:text-[18px]" style="color: rgba(40, 41, 56, 1)">
              Jenny Wilson
            </h6>
            <p class="md:mt-4 mt-[2px] text-[10px] md:text-[12px]" style="color: rgba(40, 41, 56, 1)">
              Vice President
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <button class="text-[#282938] md:w-[48px] md:h-[48px] h-[36px] w-[36px] flex items-center justify-center rounded-full text-2xl md:text-4xl">
            &lt;
          </button>
          <button
            class="md:w-[48px] md:h-[48px] h-[36px] w-[36px] flex items-center justify-center rounded-full text-2xl md:text-4xl bg-[#5239FA]"
            style="color: rgba(255, 255, 255, 1)"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
