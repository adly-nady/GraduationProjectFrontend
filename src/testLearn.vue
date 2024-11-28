<template>
    <div class="adly">
      <h1>Home</h1>
      <input type="email" placeholder="email" class="class1" id="id_adly_email" data-adlsho="adlsho1" ref="email" />
      <input type="text" placeholder="name" class="class2" id="id_adly_name" data-adlsho="adlsho2" ref="name" />
      <button @click="shows">Show</button>
      {{values}}
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  let email = ref(null);
  let name = ref(null);

  
  const shows = () => {
    console.log(`{email: ${email.value.value}, name: ${name.value.value}}`);
    console.log(`{email: ${email.value.id}, name: ${name.value.id}}`);
    console.log(`{email: ${email.value.className}, name: ${name.value.className}}`);
    console.log(`{email: ${email.value.dataset.adlsho}, name: ${name.value.dataset.adlsho}}`);
  };
  </script>
  