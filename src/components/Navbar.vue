<script setup>
import { ref } from "vue";

const menu = ref(["Home", "About us", "Pricing", "Work", "Blog"]);

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
  return "contact"
};
</script>

<template>
  <div
    class="blurred-background flex px-[3%] md:py-[1%] py-[3%] w-full justify-between items-center fixed z-20"
  >
    <a href="#"
      ><img class="w-[80%]" src="../../public/logo.svg" alt="LOGO"
    /></a>
    <div class="flex gap-10 items-center">
      <router-link
        :to="link(index)"
        class="hidden md:block hover-underline-animation font-medium text-[16px] text-white"
        v-for="(item, index) in menu"
        :key="index"
        href="#"
        >{{ item }}</router-link
      >
      <router-link :to="link(5)"
        class="vibrate-button font-medium text-[16px] text-white md:px-10 md:py-[14px] py-[10px] px-6 rounded-[41px]"
      >
        Contact us
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.blurred-background {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px); /* Adjust the blur value as needed */
  -webkit-backdrop-filter: blur(15px); /* For Safari support */
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

.vibrate-rotate-button {
  background: rgba(252, 217, 128, 1);
  transition: background-color 0.3s ease;
  position: relative;
}

.vibrate-rotate-button:hover {
  background-color: rgba(252, 217, 128, 0.8); /* Adjust this color as needed */
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
