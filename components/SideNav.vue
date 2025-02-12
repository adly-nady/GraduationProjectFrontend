<template>
  <aside class="sidebar  !h-[95%]  bottom-0 right-0 !z-50   lg:block bg-[#456a94] text-white w-20 text-center px-0 py-6 fixed">
    <ul class="menu flex flex-col  items-center justify-evenly h-[100%]  font-bold !w-[100%]">
      <li
        v-for="item in menuItems"
        :key="item.title"
        class="menu-item relative px-4 mb-2 flex flex-col !w-[100%] items-center gap-4 cursor-pointer group"
      >
        <div>
          <!-- Main Link -->
          <NuxtLink
            :to="item.route || ''"
            :disabled="item.route"
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
              class="px-4 py-2 relative text-start hover:rounded-md rounded-md hover:bg-[#456a94] customeGroup"
            >
              <NuxtLink :to="subItem.route">{{ subItem.title }}</NuxtLink>
              <ul
                v-if="subItem.children"
                class="absolute right-[100%] top-0 hidden warhouseDrop hover:bg-[#456a94]  text-white w-[150px] rounded-md shadow-lg z-40"
              >
                <li
                  v-for="nestedItem in subItem.children"
                  :key="nestedItem.title"
                  class="px-4 py-2 text-start hover:rounded-md hover:bg-[#456a94] bg-[#345575]"
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
          <ul
            v-if="dropdownItem.children"
            class="absolute top-0 right-[100%] bg-[#345575] text-white w-[150px] hidden rounded-md shadow-lg z-40 group-hover:block"
          >
            <li
                v-for="subDropdownItem in dropdownItem.children"
                :key="subDropdownItem.title"
                class="px-4 py-2 text-start hover:rounded-md hover:bg-[#456a94] customeGroup"
            >
            <NuxtLink :to="subDropdownItem.route">{{ subDropdownItem.title }}</NuxtLink>
            <ul
                v-if="subDropdownItem.children"
                class="absolute right-[100%] hidden warhouseDrop hover:bg-[#456a94]  text-white w-[150px] rounded-md shadow-lg z-40"
              >
                <li
                  v-for="nestedItem in subDropdownItem.children"
                  :key="nestedItem.title"
                  class="px-4 py-2 text-start hover:rounded-md hover:bg-[#456a94] bg-[#345575]"
                >
                  <NuxtLink :to="nestedItem.route">{{ nestedItem.title }}</NuxtLink>
                </li>
              </ul>
            </li>
        </ul>
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
  { title: "لوحه استلام", route: null ,icon: ControlPanel },
  { title: "قسم البوابه", route:null , icon: FrontGateOpen  },
  {title: "ميزان البسكول", route:null, icon: Scales,},
  { title: " المعمل", route: null, icon: OpticalMicroscope ,
  children: [
  { title: "انشاء تقارير", route: "/warhouses/lap/createreport" },
        { title: "المعمل 1", route: "/warhouses/lap/lapWarhouse" },
        { title: "المعمل 2", route: "/warhouses/lap/lapWarhouse2" },
        { title: "المعمل 4", route: "/warhouses/lap/lapWarhouse3" },
        { title: "المعمل 5", route: "/warhouses/lap/lapWarhouse4" },
    ],
   },
  { title: " المخازن", route: null, icon: Package ,
  children: [
      { title: "مخزن قطع غيار", route: "/warhouses/spareParts/createReport" ,
      children: [
        { title: "اضافة اصناف", route: "/warhouses/spareParts/addProduct" },
        { title: "انشاء تقرير", route: "/warhouses/spareParts/createReport" },
        { title: "سجلات التقارير", route: "/warhouses/spareParts/reportRecords" },
    ],
       },
      { title: "مخزن تام", route: "/warhouses/packagingAndTotalStores/createReport" ,
      children: [
        { title: "انشاء تقرير", route: "/warhouses/packagingAndTotalStores/createReport" },
        { title: "سجلات التقارير", route: "/warhouses/packagingAndTotalStores/reportRecords" },
    ],
      },
      { title: "مخزن خيش", route: "/warhouses/burlap/createReport" ,
      children: [
        { title: "اضافة اصناف", route: "/warhouses/burlap/addProduct" },
        { title: "انشاء تقرير", route: "/warhouses/burlap/createReport" },
        { title: "سجلات التقارير", route: "/warhouses/burlap/reportRecords" },
    ],
      },
    ],
  },
  { title: " الصوامع المعدنيه", route: null, icon: IceMaker },
  { title: " الصيانه", route: null, icon: Gears },
  {title: " الكهرباء", route: null, icon: Electricity,},
  { title: " الانتاج", route: null , icon: Basket},


]);

const menuDropdownItems = ref([
  { title: " المحاسبه", route: "/settings", icon: Calculator },
  { title: " المشتريات", route: "/logout", icon: DollarCoin },
  { title: " المبيعات", route: "/logout", icon: TotalSales },
  { title: " الموارد البشريه", route: "/logout", icon: UserGroups },
  { title: " التعبئه", route: "/settings", icon: MineCart ,
  children: [
        { title: "انشاء تقرير", route: "/warhouses/packagingAndTotalStores/createReport" },
        { title: "سجلات التقارير", route: "/warhouses/packagingAndTotalStores/reportRecords" },
    ],
  },  
  { title: " التحميل", route: "/loadingSection/createReport", icon: Shipped ,
  children: [
      { title: "انشاء تقرير", route: "/loadingSection/createReport" },
      { title: "سجلات التقارير", route: "/loadingSection/reportRecords" },
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