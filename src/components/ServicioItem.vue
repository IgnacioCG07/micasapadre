<template>
  <div class="servicio-card" :class="{ 'no-disponible': !servicio.disponible }">
    <div class="servicio-header">
      <span class="categoria">{{ servicio.categoria }}</span>
      <span class="estado" v-if="servicio.disponible">Disponible</span>
      <span class="estado no-disp" v-else>No Disponible</span>
    </div>
    
    <h3 class="servicio-nombre">{{ servicio.nombre }}</h3>
    <p class="servicio-desc">{{ servicio.descripcion }}</p>
    
    <div class="servicio-footer">
      <span class="precio">{{ formatearPrecio(servicio.precio) }}</span>
      <button 
        class="btn-interesa" 
        :disabled="!servicio.disponible"
        @click="$emit('seleccionar', servicio)"
      >
        {{ servicio.disponible ? 'Me interesa' : 'Agotado' }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicioItem',
  props: {
    servicio: {
      type: Object,
      required: true
    }
  },
  emits: ['seleccionar'],
  methods: {
    formatearPrecio(valor) {
      if (!valor || valor === 0) return 'A convenir';
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        maximumFractionDigits: 0
      }).format(valor);
    }
  }
}
</script>

<style scoped>
.servicio-card {
  background: var(--color-surface);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  height: 100%;
}

.servicio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 12px rgba(0,0,0,0.1);
}

.servicio-card.no-disponible {
  opacity: 0.7;
}

.servicio-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.85rem;
  font-weight: bold;
}

.categoria {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
  padding: 0.2rem 0.6rem;
  border-radius: 1rem;
  text-transform: uppercase;
}

.estado {
  color: #10B981;
}

.estado.no-disp {
  color: #EF4444;
}

.servicio-nombre {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}

.servicio-desc {
  flex-grow: 1;
  color: var(--color-text);
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.5;
}

.servicio-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
  padding-top: 1rem;
}

.precio {
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--color-primary);
}
</style>
