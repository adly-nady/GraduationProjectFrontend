<template>
  
  <div  class="page">
    <Sidebar></Sidebar>
    <Header></Header>
    <div class="page-wrapper">
      <Body></Body>
      <Footer></Footer>
    </div>
  </div>

</template>


<script setup>
import '@/public/dist/css/tabler.min.css';
import '@/public/dist/css/tabler-flags.min.css';
import '@/public/dist/css/tabler-payments.min.css';
import '@/public/dist/css/tabler-vendors.min.css';
import '@/public/dist/css/demo.min.css';
import Header from './src/Header.vue';
import Footer from './src/Footer.vue';
import Body from './src/component/Body.vue';
import Sidebar from './src/Sidebar.vue';
console.log(useRuntimeConfig().public.baseURL);
  
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
</style>