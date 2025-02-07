<!-- <template>
    <div  -->
        <!-- class="fixed  inset-0 w-[100%] bg-[#D9D9D9] bg-opacity-80 flex justify-around overflow-scroll  lg:justify-center  items-center z-50"> -->
        <!-- Popup Container -->
        <!-- <div class="bg-white w-[90%] md:w-[70%]  p-6  shadow-lg relative"> -->
            <!-- Header -->
            <!-- <div class="flex flex-wrap justify-between w-full items-center"> -->
                <!-- Icons Row for Desktop -->
                <!-- <div class="hidden md:flex items-center w-[33%] justify-start gap-1">
                    <!-- Exit Button -->
                    <!-- <button @click="closePopup"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <img :src="exit" alt="Exit" class="w-6 " />
                    </button> -->
                    <!-- Print Button -->
                    <!-- <button @click="handleSquare"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <img :src="square" alt="Square" class="w-8" />
                    </button> -->
                    <!-- Email Button -->
                    <!-- <button @click="handleEmail"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <span class="w-4 h-1 bg-white"></span>
                    </button> -->
                    <!-- PDF Button -->
                <!-- </div>  -->
                <!-- Save Button -->
                <!-- <div class="w-[50%] lg:w-[33%] flex justify-end items-center">
                    <ButtonsSave />
                </div>
            </div>
            <div class="w-full mt-3">
                <div class="flex w-full justify-end gap-5 items- ">
                    <div class="self-end">
                        <input type="text" class="border border-black py-1 px-3">
                    </div>
                    <div class="flex items-center justify-center  border border-gray-400 py-1 px-6 bg-[#F7F7F7] self-start relative bottom-8 mx-10">
                        <img :src="clock" alt="Clock">
                        <p class="mr-3">00:00:00</p>
                    </div>
                    <div class="self-start">
                        <p>/ اختر نوع البحث</p>
                        <p> Select Type Of Search /</p>
                    </div>
                    <div class="self-start">
                        <p>من التاريخ إلى التاريخ</p>
                        <p class="border border-black py-1 px-3 mt-1">From Date To Date </p>
                    </div>
                </div>
                <div class="flex w-full justify-end gap-52 mt-2">
                    <div class="flex gap-4 ml-2">
                        <p class="mt-2">تصدير وإرسال</p>
                    <div> 
                        <p class="border border-gray-400  py-1 px-10 bg-[#F7F7F7]">Export and send</p>
                    </div>
                    </div>
                    <div class="flex gap-4">
                        <p class="mt-2">Type Here /</p>
                    <div class="text-center">
                        <input type="date" class="border border-black py-1 px-3">
                        <p>To:</p>
                    </div>
                    <div class="text-center">
                        <input type="date" class="border border-black py-1 px-3">
                        <p>From:</p>
                    </div>
                    </div>

                </div>
                    <!-- <div>
                        <p>من التاريخ إلى التاريخ</p>
                        <p>From Date To Date </p>
                        <input type="date">
                    </div>
                    <div>
                        <p>/ اختر نوع البحث</p>
                        <p>/ Select Type Of Search</p>
                        <input type="date">
                    </div>
                    <div class="flex items-center justify-center">
                        <img :src="clock" alt="Clock">
                        <p>00:00:00</p>
                    </div> -->
            <!-- </div>
            <div class="bg-[#F7F7F7] border border-black mt-5">
                <div class="border border-black w-[97%] mx-auto my-3 px-4">
                    <div class="mt-3">
                        <p class="text-center font-bold text-lg">سجل الأقماح الواردة</p>
                    </div>
                    <div class="flex justify-between relative bottom-7">
                        <p class="self-end">تاريخ اليوم </p>
                        <div >
                            <img :src="logo" alt="Logo" class="w-36 mr-auto">
                            <p>Subject / Incoming Wheat</p>
                        </div>
                    </div>
                </div>
                <table class="border-collapse border-black w-[97%] mx-auto mb-3 mt-6 px-4">
                    <thead>
                        <tr>
                            <th class="border border-black font-normal px-1 py-5" rowspan="2">الساعة</th>
                            <th class="border border-black font-normal" rowspan="2">رقم السيارة</th>
                            <th class="border border-black font-normal" colspan="2">الكمية</th>
                            <th class="border border-black font-normal" rowspan="2">الوزن النوعي</th>
                            <th class="border border-black font-normal" rowspan="2">الرطوبة %</th>
                            <th class="border border-black font-normal" rowspan="2">وزن 1000حبه</th>
                            <th class="border border-black font-normal" rowspan="2">الجولتين الرطب</th>
                            <th class="border border-black font-normal" rowspan="2">الجولتين الجاف</th>
                            <th class="border border-black font-normal px-1" rowspan="2">الأندكس</th>
                            <th class="border border-black font-normal" rowspan="2">رقم السقوط</th>
                            <th class="border border-black font-normal px-1" rowspan="2">النظافة</th>
                            <th class="border border-black font-normal" rowspan="2">نوع القمح</th>
                            <th class="border border-black font-normal" rowspan="2">اسم المورد</th>
                            <th class="border border-black font-normal px-1" rowspan="2">الملاحظات</th>
                        </tr>
                        <tr>
                            <th class="border border-black font-normal px-2">ك</th>
                            <th class="border border-black font-normal px-1">طن</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-black py-4"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                        </tr>
                    </tbody>
                    <caption class="caption-bottom mt-12">
                        page 1 of 1
                    </caption>
                </table>
            </div>
        </div>
    </div>
