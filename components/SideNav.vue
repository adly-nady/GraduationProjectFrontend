<template>
  <aside class="sidebar  !h-[95%]  bottom-0 right-0 !z-50   lg:block bg-[#456a94] text-white w-20 text-center px-0 py-6 fixed">
    <ul class="menu flex flex-col  items-center justify-center gap-y-2 font-bold !w-[100%]">
      <li
        v-for="item in menuItems"
        :key="item.title"
        class="menu-item relative px-4 mb-2 flex flex-col !w-[100%] items-center gap-4 cursor-pointer group"
      >
        <div>
          <!-- Main Link -->
          <NuxtLink
            :to="item.route"
            class="flex  justify-center flex-col  items-center hover:bg-[#d9d9d921]"
            :class="{ 'bg-[#d9d9d921]': isActive(item.route) }"
          >
            <img class="w-5" :src="item.icon" alt="" srcset="">
            <span class="text-[12px]">{{ item.title }}</span>
          </NuxtLink>

          <!-- Dropdown -->
          <ul
            v-if="item.children"
            class="absolute top-0 right-[100%] bg-[#345575] text-white w-[150px] hidden rounded-md shadow-lg z-40 group-hover:block"
          >
            <li
              v-for="subItem in item.children"
              :key="subItem.title"
              class="px-4 py-2 text-start hover:bg-[#456a94] customeGroup"
            >
              <NuxtLink :to="subItem.route">{{ subItem.title }}</NuxtLink>
              <ul
                v-if="subItem.children"
                class="absolute right-[100%] hidden warhouseDrop hover:bg-[#456a94]  text-white w-[150px] rounded-md shadow-lg z-40"
              >
                <li
                  v-for="nestedItem in subItem.children"
                  :key="nestedItem.title"
                  class="px-4 py-2 text-start hover:bg-[#456a94] bg-[#345575]"
                >
                  <NuxtLink :to="nestedItem.route">{{ nestedItem.title }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </li>

      <div @click="toggleDropdown('menu')">
          <img src="@/assets/icons/sidebar/Slide Down.png"/>
      </div>
      <ul v-if="dropdowns.menu" class="bg-[#456a94] text-white py-7 mr-[0.5px] bottom-0  absolute !z-50 text-center  right-[100%] flex flex-col items-center justify-center gap-2 font-bold">
        <li
          v-for="dropdownItem in menuDropdownItems"
          :key="dropdownItem.title"
          class="menu-item relative px-4 mb-2 flex flex-col items-center gap-4 cursor-pointer group"
        >
        
        <NuxtLink
          :to="dropdownItem.route"
          class="flex justify-center flex-col items-center hover:bg-[#d9d9d921]"
          :class="{ 'bg-[#d9d9d921]': isActive(dropdownItem.route) }"
        >
        <img class="w-5" :src="dropdownItem.icon" alt="" srcset="">
          <span class="text-[12px]">{{ dropdownItem.title }}</span>
        </NuxtLink>

      
        
        </li>
        <div @click="toggleDropdown('menu')">
          <img src="@/assets/icons/sidebar/Slide Up.png"/>
        </div>
      </ul>
      
    </ul>
    
  </aside>
</template>


<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import Calculator from '../assets/icons/sidebar/Calculator.png';
import ControlPanel from '../assets/icons/sidebar/Control Panel.png';
import Electricity from '../assets/icons/sidebar/Electricity.png';
import FrontGateOpen from '../assets/icons/sidebar/Front Gate Open.png';
import Gears from '../assets/icons/sidebar/Gears.png';
import IceMaker from '../assets/icons/sidebar/Ice Maker.png';
import MineCart from '../assets/icons/sidebar/Mine Cart.png';
import OpticalMicroscope from '../assets/icons/sidebar/Optical Microscope.png';
import Scales from '../assets/icons/sidebar/Scales.png';
import Shipped from '../assets/icons/sidebar/Shipped.png';
import SlideDown from '../assets/icons/sidebar/Slide Down.png';
import SlideUp from '../assets/icons/sidebar/Slide Up.png';
import TotalSales from '../assets/icons/sidebar/Total Sales.png';
import UserGroups from '../assets/icons/sidebar/User Groups.png';
import Package from '../assets/icons/sidebar/Package.png';
import Basket from '../assets/icons/sidebar/Basket.png';
import DollarCoin from '../assets/icons/sidebar/Dollar Coin.png';





// Menu items, with dropdown submenus for specific items
const menuItems = ref([
  { title: "لوحه استلام", route: "/dashboard", icon: ControlPanel },
  { title: "قسم البوابه", route: "/dashboard", icon: FrontGateOpen },
  {title: "ميزان البسكول", route: "/products", icon: Scales,},
  { title: " المعمل", route: "/inventory", icon: OpticalMicroscope },
  { title: " المخازن", route: "/pricing", icon: Package ,
  children: [
      { title: "مخزن قطع غيار", route: "/products/subsection1" ,
      children: [
        { title: "انشاء اصناف", route: "/warhouses/loading" },
        { title: "انشاء تقرير", route: "/reports/makers/loading" },
        { title: "سجلات التقارير", route: "/warhouses/loading" },
    ],
       },
      { title: "مخزن تام", route: "/products/subsection2" ,
      children: [
        { title: "انشاء اصناف", route: "/warhouses/loading" },
        { title: "انشاء تقرير", route: "/reports/makers/loading" },
        { title: "سجلات التقارير", route: "/warhouses/loading" },
    ],
      },
      { title: "مخزن خيش", route: "/products/subsection2" ,
      children: [
        { title: "انشاء اصناف", route: "/warhouses/loading" },
        { title: "انشاء تقرير", route: "/reports/makers/loading" },
        { title: "سجلات التقارير", route: "/warhouses/loading" },
    ],
      },
    ],
  },
  { title: " الصوامع المعدنيه", route: "/purchases", icon: IceMaker },
  { title: " الصيانه", route: "/sales", icon: Gears },
  {title: " الكهرباء", route: "/departments", icon: Electricity,},
  { title: " الانتاج", route: "/warehouses" , icon: Basket},


]);

const menuDropdownItems = ref([
  { title: " المحاسبه", route: "/settings", icon: Calculator },
  { title: " المشتريات", route: "/logout", icon: DollarCoin },
  { title: " المبيعات", route: "/logout", icon: TotalSales },
  { title: " الموارد البشريه", route: "/logout", icon: UserGroups },
  { title: " التعبئه", route: "/settings", icon: MineCart },  
  { title: " التحميل", route: "/logout", icon: Shipped ,
  children: [
      { title: "انشاء اصناف", route: "/warhouses/loading" },
      { title: "انشاء تقرير", route: "/reports/makers/loading" },
      { title: "سجلات التقارير", route: "/warhouses/loading" },
    ],
  },
])
// Get the current route
const route = useRoute();

// Check if the route is active
const isActive = (path) => route.path === path;


const dropdowns = ref({
      menu: false,
    });
    
    function toggleDropdown(dropdown) {
      dropdowns.value[dropdown] = !dropdowns.value[dropdown];
    }
</script>

<style scoped>
.sidebar {
  background-color: #2b4058;
}

.menu-item {
  font-size: 16px;
}

.group:hover .dropdown {
  display: block;
}
.customeGroup:hover .warhouseDrop {
  display:block!important;
}
</style>