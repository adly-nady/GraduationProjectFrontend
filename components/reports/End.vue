<template>
    <div class="flex justify-between flex-wrap items-center p-4 bg-white">
        <div v-for="(field, index) in formFields" :key="index" class="flex flex-col gap-2 w-[30%]">
            <label :for="field.name" class="font-semibold text-center text-gray-700">{{ field.label }}</label>
            <input v-bind="{
                type: field.type,
                id: field.name,
                placeholder: '................'
            }" class="text-center p-2 font-bold rounded-md outline-none" />
        </div>
    </div>
</template>

<script setup>
defineProps({
    formFields: {
        type: Array,
        required: true
    }
})
</script>

<style scoped>
/* Add any scoped styles you want */
</style>
