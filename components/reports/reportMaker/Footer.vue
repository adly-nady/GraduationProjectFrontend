<!-- <template>
    <div class=" w-[90%] rounded-lg flex justify-between">
        <div class="relative w-[100%] overflow-hidden">
<<<<<<< HEAD
            <div class="menue p-[.6rem] bg-[#DDDDDD] w-[100%]  absolute z-1" :class="{ hidden: !isVisable }">
=======
            <div :class="isVisible"  class=" p-[.6rem] bg-[#DDDDDD] w-[100%] rounded-lg absolute z-1">
>>>>>>> origin/feature3
                <div class="flex justify-start gap-4 ">
                    <button v-for="(item, index) in footerData" @click="store.toggle(item.content)"
                        class="bg-[#3e628d]  text-white w-[164.97px] h-[40px] rounded-lg" :key="index">{{
                            item.name
                        }}</button>
                </div>
            </div>
        </div>
<<<<<<< HEAD
        <div class="menue_but p-2 bg-[#DDDDDD] w-[60px]  !z-10">
            <img :src="menu" @click="setVisable" :class="menuebutton" class="bg-[#3e628d] cursor-pointer p-2 rounded-lg" alt="" srcset="">
        </div>
    </div>

</template>

<style scoped>

.animated-menu {
    animation-name: move;
    animation-duration: 4s;

}

.animated-menu-close {
    animation: move;
    animation-duration: 4s;
    animation-direction: reverse;

}

@keyframes move {
    0% {
        left: -120%;
=======
        </div>
        <div class="p-2 bg-[#DDDDDD] w-[60px] rounded-lg !z-10" >
            <img :src="menu" class="bg-[#3e628d] p-2 rounded-lg" alt="menu" @click="setVisible">
        </div>
    </div>

</template> -->
<!-- 
<style>
.animated-menu{
    animation-name: move;
    animation-duration: 4s;
    animation-iteration-count: 1;
}

    @keyframes move {
        0%{
            left:-120%;
        }
        100%{
            left:0;
        }
>>>>>>> origin/feature3
    }

    100% {
        left: 0;
    }
}


</style>

<script setup>
import { useToggleStore } from '../../stores/reportStore';
<<<<<<< HEAD
import menu from '../../../assets/icons/reports/List.png';
import { useNuxtApp } from '#app';
import { ref, onMounted } from 'vue';
const store = useToggleStore();
const {$gsap} = useNuxtApp();
console.log(store.isToggled)

const isVisable = ref(false);
const menuebutton = ref('');
function setVisable() {
    isVisable.value = !isVisable.value;
    if (isVisable.value) {
        $gsap.to('.menue', { left: '0', opacity: 1, duration: 1})
    } else {
        $gsap.to('.menue', { left: '-120%', opacity: 0, duration: 1 })
    }
}
onMounted(()=>{
    $gsap.set('.menue', { left: '-120%', opacity: 0 })
}) ;
const props = defineProps({
    footerData: {
        type: Object,
        required: true,
    }
})
=======
import menu from '../../../assets/icons/reports/List.png' ;
const store = useToggleStore(); -->
<!-- // const isVisible = ref('');
// function setVisible(){
//     isVisible.value = isVisible.value==''?isVisible.value='animated-menu':'';
//     console.log(isVisible.value);
// }
// const isVisible = ref(false);

// function setVisible() {
//     isVisible.value = !isVisible.value;
// }

// console.log(store.isToggled)
 // Define props to accept data from parent component
//     const props = defineProps({
//         footerData:{
//             type: Object,
//             required: true,
//         }
//     }) -->
<!-- // </script> -->




<template>
    <div class="w-[90%] rounded-lg flex justify-between">
        <div class="relative w-[100%] overflow-hidden">
            <div :class="{ 'animated-menu': isVisible }"
                class="p-[.6rem] bg-[#DDDDDD] w-[100%] rounded-lg absolute z-1">
                <div class="flex justify-start gap-4">
                    <button v-for="(item, index) in footerData" 
                        @click="selectReport(item.component)"
                        class="bg-[#3e628d] text-white w-[164.97px] h-[40px] rounded-lg"
                        :key="index">
                        {{ item.name }}
                    </button>
                </div>
            </div>
        </div>
        <div class="p-2 bg-[#DDDDDD] w-[60px] rounded-lg !z-10">
            <img :src="menu" class="bg-[#3e628d] p-2 rounded-lg" alt="menu" @click="toggleMenu">
        </div>
    </div>
</template>

<style>
.animated-menu {
    animation: move 0.4s ease-in-out;
}
@keyframes move {
    0% { left: -120%; }
    100% { left: 0; }
}
</style>

<script setup>
import menu from '../../../assets/icons/reports/List.png';

const isVisible = ref(false);
defineProps({
    footerData: { type: Array, required: true }
});

// Emit the selected component name
const emit = defineEmits(['selectReport']);

function toggleMenu() {
    isVisible.value = !isVisible.value;
}

function selectReport(component) {
    emit('selectReport', component);
}
>>>>>>> origin/feature3
</script>