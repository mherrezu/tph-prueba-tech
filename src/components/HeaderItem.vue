<template>
  <header class="header">
    <div class="container">
      <h1 class="logo">{{ logo }}</h1>

      <div class="menu-toggle" @click="toggleMenu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <nav :class="{ 'open': menuOpen }">
        <ul class="nav-list">
          <li v-for="link in links" :key="`link-${link.title}`">
            <a :href="`#${link.url}`" @click="toggleMenu">{{ link.title }}</a>
          </li>
          <li v-for="route in routerLinks" :key="`link-${route.title}`">
            <RouterLink :to="`${route.url}`" :class="`${route.ctaClass}`" @click="toggleMenu">
              {{ route.title }}
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

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
  },
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>

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

/* Menú en móvil */
.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 18px;
  cursor: pointer;
}

.menu-toggle .bar {
  height: 2px;
  width: 25px;
  background-color: black;
  border-radius: 2px;
}

/* Navegación en móvil */
nav {
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.3s ease-in-out;
  background-color: var(--vt-c-white-soft);
  z-index: 999;
}

nav.open {
  transform: translateY(0);
}

.nav-list {
  flex-direction: column;
  padding: 20px;
  list-style: none;
  display: none;
  gap: 10px;
}

nav.open .nav-list {
  display: flex;
}

@media (max-width: 600px) {
  .menu-toggle {
    display: flex;
  }

  nav {
    transform: translateY(-100%);
  }

  nav.open {
    transform: translateY(0);
  }

  .nav-list {
    display: none;
  }

  nav.open .nav-list {
    display: flex;
  }
}

@media (min-width: 600px) {
  .menu-toggle {
    display: none;
  }

  nav {
    position: static;
    transform: translateY(0);
    display: flex;
    justify-content: flex-end;
  }

  .nav-list {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-self: center;
  }
}
</style>
