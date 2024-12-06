<template>
  <aside class="sidebar hidden lg:block bg-[#456a94] text-white w-[5%] text-center overflow-scroll scrollbar-none p-4 h-screen fixed">
    <ul class="menu w-full flex flex-col items-center justify-center gap-2 font-bold">
      <li
        v-for="item in menuItems"
        :key="item.title"
        :class="[
          'menu-item px-4 flex items-center gap-4 cursor-pointer hover:bg-[#d9d9d921]',
          { 'bg-[#d9d9d921]': isActive(item.route) },
        ]"
      >
        <NuxtLink :to="item.route" class="flex justify-center flex-col items-center ">
          <img class="w-[31px] h-[30px]" :src="item.icon" alt="" srcset="">
          <span class="text-[12px]">{{ item.title }}</span>
        </NuxtLink>
      </li>
    </ul>
  </aside>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import basket from '../assets/icons/sidebar/Basket.png';
import booking from '../assets/icons/sidebar/Booking.png';
import Edit from '../assets/icons/sidebar/Edit File.png';
import Dollar from '../assets/icons/sidebar/Dollar Coin.png';
import Cart from '../assets/icons/sidebar/Shopping Cart.png';
import Sale from '../assets/icons/sidebar/Season Sale.png';
import Menu from '../assets/icons/sidebar/Menu Squared.png';
import Gear from '../assets/icons/sidebar/Gear.png';
import Package from '../assets/icons/sidebar/Package.png';
import Logout from '../assets/icons/sidebar/Logout.png';
// Sidebar menu items
const menuItems = ref([
  { title: "لوحة الاستلام", route: "/dashboard", icon: booking },
  { title: "منتجات", route: "/products", icon: basket },
  { title: "تعديل المخزون", route: "/inventory", icon: Edit },
  { title: "عرض الأسعار", route: "/pricing", icon: Dollar },
  { title: "المشتريات", route: "/purchases", icon: Cart },
  { title: "مبيعات", route: "/sales", icon: Sale },
  { title: "التقارير", route: "/departments", icon: Menu },
  { title: "المخازن", route: "/warehouses", icon: Package },
  { title: "الإعدادات", route: "/settings", icon: Gear },
  { title: "خروج", route: "/logout", icon: Logout },
]);

// Get the current route
const route = useRoute();

// Check if the route is active
const isActive = (path) => route.path === path;
</script>

<style scoped>
.sidebar {
  background-color: #2b4058;
}
.menu-item {
  font-size: 16px;
}

</style>
