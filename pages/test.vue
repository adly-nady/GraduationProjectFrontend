<!-- layout.vue | page.vue | component.vue -->

<template>
  <div dir="ltr">
    <h1 class="title bg-red-600 mt-11">Nuxt Gsap</h1>
    <button @click="onClick">click</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useNuxtApp } from '#app'

const { $gsap } = useNuxtApp()

const indecator = ref(true)

const onClick = () => {
  indecator.value = !indecator.value
  if (indecator.value) {
    $gsap.to('.title', { width: 600, duration: 1, onStart: () => {
      document.querySelector('.title').style.display = 'block'
    }})
  } else {
    $gsap.to('.title', { width: 0, duration: 1, onComplete: () => {
      document.querySelector('.title').style.display = 'none'
    }})
  }
}

onMounted(() => {
  $gsap.to('.title', { rotation: 3, x: 100, duration: 1 })
})
</script>