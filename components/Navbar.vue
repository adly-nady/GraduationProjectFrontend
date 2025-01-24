<template>
    <nav class="flex justify-between border border-gray-200 navBg !bg-white">
      <div class="w-[50%] flex mr-4 items-center gap-3 ">
        <div class="search w-[218px] h-[32px] !bg-[#d9d9d99f] flex justify-center border border-gray-200 rounded-lg items-center gap-2">
          <img src="@/assets/icons/Search.png" class="w-[23px] h-[23px] mr-2" alt="">
          <input type="text" class="!bg-[#e7dede5c] w-[200px] outline-none border-0 h-[30px] rounded-lg" placeholder="البحث">
        </div>
        <div class="relative" @click="toggleDropdown('menu')">
          <img src="@/assets/icons/menue.png" class="w-[30px] h-[30px]" alt="">
          <div v-if="dropdowns.menu" class="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Menu Item 1</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Menu Item 2</a>
          </div>
        </div>
        <div class="relative" @click="toggleDropdown('notification')">
          <img src="@/assets/icons/Notification.png" class="w-[30px] h-[30px]" alt="">
          <div v-if="dropdowns.notification" class="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Notification 1</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Notification 2</a>
          </div>
        </div>
        <div class="relative" @click="toggleDropdown('account')">
          <img src="@/assets/icons/Account.png" class="w-[30px] h-[30px]" alt="">
          <div v-if="dropdowns.account" class="absolute right-0 z-10 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</a>
            <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
          </div>
        </div>
      </div>
      <div class="logo pl-3">
        <img src="@/assets/icons/logo.png" class="w-[110px] h-[100%]" alt="">
      </div>
    </nav>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const dropdowns = ref({
    menu: false,
    notification: false,
    account: false,
  });
  
  function toggleDropdown(dropdown) {
    dropdowns.value[dropdown] = !dropdowns.value[dropdown];
  }
  </script>
  
  <style lang="sass" scoped>
  </style>