<template>
  <div class="wrapper overflow-scroll bg-white  absolute top-4 w-full  left-0 lg:!w-[98.5%] h-[95%] lg:!h-[90vh] flex flex-col gap-1 justify-center items-center ">
    <h1 class="text-center">Home page (coming soon )</h1>

  </div>

</template>


<script setup>
import Footer from './src/Footer.vue';
import Body from './src/component/Body.vue';

  
</script>
<style scoped>
@import url('https://rsms.me/inter/inter.css');
:root {
	--tblr-font-sans-serif: 'Inter Var', -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
}
body {
	font-feature-settings: "cv03", "cv04", "cv11";
}
.fade-scale-enter-active, .fade-scale-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-scale-enter, .fade-scale-leave-to  {
  opacity: 0;
  transform: scale(0.5) translateY(10);
}
.fade-scale-enter-to, .fade-scale-leave  {
  opacity: 1;
  transform: scale(2) translateY(5);
}

@media print {
  aside {
          visibility: hidden !important;
        }
     nav{
        visibility: hidden !important;
     }

}
       
 

</style>