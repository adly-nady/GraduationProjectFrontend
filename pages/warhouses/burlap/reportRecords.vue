<template>
    <div class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
      <SectionTitle title="سجلات مخزن الخيش" />
      <DynamicForm :fields="fields" />
      <div class="flex w-full  justify-center items-center gap-5">
        <ExportTools :tableHeader="tableHeader"/>
        <ButtonsAdd />
      
    </div>
      <Table :header="tableHeader" />
    </div>
  </template>

<script setup>
const fields = [
  { name: "burlapTypeName" , label :"نوع التقرير" , type: "text" } ,
  { name: "equipment", label: " الكود", type: "text" },
  { name: "burlapTypeNumber", label: "التاريخ ", type: "date" },
  { name: "unity", label: "الكمية الواردة", type: "text" },
  { name: "minimumBalance", label: "أمين المخزن", type: "text" } ,
];
const tableHeader = [
        { name: 'رقم الاذن', key: 'id' },
        { name: ' نوع التقرير ', key: 'reportType' },
        { name: 'الكمية الواردة', key: 'quantity' },
        { name: 'الكود', key: 'code' },
        { name: 'امين المخزن', key: 'storekeeper' },
        { name: 'التاريخ', key: 'date' }
    ];
</script>