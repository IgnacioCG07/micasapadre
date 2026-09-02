<script>
import { RouterLink } from 'vue-router'

export default {
  name: 'NavBar',
  components: { RouterLink },
  data() {
    return {
      menuAbierto: false,
      links: [
        { to: '/',            label: 'Inicio' },
        { to: '/atractivos',  label: 'Atractivos' },
        { to: '/gastronomia', label: 'Gastronomía' },
        { to: '/contacto',    label: 'Contacto' }
      ]
    }
  },
  methods: {
    cerrarMenu() { this.menuAbierto = false }
  }
}
</script>

<template>
  <header class="navbar">
    <div class="nav-container">
      <!-- Logo -->
      <router-link to="/" class="nav-logo" @click="cerrarMenu">
        <span class="logo-emoji">🏔️</span>
        <div class="logo-text-group">
          <span class="logo-main">Turismo Chillán</span>
          <span class="logo-sub">Digital</span>
        </div>
      </router-link>

      <!-- Links desktop -->
      <nav class="nav-links">
        <router-link
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="nav-link--active"
          exact-active-class="nav-link--exact"
        >
          {{ link.label }}
        </router-link>
      </nav>

      <!-- Hamburger mobile -->
      <button class="hamburger" @click="menuAbierto = !menuAbierto" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>

    <!-- Mobile menu -->
    <nav class="nav-mobile" :class="{ 'nav-mobile--open': menuAbierto }">
      <router-link
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="nav-mobile-link"
        active-class="nav-mobile-link--active"
        @click="cerrarMenu"
      >
        {{ link.label }}
      </router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  background: #8B1A1A;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(0,0,0,0.25);
}

.nav-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.2rem;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo */
.nav-logo {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
}

.logo-emoji {
  font-size: 1.8rem;
  line-height: 1;
}

.logo-text-group {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.logo-main {
  font-size: 1.05rem;
  font-weight: 800;
  color: #FDF6E3;
  letter-spacing: -0.3px;
}

.logo-sub {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgba(253, 246, 227, 0.7);
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

/* Desktop nav */
.nav-links {
  display: flex;
  gap: 0.3rem;
}

.nav-link {
  color: rgba(253, 246, 227, 0.85);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.95rem;
  padding: 0.5rem 0.9rem;
  border-radius: 6px;
  transition: background 0.2s, color 0.2s;
}

.nav-link:hover {
  background: rgba(253, 246, 227, 0.15);
  color: #FDF6E3;
}

.nav-link--active {
  background: rgba(253, 246, 227, 0.2);
  color: #FDF6E3;
  font-weight: 700;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #FDF6E3;
  border-radius: 2px;
  transition: 0.2s;
}

/* Mobile nav */
.nav-mobile {
  display: none;
  flex-direction: column;
  background: #6e1414;
  padding: 0;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s;
}

.nav-mobile--open {
  max-height: 300px;
  padding: 0.5rem 0;
}

.nav-mobile-link {
  color: rgba(253, 246, 227, 0.85);
  text-decoration: none;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  font-size: 0.95rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
  transition: background 0.15s;
}

.nav-mobile-link:hover,
.nav-mobile-link--active {
  background: rgba(255,255,255,0.1);
  color: #FDF6E3;
}

@media (max-width: 640px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
  .nav-mobile { display: flex; }
}
</style>
