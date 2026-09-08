<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Nuestros Servicios</h1>
      <p class="subtitle">Explora nuestro catálogo de soluciones tecnológicas adaptadas a tu negocio.</p>
    </div>

    <!-- Servicio seleccionado banner -->
    <div v-if="servicioSeleccionado" class="selected-banner">
      <div class="selected-info">
        <div>
          <strong>Servicio de interés seleccionado:</strong> {{ servicioSeleccionado.nombre }}
        </div>
      </div>
      <router-link 
        :to="{ path: '/contacto', query: { servicio: servicioSeleccionado.id } }" 
        class="btn btn-primary btn-small"
      >
        Continuar a Contacto
      </router-link>
    </div>

    <!-- Parte 4: Barra de búsqueda y filtros -->
    <div class="filtros-container">
      <input 
        type="text" 
        v-model="busqueda" 
        placeholder="Buscar servicio por nombre..." 
        class="input-search"
      >
      <select v-model="categoriaFiltro" class="select-filter">
        <option value="">Todas las categorías</option>
        <option v-for="cat in categoriasUnicas" :key="cat" :value="cat">
          {{ cat }}
        </option>
      </select>
    </div>
    
    <!-- Parte 3 y 4: Catálogo de Servicios con v-for y v-if -->
    <div v-if="serviciosFiltrados.length > 0" class="servicios-grid">
      <ServicioItem 
        v-for="servicio in serviciosFiltrados" 
        :key="servicio.id" 
        :servicio="servicio"
        @seleccionar="marcarInteres"
      />
    </div>
    
    <div v-else class="empty-state">
      <h3>No se encontraron servicios</h3>
      <p>Intenta ajustar los filtros de búsqueda para encontrar lo que necesitas.</p>
      <button class="btn btn-secondary" @click="limpiarFiltros">Limpiar Filtros</button>
    </div>
  </div>
</template>

<script>
import ServicioItem from '../components/ServicioItem.vue'

export default {
  name: 'ServiciosView',
  components: {
    ServicioItem
  },
  data() {
    return {
      busqueda: '',
      categoriaFiltro: '',
      servicioSeleccionado: null,
      servicios: [
        {
          id: 1,
          nombre: 'Desarrollo Web a Medida',
          categoria: 'Desarrollo',
          descripcion: 'Creación de plataformas web personalizadas, desde landing pages hasta sistemas complejos (SPA).',
          precio: 850000,
          disponible: true
        },
        {
          id: 2,
          nombre: 'Soporte Técnico Especializado',
          categoria: 'Soporte',
          descripcion: 'Asistencia técnica remota y presencial para equipos y servidores corporativos.',
          precio: 45000,
          disponible: true
        },
        {
          id: 3,
          nombre: 'Mantenimiento de Redes',
          categoria: 'Redes',
          descripcion: 'Configuración, optimización y mantenimiento de redes locales (LAN/WLAN) empresariales.',
          precio: 120000,
          disponible: true
        },
        {
          id: 4,
          nombre: 'Auditoría de Ciberseguridad',
          categoria: 'Seguridad',
          descripcion: 'Análisis de vulnerabilidades y refuerzo de los sistemas de protección de datos.',
          precio: 500000,
          disponible: false
        },
        {
          id: 5,
          nombre: 'Consultoría TI',
          categoria: 'Asesoría',
          descripcion: 'Asesoría estratégica para transformación digital y migración a servicios en la nube.',
          precio: 60000,
          disponible: true
        },
        {
          id: 6,
          nombre: 'Capacitación de Personal',
          categoria: 'Capacitación',
          descripcion: 'Talleres de ofimática, seguridad informática y uso de software corporativo.',
          precio: 300000,
          disponible: true
        }
      ]
    }
  },
  computed: {
    categoriasUnicas() {
      const categorias = this.servicios.map(s => s.categoria);
      return [...new Set(categorias)];
    },
    serviciosFiltrados() {
      return this.servicios.filter(servicio => {
        const coincideBusqueda = servicio.nombre.toLowerCase().includes(this.busqueda.toLowerCase()) || 
                                 servicio.descripcion.toLowerCase().includes(this.busqueda.toLowerCase());
        const coincideCategoria = this.categoriaFiltro === '' || servicio.categoria === this.categoriaFiltro;
        
        return coincideBusqueda && coincideCategoria;
      });
    }
  },
  methods: {
    marcarInteres(servicio) {
      this.servicioSeleccionado = servicio;
      // Scrollear hacia arriba para ver el banner (opcional)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    limpiarFiltros() {
      this.busqueda = '';
      this.categoriaFiltro = '';
    }
  }
}
</script>

<style scoped>
.filtros-container {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.input-search, .select-filter {
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  font-size: 1rem;
  flex: 1;
  min-width: 200px;
  background-color: var(--color-surface);
  color: var(--color-text);
}

.input-search:focus, .select-filter:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.empty-state {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--color-surface);
  border-radius: 1rem;
  margin-top: 2rem;
}

.empty-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
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

.selected-banner {
  background: linear-gradient(90deg, var(--color-primary-light) 0%, rgba(59, 130, 246, 0.05) 100%);
  border-left: 4px solid var(--color-primary);
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.selected-info {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--color-heading);
}

.selected-info .icon {
  font-size: 1.25rem;
}

.btn-small {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
}
</style>
