<script setup>
import HeaderItem from './components/HeaderItem.vue'
import HeroSection from './components/HeroSection.vue'
import FooterItem from './components/FooterItem.vue'
import InfoSection from './components/InfoSection.vue'
import TrainingsSection from './components/TrainingsSection.vue'
import PhiloSection from './components/PhiloSection.vue'
</script>

<template>
  <HeaderItem logo="Iron"
    :links="[{ title: 'Entrenamientos', url: 'trainings' }, { title: 'Filosofía', url: 'philo' }, { title: 'Contacto', url: 'footer' }]"
    :router-links="[{ title: 'Entrar', url: 'login', ctaClass: 'cta-login' }, { title: 'Registro', url: 'logup', ctaClass: 'cta-logup' }]" />
  <main>
    <HeroSection title="Hierro para tu cuerpo"
      description="Aprende a entrenar, a disfrutar de ello y consigue tu mejor versión."
      :cta="{ title: 'Es tu momento', url: 'login' }" />
    <InfoSection text="COMIENZA A SER UN ATLETA HÍBRIDO" />

    <TrainingsSection title="Nuestros entrenamientos" description="Descubre los mejores tipos de entrenamientos adaptados a tus objetivos.
        Ya sea que busques fuerza, resistencia o relajación, ¡tenemos lo que necesitas!" :trainings="[
          {
            image: '/training.jpg',
            title: 'Entrenamiento de Fuerza',
            description: 'Mejora tu fuerza con ejercicios de peso y resistencia.'
          },
          {
            image: '/team.jpg',
            title: 'Entrenamiento de Fuerza',
            description: 'Quema calorías y mejora tu resistencia cardiovascular.',
          },
          {
            image: '/pesas.jpg',
            title: 'Entrenamiento de Fuerza',
            description: 'Relaja tu mente y mejora tu flexibilidad corporal.',
          },
          {
            image: '/outdoor.jpg',
            title: 'Entrenamiento de Fuerza',
            description: 'Entrenamientos de alta intensidad para resultados rápidos.'
          }]" />
    <PhiloSection title="Nuestra <span>filosofía</span>"
      description="En Iron Club creemos que el entrenamiento es una parte fundamental de la vida.
        Por eso, nos esforzamos en ofrecerte la mejor experiencia de entrenamiento, para que puedas disfrutar de cada sesión y alcanzar tus objetivos."
      :image="{ url: '/philo.jpg', alt: 'Imagen representativa de la filosofía' }" />
  </main>
  <FooterItem logo="Iron" company="Iron Club" address="C/ Cuenca 7, Vigo" instagram="" />
</template>