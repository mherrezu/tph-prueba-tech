<script setup>
import HeaderItem from '@/components/HeaderItem.vue'
import LogIn from '@/components/LogIn.vue'
</script>

<template>
  <HeaderItem logo="Iron"
    :router-links="[{ title: 'Registro', url: 'logup', ctaClass: 'cta-login' }, { title: 'Volver a Inicio', url: '/', ctaClass: 'cta-logup' },]" />
  <main>
    <LogIn />
  </main>
</template>
