<script setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

const swiper = ref(null);

const goToPrevSlide = () => {
  swiper.value.slidePrev();
};

const goToNextSlide = () => {
  swiper.value.slideNext();
};

onMounted(() => {
  swiper.value = new Swiper(".swiper-container", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  });
});

const testimonials = ref([
  {
    text: "The best agency we’ve worked with so far. They understand our product and are able to add new features focus.",
    img: "/women_pic.svg",
    name: "Jenny Wilson",
    position: "Vice President",
  },
  {
    text: "This team is highly skilled and always delivers on time. Their dedication and expertise have greatly success.",
    img: "/women_pic.svg",
    name: "John Doe",
    position: "CEO",
  },
  {
    text: "Exceptional service and support. They always go above and beyond to meet our needs and ensure we are satisfied.",
    img: "/women_pic.svg",
    name: "Sarah Smith",
    position: "Marketing Director",
  },
]);
</script>

<template>
  <div class="temp flex justify-center">
    <div
      class="container max-md:px-[5%] md:grid md:grid-cols-3 gap-[10%] md:mt-[57px] md:py-[128px] py-[64px]"
    >
      <div class="md:col-span-1 col-span-2">
        <h3
          class="md:text-[38px] text-2xl max-md:px-8 md:text-start text-center font-semibold leading-[56px]"
          style="color: rgba(40, 41, 56, 1)"
        >
          What our clients say about us
        </h3>
        <p
          class="md:mt-4 max-md:text-[14px] mt-8"
          style="color: rgba(40, 41, 56, 1)"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
        </p>
      </div>
      <div class="col-span-2 max-md:mt-8">
        <div class="swiper-container overflow-hidden relative">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(testimonial, index) in testimonials"
              :key="index"
            >
              <h5
                class="md:text-[32px] text-[20px] font-medium md:leading-[48px] leading-[36px]"
                style="color: rgba(40, 41, 56, 1)"
              >
                "{{ testimonial.text }}"
              </h5>
              <div class="mt-12 w-full justify-between flex">
                <div class="flex gap-[14px]">
                  <img :src="testimonial.img" alt="testimonial.name" />
                  <div
                    class="flex flex-col justify-start items-center gap-2 max-md:-1"
                  >
                    <h6
                      class="text-[14px] md:text-[18px]"
                      style="color: rgba(40, 41, 56, 1)"
                    >
                      {{ testimonial.name }}
                    </h6>
                    <p
                      class="text-[10px] md:text-[12px]"
                      style="color: rgba(40, 41, 56, 1)"
                    >
                      {{ testimonial.position }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="flex items-center gap-[10px] absolute bottom-0 right-0 z-10 max-md:-translate-y-1/3"
          >
            <button
              @click="goToPrevSlide"
              class="text-[#282938] md:w-[48px] md:h-[48px] h-[34px] w-[34px] flex items-center justify-center rounded-full hover:bg-[#5239FA] hover:text-white text-xl md:text-4xl"
            >
              &lt;
            </button>
            <button
              @click="goToNextSlide"
              class="md:w-[48px] md:h-[48px] h-[34px] w-[34px] flex items-center justify-center rounded-full text-xl md:text-4xl hover:bg-[#5239FA] hover:text-white"
            >
              &gt;
            </button>
          </div>
          <!-- Add pagination if needed -->
          <!-- <div class="swiper-pagination"></div> -->
        </div>
      </div>
    </div>
  </div>
</template>
