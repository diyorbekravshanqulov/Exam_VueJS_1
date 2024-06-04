<script setup>
import { ref } from "vue";

const menu = ref(["Home", "About us", "Pricing", "Work", "Blog"]);
const menu_hambur = ref([
  "Home",
  "About us",
  "Pricing",
  "Work",
  "Blog",
  "Contact us",
]);

const link = (index) => {
  if (index === 0) {
    return "/";
  } else if (index === 1) {
    return "/about";
  } else if (index === 2) {
    return "/pricing";
  } else if (index === 3) {
    return "/work";
  } else if (index === 4) {
    return "/blog";
  }
  return "/contact";
};

const hamburger = () => {
  const back = document.getElementById("back");
  const hambur = document.getElementById("hambur");

  // Toggle visibility of "back" element
  if (back.style.display === "none") {
    back.style.display = "block";
  } else {
    back.style.display = "none";
  }

  // Toggle visibility of "hambur" element
  if (hambur.style.display === "none") {
    hambur.style.display = "flex";
  } else {
    hambur.style.display = "none";
  }
};
</script>

<template>
  <div class="blurred-background flex px-[3%] md:py-[1%] py-[3%] w-full justify-between items-center fixed z-20">
    <a href="#"><img class="w-[80%]" src="../../public/logo.svg" alt="LOGO" /></a>
    <div class="flex gap-10 items-center">
      <router-link
        :to="link(index)"
        class="hidden md:block hover-underline-animation font-medium text-[16px] text-white"
        v-for="(item, index) in menu"
        :key="index"
        >{{ item }}</router-link
      >
      <router-link
        :to="link(5)"
        class="vibrate-button md:block hidden font-medium text-[16px] text-white md:px-10 md:py-[14px] py-[10px] px-6 rounded-[41px]"
      >
        Contact us
      </router-link>

      <button
        @click="hamburger()"
        class="md:hidden flex justify-center items-center text-5xl text-white mb-2 px-4"
      >
        &lt;<span class="text-3xl">|</span>
      </button>
    </div>
  </div>

  <div
    id="back"
    @click="hamburger()"
    class="menuBlur w-screen h-screen top-0 left-0 fixed z-60 hidden"
  ></div>
  <div
    id="hambur"
    class="w-[70%] hidden bg-blueBox right-0 px-[10%] flex-col gap-6 py-[10%] items-start fixed z-20 shadow-2xl shadow-[#1C1E53]"
  >
    <button
      @click="hamburger()"
      class="md:hidden flex justify-center items-center text-5xl text-white mb-2 "
    >
      <span class="text-2xl">|</span>&gt;
    </button>
    <router-link
      @click="hamburger()"
      :to="link(index)"
      class="md:block hover-underline-animation phone font-medium text-[16px] py-1 first:pt-3"
      v-for="(item, index) in menu_hambur"
      :key="index"
      >{{ item }}</router-link
    >
  </div>
</template>

<style scoped>
.blurred-background {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.menuBlur {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(15px);
}

.hover-underline-animation {
  position: relative;
  color: white;
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
  background: white;
  transition: width 0.3s ease;
}

.hover-underline-animation:hover::after {
  width: 100%;
  left: 0;
  background: white;
}

.phone::after {
  width: 100%;
}

.phone:hover::after {
  width: 0;
}

.vibrate-button {
  border: 2px solid rgba(244, 246, 252, 0.2);
  transition: border-color 0.3s ease;
  position: relative;
}

.vibrate-button:hover {
  border-color: white;
  animation: vibrate 0.3s linear infinite, rotate 0.3s linear infinite;
}

@keyframes vibrate {
  0% {
    transform: translate(0);
  }
  20% {
    transform: translate(-2px, -2px);
  }
  40% {
    transform: translate(2px, -2px);
  }
  60% {
    transform: translate(-2px, 2px);
  }
  80% {
    transform: translate(2px, 2px);
  }
  100% {
    transform: translate(0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(1deg);
  }
  100% {
    transform: rotate(0);
  }
}
</style>
