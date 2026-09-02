<template>
  <div class="view-wrap">
    <div class="page-hero">
      <div class="page-hero-content">
        <span class="page-tag">🗺️ Atractivos</span>
        <h1>Atractivos Turísticos</h1>
        <p>Descubre los lugares que hacen única a Chillán y sus alrededores.</p>
      </div>
    </div>

    <div class="page-body">
      <div class="cards-grid">
        <TarjetaLugar
          v-for="lugar in atractivos"
          :key="lugar.titulo"
          :titulo="lugar.titulo"
          :descripcion="lugar.descripcion"
          :emoji="lugar.emoji"
          :tag="lugar.tag"
          :tagColor="lugar.tagColor"
        />
      </div>

      <!-- Datos adicionales -->
      <div class="info-box">
        <h2>💡 Consejos para el visitante</h2>
        <ul>
          <li>Las Termas de Chillán son accesibles todo el año, pero en invierno ofrece ski.</li>
          <li>La Feria de Chillán funciona de lunes a sábado, mejor visitarla temprano.</li>
          <li>El Valle Las Trancas queda a ~80 km de la ciudad por ruta internacional.</li>
          <li>La Catedral de Chillán fue diseñada por el arquitecto Hernán Larraín Errázuriz.</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TarjetaLugar from '../components/TarjetaLugar.vue'

export default {
  name: 'AtractivosView',
  components: { TarjetaLugar },
  data() {
    return {
      atractivos: [
        {
          titulo: 'Catedral de Chillán',
          descripcion: 'Emblemático templo moderno construido tras el terremoto de 1939. Su fachada en forma de cruz y los murales de David Alfaro Siqueiros en la capilla son obras de arte de importancia mundial.',
          emoji: '⛪',
          tag: 'Patrimonio',
          tagColor: 'terracota'
        },
        {
          titulo: 'Termas de Chillán',
          descripcion: 'Complejo termal y de ski ubicado en la Cordillera de los Andes a 1.800 metros de altitud. En invierno ofrece pistas de esquí de clase mundial; en verano, senderismo y aguas termales naturales.',
          emoji: '♨️',
          tag: 'Naturaleza',
          tagColor: 'verde'
        },
        {
          titulo: 'Valle Las Trancas',
          descripcion: 'Hermoso valle cordillerano con bosques de coigüe y araucaria, ríos cristalinos y lodges rurales. Es la puerta de entrada al Parque Nacional Laguna del Laja y punto de partida para el trekking.',
          emoji: '🌲',
          tag: 'Ecoturismo',
          tagColor: 'verde'
        },
        {
          titulo: 'Feria de Chillán',
          descripcion: 'Declarada Patrimonio Cultural Inmaterial de Chile, esta feria centenaria ofrece artesanías en greda, mimbre y madera, junto con productos regionales como longanizas, miel y especias. Un must imperdible.',
          emoji: '🧺',
          tag: 'Cultura',
          tagColor: 'dorado'
        }
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
  background: linear-gradient(135deg, #2D5016 0%, #4a7a25 100%);
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

.info-box {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-left: 4px solid #2D5016;
  border-radius: 8px;
  padding: 1.4rem 1.5rem;
}

.info-box h2 {
  font-size: 1rem;
  font-weight: 700;
  color: #2D5016;
  margin-bottom: 0.8rem;
}

.info-box ul {
  padding-left: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.info-box li {
  font-size: 0.88rem;
  color: #5a4a3a;
  line-height: 1.5;
}

@media (max-width: 600px) {
  .cards-grid { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 1.7rem; }
}
</style>
