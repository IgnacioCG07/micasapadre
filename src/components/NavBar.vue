<template>
  <nav class="navbar">
    <div class="navbar-brand">
      <router-link to="/" class="navbar-item">
        TechNova
      </router-link>
    </div>
    <div class="navbar-menu">
      <router-link to="/" class="navbar-item" active-class="is-active">Inicio</router-link>
      <router-link to="/nosotros" class="navbar-item" active-class="is-active">Nosotros</router-link>
      <router-link to="/servicios" class="navbar-item" active-class="is-active">Servicios</router-link>
      <router-link to="/contacto" class="navbar-item" active-class="is-active">Contacto</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-surface);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-brand .icon {
  margin-right: 0.5rem;
  font-size: 1.5rem;
}

.navbar-brand .navbar-item {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-primary);
  display: flex;
  align-items: center;
  text-decoration: none;
}

.navbar-menu {
  display: flex;
  gap: 1.5rem;
}

.navbar-item {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.3s ease;
}

.navbar-item:hover, .navbar-item.is-active {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
}
</style>
