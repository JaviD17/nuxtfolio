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
        <h1 class="text-5xl font-bold">
          Hi there! I'm <span class="name">Javi Dominguez</span>
        </h1>
        <h2 class="mt-4 name text-4xl font-bold">Full Stack Web Developer</h2>
        <h3 class="mt-4 text-xl">
          With an interest in Finance and Economics and utilizing Web
          Development as a tool to communicate and display vital data or
          information. My current Front End Stack:
        </h3>
        <ul class="mt-4 skills font-bold ml-4">
          <li class="skill-item"><p>Nuxt 3</p></li>
          <li class="skill-item"><p>Vue 3</p></li>
          <li class="skill-item"><p>Daisy UI</p></li>
        </ul>
        <button class="btn btn-primary mt-4">
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
        </button>
        <div class="mt-4 btn-group">
          <a
            href="https://github.com/JaviD17"
            class="btn btn-lg btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="40"
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
          <a
            href="https://www.linkedin.com/in/javier-dominguez-ii/"
            class="btn btn-lg btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="40"
              fill="currentColor"
            >
              <path
                d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z"
              ></path>
              <path
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
              ></path>
            </svg>
          </a>
          <a
            href="https://twitter.com/Dominguez17Javi"
            class="btn btn-lg btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="-2 -2 24 24"
              width="40"
              fill="currentColor"
            >
              <path
                d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z"
              ></path>
              <path
                d="M15 6.947c-.368.16-.763.27-1.178.318.424-.25.748-.646.902-1.117-.398.231-.836.4-1.304.49A2.06 2.06 0 0 0 11.923 6c-1.133 0-2.051.905-2.051 2.02 0 .158.018.312.053.46a5.854 5.854 0 0 1-4.228-2.11 1.982 1.982 0 0 0-.278 1.015c0 .7.363 1.32.913 1.681a2.076 2.076 0 0 1-.93-.253v.025a2.03 2.03 0 0 0 1.646 1.98 2.108 2.108 0 0 1-.927.034 2.049 2.049 0 0 0 1.916 1.403 4.156 4.156 0 0 1-2.548.864c-.165 0-.328-.01-.489-.028A5.863 5.863 0 0 0 8.144 14c3.774 0 5.837-3.078 5.837-5.748l-.007-.262A4.063 4.063 0 0 0 15 6.947z"
              ></path>
            </svg>
          </a>
        </div>
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
