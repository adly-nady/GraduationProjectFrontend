<template>
    <div class="w-full bg-white flex justify-start gap-2 items-center">
        <div class="bg-[#345173] rounded-lg w-10 h-10 flex items-center justify-center">
            <img :src="cancel" alt="Cancel Icon" />
        </div>
        <div class="bg-[#345173] w-10 h-10 rounded-lg flex items-center justify-center">
            <img :src="Checked" alt="Checked Icon" class="w-[30px] h-[30px]" />
        </div>
    </div>

    <div class="w-full h-full lg:!h-[350px] rounded-lg !overflow-scroll hide-scrollbar mt-2">
        <table
            class="table-auto lg:!h-full h-24 rounded-lg relative !overflow-scroll w-full border-collapse border hide-scrollbar border-gray-300">
            <thead class="bg-[#E5E1E1] font-bold text-lg sticky top-0 z-10 rounded-lg text-center border-0">
                <tr>
                    <th v-for="(item, index) in header" :key="'header-' + index" class="px-4 py-2">
                        {{ item.value }}
                    </th>
                </tr>
            </thead>

            <tbody class="rounded-lg">
                <tr class="border-[2px] border-collapse text-center  rounded-lg border-[#A09C9C]"
                    v-for="(item, index) in tableBody" :key="'row-' + index">
                    <!-- Checkbox Column -->
                    <td class="px-4 py-2 flex justify-center">
                        <label class="relative flex items-center cursor-pointer">
                            <!-- Hidden Checkbox -->
                            <input type="checkbox" class="hidden peer" :checked="item.isChecked"
                                @change="updateValue(index, $event.target.checked)" />
                            <!-- Custom Checkbox -->
                            <div
                                class="w-8 h-8 bg-[#2B4C78] rounded-md flex justify-center items-center border border-gray-300 peer-checked:border-transparent peer-checked:bg-[#2B4C78]">
                                <img v-if="item.isChecked" :src="done" alt="Checked Icon" />
                                <!-- <img v-else :src="cancel" alt="Cancel Icon" /> -->
                            </div>
                        </label>
                    </td>

                    <!-- Other Columns -->
                    <td class="px-4 py-2">{{ item.name }}</td>
                    <td class="px-4 py-2">{{ item.code }}</td>


                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup>
import { useItemStore } from '~/stores/itemStore';
import Checked from '../assets/icons/reports/Checked.png';
import cancel from '../assets/icons/reports/Cancel.png';
import done from '../assets/icons/reports/Done.png';
import { defineProps, defineEmits } from 'vue';

// Props and Emits
const props = defineProps({
    header: {
        type: Array,
        required: true,
    },
    tableBody: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(['update:tableBody']);

// Item Store
const store = useItemStore();

// Edit Item
const editItem = (index) => {
    const item = props.tableBody[index];
    store.setSelectedItem(item);
};

// Delete Item
const deleteItem = (index) => {
    store.deleteItem(index);
    emit('update:tableBody', props.tableBody.filter((_, i) => i !== index));
};

// Duplicate Item
const duplicateItem = (index) => {
    const itemToDuplicate = { ...props.tableBody[index] };
    emit('update:tableBody', [...props.tableBody, itemToDuplicate]);
};

// Update Checkbox Value
const updateValue = (index, value) => {
    const updatedTableBody = [...props.tableBody];
    updatedTableBody[index].isChecked = value;
    emit('update:tableBody', updatedTableBody);
};
</script>

<style scoped>

</style>