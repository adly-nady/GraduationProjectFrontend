<template>
    <div class="wrapper bg-white absolute bottom-0 w-full left-0 lg:!w-[94%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
      <SectionTitle title="قسم التحميل" />
      <DynamicForm :fields="fields" />
      <ExportTools />
      <Table :header="tableHeader" />
      <ButtonsAdd />
    </div>
  </template>

<script setup>
const fields = [
  { name: "reportType" , label :"نوع التقرير" , type: "text" } ,
  { name: "code", label: " الكود", type: "text" },
  { name: "date", label: "التاريخ", type: "date" },
  { name: "quantity", label: "الكمية الواردة", type: "number" },
  { name: "storeKeeper", label: "امين المخزن", type: "text" } ,
];
const tableHeader = [
{ name: 'رقم الاذن' },
  { name: 'نوع التقرير' },
  { name: 'الكمية الواردة' },
  { name: 'الكود' },
  { name: 'امين المخزن' },
 { name: 'التاريخ ' }  
];
</script>