<template>
  <section>
    <div class="login-container">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Introduce tu correo" required />
          <span v-if="localError.email" class="error">{{ localError.email }}</span>
        </div>

        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Introduce tu contraseña" required />
          <span v-if="localError.password" class="error">{{ localError.password }}</span>
        </div>

        <button type="submit" class="btn-login">Iniciar Sesión</button>
        <p v-if="apiError" class="error">{{ apiError }}</p>
      </form>
      <p class="no-account">¿No tienes cuenta? <router-link to="/logup">Regístrate</router-link></p>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      password: "",
      localError: {},
      apiError: "",
    };
  },
  methods: {
    async handleLogin() {
      this.localError = {};
      this.apiError = "";

      if (!this.email) {
        this.localError.email = "El correo electrónico es obligatorio.";
      }
      if (!this.password) {
        this.localError.password = "La contraseña es obligatoria.";
      }

      if (Object.keys(this.localError).length > 0) return;

      try {
        const response = await axios.post("https://reqres.in/api/login", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("authToken", response.data.token);
        this.$router.push("/profile");

      } catch (error) {
        if (error.response && error.response.data && error.response.data.error) {
          this.apiError = error.response.data.error;
        } else {
          this.apiError = "Error inesperado. Inténtalo de nuevo más tarde.";
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background-color: var(--color-dark);
}

.login-container {
  min-width: 300px;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-bottom: 16px;
  color: var(--color-primary);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  color: var(--color-dark);
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input:focus {
  border-color: #007bff;
  outline: none;
}

.btn-login {
  width: 100%;
  padding: 10px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-login:hover {
  background-color: var(--color-primary-dark);
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.no-account {
  margin-top: 16px;
  text-align: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
}
</style>
