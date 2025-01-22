<template>
  <section id="trainings" class="training-section">
    <div class="training-header">
      <h2 class="training-title">{{ title }}</h2>
      <p class="training-description">{{ description }}</p>
    </div>

    <div class="training-types">
      <div class="card" v-for="(training, index) in trainings" :key="index">
        <img :src="training.image" :alt="training.title" class="card-image" />
        <div class="card-content">
          <h3 class="card-title">{{ training.title }}</h3>
          <p class="card-description">{{ training.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TrainingTypes",
  props: {
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    trainings: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style scoped>
.training-section {
  padding: 70px 40px;

}

.training-header {
  margin-bottom: 30px;
}

.training-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--color-primary-dark);
}

.training-description {
  font-size: 1rem;
  font-family: 'Leagues Spartan', sans-serif;
  color: var(--color-dark);
  max-width: 700px;
}

.training-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.card-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ccc;
}


.card-title {
  font-size: 1.5rem;
  margin: 4px 0;
  color: var(--color-dark);
}

.card-description {
  font-size: 0.9rem;
  font-family: 'Leagues Spartan', sans-serif;
  color: var(--color-dark);
}

@media (max-width: 768px) {
  .training-types {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .training-types {
    grid-template-columns: 1fr;
  }
}
</style>
