<template>
  <div class="navbar bg-base-100">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><a>Home</a></li>
          <li tabindex="0">
            <a class="justify-between">
              Portfolio
              <svg
                class="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"
                />
              </svg>
            </a>
            <ul class="p-2">
              <li><a>Github</a></li>
              <li><a>LinkedIn</a></li>
            </ul>
          </li>
          <li><a>About</a></li>
        </ul>
      </div>
      <a class="btn btn-ghost normal-case text-2xl font-bold name"
        ><span
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-4 -2 24 24"
            width="24"
            fill="currentColor"
          >
            <path
              d="M3 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm1-7.002v3.173a3.001 3.001 0 1 1-2 0V5.829a3.001 3.001 0 1 1 2 0v2.34c.312-.11.647-.17.997-.171l6.037-.006a1 1 0 0 0 .999-1V5.84A3.001 3.001 0 0 1 13 0a3 3 0 0 1 1.033 5.817v1.175a3 3 0 0 1-2.997 3l-6.037.006a1 1 0 0 0-.999 1zM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
            ></path></svg></span
        >Javi</a
      >
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Skills</a></li>
        <li><a>Education</a></li>
        <li><a>Work</a></li>
        <li><a>Portfolio</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div class="navbar-end">
      <!-- <a class="btn">Contact</a> -->
    </div>
  </div>
</template>

<script setup></script>

<style></style>
