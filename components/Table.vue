<template>
  <div class="w-full h-full rounded-lg !overflow-scroll">
    <table class="table-auto lg:h-auto h-24 rounded-lg relative !overflow-scroll w-full border-collapse border border-gray-300">
      <thead class="bg-[#E5E1E1] sticky  top-0 z-10 rounded-lg text-center border-0">
        <tr>
          <th class="px-4 py-2">رقم الأذن</th>
          <th class="px-4 py-2">نوع التقرير</th>
          <th class="px-4 py-2">الكود</th>
          <th class="px-4 py-2">الكمية الواردة</th>
          <th class="px-4 py-2">أمين المخزن</th>
          <th class="px-4 py-2">التاريخ</th>
          <th class="px-4 py-2">الإجراءات</th>
        </tr>
      </thead>
      <tbody class="rounded-lg">
        <tr class="border-t border-[2px] text-center rounded-lg  border-[#A09C9C]" v-for="(item, index) in items" :key="index">
          <td class=" px-4 py-2 ">{{ index + 1 }}</td>
          <td class=" px-4 py-2 ">{{ item.reportType }}</td>
          <td class=" px-4 py-2">{{ item.code }}</td>
          <td class=" px-4 py-2">{{ item.quantity }}</td>
          <td class=" px-4 py-2">{{ item.storekeeper }}</td>
          <td class=" px-4 py-2">{{ item.date }}</td>
          <td class="flex items-center justify-center">
            <button @click="editItem(index)" class=" text-white rounded">
              <img :src="edit" alt="edit icon">
            </button>
            <button @click="deleteItem(index)" class=" text-white rounded">
              <img :src="deleteIcon" alt="" srcset="">  
            </button>
            <button @click="duplicateItem(index)" class=" text-white rounded">
              <img :src="eye" alt="dublicate item icon" srcset="">  
            </button>
          </td>
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
