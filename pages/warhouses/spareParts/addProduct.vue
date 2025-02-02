// pages/index.vue
<template>
    <div
    class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
   
        <SectionTitle title="اضافة صنف مخزن قطع الغيار" />
        <DynamicForm :fields="formFields" />
        <ExportTools :tableHeader="tableHeader"/>
        <Table :header="tableHeader" />
        <ButtonsAdd />
    </div>
</template>

<script setup>
const store = useItemStore();
const formStore = useFormStore();

// const initialData = store.items;
const reportTitle = "تقرير طلب صرف";
const formFields = [
    { name: 'sparePartsName', label: ' اسم قطعة الغيار', type: 'text' },
    { name: 'sparePartsCategoriy', label: ' تصنيف قطعة المعدة', type: 'text' },
    { name: 'storekeeper', label: 'رقم قطعة الغيار', type: 'number', placeholder: 'Enter sotre Kepper name' },
    { name: 'sparePartsCode', label: ' الوحدة', type: 'number', placeholder: 'Enter quantity' },
    { name: 'storekeeper', label: 'الحد الادني من رصيد قطع الغيار', type: 'number', placeholder: 'Enter sotre Kepper name' },
];
const tableHeader = [
        { name: 'الكود', key: 'code' },
        { name: ' اسم الصنف', key: 'reportType' },
        { name: 'الكود', key: 'code' },
        { name: 'القسم التابع له ', key: 'quantity' },
        { name: ' الغرض من وجوده', key: 'storekeeper' },
        { name: 'الحد الادني', key: 'date' }
    ];
const staticFormConfig = [
    { name: 'sectionTitle', type: 'text', label: 'اسم القسم' },
    { name: 'supplier', type: 'text', label: 'اسم المورد' },
    { name: 'reciverName', type: 'text', label: 'اسم المستلم ' },
    { name: 'date', type: 'date', label: 'التاريخ ' },
]
const form1Config = [

    { name: 'customerNumber', type: 'text', label: 'اسم العميل ' },
    { name: 'driverNumber', type: 'text', label: 'اسم السائق ' },
    { name: 'responsbalName', type: 'text', label: 'اسم المسئول ' },
    { name: 'checkNumber', type: 'number', label: 'رقم البوليصه ' },
];

const form2Config = [
    { name: 'customerNumber', type: 'text', label: 'اسم العميل ' },
    { name: 'driverNumber', type: 'text', label: 'اسم السائق ' },
    { name: 'responsbalName', type: 'text', label: 'اسم المسئول ' },
    { name: 'checkNumber', type: 'number', label: 'رقم البوليصه ' },
];
const reportformFields = [
    { name: 'receiver', label: 'المستلم', placeholder: '..............', type: 'text' },
    { name: 'sparePartsManager', label: 'مسؤول عن مخزون قطع الغيار', placeholder: '..............', type: 'text', highlighted: true },
    { name: 'manager', label: 'المدير العام', placeholder: '..............', type: 'text' },
]
// // Initialize forms
// formStore.initializeForm("form1", form1Config);
// formStore.initializeForm('form2', form2Config);
</script>