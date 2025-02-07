<template>
    <div
    class="wrapper bg-white absolute top-4 w-full left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-2 justify-center items-center ">
        <ReportsTest v-if="store.isToggled && store.content" :reportTitle="store.content.reportTitle"
            class="flex flex-col">
            <!-- <ReportsRadioForm /> -->
            <div class="flex flex-col justify-center gap-2 mt-1">
                <ReportsForm :formField="store.content.formFields" :dataSet="store.content.dataSet" />

            </div>
            <ReportsTable :header="store.content.tableHeader" />
            <ReportsEnd :formFields="reportformFields" />
        </ReportsTest>
        <SectionTitle title="قسم مخزن قطع الغيار" />
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
            name: "اذن صرف",
            content: {
                reportTitle: "اذن صرف",
                formFields: [
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'اسم الشخص : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'reciverName', type: 'date'  },
            ],
                dataSet: staticFormConfig,
                tableHeader: [
                    { name: 'اسم القسم' },
                    { name: 'الكمية' },
                    { name: 'الوحدة' },
                    { name: 'سبب الطلب' },
                    { name: 'رصيد بعد' },
                    { name: 'الملاحظات ' }
                ]
            }
        },
        {
            name: "اذن استلام",
            content: {
                reportTitle: "اذن استلام",
                formFields: [
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'اسم الفني : ' },
                { name: 'reciverName', type: 'text', label: 'امر الشراء : ' },
                { name: 'reciverName', type: 'date'  },
            ],
                dataSet: staticFormConfig,
                tableHeader: [
                    { name: 'اسم القطعه' },
                    { name: 'الوحدة' },
                    { name: 'الكمية' },
                    { name: 'رصيد قبل' },
                    { name: 'رصيد بعد' },
                    { name: 'الملاحظات ' }
                ]
            }
        },
        {
            name: "اذن استلام مرتجع",
            content: {
                reportTitle: "اذن استلام مرتجع",
                formFields: [
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المورد : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'customerName', type: 'text', label: ' اسم المرتجع: ' },
                { name: 'reciverName', type: 'date'  },
            ],
                dataSet: staticFormConfig,
                tableHeader: [
                    { name: 'اسم الصنف' },
                    { name: 'الكمية ' },
                    { name: 'الوحدة' },
                    { name: 'سبب الارجاع' },
                    { name: 'رصيد قبل الارجاع' },
                    { name: 'الملاحظات ' }
                ]
            }
        },
        {
            name: "تقرير طلب شراء",
            content: {
                reportTitle: "تقرير طلب شراء",
                formFields: [
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'customerName', type: 'text', label: ' اسم العميل: ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'customerName', type: 'text', label: ' اسم المتخصص: ' },
                { name: 'reciverName', type: 'date'  },
            ],
                dataSet: staticFormConfig, tableHeader: [
                    { name: 'اسم الصنف' },
                    { name: 'الوحدة' },
                    { name: 'الكمية الحالية' },
                    { name: 'الكمية المطلوبة' },
                    { name: 'السعر' },
                    { name: 'الملاحظات ' }
                ]
            }
        },
        {
            name: "اذن طلب فحص",
            content: {
                reportTitle: "اذن طلب فحص",
                formFields: [
                { name: 'departmentName', type: 'text', label: 'اسم القسم : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المورد : ' },
                { name: 'reciverName', type: 'text', label: 'اسم المستلم : ' },
                { name: 'customerName', type: 'text', label: ' اسم العميل: ' },
                { name: 'reciverName', type: 'date'  },
                { name: 'customerName', type: 'text', label: ' اسم السائق: ' },
                { name: 'customerName', type: 'text', label: ' اسم المسئول: ' },
                { name: 'reciverName', type: 'text', label: 'رقم البوليصه : ' },
            ],
                dataSet: staticFormConfig,
                tableHeader: [
                    { name: 'اسم المنتج' },
                    { name: 'الوحدة' },
                    { name: 'الكمية ' },
                    { name: ' الفحص' },
                    { name: 'السعر' },
                    { name: 'الملاحظات ' }
                ]
            }
        },
    ]

</script>
