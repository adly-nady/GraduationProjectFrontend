<template>
    <div class="wrapper overflow-scroll bg-white  absolute top-4 w-full  left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-1 justify-center items-center ">
        <div class="flex  gap-1 mt-[100px] justify-around items-center h-[80px] bg-red w-[95%]  ">   
            <SectionTitle title="قسم المعمل" />
            <div class="flex gap-1 justify-center items-center mt-[30px]">
                <p class="w-[83px] cursor-pointer h-[40px] text-center text-white p-2 rounded-lg bg-[#999999]">input</p>
                <p class="w-[296px] cursor-pointer h-[40px] text-center text-white p-2 rounded-lg bg-[#19477a]">Out Put & Data and Time Operation</p>
                <p class="w-[146px] cursor-pointer h-[40px] text-center text-white p-2 rounded-lg bg-[#19477a]">Additional Data</p>
            </div>
        </div>
        <LapForm :formFields="formFields" />
        <LapTable  :tableFields="tableFields" :tableData="tableData" />
    </div>
</template>


<script setup>

let   formFields=[
        { label: 'Output Afterburning', type: 'text' },
        { label: 'Standard Weight is Empty', type: 'text' },
        { label: 'The Exact Sample Weight', type: 'number' },
        { label: 'Humidity', type: 'number' }
      ];
     let tableFields= [
        { label: 'Time', model: 'time' },
        { label: 'Date', model: 'date' },
        { label: 'Water Test', model: 'water_test' },
        { label: 'Starch Damage', model: 'starch_damage' },
        { label: 'Color Degree', model: 'color_degree' },
        { label: 'Over 250 Micron', model: 'over_250_micron' },
        { label: 'Falling Number', model: 'falling_number' },
        { label: 'Ex Number', model: 'ex_number' },
        { label: 'Gluten', model: 'gluten' },
        { label: 'Dry Ash', model: 'dry_ash' },
        { label: 'Wet Ash', model: 'wet_ash' },
        { label: 'Ash', model: 'ash' },
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