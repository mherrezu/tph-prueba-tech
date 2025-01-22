<template>
  <section id="philo" class="philosophy-section">
    <div class="philosophy-text">
      <h2 class="philosophy-title" v-html="title"></h2>
      <p class="philosophy-description">{{ description }}</p>
      <RouterLink :to="`/${cta.url}`" class="cta-button">{{ cta.title }}</RouterLink>
    </div>
    <div class="philosophy-image">
      <img :src="image.url" :alt="image.alt" />
    </div>
  </section>
</template>

<script>
export default {
  name: "PhilosophySection",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default:
        "",
    },
    image: {
      type: Object,
      default: () => ({}),
    },
    cta: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.philosophy-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-dark);
  color: #fff;
  padding: 60px 40px;
  gap: 20px;
}

.philosophy-text {
  flex: 1;
  max-width: 50%;
}

.philosophy-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: var(--color-primary);
}

.philosophy-description {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 20px;
}

.philosophy-image {
  flex: 1;
  max-height: 100%;
  text-align: right;
}

.philosophy-image img {
  width: 70%;
  height: auto;
  border: 1px solid var(--color-dark-soft);
}

.cta-button {
  padding: 10px 20px;
  border: 1px solid var(--color-light);
  border-radius: 20px;
  font-size: 1.2rem;
  color: var(--color-light);
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-button:hover {
  background-color: var(--color-light);
  color: var(--color-dark);
}

@media (max-width: 768px) {
  .philosophy-title {
    margin-bottom: 10px;
  }

  .philosophy-description {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .philosophy-section {
    flex-direction: column;
    padding: 40px 20px;
  }

  .philosophy-text {
    max-width: 100%;
  }

  .philosophy-image {
    max-width: 100%;
  }

  .philosophy-image img {
    width: 100%;
    margin-top: 12px;
  }
}
</style>
