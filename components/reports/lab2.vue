<template>
    <div
    v-if="isVisible"
        class="fixed  inset-0 w-[100%] bg-[#D9D9D9] bg-opacity-80 flex justify-around overflow-scroll  lg:justify-center  items-center z-50">
        <!-- Popup Container -->
        <div class="bg-white w-[90%] md:w-[70%]  p-6  shadow-lg relative">
            <!-- Header -->
            <div class="flex flex-wrap justify-between items-center">
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
                <p class="text-sm relative bottom-5 right-2">Setting Account</p>
            </div>
            <div class="mt-3">
                <div class="flex items-center justify-end py-2 bg-[#D9D9D9]">
                    <p class="px-4 border-l border-black">Send Repo Sett</p>
                    <p class="px-4 border-l border-black">Sender Account</p>
                    <p class="px-4 border-l border-black">Setting_Top_Admins</p>
                    <p class="px-4 border-l border-black">Setting_Admins</p>
                    <p class="px-4">Setting_Users</p>
                </div>
                <div class="flex items-center justify-end py-2 bg-[#D9D9D9] mt-3">
                    <p class="px-4 border-l border-black">إرسال مجموعة الريبو</p>
                    <p class="px-8 border-l border-black">حساب المرسل</p>
                    <p class="px-16 border-x border-black"></p>
                    <p class="px-4 border-l border-black">إعدادات_المسؤولين</p>
                    <p class="px-4">إعدادات_المستخدمين</p>
                </div>
            </div>
            <div class="bg-[#D9D9D9] mt-10 p-4">
                <div class="flex justify-end items-center gap-10 ml-14">
                    <p>اسم الحساب / </p>
                    <input type="text" class="border border-gray-400 py-1 w-60">
                    <p> / Account Name</p>
                </div>
                <div class="flex justify-end items-center mt-4">
                    <div class="mr-10 text-center">
                        <label class="ml-4">Incoming_wheat</label>
                        <input type="checkbox">
                        <p class="ml-4">القمح الوارد</p>
                    </div>
                    <div class="mr-10 text-center">
                        <label class="ml-4">Laboratory</label>
                        <input type="checkbox">
                        <p class="ml-4">معمل</p>

                    </div>
                    <div class="mr-10 text-center">
                        <label class="ml-4">Samples_product</label>
                        <input type="checkbox">
                        <p class="ml-4">عينات المنتج</p>
                    </div>                    
                    <div class="mr-10 text-center">
                        <label class="ml-4">End-Product</label>
                        <input type="checkbox">
                        <p class="ml-4">المنتج النهائي</p>
                    </div>
                    <div class="mr-10 text-center">
                        <label class="ml-4">Final_product_pasta</label>
                        <input type="checkbox">
                        <p class="ml-4">المعكرونة المنتج النهائي</p>
                    </div>
                </div>
            </div>
            <table class="border w-[100%] border-collapse">
                    <thead class="border border-gray-400">
                        <tr>
                            <th class="font-normal py-3 px-4">ID</th>
                            <th class="font-normal">Account</th>
                            <th class="font-normal">Laboratory</th>
                            <th class="font-normal">Incoming_wheat</th>
                            <th class="font-normal">End-Product</th>
                            <th class="font-normal">Samples_product</th>
                            <th class="font-normal">product_pasta</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>                        
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>                        
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>                        
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>                        
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>                       
                        <tr class="border border-gray-400 text-center">
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2 w-3"><input type="text"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                            <td class="py-2"><input type="checkbox"></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import  square  from '../../assets/icons/Square.png';
import exit from '../../../assets/icons/reports/Close.png';
import { useToggleStore } from '../../stores/reportStore';

const store = useToggleStore() ;
const reprotContent = store.content ;
console.log(store.content);

const props = defineProps({
    reportTitle: {
        type: String,
        defualt: '',
    },
});
const isVisible = ref(true);


function closePopup() {
    isVisible.value = false; // Hide the popup
}


function handleSquare() {
    console.log('Square button clicked');
}

function handleEmail() {
    console.log('Email button clicked');
}


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
</script>