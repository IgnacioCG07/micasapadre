<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Directorio de Emprendedores</h1>
      <p class="subtitle">Conoce los emprendimientos locales de nuestra región.</p>
    </div>

    <!-- Cargando -->
    <div v-if="loading" class="empty-state">
      <h3>Cargando emprendedores...</h3>
      <p>Conectando con el servidor...</p>
    </div>

    <!-- Error -->
    <div v-else-if="error" class="empty-state">
      <h3>Error de conexión</h3>
      <p>{{ error }}</p>
      <button class="btn btn-secondary" @click="fetchEmprendedores">Reintentar</button>
    </div>

    <!-- Grilla de Emprendedores -->
    <div v-else-if="emprendedores.length > 0" class="emprendedores-grid">
      <div v-for="emp in emprendedores" :key="emp.id" class="emprendedor-card">
        <div class="card-header">
          <h3>{{ emp.nombre }}</h3>
          <span class="badge">{{ emp.rubro }}</span>
        </div>
        <div class="card-body">
          <p class="desc">{{ emp.descripcion }}</p>
          <div class="meta-info">
            <p><strong>📍 Comuna:</strong> {{ emp.comuna }}</p>
            <p><strong>📞 Contacto:</strong> {{ emp.contacto }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vacío -->
    <div v-else class="empty-state">
      <h3>No hay emprendedores</h3>
      <p>Aún no se han registrado emprendedores en la base de datos.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EmprendedoresView',
  data() {
    return {
      emprendedores: [],
      loading: true,
      error: null
    }
  },
  methods: {
    async fetchEmprendedores() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('http://localhost:3000/emprendedores');
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const data = await response.json();
        this.emprendedores = data;
      } catch (err) {
        console.error(err);
        this.error = 'No se pudo conectar con el backend. Asegúrate de que esté corriendo en el puerto 3000.';
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.fetchEmprendedores();
  }
}
</script>

<style scoped>
.emprendedores-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.emprendedor-card {
  background: var(--color-surface);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid var(--color-border);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
}

.emprendedor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0,0,0,0.1);
  border-color: var(--color-primary-light);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.card-header h3 {
  color: var(--color-primary);
  margin: 0;
  font-size: 1.25rem;
}

.badge {
  background: var(--color-primary-light);
  color: var(--color-primary);
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: bold;
}

.card-body {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.desc {
  color: var(--color-text);
  margin-bottom: 1.5rem;
  flex-grow: 1;
  line-height: 1.5;
}

.meta-info {
  background: var(--color-background);
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 0.9rem;
}

.meta-info p {
  margin: 0.25rem 0;
  color: var(--color-heading);
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--color-surface);
  border-radius: 1rem;
  margin-top: 2rem;
}

.empty-state h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}

.empty-state p {
  color: var(--color-text);
  margin-bottom: 1.5rem;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-secondary {
  background-color: var(--color-border);
  color: var(--color-heading);
}

.btn-secondary:hover {
  background-color: var(--color-text);
  color: white;
}
</style>
