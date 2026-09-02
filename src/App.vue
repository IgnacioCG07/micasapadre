<template>
  <div id="app">

    <!-- ===== HEADER ===== -->
    <header class="app-header">
      <div class="header-inner">
        <div class="header-logo">
          <span class="logo-icon">📚</span>
          <div>
            <h1>Recepción de Textos Escolares</h1>
            <p>Municipalidad de Chillán · Región de Ñuble</p>
          </div>
        </div>

        <!-- Navegación por pestañas -->
        <nav class="tab-nav">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="tab-btn"
            :class="{ 'tab-btn--active': seccionActiva === tab.key }"
            @click="seccionActiva = tab.key"
          >
            <span>{{ tab.icon }}</span> {{ tab.label }}
          </button>
        </nav>
      </div>
    </header>

    <!-- ===== CONTENIDO ===== -->
    <main class="app-main">
      <Recepciones  v-if="seccionActiva === 'recepciones'" />
      <Libros       v-else-if="seccionActiva === 'libros'" />
      <Proveedores  v-else-if="seccionActiva === 'proveedores'" />
    </main>

    <footer class="app-footer">
      <p>© 2026 · Actividad 7 – Diagnóstico y Corrección Vue 3</p>
    </footer>
  </div>
</template>

<script>
import Recepciones  from './components/Recepciones.vue'
import Libros       from './components/Libros.vue'
import Proveedores  from './components/Proveedores.vue'

export default {
  name: 'App',
  components: { Recepciones, Libros, Proveedores },
  data() {
    return {
      // Clave que identifica la sección activa (debe coincidir con v-if)
      seccionActiva: 'recepciones',
      tabs: [
        { key: 'recepciones',  label: 'Recepciones',  icon: '📋' },
        { key: 'libros',       label: 'Libros',       icon: '📖' },
        { key: 'proveedores',  label: 'Proveedores',  icon: '🏢' }
      ]
    }
  }
}
</script>
