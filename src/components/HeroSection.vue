<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    cta: {
      type: Object,
      default: () => ({}),
    },
  },
}
</script>

<template>
  <section class="hero">
    <div class="hero-overlay">
      <div class="hero-content">
        <h2>{{ title }}</h2>
        <p>{{ description }}</p>
        <RouterLink :to="`/${cta.url}`" class="cta-button">{{ cta.title }}</RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  height: 100vh;
  background-image: url("/hero.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  max-width: 600px;
  text-align: center;
  color: white;
  padding: 20px;
}

.hero-content h2 {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  font-family: 'Helvetica Neue', sans-serif;
}

.cta-button {
  background-color: var(--color-primary-dark);
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--color-primary);
}
</style>
