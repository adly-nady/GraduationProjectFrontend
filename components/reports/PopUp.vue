<template>
    <div v-if="isPopupVisible" class="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <div class="flex gap-4">
                <!-- Print Button -->
                <button @click="handlePrint"
                    class="w-16 h-16 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                    <img src="/icons/print.svg" alt="Print" class="w-8 h-8" />
                </button>

                <!-- Email Button -->
                <button @click="handleEmail"
                    class="w-16 h-16 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                    <img src="/icons/email.svg" alt="Email" class="w-8 h-8" />
                </button>

                <!-- PDF Button -->
                <button @click="handlePDF"
                    class="w-16 h-16 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                    <img src="/icons/pdf.svg" alt="PDF" class="w-8 h-8" />
                </button>

                <!-- Exit Button -->
                <button @click="closePopup"
                    class="w-16 h-16 bg-blue-800 text-white flex justify-center items-center rounded-full hover:bg-blue-600">
                    <img src="/icons/exit.svg" alt="Exit" class="w-8 h-8" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

// State for showing/hiding the popup
const isPopupVisible = ref(true);

// Handlers for button clicks
function handlePrint() {
    console.log('Print button clicked');
}

function handleEmail() {
    console.log('Email button clicked');
}

function handlePDF() {
    console.log('PDF button clicked');
}

function closePopup() {
    isPopupVisible.value = false;
}
</script>

<style scoped>
/* Custom styles if needed */
</style>
