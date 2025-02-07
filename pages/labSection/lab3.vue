<template>
    <div class="wrapper overflow-scroll bg-white  absolute top-4 w-full  left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-1 justify-center items-center ">
        <div class="flex  gap-1 mt-[280px] justify-around items-center h-[80px]  w-[95%]">   
            <SectionTitle title="قسم المعمل" />
            <div class="flex gap-1 justify-center items-center mt-[30px]">
                <img draggable="false" class="cursor-pointer" src="@/assets/icons/lap/generalReport.png" alt="" srcset="">
                <img draggable="false" class="cursor-pointer " src="@/assets/icons/lap/humididtyReport.png" alt="" srcset="">
            </div>
        </div>
        <LapForm :formFields="formFields" />
        <LapTable  :tableFields="tableFields" :tableData="tableData" />
    </div>
</template>


<script setup>

let   formFields=[
{ label: 'CleanLiness', type: 'text' },
        { label: 'Type Of Wheat', type: 'text' },
        { label: 'Date', type: 'date' },
        { label: 'Time', type: 'time' },
        { label: 'Notes', type: 'textarea' },
        { label: 'Weight_10,000_Grain', type: 'number' },
        { label: 'Wet Gluten', type: 'number' },
        { label: 'Dry Gluten', type: 'number' },
        { label: 'Index Number', type: 'number' },
        { label: 'Falling Number', type: 'number' },
        { label: 'Supplier Name', type: 'text' },
        { label: 'Truck Number', type: 'text' },
        { label: 'Quantity KG', type: 'number' },
        { label: 'Quantity Tons', type: 'number' },
        { label: 'Weight Type', type: 'text' },
        { label: 'Humidity', type: 'number' }
      ];
     let tableFields= [
     { label: 'Date', model: 'date' },
        { label: 'CleanLiness', model: 'cleanliness' },
        { label: 'Note', model: 'notes' },
        { label: 'Falling Number', model: 'falling_number' },
        { label: 'Ex Number', model: 'ex_number' },
        { label: 'Dry Gluten', model: 'dry_gluten' },
        { label: 'Wet Gluten', model: 'wet_gluten' },
        { label: 'Humidity', model: 'humidity' },
        { label: 'Wet Type', model: 'wet_type' },
        { label: 'Quantity KG', model: 'quantity_kg' },
        { label: 'Quantity Tons', model: 'quantity_tons' },
        { label: 'Time IW', model: 'time_iw' },
        { label: 'Type of Wheat', model: 'type_of_wheat' },
        { label: 'Number', model: 'number' },
        { label: 'Number IW', model: 'number_iw' }
        ];
     let tableData = [
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          { date: '', time: '', note: '', number: '', ash: '', dryGluten: '', wetGluten: '', humidity: '', timeEp: '', productType: '', numberEp: '' },
          
        ];
</script>


<style>
   
</style>