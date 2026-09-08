<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Sobre Nosotros</h1>
      <p class="subtitle">Conoce al equipo detrás de TechNova Solutions</p>
    </div>

    <div class="content-body">
      <div class="about-grid">
        <div class="about-text">
          <h2>Nuestra Misión</h2>
          <p>
            En TechNova Solutions, nos dedicamos a transformar la manera en que las empresas operan a través de la tecnología.
            Nuestro propósito es proporcionar soluciones informáticas integrales, seguras y escalables que permitan a nuestros
            clientes enfocarse en el crecimiento de su negocio, dejando la complejidad técnica en nuestras manos.
          </p>
          <br>
          <h2>Nuestra Visión</h2>
          <p>
            Ser reconocidos como el aliado tecnológico líder en la región, destacándonos por nuestra innovación,
            calidad de servicio y compromiso con el éxito de cada uno de los proyectos en los que participamos.
          </p>
        </div>
        <div class="about-stats">
          <div class="stat-card">
            <h3>10+</h3>
            <p>Años de Experiencia</p>
          </div>
          <div class="stat-card">
            <h3>500+</h3>
            <p>Proyectos Exitosos</p>
          </div>
          <div class="stat-card">
            <h3>24/7</h3>
            <p>Soporte Técnico</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NosotrosView'
}
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 4rem;
}

.about-text h2 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.about-text p {
  line-height: 1.8;
  font-size: 1.1rem;
}

.about-stats {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.stat-card {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.stat-card h3 {
  font-size: 2.5rem;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
