<script>
export default {
  props: {
    logo: {
      type: String,
      default: "",
    },
    links: {
      type: Array,
      default: () => [],
    },
    routerLinks: {
      type: Array,
      default: () => [],
    },
  }
}
</script>

<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">{{ logo }}</h1>
      <nav>
        <ul class="nav-list">
          <li v-for="link in links" :key="`link-${link.title}`">
            <a :href="`#${link.url}`">{{ link.title }}</a>
          </li>
          <li v-for="route in routerLinks" :key="`link-${route.title}`">
            <RouterLink :to="`${route.url}`" :class="`${route.ctaClass}`">{{ route.title }}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  border-bottom: 1px solid var(--color-border);
  font-size: 16px;
  z-index: 1000;
  background-color: var(--vt-c-white-soft);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 20px auto;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 20px;
}

li {
  display: inline-block;
}

h1 {
  font-size: 2rem;
  margin: 0;
  font-family: 'Permanent Marker', cursive;
  color: #000;
}


a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: var(--color-primary);
}

.cta-login {
  background-color: var(--color-primary-dark);
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-logup {
  background-color: var(--color-light);
  color: var(--color-dark);
  padding: 6px 12px;
  border: 1px solid var(--color-dark);
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.cta-login:hover {
  background-color: var(--color-primary);
  color: var(--color-light);
}

.cta-logup:hover {
  background-color: var(--color-dark);
  color: var(--color-light);
}
</style>