<template>
  <div>
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <div class="avatar">
          <div class="w-48 lg:w-96 mask mask-hexagon">
            <img src="/assets/images/profile.jpg" />
          </div>
        </div>
        <!-- Container next to mask-hexagon -->
        <div class="mr-10">
          <Hero />
          <NuxtLink to="/about" class="btn btn-outline btn-primary my-4">
            About Me
            <span
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-5 -4.5 24 24"
                width="21"
                fill="currentColor"
              >
                <path
                  d="M8 11.243l3.95-3.95a1 1 0 1 1 1.414 1.414l-5.657 5.657a.997.997 0 0 1-1.414 0L.636 8.707A1 1 0 1 1 2.05 7.293L6 11.243V1.657a1 1 0 1 1 2 0v9.586z"
                ></path></svg
            ></span>
          </NuxtLink>
          <SocialGroup />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style>
.skill-item {
  margin-top: 10px;
}
</style>
