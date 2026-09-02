<script>
export default {
  name: 'TarjetaLugar',
  props: {
    titulo: {
      type: String,
      required: true
    },
    descripcion: {
      type: String,
      required: true
    },
    emoji: {
      type: String,
      default: '📍'
    },
    tag: {
      type: String,
      default: ''
    },
    tagColor: {
      type: String,
      default: 'terracota'
    }
  }
}
</script>

<template>
  <div class="tarjeta">
    <div class="tarjeta-icono">{{ emoji }}</div>
    <div class="tarjeta-body">
      <div class="tarjeta-top">
        <h3 class="tarjeta-titulo">{{ titulo }}</h3>
        <span v-if="tag" class="tarjeta-tag" :class="'tag-' + tagColor">{{ tag }}</span>
      </div>
      <p class="tarjeta-desc">{{ descripcion }}</p>
    </div>
  </div>
</template>

<style scoped>
.tarjeta {
  display: flex;
  gap: 1.1rem;
  align-items: flex-start;
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 10px;
  padding: 1.2rem 1.4rem;
  transition: box-shadow 0.2s, transform 0.2s;
}

.tarjeta:hover {
  box-shadow: 0 4px 16px rgba(139, 26, 26, 0.12);
  transform: translateY(-2px);
}

.tarjeta-icono {
  font-size: 2.4rem;
  line-height: 1;
  flex-shrink: 0;
}

.tarjeta-body {
  flex: 1;
}

.tarjeta-top {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  flex-wrap: wrap;
  margin-bottom: 0.4rem;
}

.tarjeta-titulo {
  font-size: 1.05rem;
  font-weight: 700;
  color: #3b1a0a;
  margin: 0;
}

.tarjeta-tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.tag-terracota {
  background: rgba(139, 26, 26, 0.1);
  color: #8B1A1A;
}

.tag-verde {
  background: rgba(45, 80, 22, 0.1);
  color: #2D5016;
}

.tag-dorado {
  background: rgba(180, 130, 20, 0.12);
  color: #8a6200;
}

.tarjeta-desc {
  font-size: 0.9rem;
  color: #5a4a3a;
  line-height: 1.6;
  margin: 0;
}
</style>
