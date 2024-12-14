<template>
    <div 
        class="fixed  inset-0 w-[100%] bg-[#D9D9D9] bg-opacity-80 flex justify-around overflow-scroll  lg:justify-center  items-center z-50">
        <!-- Popup Container -->
        <div class="bg-white w-[90%] md:w-[70%] lg:w-[95%]   p-6 rounded-lg shadow-lg relative">
            <!-- Header -->
            <div class="flex flex-wrap justify-between w-full items-center">
                <!-- Icons Row for Desktop -->
                <div class="hidden md:flex items-center w-[33%] justify-start gap-1">
                    <!-- Exit Button -->
                    <button @click="closePopup"
                        class="w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                        <img :src="exit" alt="Exit" class="w-6 h-6" />
                    </button>
                    <!-- Print Button -->
                    <button @click="handlePrint"
                        class="w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                        <img :src="print" alt="Print" class="w-6 h-6" />
                    </button>
                    <!-- Email Button -->
                    <button @click="handleEmail"
                        class="w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                        <img :src="email" alt="Email" class="w-6 h-6" />
                    </button>
                    <!-- PDF Button -->
                    <button @click="handlePDF"
                        class="w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                        <img :src="pdf" alt="PDF" class="w-6 h-6" />
                    </button>
                </div>

                <!-- Section Title -->
                <div class="w-full lg:w-[33%] flex justify-center items-center text-center">
                    <SectionTitle :title="props.reportTitle" class="w-full" />
                </div>

                <!-- Save Button -->
                <div class="w-[50%] lg:w-[33%] flex justify-end items-center">
                    <ButtonsSave />
                </div>
                <!-- Circular Menu Toggle (Mobile Only) -->
                <div class="md:hidden  flex justify-center items-center mt-4">
                    <button @click="toggleCircularMenu"
                        class="w-12 h-12 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                        <img :src="pdf" alt="Menu" class="w-6 h-6" />
                    </button>
                </div>

                <!-- Circular Menu Content -->
                <div v-if="isCircularMenuOpen"
                    class="absolute top-16 left-1/2 transform -translate-x-1/2 w-40 h-40 bg-blue-100 rounded-full flex justify-center items-center">
                    <div class="relative w-full h-full">
                        <!-- Exit Button -->
                        <button @click="closePopup"
                            class="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                            <img :src="exit" alt="Exit" class="w-6 h-6" />
                        </button>
                        <!-- Print Button -->
                        <button @click="handlePrint"
                            class="absolute top-1/2 left-0 transform -translate-y-1/2 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                            <img :src="print" alt="Print" class="w-6 h-6" />
                        </button>
                        <!-- Email Button -->
                        <button @click="handleEmail"
                            class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                            <img :src="email" alt="Email" class="w-6 h-6" />
                        </button>
                        <!-- PDF Button -->
                        <button @click="handlePDF"
                            class="absolute top-1/2 right-0 transform -translate-y-1/2 w-10 h-10 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                            <img :src="pdf" alt="PDF" class="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            <!-- Content Slot (Table and Form) -->
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import print from '../../../assets/icons/reports/Print.png';
import exit from '../../../assets/icons/reports/Close.png';
import email from '../../../assets/icons/reports/Email.png';
import pdf from '../../../assets/icons/reports/PDF.png';
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



function closePopup() {
   store.toggle();
}

function handlePrint() {
    console.log('Print button clicked');
}

function handleEmail() {
    console.log('Email button clicked');
}

function handlePDF() {
    console.log('PDF button clicked');
}
const isCircularMenuOpen = ref(false);

// Toggle function
const toggleCircularMenu = () => {
    isCircularMenuOpen.value = !isCircularMenuOpen.value;
};


// Click handler to detect click outside the circular menu
const closeMenuIfClickedOutside = (event) => {
    const menu = document.getElementById('circular-menu');
    if (menu && !menu.contains(event.target)) {
        isCircularMenuOpen.value = false; // Close the menu if clicked outside
    }
};
// Lifecycle hooks to add/remove event listener
onMounted(() => {
    document.addEventListener("click", closeMenuIfClickedOutside);
});

onBeforeUnmount(() => {
    document.removeEventListener("click", closeMenuIfClickedOutside);
});


</script>
