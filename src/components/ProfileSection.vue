<template>
  <section v-if="isLoggedIn">
    <h2>Bienvenido a tu perfil</h2>
    <p>Acceso concedido. Estás logueado.</p>
    <span>🎉</span>
    <button @click="handleLogout">CERRAR SESIÓN</button>
  </section>
  <section v-else>
    <h2>No tienes acceso</h2>
    <p>Necesitas estar registrado para acceder a esta sección.</p>
    <router-link to="/" class="back">VOLVER</router-link>
  </section>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      const authToken = localStorage.getItem("authToken");
      console.log(authToken);
      return authToken ? true : false;
    },
  },
  methods: {
    handleLogout() {
      localStorage.removeItem("authToken");
      this.$router.push("/");
    },
  },
};
</script>

<style>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: white;
  color: var(--color-dark);
  font-size: 1.5rem;
}

button,
.back {
  background-color: white;
  color: var(--color-dark);
  padding: 6px 12px;
  border: 1px solid var(--color-dark);
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease;
  margin-top: 16px;
}

button:hover,
.back:hover {
  background-color: var(--color-dark);
  color: white;
}
</style>
