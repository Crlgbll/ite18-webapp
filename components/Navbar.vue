<link rel="stylesheet" href="../static/fontawesome-free-6.4.0-web/css/all.min.css"></link>
<template>
  
  <div class="h-14 w-full bg-teal-300 flex justify-around">
    <div class="h-14 w-60 flex items-center">
      <img class="h-14 w-14" src="../assets/images/recipedia-logo.png" alt="" />
      <h1 class="font-pops text-2xl font-bold">
        <span class="text-blue-700">RECIPE</span>DIA
      </h1>
    </div>
      <div class="h-14 w-1/4  items-center font-bold">
      <ul class="flex py-3 justify-end text-base">
        <div class=" h-10 w-36 justify-between space-x-2">
          <button class="hover:text-violet-700 duration-300">
            <li>Login</li>
          </button>
          <nuxt-link to="signup">
          <button class="hover:text-violet-700 duration-300 border-2 border-violet-500 outline-2 rounded-md px-2">
            <li>Sign Up</li>
          </button>
          </nuxt-link>
        </div>
      </ul>
    </div>
  </div>
</template>
