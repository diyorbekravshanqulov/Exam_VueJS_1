<script setup></script>
<template>
  <div class="grid grid-cols-3 px-[3%] gap-[10%] mt-[57px] py-[128px]">
    <div>
      <h3
        class="text-[38px] font-semibold leading-[56px]"
        style="color: rgba(40, 41, 56, 1)"
      >
        What our clients say about us
      </h3>
      <p class="mt-4" style="color: rgba(40, 41, 56, 1)">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
      </p>
    </div>
    <div class="col-span-2">
      <h5
        class="text-[32px] font-medium leading-[48px]"
        style="color: rgba(40, 41, 56, 1)"
      >
        "The best agency we’ve worked with so far. They understand our product
        and are able to add new features with a great focus."
      </h5>
      <div class="mt-12 w-full justify-between flex">
        <div class="flex gap-[14px]">
          <img src="../../public/women_pic.svg" alt="" />
          <div>
            <h6 class="mt-4 text-[18px]" style="color: rgba(40, 41, 56, 1)">
              Jenny Wilson
            </h6>
            <p class="mt-4 text-[12px]" style="color: rgba(40, 41, 56, 1)">
              Vice President
            </p>
          </div>
        </div>
        <div class="flex items-center gap-[10px]">
          <button class="text-[#282938] w-[48px] h-[48px] flex items-center justify-center rounded-full text-4xl">
            &lt;
          </button>
          <button
            class="w-[48px] h-[48px] flex items-center justify-center rounded-full text-4xl bg-[#5239FA]"
            style="color: rgba(255, 255, 255, 1)"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
