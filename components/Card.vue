<template>
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ departmentTitle }}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ departmentDetails }}</p>
        <div class="flex flex-col gap-1">
            <NuxtLink v-for="(button, index) in buttons" :to="button.route" class="flex justify-center items-center  gap-1 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {{ button.name }}
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </NuxtLink>

        </div>
    </div>
</template>

<script setup>
    defineProps({
        departmentTitle:{
            type:String,
            title:'department title',
        },
        departmentDetails:{
            type:String ,
            details:"department Details",
        },
        route:{
            type:String,
            route:"departmentz",
        },
        buttons:{
            type:Array,
            default:"افتح القسم",
        }
    })
</script>

<style lang="sass" scoped>

</style>