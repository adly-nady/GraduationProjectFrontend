<template>
    <div
        class="wrapper bg-white absolute bottom-0 w-full left-0 lg:!w-[94%] h-[95%] lg:!h-[90vh] lg:!justify-start lg:!align-start flex flex-col justify-center items-center gap-3 ">
        <SectionTitle title="الاقسام والتقارير" />
        <div class="flex justify-start items-center flex-wrap w-full gap-10 p-6">
            <Card departmentTitle="قسم العبوة والمخازن التام" :buttons="packingButtons"
                departmentDetails="قسم العبوة والمخازن التام" route="/warhouses/warhouse" />
            <Card departmentTitle="قسم قطع الغيار" departmentDetails="اضافة عنصر الي مخزت قطع الغيار"
                route="/warhouses/sparepartswarhouse" :buttons="sparePartsButtons" />
        </div>
    </div>
</template>

<script setup>
    const packingButtons =[
        { name: "انشاء اصناف", route: "/warhouses/warhouse" },
        { name: " انشاء تقارير", route: "/reports/makers/packingWarhouse" },
        { name: "سجلات تقارير", route: "/warhouses/warhouse" },
    ]
const sparePartsButtons = [
    { name: "انشاء اصناف", route: "/warhouses/sparepartswarhouse" },
    { name: " انشاء تقارير", route: "/reports/makers/sparepartswarhouse" },
    { name: "سجلات تقارير", route: "/warhouses/sparepartswarhouse" },
]

</script>

<style lang="sass" scoped>

</style>