<template>
    <div class=" w-[90%] rounded-lg flex justify-between">
        <div class="relative w-[100%] overflow-hidden">
            <div class="animated-menu p-[.6rem] bg-[#DDDDDD] w-[100%] rounded-lg absolute z-1">
                <div class="flex justify-start gap-4 ">
                    <button v-for="(item, index) in footerData" @click="store.toggle(item.content)"
                        class="bg-[#3e628d]  text-white w-[164.97px] h-[40px] rounded-lg" :key="index">{{
                        item.name
                        }}</button>
                </div>
        </div>
        </div>
        <div class="p-2 bg-[#DDDDDD] w-[60px] rounded-lg !z-10">
            <img :src="menu" class="bg-[#3e628d] p-2 rounded-lg" alt="" srcset="">
        </div>
    </div>

</template>

<style>
/* .animated-menu{
    animation-name: move;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    animation-direction: reverse;
} */

    @keyframes move {
        0%{
            left:-120%;
        }
        100%{
            left:0;
        }
    }

</style>

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