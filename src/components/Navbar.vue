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
  return "contact";
};

const hamburger = () => {
  const back = document.getElementById("back");
  const hambur = document.getElementById("hambur");
  const hamburger = document.getElementById("hamburger");
  const left = document.getElementById("left");
  const hamMenu = document.getElementById("hamMenu");

  if (back.style.display === "none") {
    hamMenu.style.background = "#1C1E53";
    back.style.display = "block";
  } else {
    back.style.display = "none";
    hamMenu.style.background = "rgba(28, 30, 83, 0.8)";
    hamMenu.style.backdropFilter = "blur(30px)";
    hamMenu.style.webkitBackdropFilter = "blur(30px)";
  }

  if (hambur.style.right == "-100%") {
    // hambur.style.display = "flex";
    hambur.style.right = "0px";
    hamburger.style.display = "none";
    left.style.display = "block";
  } else {
    hambur.style.right = "-100%";
    // hambur.style.display = "none";
    hamburger.style.display = "block";
    left.style.display = "none";
  }
};
</script>

<template>
  <div class="bg-[#1C1E53] fixed w-full z-40">
    <div
      id="hamMenu"
      class="container max-md:py-5 text-white flex md:py-[1%] w-full justify-between items-center"
    >
      <a href="#"><img class="w-[80%]" src="/img/Logo.svg" alt="LOGO" /></a>
      <div class="flex gap-10 items-center">
        <router-link
          :to="link(index)"
          class="hidden md:block anime font-medium text-[16px] text-white"
          v-for="(item, index) in menu"
          :key="index"
          href="#"
          >{{ item }}</router-link
        >
        <router-link
          :to="link(5)"
          class="border-white/20 hidden md:block hover:border-white border-2 py-4 px-12 rounded-full cursor-pointer"
        >
          Contact us
        </router-link>

        <div class="md:hidden">
          <button
            id="hamburger"
            @click="hamburger()"
            class="flex justify-center items-center text-5xl text-white mb-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <defs>
                <mask id="ipSLeftC0">
                  <g fill="none" stroke-linejoin="round" stroke-width="4">
                    <path
                      fill="#fff"
                      stroke="#fff"
                      d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z"
                    />
                    <path
                      stroke="#000"
                      stroke-linecap="round"
                      d="m27 33l-9-9l9-9"
                    />
                  </g>
                </mask>
              </defs>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSLeftC0)"
              />
            </svg>
          </button>
          <button
            id="left"
            @click="hamburger()"
            class="hidden duration-150 justify-center items-center text-5xl text-white mb-2 px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 1024 1024"
            >
              <path
                fill="currentColor"
                d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512L421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div
    id="back"
    @click="hamburger()"
    class="w-screen h-screen hidden menuBlur right-0 top-0 fixed z-20"
  ></div>

  <div
    id="hambur"
    class="w-[65%] flex -right-full duration-700 bg-[#1C1E53]/70 px-[10%] flex-col gap-6 py-[30%] h-screen items-start fixed z-30 shadow-2xl shadow-[#1C1E53]"
  >
    <router-link
      @click="hamburger()"
      :to="link(index)"
      class="md:block hover-underline-animation phone font-medium text-xl py-1 first:pt-3"
      v-for="(item, index) in menu_hambur"
      :key="index"
      href="#"
      >{{ item }}</router-link
    >
  </div>
</template>

<style scoped>
.blurred-background {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(15px); /* Adjust the blur value as needed */
  -webkit-backdrop-filter: blur(15px);
}

@media (max-width: 768px) {
  .blurred-background {
    background: rgba(28, 30, 83, 0.8);
    backdrop-filter: blur(30px); /* Adjust the blur value as needed */
    -webkit-backdrop-filter: blur(30px);
  }
}

.menuBlur {
  background: rgba(28, 30, 83, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
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

.anime {
  position: relative;
  color: #bbbbcb;
  text-decoration: none;
}

.anime:hover {
  color: #fff;
}

.anime::before {
  content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.anime:hover::before {
  transform: scaleX(1);
}
</style>