</template>  -->

<!-- <script setup>
import { ref } from 'vue';
import  square  from '../../assets/icons/Square.png';
import exit from '../../../assets/icons/reports/Close.png';
import { useToggleStore } from '../../stores/reportStore';
import clock from '../../assets/icons/Clock.png'
import logo from '../../assets/icons/navbar/logo.png'

const store = useToggleStore() ;
const reprotContent = store.content ;
console.log(store.content);

const props = defineProps({
    reportTitle: {
        type: String,
        defualt: '',
    },
}); -->



<!-- // function closePopup() {
//    store.toggle();
// } -->

<!-- // function handleSquare() {
//     console.log('Square button clicked');
// }

// function handleEmail() {
//     console.log('Email button clicked');
// }


// Click handler to detect click outside the circular menu
// const closeMenuIfClickedOutside = (event) => {
//     const menu = document.getElementById('circular-menu');
//     if (menu && !menu.contains(event.target)) {
//         isCircularMenuOpen.value = false; // Close the menu if clicked outside
//     }
// };
// Lifecycle hooks to add/remove event listener
// onMounted(() => {
//     document.addEventListener("click", closeMenuIfClickedOutside);
// });

// onBeforeUnmount(() => {
//     document.removeEventListener("click", closeMenuIfClickedOutside);
// });
// </script> -->





