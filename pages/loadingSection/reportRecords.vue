<template>
  <div class="wrapper bg-white  absolute top-4 w-full  left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-1 justify-center items-center ">
    <SectionTitle title="قسم التحميل" />
    <DynamicForm :fields="fields" />
    <div class="flex w-full  justify-center items-center gap-5">
      <ExportTools :tableHeader="tableHeader" />
      <ButtonsAdd />

    </div>
    <Table :header="tableHeader" />
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
      { name: 'رقم الاذن', key: 'id' },
      { name: 'اسم قطع الغيار', key: 'reportType' },
      { name: 'الكود', key: 'code' },
      { name: 'الكمية الواردة', key: 'quantity' },
      { name: 'امين المخزن', key: 'storekeeper' },
      { name: 'التاريخ', key: 'date' }
  ];
</script>