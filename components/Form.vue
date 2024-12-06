<template>
  <form @submit.prevent="handleSubmit" class="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-3 lg:w-full lg:grid-cols-4 gap-4 my-2 font-bold items-center">
    <div class="relative w-[300px] h-[35px] m-[5px]">
      <label>نوع التقرير:</label>
      <input v-model="formData.reportType" type="text" class="border border-[#858585] h-full rounded-lg px-2 w-full pr-2" />
      <span v-if="formData.reportType" @click="resetField('reportType')" class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
        <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">
      </span>
    </div>
    <div class="relative w-[300px] h-[35px] m-[5px]">
      <label>الكود:</label>
      <input v-model="formData.code" type="text" class="border border-[#858585] rounded-lg px-2 h-full w-full pr-2" />
      <span v-if="formData.code" @click="resetField('code')"class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
               <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">

      </span>
    </div>
    <div class="relative w-[300px] h-[35px] font-bold m-[5px]">
      <label class="text-black ">الكمية الواردة:</label>
      <input v-model="formData.quantity" type="number" class="border border-[#858585] h-full rounded-lg px-2 w-full pr-2" />
      <span v-if="formData.quantity" @click="resetField('quantity')"class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
               <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">

      </span>
    </div>
    <div class="relative w-[300px] h-[35px]">
      <label>أمين المخزن:</label>
      <input v-model="formData.storekeeper" type="text" class="border border-[#858585] h-full rounded-lg px-2 w-full pr-2" />
      <span v-if="formData.storekeeper" @click="resetField('storekeeper')"class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
               <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">

      </span>
    </div> 
    <div class="relative w-[300px] h-[35px] m-[5px]">
      <label>التاريخ:</label>
      <input v-model="formData.date" type="date" class="border border-[#858585] h-full rounded-lg px-2 w-full pr-2" />
      <span v-if="formData.date" @click="resetField('date')"class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
               <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">

      </span>
    </div>
    <!-- <button type="submit" class="col-span-1 md:col-span-3 m-3 lg:col-span-1 lg:row-span-3 bg-blue-500 text-white px-2 py-2 rounded-lg">
      {{ isEditing ? "تحديث" : "إضافة" }}
    </button> -->
  </form>
</template>

<!-- <script setup>
import { ref } from 'vue';
import { useItemStore } from '~/stores/itemStore';

const store = useItemStore();
const formData = ref({
  reportType: '',
  code: '',
  quantity: 0,
  storekeeper: '',
  date: '',
});
const isEditing = ref(false); // Flag to track if we're editing
const editIndex = ref(null);  // Index of the row being edited
  console.log(formData);  
  
// Function to handle form submission
function handleSubmit() {
  if (isEditing.value) {
    // Update the item in the store
    store.updateItem(editIndex.value, { ...formData.value });
    isEditing.value = false; // Reset editing mode
  } else {
    // Add a new item
    store.addItem({ ...formData.value });
  }
  resetForm();
}

// Function to reset the form
function resetForm() {
  formData.value = { reportType: '', code: '', quantity: 0, storekeeper: '', date: '' };
  isEditing.value = false;
  editIndex.value = null;
}

// Function to reset a specific field
function resetField(field) {
  formData.value[field] = field === 'quantity' ? 0 : ''; // Reset to default value
}
</script> -->


<script setup>
import { ref, watch } from 'vue';
import { useItemStore } from '~/stores/itemStore';

const store = useItemStore();
const formData = ref({
  reportType: '',
  code: '',
  quantity: 0,
  storekeeper: '',
  date: '',
});
const isEditing = ref(false);

// Watch for changes in the selected item from the store
watch(() => store.selectedItem, (newItem) => {
  if (newItem) {
    formData.value = { ...newItem }; // Prefill the form with the selected item data
    isEditing.value = true; // Set editing mode
  } else {
    // Reset form if no item is selected
    resetForm();
  }
});

// Function to handle form submission
function handleSubmit() {
  if (isEditing.value) {
    // Update logic here
    const index = store.items.indexOf(store.selectedItem);
    store.updateItem(index, formData.value);
  } else {
    // Add logic here
    store.addItem(formData.value);
  }
  resetForm(); // Reset the form after submission
}
  
// Function to reset the form
function resetForm() {
  formData.value = {
    reportType: '',
    code: '',
    quantity: 0,
    storekeeper: '',
    date: '',
  };
  isEditing.value = false; // Reset editing mode
}

function resetField(field) {
  if (field === 'quantity') {
    formData.value[field] = 0; // Reset quantity to 0
  } else {
    formData.value[field] = ''; // Reset other fields to empty string
  }
}
</script>