<template>
    <!-- Form -->
    <form action=""
        class=" flex w-full m-auto !overflow-scroll hide-scrollbar  flex-col justify-center items-center gap-5">

        <div class=" w-[95%] grid grid-cols-5  pr-5 gap-y-2 py-2 rounded-lg justify-around items-center bg-[#D9D9D9]">
            <div v-for="input in props.formField" :key="input.name" >
                <label :for="input.name" class=" lg:w-auto font-bold"> {{ input.label }} </label>
                <input :id="input.name" :type="input.type" :name="input.name"
                    class="lg:w-32 lg:h-[27px] p-1 outline-none rounded-lg" />
            </div>
            <!-- <div>
                <label for="myBrowser">اسم المستلم</label>
                <input list="browsers" class="rounded-lg" id="myBrowser" name="myBrowser" />
                <datalist id="browsers">
                    <option v-for="(item , index) in dataSet" :key="index" :value="item.label"></option>
                </datalist>
            </div>

            <div>
                <label for="myBrowser" >اسم القسم</label>
                <input list="browsers" class="rounded-lg" id="myBrowser" name="myBrowser" />
                <datalist id="browsers">
                    <option v-for="(item, index) in formField" :key="index" :value="item.label"></option>
                </datalist>
            </div>
            <div>
                <label for="myBrowser">اختيار اذن طلب</label>
                <input list="browsers" class="rounded-lg" id="myBrowser" name="myBrowser" />
                <datalist id="browsers">
                    <option v-for="(item, index) in formField" :key="index" :value="item.label"></option>
                </datalist>
            </div>
            <div>
                <label for="myBrowser">العميل: </label>
                <input list="browsers" class="rounded-lg" id="myBrowser" name="myBrowser" />
                <datalist id="browsers">
                    <option v-for="(item, index) in formField" :key="index" :value="item.label"></option>
                </datalist>
            </div> -->
        </div>
    </form>
</template>

<script setup>
import { useFormStore } from '@/stores/formStore';

const props = defineProps({
    formField: {
        type: Array,
        required: true,
    },

    dataSet:{
        type:Array, 
        required: true ,
    }
});



</script>

<style lang="sass" scoped>
</style>
