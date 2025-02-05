<template>
    <div
    class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
        <ReportsLab v-if="store.isToggled && store.content" 
            class="flex flex-col">
        </ReportsLab>
        <ReportsReportMakerTable :header="tableHeader" :tableBody="tableBody" @update:tableBody="updateTableBody" />
        <ReportsReportMakerFooter :footerData="footer" />
    </div>
</template>

<script setup>
    import { useToggleStore } from '../../stores/reportStore';

    const store = useToggleStore();
    const tableHeader = [
        { text: 'Column 1', value: 'column1' },
        { text: 'Column 2', value: 'column2' },
        { text: 'Column 3', value: 'column3' },
    ]
    const tableBody = ref([
        { name: 'Item 1', code: 'A123', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
        { name: 'Item 2', code: 'B456', isChecked: false },
    ]);
    const form1Config = [

        { name: 'customerNumber', type: 'text', label: 'اسم العميل ' },
        { name: 'driverNumber', type: 'text', label: 'اسم السائق ' },
        { name: 'responsbalName', type: 'text', label: 'اسم المسئول ' },
        { name: 'checkNumber', type: 'number', label: 'رقم البوليصه ' },
    ];
    const staticFormConfig = [
        { name: 'sectionTitle', type: 'text', label: 'اسم القسم' },
        { name: 'supplier', type: 'text', label: 'اسم المورد' },
        { name: 'reciverName', type: 'text', label: 'اسم المستلم ' },
        { name: 'date', type: 'date', label: 'التاريخ ' },
    ]
const reportformFields = [
    { name: 'departmentName', type: 'text', label: ' المدير العام ' },
    { name: 'date', type: 'text', label: 'مسئول عن قسم قطع الغيار ' },
    { name: 'date', type: 'text', label: 'المستلم ' },
]
    const reprotTableHeader = [
        { name: 'اسم الصنف' },
        { name: 'الوحدة' },
        { name: 'رصيد قبل' },
        { name: 'رصيد صرف' },
        { name: 'رصيد بعد' },
        { name: 'الملاحظات ' }
    ];
    const updateTableBody = (updatedBody) => {
        tableBody.value = updatedBody;
    };
    const footer = [
        {
            name: "lab1",
            content: {
                reportTitle: " ",
            }
        },
    ]

</script>