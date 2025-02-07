<template>
    <h3 class="w-full bg-transparent mb-8 text-[20px] h-5 leading-[5rem]    font-bold font-    sans lg:text-[30px] text-black rounded-md ">{{ title }}</h3>
</template>

<script setup>
    defineProps(
        {
            title: {
                type: String,
                title: "section title"
            }
        }
    )

</script>


