<template>
  <div class="view-wrap">
    <!-- Hero -->
    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <p class="hero-eyebrow">Región de Ñuble · Chile</p>
          <h1 class="hero-title">Descubre Chillán</h1>
          <p class="hero-subtitle">
            Ciudad de historia, cultura, gastronomía y naturaleza en el corazón de Chile.
          </p>
          <div class="hero-ctas">
            <router-link to="/atractivos" class="btn btn-primary">Ver Atractivos</router-link>
            <router-link to="/gastronomia" class="btn btn-outline">Gastronomía</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Historia -->
    <section class="section">
      <div class="section-container">
        <div class="section-header">
          <span class="section-tag">📖 Historia</span>
          <h2>Una ciudad con alma propia</h2>
        </div>
        <div class="historia-grid">
          <div class="historia-text">
            <p>
              Chillán es la capital de la Región de Ñuble, fundada originalmente en 1580
              por Martín Ruiz de Gamboa. A lo largo de los siglos ha resistido terremotos,
              incendios y reconstrucciones, forjando un carácter resiliente y una identidad
              cultural única en Chile.
            </p>
            <p>
              Cuna del prócer de la Independencia <strong>Bernardo O'Higgins</strong>,
              Chillán alberga una rica tradición artística, culinaria y artesanal. Sus
              mercados, termas y paisajes cordilleranos atraen a visitantes durante todo el año.
            </p>
            <p>
              En 2018 se convirtió en capital de la nueva Región de Ñuble, consolidando
              su rol como polo de desarrollo del centro-sur de Chile.
            </p>
          </div>
          <div class="historia-stats">
            <div class="stat-card">
              <span class="stat-num">1580</span>
              <span class="stat-label">Año de fundación</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">218K</span>
              <span class="stat-label">Habitantes</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">2018</span>
              <span class="stat-label">Capital de Ñuble</span>
            </div>
            <div class="stat-card">
              <span class="stat-num">444</span>
              <span class="stat-label">Años de historia</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="section section-crema">
      <div class="section-container">
        <div class="section-header">
          <span class="section-tag">✨ Destacados</span>
          <h2>¿Por qué visitar Chillán?</h2>
        </div>
        <div class="highlights-grid">
          <div class="highlight-item" v-for="h in highlights" :key="h.icon">
            <span class="highlight-icon">{{ h.icon }}</span>
            <h3>{{ h.titulo }}</h3>
            <p>{{ h.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'InicioView',
  data() {
    return {
      highlights: [
        { icon: '🏔️', titulo: 'Naturaleza', desc: 'Cordillera, termas y valles de impresionante belleza.' },
        { icon: '🍷', titulo: 'Gastronomía', desc: 'Longanizas, vinos del Itata y tradición culinaria única.' },
        { icon: '🎨', titulo: 'Arte y Cultura', desc: 'Murales de Siqueiros, museos y vida cultural activa.' },
        { icon: '🏛️', titulo: 'Patrimonio', desc: 'Catedral moderna, mercado artesanal y sitios históricos.' }
      ]
    }
  }
}
</script>

<style scoped>
.view-wrap {
  min-height: 100vh;
}

/* Hero */
.hero {
  height: 480px;
  background:
    linear-gradient(135deg, rgba(139,26,26,0.82) 0%, rgba(45,80,22,0.65) 100%),
    repeating-linear-gradient(
      45deg,
      rgba(255,255,255,0.02) 0px,
      rgba(255,255,255,0.02) 1px,
      transparent 1px,
      transparent 12px
    ),
    #5a2a0a;
  display: flex;
  align-items: center;
}

.hero-overlay {
  width: 100%;
  padding: 2rem 1.5rem;
}

.hero-content {
  max-width: 680px;
  margin: 0 auto;
  text-align: center;
}

.hero-eyebrow {
  font-size: 0.82rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: rgba(253,246,227,0.7);
  margin-bottom: 0.75rem;
}

.hero-title {
  font-size: clamp(2.2rem, 6vw, 3.5rem);
  font-weight: 900;
  color: #FDF6E3;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -1px;
}

.hero-subtitle {
  font-size: 1.1rem;
  color: rgba(253,246,227,0.88);
  margin-bottom: 2rem;
  line-height: 1.6;
}

.hero-ctas {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.7rem 1.5rem;
  border-radius: 7px;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary {
  background: #FDF6E3;
  color: #8B1A1A;
}

.btn-primary:hover {
  background: #fff;
  transform: translateY(-1px);
}

.btn-outline {
  border: 2px solid rgba(253,246,227,0.6);
  color: #FDF6E3;
}

.btn-outline:hover {
  background: rgba(253,246,227,0.15);
  border-color: #FDF6E3;
}

/* Sections */
.section {
  padding: 3.5rem 1.5rem;
}

.section-crema {
  background: #FDF6E3;
}

.section-container {
  max-width: 900px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 2.2rem;
}

.section-tag {
  display: inline-block;
  background: rgba(139,26,26,0.1);
  color: #8B1A1A;
  font-size: 0.8rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 0.6rem;
}

.section-header h2 {
  font-size: 1.8rem;
  font-weight: 800;
  color: #3b1a0a;
  letter-spacing: -0.5px;
}

/* Historia */
.historia-grid {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: 2.5rem;
  align-items: start;
}

.historia-text p {
  color: #5a4a3a;
  line-height: 1.75;
  margin-bottom: 1rem;
  font-size: 0.95rem;
}

.historia-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.8rem;
}

.stat-card {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 8px;
  padding: 1rem 0.8rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.stat-num {
  font-size: 1.5rem;
  font-weight: 900;
  color: #8B1A1A;
  line-height: 1;
}

.stat-label {
  font-size: 0.72rem;
  color: #8a6a5a;
  font-weight: 500;
}

/* Highlights */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
  gap: 1.2rem;
}

.highlight-item {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 10px;
  padding: 1.4rem 1.2rem;
  text-align: center;
  transition: box-shadow 0.2s, transform 0.2s;
}

.highlight-item:hover {
  box-shadow: 0 4px 14px rgba(139,26,26,0.1);
  transform: translateY(-2px);
}

.highlight-icon {
  display: block;
  font-size: 2rem;
  margin-bottom: 0.6rem;
}

.highlight-item h3 {
  font-size: 0.95rem;
  font-weight: 700;
  color: #3b1a0a;
  margin-bottom: 0.4rem;
}

.highlight-item p {
  font-size: 0.82rem;
  color: #7a5a4a;
  line-height: 1.5;
}

@media (max-width: 680px) {
  .historia-grid { grid-template-columns: 1fr; }
  .hero { height: auto; padding: 3rem 0; }
}
</style>
