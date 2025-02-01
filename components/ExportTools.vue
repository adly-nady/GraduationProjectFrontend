<template>
  <div class="flex w-full gap-3 justify-start">
    <!-- Print Button -->
    <button @click="showPrintModal" class="py-3 rounded-lg  hover:bg-blue-200 flex flex-col items-center">
      <img :src="print" alt="Print" class="w-10 h-10" />


    </button>
     <!-- Print modal -->
     <div v-if="isPrintModalVisible" class="fixed z-30 inset-0 flex items-center justify-center bg-gray-500 bg-opacity-75">
      <div class="bg-white p-4 rounded-lg shadow-lg w-3/4 h-3/4 overflow-auto">
        <div ref="printArea" class="print-area">
          <!-- The table content will be injected here -->
        </div>
        <div class="flex justify-end mt-4 no-print">
          <button @click="printContent" class="mr-2 bg-blue-500 no-print text-white px-4 py-2 rounded">Print</button>
          <button @click="closePrintModal" class="bg-red-500 no-print text-white px-4 py-2 rounded">Close</button>
        </div>
      </div>
    </div>
    <!-- Export to PDF Button -->
    <button @click="exportToPDF" class="py-3 rounded-lg  hover:bg-red-200 flex flex-col items-center">
      <img :src="pdf" alt="PDF" class="w-10 h-10" />

    </button>

    <!-- Export to Excel Button -->
    <button @click="exportToExcel" class="py-3 rounded-lg  hover:bg-green-200 flex flex-col items-center">
      <img :src="excel" alt="Excel" class="w-10 h-10" />

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
const props = defineProps({
  tableHeader: Array,
});
const store = useItemStore();
const items = store.items;
const tableData = items;
console.log(tableData);

const isPrintModalVisible = ref(false);
const printArea = ref(null);

function showPrintModal() {
  const tableHTML = generateTableHTML(tableData);
  isPrintModalVisible.value = true;
  nextTick(() => {
    printArea.value.innerHTML = tableHTML;
  });
}

function closePrintModal() {
  isPrintModalVisible.value = false;
}

function printContent() {
  window.print();
}


// Function to print the table
function printTable() {
  const printWindow = window.open('', '', 'popup');
  // Extract header names
  const headerNames = props.tableHeader.map(header => header.name);

  // Map the table data to match the headers
  const dataWithHeaders = [
    headerNames,
    ...tableData.map(row => props.tableHeader.map(header => row[header.key]))
  ];
  const tableHTML = generateTableHTML(items);

  printWindow.document.write(`
    <html>
      <head>
        <title>Print Table</title>
        <style>
          table {
            width: 100%;
            border-collapse: collapse;
            color:red ;
          }
          .styled-table th, .styled-table td {
            border: 1px solid #ddd;
            padding: 8px;
            margin: 10px;
            border: 1px solid black;
          }
          .styled-table th {
            background-color: #f2f2f2;
            text-align: left;
          }
        </style>
      </head>
      <body>
        ${tableHTML}
        
      </body>
    </html>
  `);
  console.log(printWindow);
  
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
// ...existing code...

function exportToExcel() {
  const tableHeader = [
    { name: 'رقم الاذن', key: 'code' },
    { name: 'نوع التقرير', key: 'reportType' },
    { name: 'الكود', key: 'code' },
    { name: 'الكمية الواردة', key: 'quantity' },
    { name: 'امين المخزن', key: 'storekeeper' },
    { name: 'التاريخ', key: 'date' }
  ];

  // Extract header names
  const headerNames = props.tableHeader.map(header => header.name);

  // Map the table data to match the headers
  const dataWithHeaders = [
    headerNames,
    ...tableData.map(row => props.tableHeader.map(header => row[header.key]))
  ];

  // Create worksheet and workbook
  const worksheet = XLSX.utils.aoa_to_sheet(dataWithHeaders);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

  // Write the file
  XLSX.writeFile(workbook, 'table.xlsx');
}

// Helper function to generate table HTML for printing
function generateTableHTML(data) {
  let tableHTML = '<table class="styled-table"><thead><tr>';
  props.tableHeader.forEach(header => {
    tableHTML += `<th>${header.name}</th>`;
  });
  tableHTML += '</tr></thead><tbody>';
  data.forEach(item => {
    
    tableHTML += '<tr>';
      props.tableHeader.forEach(header => {
      
      tableHTML += `<td>${item[header.key]}</td>`;
    });
    tableHTML += '</tr>';
  });
  tableHTML += '</tbody></table>';
  return tableHTML;
}
</script>

<style scoped>
/* Styles for the table */
.styled-table {
  width: 100%;
  border-collapse: collapse;

}

.styled-table th, .styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  margin: 10px;
  border: 1px solid black;
}

.styled-table th {
  background-color: #f2f2f2;
  text-align: left;
}

/* Hide elements when printing */

</style>
