  <template>
   
    <nav class="flex justify-between px-3  border-gray-200 navBg !bg-white">
        <div class="relative hidden lg:block lg:flex lg:items-center">
        <input
          type="text"
          placeholder="البحث"
          class="w-full px-10 py-[2.5px] placeholder:text-gray-500 border bg-[#E7E7E7] rounded-md  focus:outline-gray-300"
        />
        <img
          src="@/assets/icons/navbar/Search.png"
          alt="icon"
          class="absolute right-1 top-[1.05rem] w-8 pointer-events-none"
        />
    

        <div class="relative mr-4" @click="toggleDropdown('menu')">
          <img src="@/assets/icons/navbar/settings/Settings.png" class="w-9 rounded-md cursor-pointer p-1 bg-[#999999]" alt="">
          <div v-if="dropdowns.menu" class="absolute z-10 p-3 right-0 mt-2 w-60 bg-transparent backdrop-blur-md border border-gray-200 rounded-lg shadow-lg">
            <p class="font-bold">الاعدادات</p>
            <div class="mb-3 px-2">
              <a class="flex items-center justify-between hover:shadow-lg rounded-md">
                <div class="flex items-center gap-x-2">
                  <img src="@/assets/icons/navbar/settings/Language.png"/>
                  <span>اللغة</span>
                </div>
                <img src="@/assets/icons/navbar/Back.png"/>
              </a>
              <a class="flex items-center gap-x-2 hover:shadow-lg rounded-md">
                <img src="@/assets/icons/navbar/settings/Password.png"/>
                <span>تعديل الامان</span>
              </a>
              <a class="flex items-center gap-x-2 hover:shadow-lg rounded-md">
                <img src="@/assets/icons/navbar/settings/Checklist.png"/>
                <span>عرض اخر الاحداث</span>
              </a>
            </div>
            <p class="font-bold">السطوع</p>
            <div class="px-2">
              <a class="flex items-center gap-x-2 hover:shadow-lg rounded-md">
                <img src="@/assets/icons/navbar/settings/Sun.png"/>
                <span>Light Mood</span>
              </a>
              <a class="flex items-center gap-x-2 hover:shadow-lg rounded-md">
                <img src="@/assets/icons/navbar/settings/New Moon.png"/>
                <span>Night Mood</span>
              </a>
            </div>
            <a class="my-2 flex items-center justify-center border rounded-3xl bg-red-700">
              <img class="w-6" src="@/assets/icons/navbar/settings/Logout.png"/>
              <span class="text-white">تسجيل الخروج</span>
            </a>
          </div>
        </div>

        <div class="relative mr-2" @click="toggleDropdown('notification')">
          <img src="@/assets/icons/navbar/Notification.png" class="w-9 rounded-md cursor-pointer p-1 bg-[#999999]" alt="">
          <div v-if="dropdowns.notification" class="absolute z-10 p-3 right-0 mt-2 w-[23rem] bg-transparent backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg">
            <div class="flex items-center justify-between mb-3"> 
              <span class="font-bold">جميع الاشعارات</span>
              <img src="@/assets/icons/navbar/Back.png"/>
            </div>
            <div class="border-b-[1px] border-gray-300 pb-1">
              <div class="mb-3 px-2 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-white font-bold bg-purple-500 rounded-full py-[3px] px-2">M</span>
                <div>
                  <p class="">اسم القسم</p>
                  <p class="text-[0.75rem]">اسم التقرير (رقم التقرير) الحالة</p>
                </div>
              </div>
              <button class="rounded-3xl bg-sky-400 text-white py-1.5 px-4">قبول</button>
            </div>

            <div class="mb-3 pl-2 pr-5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-white text-sm font-bold bg-sky-400 rounded-full py-[1px] px-1.5">A</span>
                  <p class="text-[0.7rem] text-gray-500 ">معتمد من: عدلي . الان</p>
              </div>
              <button class="rounded-3xl border border-black text-black py-1 px-4">عرض</button>
            </div>
            </div>
            <div class="pt-3">
              <div class="mb-3 px-2 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-white font-bold bg-green-500 rounded-full py-[3px] px-2">M</span>
                  <p class=""> 3 تعليقات جديدة من محمود في تطبيق الهاتف المحمول</p>
              </div>
              <button class="rounded-3xl bg-sky-400 text-white py-1.5 px-4">عرض</button>
            </div>

            <div class="mb-3 pl-2 pr-5 flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="text-white text-sm font-bold bg-sky-400 rounded-full py-[1px] px-1.5">A</span>
                  <p class="text-[0.7rem] text-gray-500 "> فريق عدلي . 14ابريل 2025</p>
              </div>
            </div>
            </div>
            
          </div>
        </div>

        <div class="relative mr-2" @click="toggleDropdown('account')">
          <img src="@/assets/icons/navbar/profile/Customer.png" class="w-9 rounded-md cursor-pointer p-1 bg-[#999999]" alt="">
          <div v-if="dropdowns.account" class="absolute z-10 p-3 right-0 mt-2 w-60 bg-transparent backdrop-blur-sm border border-gray-200 rounded-lg shadow-lg">
            <div class="flex items-center justify-between mb-3"> 
              <span class="font-bold">الملفات الشخصيه</span>
              <img src="@/assets/icons/navbar/Back.png"/>
            </div>
            <div class="mb-3 px-2">
              <a class="flex items-center justify-between hover:shadow-lg rounded-md">
                <div class="flex items-center gap-x-2">
                  <img src="@/assets/icons/navbar/profile/Account.png"/>
                  <span>الملف الشخصي</span>
                </div>
              </a>
              <a class="flex items-center gap-x-2 hover:shadow-lg rounded-md">
                <img src="@/assets/icons/navbar/profile/Add Folder.png"/>
                <span>اعداد ملف شخصي جديد</span>
              </a>
            </div>
          </div>
        </div>
      </div>
        <div class="logo">
           <img src="@/assets/icons/navbar/logo.png" class="w-[110px] h-[100%]" alt="">
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
      
        for (const key in dropdowns.value) {
          if (key === dropdown) {
            dropdowns.value[key] = !dropdowns.value[key];
          } else {
            dropdowns.value[key] = false;
          }
        }
       
      
    }
    </script>
    
    <style lang="sass" scoped>
        </style>


