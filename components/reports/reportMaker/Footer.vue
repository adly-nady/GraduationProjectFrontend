<template>
    <div class="w-[90%] bg-[#DDDDDD] rounded-lg p-2 flex justify-betwenn items-center gap-2">
        <div class="flex justify-start gap-4 ">
            <button v-for="(item, index) in footerData" @click="store.toggle(item.content)"
                class="bg-[#3e628d]  text-white w-[164.97px] h-[40px] rounded-lg" :key="index">{{
                item.name
                }}</button>
        </div>
        <div class=" w-[90%] flex justify-end">
            <img :src="menu" class="bg-[#3e628d] p-2 rounded-lg" alt="" srcset="">

        </div>

    </div>
</template>

<script setup>
import { useToggleStore } from '../../stores/reportStore';
import menu from '../../../assets/icons/reports/List.png' ;
const store = useToggleStore();
console.log(store.isToggled)
 // Define props to accept data from parent component
    const props = defineProps({
        footerData:{
            type: Object,
            required: true,
        }
    })
</script>