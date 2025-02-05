<template>
    <div dir="ltr" class="p-1 w-full">
      <h2 class="text-2xl font-bold mb-4">Input</h2>
      <div class="border p-4 rounded-lg grid grid-cols-3 gap-2 w-[100%]">
        <div v-for="(field, index) in formFields.formFields" :key="index" :class="[{'col-span-2': field.type === 'textarea'}, 'flex justify-center items-center gap-2 w-[350px]']">
            <li class="flex items-center ">
                <label class="font-semibold inline-flex whitespace-nowrap  w-[200px]">{{ field.label }}:</label>
                <component 
               :is="field.type === 'textarea' ? 'textarea' : 'input'" 
               :type="field.type" 
               class="w-[173px] h-[31px] border rounded p-2" 
             />
            </li>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
    let formFields = defineProps({
      formFields: Array ,
    })
  </script>
  
  <style scoped>
  
  </style>
  