<template>
    <div class="p-1 rounded-lg max-h-[500px]  w-full ">
      <div class="overflow-x-auto w-full">
        <table class="w-full overflow-scroll max-h-[300px] border-collapse border border-gray-300">
          <thead>
            <tr class="bg-[#6089B5] text-white">
              <th v-for="(field, index) in props.tableFields" :key="index" class="border border-gray-400 p-2 text-left">
                {{ field.label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row, rowIndex) in props.tableData" :key="rowIndex" class="even:bg-gray-200">
              <td v-for="(field, colIndex) in props.tableFields" :key="colIndex" class="border border-gray-400 p-2">
                {{ row[field.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script setup>
    let props = defineProps({
      tableFields: Array,
      tableData: Array,
    })
  </script>
  
  <style scoped>
  </style>
  