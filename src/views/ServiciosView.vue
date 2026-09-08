<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Nuestros Servicios</h1>
      <p class="subtitle">Explora nuestro catálogo de soluciones tecnológicas adaptadas a tu negocio.</p>
    </div>

    <!-- Parte 4: Aquí irá la barra de búsqueda y filtros -->
    
    <!-- Parte 3: Aquí irá el v-for de Servicios -->
    <div class="services-placeholder">
      <p>Catálogo de servicios en construcción...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServiciosView'
}
</script>

<style scoped>
.services-placeholder {
  text-align: center;
  padding: 4rem;
  background: var(--color-surface);
  border-radius: 1rem;
  border: 2px dashed var(--color-border);
}
</style>
