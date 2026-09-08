<template>
  <div class="view-container page-layout">
    <div class="content-header">
      <h1>Contacto</h1>
      <p class="subtitle">¿Tienes dudas o necesitas una cotización? Escríbenos.</p>
    </div>

    <div class="contact-layout">
      <!-- Información de contacto -->
      <div class="contact-info">
        <h3>Información de Contacto</h3>
        <p>Estamos aquí para ayudarte. Contáctanos por cualquiera de nuestros canales.</p>
        
        <ul class="info-list">
          <li><strong>📍 Dirección:</strong> Av. Libertad 123, Chillán, Región de Ñuble</li>
          <li><strong>📞 Teléfono:</strong> +56 9 1234 5678</li>
          <li><strong>✉️ Correo:</strong> contacto@technova.cl</li>
          <li><strong>🕒 Horario:</strong> Lunes a Viernes, 09:00 - 18:00 hrs</li>
        </ul>
      </div>

      <!-- Formulario de contacto -->
      <div class="contact-form-container">
        <!-- Mensaje de éxito -->
        <div v-if="enviado" class="success-message">
          <div class="success-icon">✅</div>
          <h3>¡Mensaje Enviado!</h3>
          <p>Gracias por contactarnos, <strong>{{ form.nombre }}</strong>.</p>
          <p>Hemos recibido tu consulta sobre <strong>{{ obtenerNombreServicio(form.servicioInteres) }}</strong>.</p>
          <p>Te responderemos a <strong>{{ form.correo }}</strong> a la brevedad.</p>
          <button class="btn btn-primary" style="margin-top: 1rem;" @click="resetForm">Enviar otro mensaje</button>
        </div>

        <!-- Formulario -->
        <form v-else @submit.prevent="procesarFormulario" class="contact-form">
          <div class="form-group">
            <label for="nombre">Nombre completo *</label>
            <input type="text" id="nombre" v-model.trim="form.nombre" placeholder="Ej. Juan Pérez" :class="{ 'has-error': errores.nombre }">
            <span class="error-text" v-if="errores.nombre">{{ errores.nombre }}</span>
          </div>

          <div class="form-group row">
            <div class="col">
              <label for="correo">Correo electrónico *</label>
              <input type="email" id="correo" v-model.trim="form.correo" placeholder="ejemplo@correo.cl" :class="{ 'has-error': errores.correo }">
              <span class="error-text" v-if="errores.correo">{{ errores.correo }}</span>
            </div>
            <div class="col">
              <label for="telefono">Teléfono</label>
              <input type="tel" id="telefono" v-model.trim="form.telefono" placeholder="+56 9...">
            </div>
          </div>

          <div class="form-group">
            <label for="servicioInteres">Servicio de interés *</label>
            <select id="servicioInteres" v-model="form.servicioInteres" :class="{ 'has-error': errores.servicioInteres }">
              <option value="" disabled>Seleccione un servicio...</option>
              <option value="general">Consulta General</option>
              <option v-for="serv in serviciosCatalogo" :key="serv.id" :value="serv.id">
                {{ serv.nombre }}
              </option>
            </select>
            <span class="error-text" v-if="errores.servicioInteres">{{ errores.servicioInteres }}</span>
          </div>

          <div class="form-group">
            <label for="mensaje">Mensaje *</label>
            <textarea id="mensaje" v-model.trim="form.mensaje" rows="4" placeholder="¿En qué podemos ayudarte?" :class="{ 'has-error': errores.mensaje }"></textarea>
            <span class="error-text" v-if="errores.mensaje">{{ errores.mensaje }}</span>
          </div>

          <button type="submit" class="btn btn-primary btn-submit">Enviar Consulta</button>
        </form>
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
      form: {
        nombre: '',
        correo: '',
        telefono: '',
        servicioInteres: '',
        mensaje: ''
      },
      errores: {},
      // Simulamos la lista de servicios para rellenar el select
      serviciosCatalogo: [
        { id: 1, nombre: 'Desarrollo Web a Medida' },
        { id: 2, nombre: 'Soporte Técnico Especializado' },
        { id: 3, nombre: 'Mantenimiento de Redes' },
        { id: 4, nombre: 'Auditoría de Ciberseguridad' },
        { id: 5, nombre: 'Consultoría TI' },
        { id: 6, nombre: 'Capacitación de Personal' }
      ]
    }
  },
  mounted() {
    // Leemos el query param si el usuario viene de ServiciosView ("Me interesa")
    if (this.$route.query.servicio) {
      const id = parseInt(this.$route.query.servicio);
      // Validamos que el ID exista en nuestro catálogo
      if (this.serviciosCatalogo.find(s => s.id === id)) {
        this.form.servicioInteres = id;
      }
    }
  },
  methods: {
    obtenerNombreServicio(id) {
      if (id === 'general') return 'Consulta General';
      const servicio = this.serviciosCatalogo.find(s => s.id === id);
      return servicio ? servicio.nombre : 'Servicio Desconocido';
    },
    validarFormulario() {
      this.errores = {};
      let isValid = true;

      if (!this.form.nombre) {
        this.errores.nombre = 'El nombre es obligatorio.';
        isValid = false;
      }
      
      if (!this.form.correo) {
        this.errores.correo = 'El correo es obligatorio.';
        isValid = false;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.form.correo)) {
        this.errores.correo = 'Ingrese un correo electrónico válido.';
        isValid = false;
      }

      if (!this.form.servicioInteres) {
        this.errores.servicioInteres = 'Debe seleccionar un servicio de interés.';
        isValid = false;
      }

      if (!this.form.mensaje || this.form.mensaje.length < 10) {
        this.errores.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
        isValid = false;
      }

      return isValid;
    },
    procesarFormulario() {
      if (this.validarFormulario()) {
        // Formulario válido, mostramos éxito
        this.enviado = true;
      }
    },
    resetForm() {
      this.enviado = false;
      this.form = {
        nombre: '',
        correo: '',
        telefono: '',
        servicioInteres: '',
        mensaje: ''
      };
      this.errores = {};
    }
  }
}
</script>

<style scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  margin-top: 2rem;
}

@media (max-width: 768px) {
  .contact-layout {
    grid-template-columns: 1fr;
  }
}

.contact-info {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  height: fit-content;
}

.contact-info h3 {
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.info-list {
  list-style: none;
  padding: 0;
  margin-top: 1.5rem;
}

.info-list li {
  margin-bottom: 1rem;
  color: var(--color-text);
}

.contact-form-container {
  background: var(--color-surface);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.form-group {
  margin-bottom: 1.5rem;
}

.row {
  display: flex;
  gap: 1.5rem;
}

.col {
  flex: 1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--color-heading);
}

input, select, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-border);
  border-radius: 0.5rem;
  font-family: inherit;
  background-color: var(--color-background);
  color: var(--color-text);
  transition: border-color 0.2s;
  box-sizing: border-box;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px var(--color-primary-light);
}

input.has-error, select.has-error, textarea.has-error {
  border-color: #EF4444;
}

.error-text {
  color: #EF4444;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  display: block;
}

.btn-submit {
  width: 100%;
  padding: 1rem;
  font-size: 1.1rem;
}

.success-message {
  text-align: center;
  padding: 2rem;
}

.success-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.success-message h3 {
  color: #10B981;
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.success-message p {
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}
</style>
