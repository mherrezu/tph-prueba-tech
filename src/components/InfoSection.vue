<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    }
  },
};
</script>

<template>
  <section class="info-section">
    <span class="icon">★</span>
    <p>{{ text }}</p>
    <span class="icon">★</span>
  </section>
</template>

<style scoped>
.info-section {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  background-color: var(--color-primary);
  padding: 20px 40px;
  color: black;
}

p {
  font-size: 2rem;
  font-weight: normal;
}

.icon {
  font-size: 1rem;
  font-weight: bold;
}

@media (max-width: 768px) {
  p {
    font-size: 1.25rem;
    font-weight: normal;
  }
}
</style>
