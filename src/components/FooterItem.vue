<script>
import { getCurrentYear } from "@/utils/getCurrentYear.js";
export default {
  props: {
    logo: {
      type: String,
      default: "",
    },
    company: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      default: "",
    },
    instagram: {
      type: String,
      default: "",
    },
  },
  computed: {
    year() {
      return getCurrentYear();
    },
  },
}
</script>

<template>
  <footer id="footer" class="footer">
    <div class="footer-content">
      <div class="footer-left">
        <h1 class="logo">{{ logo }}</h1>
        <p>© {{ year }} {{ company }}</p>
      </div>

      <div class="footer-address">
        <p class="address-name">{{ company }} ®</p>
        <p>{{ address }}</p>
      </div>

      <div class="footer-social">
        <p class="instagram-name">Síguenos en</p>
        <a :href="`https://www.instagram.com/${instagram}`" class="instagram-link">Instagram</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-primary);
  color: black;
  padding: 40px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  max-width: 1200px;
  width: 100%;
}

.footer-left {
  text-align: left;
}

.footer-left .logo {
  max-width: 150px;
  margin-bottom: 10px;
}

.logo {
  font-size: 3.5rem;
  font-family: 'Permanent Marker', cursive;
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: black;
  text-decoration: none;
  font-size: 0.9rem;
}

.footer-links a:hover {
  text-decoration: underline;
}

.address-name,
.instagram-name {
  font-weight: bold;
  font-size: 1.25rem;
}

.footer-social {
  text-align: right;
}

.footer-social p {
  margin: 0 0 10px;
}

.instagram-link {
  font-family: 'Leagues Spartan', sans-serif;
  color: var(--color-dark);
  padding: 6px 12px;
  border: 1px solid var(--color-dark);
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.instagram-link:hover {
  background-color: var(--color-dark);
  color: var(--color-light);
}

@media (max-width: 768px) {
  .logo {
    font-size: 2rem;
    font-family: 'Permanent Marker', cursive;
  }

  .address-name,
  .instagram-name {
    font-weight: bold;
    font-size: 1rem;
  }

  .instagram-link {
    font-size: 0.75rem;
  }
}
</style>
