<template>
  <form @submit.prevent="handleSubmit"
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-3 lg:w-full lg:grid-cols-4 gap-3 font-bold items-start">
    <div v-for="(field, index) in props.fields" :key="index" class="relative w-[300px] h-[35px] m-[5px]">
      <label>{{ field.label }}</label>
      <input v-model="formData[field.name]" :type="field.type"
        class="border border-[rgb(133,133,133)] h-full rounded-lg px-2 w-full pr-2" />
      <span v-if="formData[field.name]" @click="resetField(field.name)"
        class="absolute left-4 top-[30%] transform translate-y-1/2 -translate-x-1/2 cursor-pointer">
        <img src="@/assets/icons/Close.png" class="w-[20px] h-[30px]" alt="" srcset="">
      </span>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, reactive } from 'vue';
import { useItemStore } from '~/stores/itemStore';
import { onEvent } from "./eventBus"; // Import the event bus

const props = defineProps({
  fields: {
    type: Object,
    required: true
  }
});
const store = useItemStore();
const formData = reactive({});
props.fields.forEach(field => {
  formData[field.name] = field.type === Number ? 0 : '';
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
    formData[field] = 0; // Reset quantity to 0
  } else {
    formData[field] = ''; // Reset other fields to empty string
  }
}

// Listen for the submit event from the event bus
onEvent('submitForm', handleSubmit);
</script>