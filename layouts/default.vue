// layouts/default.vue
<template>
  <Navbar class=" relative !z-[1001]" />
  
   <SideNav/>
   
  <main class="!w-[95%] absolute !left-0 ">
    <slot />
  </main>

</template>

<script>
import SideNav from '~/components/SideNav.vue';
import Sidebar from '~/src/Sidebar.vue';

  
</script>

<style>
  @media print {
  aside {
          visibility: hidden !important;
        }
     nav{
        visibility: hidden !important;
     }

}
</style>