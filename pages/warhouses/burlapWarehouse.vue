<template>
    <div class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
      <SectionTitle title="اضافه صنف مخزن الخيش" />
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
  { name: "burlapTypeName" , label :"ادخل اسم صنف الخيش" , type: "text" } ,
  { name: "equipment", label: "تصنيف المعدة", type: "text" },
  { name: "burlapTypeNumber", label: "رقم الصنف", type: "number" },
  { name: "unity", label: "الوحدة", type: "text" },
  { name: "minimumBalance", label: "الحد الادني من الرصيد", type: "text" } ,
];
const tableHeader = [
        { name: 'رقم الاذن', key: 'id' },
        { name: 'اسم قطع الغيار', key: 'reportType' },
        { name: 'الكود', key: 'code' },
        { name: 'الكمية الواردة', key: 'quantity' },
        { name: 'امين المخزن', key: 'storekeeper' },
        { name: 'التاريخ', key: 'date' }
    ];
</script>