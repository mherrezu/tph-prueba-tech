<template>
  <section class="philosophy-section">
    <div class="philosophy-text">
      <h2 class="philosophy-title" v-html="title"></h2>
      <p class="philosophy-description">{{ description }}</p>
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
}

.philosophy-image {
  flex: 1;
  max-width: 50%;
  text-align: right;
}

.philosophy-image img {
  width: 70%;
  height: auto;
  border: 1px solid var(--color-dark-soft);
}

@media (max-width: 768px) {
  .philosophy-section {
    flex-direction: column;
    text-align: center;
  }

  .philosophy-text,
  .philosophy-image {
    max-width: 100%;
  }

  .philosophy-image {
    margin-top: 20px;
  }
}
</style>
