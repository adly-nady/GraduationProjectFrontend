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

let formFields= [
          { label: 'Type Of Product', type: 'text' },
          { label: 'Ash', type: 'text' },
          { label: 'Humidity', type: 'text' },
          { label: 'Falling Number', type: 'text' },
          { label: 'Wet Gluten', type: 'text' },
          { label: 'Percentage of Waste', type: 'text' },
          { label: 'Dry Gluten', type: 'text' },
          { label: 'Date', type: 'date' },
          { label: 'Time', type: 'time' },
          { label: 'Notes', type: 'textarea' },
        ]
     let tableFields= [
          { label: 'Date_EP', key: 'date' },
          { label: 'Time_EP', key: 'time' },
          { label: 'Note_EP', key: 'note' },
          { label: 'Number_EP', key: 'number' },
          { label: 'Ash_Ep', key: 'ash' },
          { label: 'Dry_Gluten_Ep', key: 'dryGluten' },
          { label: 'Wet_Gluten_Ep', key: 'wetGluten' },
          { label: 'Humidity_Ep', key: 'humidity' },
          { label: 'Time _Ep', key: 'timeEp' },
          { label: 'Type Of Product', key: 'productType' },
          { label: 'Number Ep', key: 'numberEp' }
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