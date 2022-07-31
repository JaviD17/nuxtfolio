<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="avatar">
        <div class="widthPro mask mask-hexagon">
          <img src="/images/profile.jpg" />
        </div>
      </div>
      <!-- Container next to mask-hexagon -->
      <div class="mr-10">
        <Hero />
        <NuxtLink to="/about" class="btn btn-primary mt-4">
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
</template>

<style>
.name {
  color: #ff79c6;
}
.skills {
  color: #ffb86b;
}
.skill-item {
  margin-top: 10px;
}
.widthPro {
  width: 30rem;
}
.icons {
  color: #424458;
}
</style>
