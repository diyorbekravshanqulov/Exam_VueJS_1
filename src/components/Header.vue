<template>
  <div class="temp bg-[#1C1E53] flex justify-center">
    <div class="container  max-md:px-[5%] flex flex-wrap relative">
      <div
        class="md:mb-[6%] md:mt-[12%] mb-[14%] mt-[30%] w-full flex md:flex-nowrap flex-wrap gap-[10%] items-center"
      >
        <div class="flex flex-wrap md:mb-0 mb-[20%]">
          <h1
            class="text-white md:text-start text-center font-semibold md:text-[54px] text-2xl md:leading-[74px] leading-[55px]"
          >
            Building stellar websites for early startups
          </h1>
          <p
            class="text-white md:text-start text-center mt-6 text-[14px] md:text-[16px] font-medium"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div class="flex items-center max-md:justify-between max-md:w-full max-md:px-12 mt-12 md:gap-10">
            <button
              class="vibrate-rotate-button rounded-[41px] md:px-12 md:py-4 px-6 py-3 md:text-[18px] text-[14px] font-semibold"
            >
              View our work
            </button>
            <router-link to="/pricing"
              class="hover-underline-animation md:text-[16px] text-[14px] font-medium"
              style="color: rgba(255, 255, 255, 1)"
              >View Pricing &#8594;</router-link
            >
          </div>
        </div>
        <img src="../../public/main_pic.svg" alt="" />
      </div>
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
