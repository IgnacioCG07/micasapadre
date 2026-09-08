<template>
  <div class="view-container">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Impulsa tu Negocio con <span class="highlight">TechNova</span></h1>
        <p class="hero-subtitle">Soluciones tecnológicas innovadoras para empresas de todos los tamaños.</p>
        <div class="hero-actions">
          <router-link to="/servicios" class="btn btn-primary">Ver Servicios</router-link>
          <router-link to="/contacto" class="btn btn-secondary">Contáctanos</router-link>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="feature-card">
        <h3>Rápido y Eficiente</h3>
        <p>Optimizamos tus procesos para que tu equipo trabaje sin interrupciones.</p>
      </div>
      <div class="feature-card">
        <h3>Seguro</h3>
        <p>Protegemos tu información con los más altos estándares de seguridad.</p>
      </div>
      <div class="feature-card">
        <h3>Escalable</h3>
        <p>Soluciones diseñadas para crecer junto con tu negocio.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InicioView'
}
</script>

<style scoped>
.hero {
  text-align: center;
  padding: 6rem 2rem;
  background: linear-gradient(135deg, var(--color-surface) 0%, var(--color-background-alt) 100%);
  border-radius: 1rem;
  margin-bottom: 4rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  color: var(--color-heading);
}

.highlight {
  color: var(--color-primary);
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--color-text);
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
}

.feature-card {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}
</style>
