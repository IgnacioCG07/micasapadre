<template>
  <div class="view-wrap">
    <div class="page-hero">
      <div class="page-hero-content">
        <span class="page-tag">🍽️ Gastronomía</span>
        <h1>Sabores de Chillán</h1>
        <p>Una tradición culinaria que refleja la esencia de la Región de Ñuble.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="cards-grid">
        <TarjetaLugar
          v-for="plato in gastronomia"
          :key="plato.titulo"
          :titulo="plato.titulo"
          :descripcion="plato.descripcion"
          :emoji="plato.emoji"
          :tag="plato.tag"
          :tagColor="plato.tagColor"
        />
      </div>

      <!-- Datos curiosos -->
      <div class="curiosidades-grid">
        <div class="curiosidad" v-for="c in curiosidades" :key="c.titulo">
          <span class="cur-icon">{{ c.icon }}</span>
          <div>
            <h3>{{ c.titulo }}</h3>
            <p>{{ c.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TarjetaLugar from '../components/TarjetaLugar.vue'

export default {
  name: 'GastronomiaView',
  components: { TarjetaLugar },
  data() {
    return {
      gastronomia: [
        {
          titulo: 'Longanizas de Chillán',
          descripcion: 'El producto gastronómico más emblemático de la región. Elaboradas con carne de cerdo, ají de color y especias locales, las longanizas de Chillán tienen Denominación de Origen y se venden en la Feria y mercados locales.',
          emoji: '🌭',
          tag: 'D.O. Chile',
          tagColor: 'terracota'
        },
        {
          titulo: 'Pan Amasado',
          descripcion: 'Tradición panadera de la zona central de Chile. El pan amasado de Chillán se caracteriza por su miga esponjosa y corteza dorada, elaborado con manteca de cerdo. Acompaña cada mesa desde el desayuno hasta la once.',
          emoji: '🍞',
          tag: 'Tradición',
          tagColor: 'dorado'
        },
        {
          titulo: 'Vinos del Itata',
          descripcion: 'El Valle del Itata es una de las zonas vitivinícolas más antiguas de Chile, con cepas centenarias de País y Moscatel. Sus vinos artesanales, frescos y con identidad propia, han ganado reconocimiento internacional en los últimos años.',
          emoji: '🍷',
          tag: 'Valle del Itata',
          tagColor: 'terracota'
        }
      ],
      curiosidades: [
        { icon: '🏆', titulo: 'Denominación de Origen', desc: 'Las longanizas de Chillán son el primer embutido con D.O. en Chile.' },
        { icon: '🍇', titulo: 'Viñas centenarias', desc: 'Algunas plantas de País en el Valle del Itata tienen más de 200 años.' },
        { icon: '🧑‍🍳', titulo: 'Gastronomía viva', desc: 'La Feria de Chillán cuenta con comedores populares de tradición centenaria.' }
      ]
    }
  }
}
</script>

<style scoped>
.view-wrap {
  min-height: 100vh;
  background: #faf6f1;
}

.page-hero {
  background: linear-gradient(135deg, #8B1A1A 0%, #b84040 100%);
  padding: 3rem 1.5rem;
  text-align: center;
}

.page-hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.page-tag {
  display: inline-block;
  background: rgba(255,255,255,0.15);
  color: rgba(253,246,227,0.9);
  font-size: 0.78rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding: 0.3rem 0.8rem;
  border-radius: 999px;
  margin-bottom: 0.8rem;
}

.page-hero h1 {
  font-size: 2.2rem;
  font-weight: 900;
  color: #FDF6E3;
  margin-bottom: 0.6rem;
  letter-spacing: -0.5px;
}

.page-hero p {
  color: rgba(253,246,227,0.8);
  font-size: 1rem;
}

.page-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 1rem;
}

/* Curiosidades */
.curiosidades-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.curiosidad {
  display: flex;
  gap: 0.9rem;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 10px;
  padding: 1.1rem 1.2rem;
}

.cur-icon {
  font-size: 1.6rem;
  line-height: 1;
  flex-shrink: 0;
}

.curiosidad h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #8B1A1A;
  margin-bottom: 0.3rem;
}

.curiosidad p {
  font-size: 0.82rem;
  color: #5a4a3a;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 1.7rem; }
}
</style>
