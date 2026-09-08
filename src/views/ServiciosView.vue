<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Nuestros Servicios</h1>
      <p class="subtitle">Explora nuestro catálogo de soluciones tecnológicas adaptadas a tu negocio.</p>
    </div>

    <!-- Parte 4: Aquí irá la barra de búsqueda y filtros -->
    
    <!-- Parte 3: Catálogo de Servicios (v-for) -->
    <div class="servicios-grid">
      <ServicioItem 
        v-for="servicio in servicios" 
        :key="servicio.id" 
        :servicio="servicio"
      />
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
  }
}
</script>

<style scoped>
.servicios-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}
</style>
