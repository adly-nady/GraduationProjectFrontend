// layouts/default.vue
<template>
  <Navbar />
  
   <SideNav/>
   
  <main class="w-full h-full">
    <slot />
  </main>

</template>

<script>
import SideNav from '~/components/SideNav.vue';
import Sidebar from '~/src/Sidebar.vue';

  
</script>