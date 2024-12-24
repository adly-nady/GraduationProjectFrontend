<template>
    <div class="wrapper bg-white absolute bottom-0 w-full left-0 lg:!w-[94%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
      <SectionTitle title="اضافه صنف مخزن الخيش" />
      <DynamicForm :fields="fields" />
      <ExportTools />
      <Table :header="tableHeader" />
      <ButtonsAdd />
    </div>
  </template>

<script setup>
const fields = [
  { name: "burlapTypeName" , label :"ادخل اسم صنف الخيش" , type: "text" } ,
  { name: "equipment", label: "تصنيف المعدة", type: "text" },
  { name: "burlapTypeNumber", label: "رقم الصنف", type: "number" },
  { name: "unity", label: "الوحدة", type: "text" },
  { name: "minimumBalance", label: "الحد الادني من الرصيد", type: "text" } ,
];
const tableHeader = [
  { name: ' الكود' },
  { name: 'اسم الصنف ' },
  { name: 'الكود' },
  { name: 'القسم التابع له ' },
  { name: 'الغرض من وجوده' },
 { name: 'الحد الادني ' } 
];
</script>