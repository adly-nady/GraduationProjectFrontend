<!-- components/ProductionForm.vue -->
<template>
  <div class="container">
    <div class="header">
      <div class="logo">
        <!-- <img src="/placeholder.png" alt="FastWill Logo" width="40" height="40"> -->
        <span>قسم العجينة لحركة الانتاج</span>
      </div>
      <div class="user-info">
        <span>{{ userName }}</span>
        <div class="user-avatar"></div>
      </div>
    </div>

    <div class="form-header">
      <div class="form-group">
        <div class="form-field">
          <label>اسم العميل:</label>
          <input type="text" v-model="formData.customerName">
        </div>
        <div class="form-field">
          <label>رقم التسلسل:</label>
          <input type="text" v-model="formData.serialNumber" readonly>
        </div>
        <div class="form-field">
          <label>التاريخ:</label>
          <input type="date" v-model="formData.date">
        </div>
      </div>
    </div>

    <div class="table-container">
      <table id="dataTable">
        <thead>
          <tr>
            <th style="width: 50px;">م</th>
            <th>اسم الشكارة</th>
            <th>وزن الشكارة</th>
            <th>الكمية</th>
            <th>الملاحظات</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in formData.rows" :key="index">
            <td class="row-number">{{ index + 1 }}</td>
            <td><input type="text" v-model="row.name"></td>
            <td><input type="number" v-model="row.weight" step="0.01" min="0"></td>
            <td><input type="number" v-model="row.quantity" step="1" min="0"></td>
            <td><input type="text" v-model="row.notes"></td>
          </tr>
        </tbody>
      </table>

      <div class="controls no-print" style="justify-content: center;">
        <button class="btn btn-success" @click="addRow">إضافة سطر جديد</button>
        <button class="btn btn-primary" @click="printForm">طباعة</button>
      </div>
    </div>

    <div class="footer">
      <div class="footer-item">امين المخزن</div>
      <div class="footer-item">مهندس الجودة</div>
      <div class="footer-item">مدير الانتاج المطحن</div>
      <div class="footer-item">مدير انتاج مصنع الكارتون</div>
    </div>

    <div class="controls no-print">
      <button class="btn btn-primary" @click="navigate('prev')">⬅️</button>
      <button class="btn btn-primary" @click="navigate('next')">➡️</button>
      <button class="btn btn-exit" @click="exit">Exit</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userName: {
    type: String,
    default: 'Taha Shaban'
  },
  initialSerialNumber: {
    type: String,
    default: '0546'
  }
})

const emit = defineEmits(['save', 'navigate', 'exit'])

const formData = ref({
  customerName: '',
  serialNumber: props.initialSerialNumber,
  date: new Date().toISOString().split('T')[0],
  rows: []
})

// Initialize with 7 empty rows
onMounted(() => {
  for (let i = 0; i < 7; i++) {
    addRow()
  }
})

const addRow = () => {
  formData.value.rows.push({
    name: '',
    weight: null,
    quantity: null,
    notes: ''
  })
}

const printForm = () => {
  window.print()
}

const navigate = (direction) => {
  emit('navigate', direction)
}

const exit = async () => {
  if (await confirm('هل تريد الخروج؟')) {
    emit('exit')
  }
}

// Watch for changes and emit save event
watch(formData, (newValue) => {
  emit('save', newValue)
}, { deep: true })

// Handle keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'Enter' || e.key === 'ArrowDown') {
    const inputs = [...document.querySelectorAll('input')]
    const currentIndex = inputs.indexOf(document.activeElement)
    const nextInput = inputs[currentIndex + 1]
    
    if (nextInput) {
      nextInput.focus()
      e.preventDefault()
    } else if (e.key === 'Enter') {
      addRow()
      nextTick(() => {
        const newInputs = document.querySelectorAll('input')
        newInputs[currentIndex + 1]?.focus()
      })
    }
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<style scoped>
/* Base Styles */
.container {
  background-color: white;
  border-radius: 8px;
}

@media screen {
  .container {
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    max-width: 21cm;
    margin: 0 auto;
  }
}

/* Header Styles */
.header {
  background-color: #6c63a9;
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  font-weight: bold;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
}

.user-avatar {
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fff;
}

/* Form Styles */
.form-header {
  padding: 20px;
  border-bottom: 2px solid #eee;
}

.form-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 10px;
  align-items: center;
}

.form-field {
  display: flex;
  align-items: center;
  gap: 10px;
}

.form-field label {
  font-weight: bold;
  color: #444;
}

.form-field input {
  padding: 6px 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
  font-size: 14px;
}

/* Table Styles */
.table-container {
  padding: 20px;
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

th, td {
  border: 1px solid #000;
  padding: 12px;
  text-align: right;
}

th {
  background-color: #f8f9fa;
  font-weight: bold;
  color: #333;
}

td input {
  width: 100%;
  padding: 5px;
  border: none;
  background: transparent;
  font-size: 14px;
}

td input:focus {
  outline: 2px solid #6c63a9;
  background: white;
}

.row-number {
  text-align: center;
  background-color: #f8f9fa;
  font-weight: bold;
}

/* Footer Styles */
.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-top: 2px solid #eee;
  margin-top: 20px;
}

.footer-item {
  text-align: center;
  flex: 1;
  padding: 10px;
  font-weight: bold;
  color: #444;
  position: relative;
}

.footer-item::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 25%;
  width: 50%;
  border-bottom: 1px dotted #999;
}

/* Button Styles */
.controls {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 20px;
}

.btn {
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn-primary {
  background-color: #6c63a9;
  color: white;
}

.btn-success {
  background-color: #28a745;
  color: white;
}

.btn-exit {
  background-color: #dc3545;
  color: white;
}

/* Print Styles */
@media print {
  .no-print {
    display: none !important;
  }

  .container {
    box-shadow: none;
    width: 100%;
  }

  table {
    page-break-inside: auto;
  }

  tr {
    page-break-inside: avoid;
    page-break-after: auto;
  }

  .header {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  th {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  input {
    border: none !important;
  }

  @page {
    size: A4;
    margin: 1cm;
  }
}
</style>