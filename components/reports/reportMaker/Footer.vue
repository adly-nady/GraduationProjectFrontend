 <template>
    <div class=" w-[90%] rounded-lg flex justify-between">
        <div class="relative w-[100%] overflow-hidden">
            <div p-[.6rdiv class="menue bg-[#DDDDDD] w-[100%] flex   h-[200px] absolute z-1" :class="{ hidden: !isVisable }">
                <div class="flex  gap-4 py-3 pr-2 ">
                    <button v-for="(item, index) in footerData" @click="store.toggle(item.content)"
                        class="bg-[#3e628d]  text-white w-[164.97px] h-[40px] rounded-lg" :key="index">{{
                            item.name
                        }}</button>
                </div>
            </div>
        </div>
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
    }

    100% {
        left: 0;
    }
}


</style>

<script setup>
import { useToggleStore } from '../../stores/reportStore';
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
</script>