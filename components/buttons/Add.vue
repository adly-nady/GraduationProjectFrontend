<template>
    <div class="w-full flex justify-end">
        <button @click="submitForm" type="button"
            class="w-[150px] h-[40px] text-white text-[18px]  bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-[20px]  px-5   inline-flex items-center dark:focus:ring-[#3b5998]/55 ">
            <img src="~/assets/icons/Add.png" class="ml-4" alt="add icon">
            اضافه
        </button>
    </div>
</template>

<script setup>
import { emitEvent } from '../eventBus'; // Import the event bus

function submitForm() {
    emitEvent('submitForm'); // Emit the submit event
}
</script>

<style lang="scss" scoped>

</style>    