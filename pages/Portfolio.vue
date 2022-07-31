<template>
  <div>
    <div class="bg-base-200 min-h-screen">
      <div class="pt-8"><h1 class="title">Portfolio</h1></div>
      <div class="divider w-96 mx-auto"></div>
      <!-- flex container -->
      <div class="flex flex-wrap">
        <div class="card glass w-96 bg-base-100 shadow-xl mx-auto my-8">
          <figure class="px-10 pt-10">
            <img src="assets/images/Nuxtfolio.png" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl font-bold text-secondary">Role</h2>
            <p>Full Stack Developer</p>
            <h2 class="card-title text-xl font-bold text-secondary">
              Framework Used
            </h2>
            <p>Nuxt 3 with Typescript</p>
            <h2 class="card-title text-xl font-bold text-secondary">
              Deployment
            </h2>
            <p>Firebase</p>
            <div class="card-actions mt-2">
              <a
                href="https://github.com/JaviD17/nuxtfolio"
                class="btn btn-outline btn-primary"
                >Go To Repo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-2 -2 24 24"
                  width="21"
                  fill="currentColor"
                >
                  <path
                    d="M8.18 15.008c.12 0 .211-.004.271-.012a.317.317 0 0 0 .18-.107c.06-.063.09-.154.09-.274l-.004-.557c-.003-.355-.004-.637-.004-.844l-.188.033a2.41 2.41 0 0 1-.455.028 3.498 3.498 0 0 1-.57-.057 1.276 1.276 0 0 1-.548-.246 1.04 1.04 0 0 1-.36-.503l-.082-.189a2.046 2.046 0 0 0-.258-.417.989.989 0 0 0-.357-.312l-.057-.04a.602.602 0 0 1-.106-.1.455.455 0 0 1-.074-.114c-.016-.038-.003-.07.04-.094a.533.533 0 0 1 .238-.037l.164.025c.11.021.245.087.406.196.16.11.293.251.397.426.126.224.277.395.455.512a.964.964 0 0 0 .536.176c.18 0 .336-.013.467-.04a1.63 1.63 0 0 0 .369-.124c.049-.365.182-.647.4-.843a5.61 5.61 0 0 1-.839-.148 3.346 3.346 0 0 1-.77-.32 2.204 2.204 0 0 1-.66-.548c-.174-.219-.317-.505-.43-.86a4.09 4.09 0 0 1-.167-1.229c0-.66.216-1.223.647-1.687-.202-.497-.183-1.054.057-1.671.159-.05.394-.013.705.11.311.123.54.228.684.316.145.087.26.16.348.22a5.814 5.814 0 0 1 1.573-.212c.54 0 1.065.07 1.573.213l.31-.197c.214-.13.465-.251.754-.36.29-.11.511-.14.664-.09.246.617.268 1.174.065 1.67.432.465.648 1.027.648 1.688 0 .464-.056.875-.168 1.233-.112.358-.257.644-.434.86a2.29 2.29 0 0 1-.664.545 3.342 3.342 0 0 1-.77.32 5.605 5.605 0 0 1-.84.147c.284.245.426.633.426 1.163v1.957c0 .093.014.168.041.226a.226.226 0 0 0 .131.119c.06.021.114.035.16.04.047.006.113.009.2.009h-1.966-2.227z"
                  ></path>
                  <path
                    d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- <div class="card glass w-96 bg-base-100 shadow-xl mx-auto my-8">
          <figure class="px-10 pt-10">
            <img src="/images/Nuxtfolio.png" alt="Shoes" class="rounded-xl" />
          </figure>
          <div class="card-body items-center text-center">
            <h2 class="card-title text-xl font-bold text-secondary">Role</h2>
            <p>Full Stack Developer</p>
            <h2 class="card-title text-xl font-bold text-secondary">
              Industry
            </h2>
            <p>Web Development</p>
            <h2 class="card-title text-xl font-bold text-secondary">
              Framework Used
            </h2>
            <p>Nuxt 3 with Typescript</p>
            <div class="card-actions mt-2">
              <a
                href="https://www.arrivelogistics.com/"
                class="btn btn-outline btn-primary"
                >Learn More<svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-6 -6.5 24 24"
                  width="21"
                  fill="currentColor"
                >
                  <path
                    d="M7.828 2.414H2.243a1 1 0 1 1 0-2h8a.997.997 0 0 1 1 1v8a1 1 0 0 1-2 0V3.828l-6.779 6.779A1 1 0 0 1 1.05 9.192l6.778-6.778z"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div> -->
      </div>
    </div>
    <Footer />
  </div>
</template>
