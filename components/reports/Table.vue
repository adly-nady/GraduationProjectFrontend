<template>
  <div class="w-full h-full lg:!h-[350px] rounded-lg !overflow-scroll hide-scrollbar mt-2">
    <table
      class="table-auto lg:!h-full h-24 rounded-lg relative !overflow-scroll w-full border-collapse border border-gray-300">
      <thead class="bg-[#6089B5] text-white text-bold sticky  top-0 z-10 rounded-lg text-center border-0">
        <tr>
          <th v-for="(item,index) in props.header" class="px-4 py-2">{{item.name}}</th>
          <!-- <th class="px-4 py-2">وزن الشكارة</th>
          <th class="px-4 py-2">عدد الشكاير قبل التعبئة</th>
          <th class="px-4 py-2">عدد الشكاير بعد النعبئة</th>
          <th class="px-4 py-2">الحالة</th>
          <th class="px-4 py-2">مدة الصلاحية</th>
          <th class="px-4 py-2">الملاحظات</th> -->
          
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr class=" border-[2px] border-collapse text-center rounded-lg  border-[#A09C9C]"
          v-for="(item, index) in items" :key="index">
          <td class=" px-4 py-2 ">{{ index + 1 }}</td>
          <td class=" px-4 py-2 ">{{ item.reportType }}</td>
          <td class=" px-4 py-2">{{ item.code }}</td>
          <td class=" px-4 py-2">{{ item.quantity }}</td>
          <!-- <td class=" px-4 py-2">{{ item.storekeeper }}</td>
          <td class=" px-4 py-2">{{ item.date }}</td> -->

        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { useItemStore } from '~/stores/itemStore';
import edit from '../assets/icons/Edit.png';
import eye from '../assets/icons/Eye.png';
import deleteIcon from '../assets/icons/Delete.png'

const store = useItemStore();
const items = store.items; // Bind store items to the table
const props = defineProps({
  header:{
    type: String,
    required: true
  }
})
const formData = ref({});
const isEditing = ref(false);
const editIndex = ref(null);

// Function to edit an item
function editItem(index) {
  const item = items[index];
  store.setSelectedItem(item);
  
}
// Function to delete an item
function deleteItem(index) {
  store.deleteItem(index); // Remove the item from the store
}
function duplicateItem(index) {
  store.duplicateItem(index); // Call the duplicate function in the store
}
</script>
