<template>
    <div
    class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
        <ReportsTest v-if="store.isToggled && store.content" :reportTitle="store.content.reportTitle"
            class="flex flex-col">
            <ReportsRadioForm/>
            <div class="flex flex-col justify-center gap-2 mt-1">
                <ReportsForm :formField="store.content.formFields" :dataSet="store.content.dataSet" />
            </div>
            <ReportsTable :header="store.content.tableHeader" />
            <ReportsEnd :formFields="reportformFields" />
        </ReportsTest>
        <SectionTitle title=" قسم مخزن الخيش " />
        <ReportsReportMakerTable :header="tableHeader" :tableBody="tableBody" @update:tableBody="updateTableBody" />
        <ReportsReportMakerFooter :footerData="footer" />
    </div>
</template>

<script setup>
import { useToggleStore } from '../../stores/reportStore';

const store = useToggleStore();
const tableHeader = [
    { text: 'تحديد', value: 'تحديد' },
    { text: 'اسم الصنف', value: 'اسم الصنف' },
    { text: 'الوحده', value: 'الوحده' },
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
    { name: 'departmentName', type: 'text', label: 'اسم القسم ' },
    { name: 'reciverName', type: 'text', label: 'اسم المستلم ' },
    { name: 'date', type: 'text', label: ' التاريح ' },
];
const staticFormConfig = [
    { name: 'sectionTitle', type: 'text', label: 'اسم القسم' },
    { name: 'supplier', type: 'text', label: 'اسم المورد' },
    { name: 'reciverName', type: 'text', label: 'اسم المستلم ' },
    { name: 'date', type: 'date', label: 'التاريخ ' },
]
const reportformFields = [
    { name: 'departmentName', type: 'text', label: ' المدير العام ' },
    { name: 'date', type: 'text', label: 'مسئول عن  العبوة ومخازن التام ' },
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
        name: " تقرير الاستلام ",
        content: {
            reportTitle: " تقرير الاستلام ",
            formFields: [
                { name: 'customerName', type: 'text', label: ' اسم العميل: ' },
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'المورد : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'reciverName', type: 'text', label: 'رقم البوليصه : ' },
                { name: 'reciverName', type: 'date'  },
            ],
            dataSet: staticFormConfig,
            tableHeader: [
            { name: 'اسم الصنف' },
                { name: 'وزن الشكارة' },
                { name: 'المقاس' },
                { name: 'رصيد قبل' },
                { name: 'رصيد وارد' },
                { name: ' رصيد بعد' },
                { name: 'الملاحظات ' }
            ]
        }
    },
    {
        name: "تقرير طلب صرف",
        content: {
            reportTitle: "تقرير طلب صرف", 
            formFields: [
                { name: 'customerName', type: 'text', label: ' اسم العميل: ' },
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'المورد : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'reciverName', type: 'text', label: 'رقم البوليصه : ' },
                { name: 'reciverName', type: 'date'  },
            ],
            dataSet: staticFormConfig,
            tableHeader: [
                { name: 'اسم الصنف' },
                { name: ' رقم طلب الصرف' },
                { name: 'الوحدة' },
                { name: ' رصيد الصرف' },
                { name: 'الملاحظات ' }
            ]
        }
    },
   
]

</script>