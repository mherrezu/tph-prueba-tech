<template>
  <section>
    <div class="register-container">
      <h2>Registro</h2>
      <form @submit.prevent="handleRegister">
        <!-- Campo de correo electrónico -->
        <div class="form-group">
          <label for="email">Correo Electrónico</label>
          <input type="email" id="email" v-model="email" placeholder="Introduce tu correo" required />
          <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </div>

        <!-- Campo de contraseña -->
        <div class="form-group">
          <label for="password">Contraseña</label>
          <input type="password" id="password" v-model="password" placeholder="Introduce tu contraseña" required />
          <span v-if="errors.password" class="error">{{ errors.password }}</span>
        </div>

        <!-- Botón de registro -->
        <button type="submit" class="btn-register">Registrarse</button>
        <p v-if="apiError" class="error">{{ apiError }}</p>
        <p v-if="successMessage" class="success">{{ successMessage }}</p>
      </form>
      <p class="have-account">¿Ya tienes cuenta? <router-link to="/login">Entrar</router-link></p>
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
      errors: {},
      apiError: "",
      successMessage: "",
    };
  },
  methods: {
    async handleRegister() {
      this.errors = {};
      this.apiError = "";
      this.successMessage = "";

      if (!this.email) {
        this.errors.email = "El correo electrónico es obligatorio.";
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.errors.email = "El correo electrónico no es válido.";
      }

      if (!this.password) {
        this.errors.password = "La contraseña es obligatoria.";
      } else if (this.password.length < 6) {
        this.errors.password = "La contraseña debe tener al menos 6 caracteres.";
      }

      if (Object.keys(this.errors).length > 0) return;

      try {
        const response = await axios.post("https://reqres.in/api/register", {
          email: this.email,
          password: this.password,
        });

        localStorage.setItem("authToken", response.data.token);
        this.successMessage = "Registro exitoso. Token recibido: " + response.data.token;

        if (response.data)
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
  background-color: white;
}

.register-container {
  min-width: 300px;
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  background-color: var(--color-dark);
  ;
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
  color: var(--color-light);
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

input:focus {
  border-color: var(--color-primary);
  outline: none;
}

.btn-register {
  width: 100%;
  padding: 10px;
  background-color: var(--color-primary);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.btn-register:hover {
  background-color: var(--color-primary-dark);
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}

.have-account {
  margin-top: 16px;
  text-align: center;
  font-family: 'League Spartan', sans-serif;
  font-size: 1rem;
  color: white;
}
</style>