<template>
    <h3 class="w-full bg-transparent text-[25px] h-20 leading-[5rem] text-center  md:!text-center  font-bold font-    sans lg:text-[35px] text-black rounded-md ">{{ title }}</h3>
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


