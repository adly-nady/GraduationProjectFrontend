<template>
    <div class="flex w-full gap-3 justify-start">
        <!-- Print Button -->
        <button @click="printTable" class="py-3 rounded-lg  hover:bg-blue-200 flex flex-col items-center">
            <img :src="print" alt="Print" class="w-10 h-10" />
            <span class="mt-1 text-sm font-semibold">Print</span>
        </button>

        <!-- Export to PDF Button -->
        <button @click="exportToPDF" class="py-3 rounded-lg  hover:bg-red-200 flex flex-col items-center">
            <img :src="pdf" alt="PDF" class="w-10 h-10" />
            <span class="mt-1 text-sm font-semibold">PDF</span>
        </button>

        <!-- Export to Excel Button -->
        <button @click="exportToExcel"
            class="py-3 rounded-lg  hover:bg-green-200 flex flex-col items-center">
            <img :src="excel" alt="Excel" class="w-10 h-10" />
            <span class="mt-1 text-sm font-semibold">Excel</span>
        </button>
    </div>
</template>

<script setup>
import { jsPDF } from 'jspdf';
import 'jspdf-autotable';
import * as XLSX from 'xlsx';
import print from '../assets/icons/Print.png';
import excel from '../assets/icons/Excel.png';
import pdf from '../assets/icons/Pdf.png';
import html2canvas from 'html2canvas';

const store = useItemStore();
const items = store.items;
const tableData = items;

// Function to print the table
function printTable() {
    const printWindow = window.open('', '_blank');
    const tableHTML = generateTableHTML(tableData);
    printWindow.document.write(`
    <html>
      <head>
        <title>Print Table</title>
      </head>
      <body>
        ${tableHTML}
      </body>
    </html>
  `);
    printWindow.document.close();
    printWindow.print();
}


// Function to export table data to PDF
function exportToPDF() {
    const pdf = new jsPDF('p', 'mm', 'a4');

    // Ensure the tableData is accessible using .value
    const tableData = items.value;
    if (!tableData || tableData.length === 0) {
        console.error('No table data available to export');
        return;
    }

    const columns = Object.keys(tableData[0]); // Column headers
    const rows = tableData.map((row) => Object.values(row)); // Table rows

    // Generate the table as an HTML table
    const tableHTML = `
    <table>
      <thead>
        <tr>${columns.map((col) => `<th>${col}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${rows
            .map(
                (row) =>
                    `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`
            )
            .join('')}
      </tbody>
    </table>
  `;

    // Use html2canvas to render the table as an image
    html2canvas(tableHTML, { scale: 2 }).then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pageWidth = pdf.internal.pageSize.getWidth();
        const pageHeight = pdf.internal.pageSize.getHeight();

        const imgWidth = (canvas.width / 96) * 25.4;
        const imgHeight = (canvas.height / 96) * 25.4;
        const scaleFactor = Math.min(pageWidth / imgWidth, pageHeight / imgHeight);
        const finalWidth = imgWidth * scaleFactor;
        const finalHeight = imgHeight * scaleFactor;

        pdf.addImage(imgData, 'PNG', 0, 0, finalWidth, finalHeight);
        pdf.save('table.pdf');
    });
}
// Function to export table data to Excel
function exportToExcel() {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    XLSX.writeFile(workbook, 'table.xlsx');
}

// Helper function to generate table HTML for printing
function generateTableHTML(data) {
    const columns = Object.keys(data[0]); // Column headers
    const rows = data.map((row) => `<tr>${Object.values(row).map((cell) => `<td>${cell}</td>`).join('')}</tr>`);

    return `
    <table border="1" style="width: 100%; border-collapse: collapse;">
      <thead>
        <tr>${columns.map((col) => `<th>${col}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${rows.join('')}
      </tbody>
    </table>
  `;
}

</script>

<style scoped>
/* Add any additional styles here */
</style>
