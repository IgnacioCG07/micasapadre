<template>
  <div id="app">
    <NavBar />
    <main class="main-content">
      <router-view />
    </main>
    <footer class="app-footer">
      <p>© 2026 · TechNova Solutions</p>
    </footer>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>
