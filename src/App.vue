<template>
  <div id="app">
    <NavBar />
    <main>
      <router-view />
    </main>
    <footer class="app-footer">
      <p>© 2026 Turismo Chillán Digital · Municipalidad de Chillán, Región de Ñuble</p>
      <p class="footer-sub">Desarrollado con Vue 3 + Vue Router · Actividad 6</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: { NavBar }
}
</script>
