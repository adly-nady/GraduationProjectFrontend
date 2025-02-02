<template>
    <div class="wrapper overflow-scroll bg-white  absolute top-4 w-full  left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-1 justify-center items-center ">
        <div class="flex  gap-1 mt-[200px] justify-around items-center h-[80px] bg-red w-[95%]  ">   
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
        { label: 'Select Sample', type: 'text' },
        { label: 'Moisture', type: 'number' },
        { label: 'Wet Gluten', type: 'number' },
        { label: 'Dry Gluten', type: 'number' },
        { label: 'Index', type: 'number' },
        { label: 'Falling Number', type: 'number' },
        { label: 'Ash', type: 'number' },
        { label: 'Residue Ration', type: 'number' },
        { label: 'Date', type: 'date' },
        { label: 'Time', type: 'time' },
        { label: 'Notes', type: 'textarea' }
      ];
     let tableFields= [
     { label: 'Date', model: 'date' },
        { label: 'Time', model: 'time' },
        { label: 'Note', model: 'notes' },
        { label: 'Starch', model: 'starch' },
        { label: 'Residue Ratio', model: 'residue_ration' },
        { label: 'Ash', model: 'ash' },
        { label: 'Fall Number', model: 'falling_number' },
        { label: 'Index', model: 'index' },
        { label: 'Dry Gluten', model: 'dry_gluten' },
        { label: 'Moisture', model: 'moisture' },
        { label: 'Sample', model: 'sample' },
        { label: 'Number', model: 'number' }
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