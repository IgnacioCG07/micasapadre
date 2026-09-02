<template>
  <div class="view-wrap">
    <div class="page-hero">
      <div class="page-hero-content">
        <span class="page-tag">✉️ Contacto</span>
        <h1>Contáctanos</h1>
        <p>¿Tienes consultas sobre tu visita a Chillán? Escríbenos.</p>
      </div>
    </div>

    <div class="page-body">
      <!-- Formulario -->
      <div class="form-card" v-if="!enviado">
        <h2>Enviar mensaje</h2>

        <form @submit.prevent="enviarFormulario" class="form" novalidate>
          <div class="form-group">
            <label for="nombre">Nombre completo *</label>
            <input
              id="nombre"
              v-model="form.nombre"
              type="text"
              placeholder="Ej: Ana García"
              :class="{ 'input-error': errores.nombre }"
            />
            <span class="error-msg" v-if="errores.nombre">{{ errores.nombre }}</span>
          </div>

          <div class="form-group">
            <label for="email">Correo electrónico *</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="Ej: correo@ejemplo.com"
              :class="{ 'input-error': errores.email }"
            />
            <span class="error-msg" v-if="errores.email">{{ errores.email }}</span>
          </div>

          <div class="form-group">
            <label for="asunto">Asunto</label>
            <select id="asunto" v-model="form.asunto">
              <option value="">Selecciona un asunto…</option>
              <option value="informacion">Información turística</option>
              <option value="gastronomia">Gastronomía y restaurantes</option>
              <option value="alojamiento">Alojamiento</option>
              <option value="eventos">Eventos y festividades</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div class="form-group">
            <label for="mensaje">Mensaje *</label>
            <textarea
              id="mensaje"
              v-model="form.mensaje"
              rows="5"
              placeholder="Escribe tu consulta aquí…"
              :class="{ 'input-error': errores.mensaje }"
            ></textarea>
            <span class="error-msg" v-if="errores.mensaje">{{ errores.mensaje }}</span>
          </div>

          <div class="form-footer">
            <p class="form-note">* Campos obligatorios</p>
            <button type="submit" class="btn-enviar">Enviar mensaje →</button>
          </div>
        </form>
      </div>

      <!-- Confirmación -->
      <div class="confirmacion" v-else>
        <div class="check-icon">✅</div>
        <h2>¡Mensaje enviado!</h2>
        <p>Gracias <strong>{{ form.nombre }}</strong>, hemos recibido tu consulta. Te responderemos a <strong>{{ form.email }}</strong> a la brevedad.</p>
        <button @click="resetFormulario" class="btn-reset">Enviar otro mensaje</button>
      </div>

      <!-- Info lateral -->
      <div class="info-aside">
        <div class="info-item" v-for="info in contactInfo" :key="info.label">
          <span class="info-icon">{{ info.icon }}</span>
          <div>
            <strong>{{ info.label }}</strong>
            <p>{{ info.valor }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactoView',
  data() {
    return {
      enviado: false,
      form: { nombre: '', email: '', asunto: '', mensaje: '' },
      errores: { nombre: '', email: '', mensaje: '' },
      contactInfo: [
        { icon: '📍', label: 'Dirección', valor: 'Municipalidad de Chillán, Plaza de Armas, Chillán' },
        { icon: '📞', label: 'Teléfono', valor: '+56 42 220 0000' },
        { icon: '🕗', label: 'Horario', valor: 'Lunes a Viernes, 08:30 – 17:30 hrs' },
        { icon: '🌐', label: 'Web oficial', valor: 'www.municipalidadchillan.cl' }
      ]
    }
  },
  methods: {
    validar() {
      let valido = true
      this.errores = { nombre: '', email: '', mensaje: '' }

      if (!this.form.nombre.trim()) {
        this.errores.nombre = 'El nombre es requerido.'
        valido = false
      }
      if (!this.form.email.trim()) {
        this.errores.email = 'El correo es requerido.'
        valido = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.email)) {
        this.errores.email = 'Formato de correo inválido.'
        valido = false
      }
      if (!this.form.mensaje.trim()) {
        this.errores.mensaje = 'El mensaje es requerido.'
        valido = false
      }
      return valido
    },
    enviarFormulario() {
      if (this.validar()) {
        this.enviado = true
      }
    },
    resetFormulario() {
      this.enviado = false
      this.form = { nombre: '', email: '', asunto: '', mensaje: '' }
      this.errores = { nombre: '', email: '', mensaje: '' }
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
  background: linear-gradient(135deg, #3b1a0a 0%, #8B1A1A 100%);
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

/* Body */
.page-body {
  max-width: 900px;
  margin: 0 auto;
  padding: 2.5rem 1.5rem;
  display: grid;
  grid-template-columns: 1fr 260px;
  gap: 2rem;
  align-items: start;
}

/* Form card */
.form-card {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 10px;
  padding: 2rem;
}

.form-card h2 {
  font-size: 1.2rem;
  font-weight: 800;
  color: #3b1a0a;
  margin-bottom: 1.5rem;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.form-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #5a4a3a;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 0.6rem 0.85rem;
  border: 1.5px solid #e0d4c6;
  border-radius: 7px;
  font-size: 0.92rem;
  font-family: inherit;
  background: #fdfaf7;
  color: #3b1a0a;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #8B1A1A;
  box-shadow: 0 0 0 3px rgba(139,26,26,0.1);
  background: #fff;
}

.input-error {
  border-color: #c62828 !important;
}

.error-msg {
  font-size: 0.78rem;
  color: #c62828;
  font-weight: 500;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: 0.4rem;
}

.form-note {
  font-size: 0.78rem;
  color: #9a8a7a;
}

.btn-enviar {
  background: #8B1A1A;
  color: #FDF6E3;
  border: none;
  border-radius: 7px;
  padding: 0.65rem 1.4rem;
  font-size: 0.92rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s, transform 0.15s;
}

.btn-enviar:hover {
  background: #6e1414;
  transform: translateY(-1px);
}

/* Confirmación */
.confirmacion {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 10px;
  padding: 2.5rem 2rem;
  text-align: center;
}

.check-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.confirmacion h2 {
  font-size: 1.4rem;
  font-weight: 800;
  color: #2D5016;
  margin-bottom: 0.8rem;
}

.confirmacion p {
  color: #5a4a3a;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.btn-reset {
  background: transparent;
  border: 2px solid #8B1A1A;
  color: #8B1A1A;
  border-radius: 7px;
  padding: 0.55rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-reset:hover {
  background: #8B1A1A;
  color: #FDF6E3;
}

/* Info aside */
.info-aside {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-item {
  background: #fff;
  border: 1px solid #e8ddd0;
  border-radius: 8px;
  padding: 1rem 1.1rem;
  display: flex;
  gap: 0.8rem;
  align-items: flex-start;
}

.info-icon {
  font-size: 1.3rem;
  line-height: 1;
  flex-shrink: 0;
}

.info-item strong {
  display: block;
  font-size: 0.82rem;
  font-weight: 700;
  color: #3b1a0a;
  margin-bottom: 0.2rem;
}

.info-item p {
  font-size: 0.8rem;
  color: #7a5a4a;
  line-height: 1.4;
}

@media (max-width: 700px) {
  .page-body { grid-template-columns: 1fr; }
  .page-hero h1 { font-size: 1.7rem; }
}
</style>
