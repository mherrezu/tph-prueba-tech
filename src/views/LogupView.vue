<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import LogUp from '@/components/LogUp.vue'
</script>

<template>
  <HeaderItem logo="Iron"
    :router-links="[{ title: 'Log In', url: 'login', ctaClass: 'cta-login' }, { title: 'Volver a Inicio', url: '/', ctaClass: 'cta-logup' },]" />
  <main>
    <LogUp />
  </main>
</template>