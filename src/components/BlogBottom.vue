<script setup>
import { ref, reactive } from "vue";

const data = reactive([
  {
    img: '/blog1.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
  {
    img: '/blog2.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
  {
    img: '/blog3.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
  {
    img: '/blog4.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
  {
    img: '/blog5.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
  {
    img: '/blog6.png',
    date: '27 Jan 2021',
    title: 'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
    info: "See how pivoting to Webflow changed one person’s sales strategy and allowed him to attract",
    btn: "Read more",
},
]);
</script>

<template>
  <div class="flex justify-center">
    <div class="container md:pb-[128px] max-md:px-[5%]">

        <h2 class="text-blackBlue font-semibold text-3xl md:text-5xl text-center">Our Blog</h2>

      <div class="md:grid grid-cols-3 md:gap-x-8 md:gap-y-16 max-md:mb-8 mt-12 max-md:flex max-md:flex-wrap max-md:gap-4">
        <div
          v-for="(item, index) in data"
          :key="index"
          class=" text-blackBlue  max-md:shadow-md"
        >
          <img :src="item.img" alt="img" class="w-full" />
          <div class="mt-8 max-md:px-4 max-md:pb-4 text-blackBlue">
            <p class="font-medium">{{ item.date }}</p>
            <h6 class="text-2xl mt-4">{{ item.title }}</h6>
            <h3 class="mt-4">{{ item.info }}</h3>
            <div class=" mt-6">
              <button class="hover-underline-animation cursor-pointer font-medium">{{ item.btn }} &#8594;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>


.hover-underline-animation {
  position: relative;
  text-decoration: none;
}

.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  display: block;
  margin-top: 5px;
  right: 0;
  background: #282938;
  transition: width 0.3s ease;
}

.hover-underline-animation::after {
  background: #282938;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
}

</style>
