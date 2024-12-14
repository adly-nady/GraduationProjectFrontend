<template>
    <button
        class="flex items-center justify-center bg-blue-800 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200"
        @click="handleClick">
        <img :src="download" alt="Downloading" class="h-5 w-5" />
        <span class="mr-2">حفظ التقرير</span>
    </button>
</template>

<script setup>
import download from '../../../assets/icons/reports/Downloading.png';



function handleClick() {
    console.log("Save report button clicked");
    // Add your custom logic here, e.g., saving a report or triggering an event
}
</script>

<style scoped>
/* Add any additional styling if required */
</style>