<template>
    <div 
        v-if="isVisible" 
        class="fixed inset-0 w-[100%] bg-[#D9D9D9] bg-opacity-80 flex justify-around overflow-scroll lg:justify-center items-center z-50">
        <!-- Popup Container -->
        <div class="bg-white w-[90%] md:w-[70%] p-6 shadow-lg relative">
            <!-- Header -->
            <div class="flex flex-wrap justify-between w-full items-center">
                <!-- Icons Row for Desktop -->
                <div class="hidden md:flex items-center w-[33%] justify-start gap-1">
                    <!-- Exit Button -->
                    <button @click="closePopup"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <img :src="exit" alt="Exit" class="w-6 " />
                    </button>
                    <!-- Print Button -->
                    <button @click="handleSquare"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <img :src="square" alt="Square" class="w-8" />
                    </button>
                    <!-- Email Button -->
                    <button @click="handleEmail"
                        class="w-9 h-9 bg-[#345173] text-white flex justify-center items-center rounded-xl hover:bg-[#4c78aa]">
                        <span class="w-4 h-1 bg-white"></span>
                    </button>
                    <!-- PDF Button -->
                </div>
                <!-- Save Button -->
                <div class="w-[50%] lg:w-[33%] flex justify-end items-center">
                    <ButtonsSave />
                </div>
            </div>
            <div class="w-full mt-3">
                <div class="flex w-full justify-end gap-5 items-">
                    <div class="self-end">
                        <input type="text" class="border border-black py-1 px-3">
                    </div>
                    <div class="flex items-center justify-center border border-gray-400 py-1 px-6 bg-[#F7F7F7] self-start relative bottom-8 mx-10">
                        <img :src="clock" alt="Clock">
                        <p class="mr-3">00:00:00</p>
                    </div>
                    <div class="self-start">
                        <p>/ اختر نوع البحث</p>
                        <p> Select Type Of Search /</p>
                    </div>
                    <div class="self-start">
                        <p>من التاريخ إلى التاريخ</p>
                        <p class="border border-black py-1 px-3 mt-1">From Date To Date </p>
                    </div>
                </div>
                <div class="flex w-full justify-end gap-52 mt-2">
                    <div class="flex gap-4 ml-2">
                        <p class="mt-2">تصدير وإرسال</p>
                        <div> 
                            <p class="border border-gray-400  py-1 px-10 bg-[#F7F7F7]">Export and send</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <p class="mt-2">Type Here /</p>
                        <div class="text-center">
                            <input type="date" class="border border-black py-1 px-3">
                            <p>To:</p>
                        </div>
                        <div class="text-center">
                            <input type="date" class="border border-black py-1 px-3">
                            <p>From:</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-[#F7F7F7] border border-black mt-5">
                <div class="border border-black w-[97%] mx-auto my-3 px-4">
                    <div class="mt-3">
                        <p class="text-center font-bold text-lg">سجل الأقماح الواردة</p>
                    </div>
                    <div class="flex justify-between relative bottom-7">
                        <p class="self-end">تاريخ اليوم </p>
                        <div >
                            <img :src="logo" alt="Logo" class="w-36 mr-auto">
                            <p>Subject / Incoming Wheat</p>
                        </div>
                    </div>
                </div>
                <table class="border-collapse border-black w-[97%] mx-auto mb-3 mt-6 px-4">
                    <thead>
                        <tr>
                            <th class="border border-black font-normal px-1 py-5" rowspan="2">الساعة</th>
                            <th class="border border-black font-normal" rowspan="2">رقم السيارة</th>
                            <th class="border border-black font-normal" colspan="2">الكمية</th>
                            <th class="border border-black font-normal" rowspan="2">الوزن النوعي</th>
                            <th class="border border-black font-normal" rowspan="2">الرطوبة %</th>
                            <th class="border border-black font-normal" rowspan="2">وزن 1000حبه</th>
                            <th class="border border-black font-normal" rowspan="2">الجولتين الرطب</th>
                            <th class="border border-black font-normal" rowspan="2">الجولتين الجاف</th>
                            <th class="border border-black font-normal px-1" rowspan="2">الأندكس</th>
                            <th class="border border-black font-normal" rowspan="2">رقم السقوط</th>
                            <th class="border border-black font-normal px-1" rowspan="2">النظافة</th>
                            <th class="border border-black font-normal" rowspan="2">نوع القمح</th>
                            <th class="border border-black font-normal" rowspan="2">اسم المورد</th>
                            <th class="border border-black font-normal px-1" rowspan="2">الملاحظات</th>
                        </tr>
                        <tr>
                            <th class="border border-black font-normal px-2">ك</th>
                            <th class="border border-black font-normal px-1">طن</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="border border-black py-4"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                            <td class="border border-black"></td>
                        </tr>
                    </tbody>
                    <caption class="caption-bottom mt-12">
                        page 1 of 1
                    </caption>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import square from '../../assets/icons/Square.png';
import exit from '../../../assets/icons/reports/Close.png';
import { useToggleStore } from '../../stores/reportStore';
import clock from '../../assets/icons/Clock.png';
import logo from '../../assets/icons/navbar/logo.png';

const store = useToggleStore();
const reprotContent = store.content;
console.log(store.content);

// Popup visibility state
const isVisible = ref(true);

const props = defineProps({
    reportTitle: {
        type: String,
        defualt: '',
    },
});

// Close the popup
function closePopup() {
   isVisible.value = false;  // Hide the popup when clicking the close button
}

// Handle square button
function handleSquare() {
    console.log('Square button clicked');
}

// Handle email button
function handleEmail() {
    console.log('Email button clicked');
}

</script>