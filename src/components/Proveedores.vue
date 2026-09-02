<template>
  <div class="seccion">
    <div class="seccion-header">
      <h2>🏢 Proveedores</h2>
      <span class="badge">{{ store.proveedores.length }} registrados</span>
    </div>

    <!-- Formulario agregar proveedor -->
    <div class="card form-card">
      <h3>Registrar Proveedor</h3>
      <form @submit.prevent="guardarProveedor" class="form-grid">
        <div class="form-group">
          <label for="prov-nombre">Nombre / Razón Social *</label>
          <input id="prov-nombre" v-model="form.nombre" type="text" placeholder="Ej: Editorial Santillana" />
          <span class="err" v-if="errores.nombre">{{ errores.nombre }}</span>
        </div>
        <div class="form-group">
          <label for="prov-rut">RUT *</label>
          <input id="prov-rut" v-model="form.rut" type="text" placeholder="Ej: 76.123.456-7" />
          <span class="err" v-if="errores.rut">{{ errores.rut }}</span>
        </div>
        <div class="form-group">
          <label for="prov-contacto">Contacto</label>
          <input id="prov-contacto" v-model="form.contacto" type="text" placeholder="Nombre del contacto" />
        </div>
        <div class="form-actions">
          <button type="button" class="btn btn-ghost" @click="limpiarForm">Cancelar</button>
          <button type="submit" class="btn btn-primary">Guardar Proveedor</button>
        </div>
      </form>
    </div>

    <!-- Tabla de proveedores -->
    <div class="card">
      <table class="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>RUT</th>
            <th>Contacto</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.proveedores.length === 0">
            <td colspan="4" class="empty-row">No hay proveedores registrados.</td>
          </tr>
          <tr v-for="(p, i) in store.proveedores" :key="p.id">
            <td>{{ i + 1 }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.rut }}</td>
            <td>{{ p.contacto || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

export default {
  name: 'Proveedores',
  data() {
    return {
      store: useRecepcionStore(),
      form: { nombre: '', rut: '', contacto: '' },
      errores: { nombre: '', rut: '' }
    }
  },
  methods: {
    validar() {
      let ok = true
      this.errores = { nombre: '', rut: '' }
      if (!this.form.nombre.trim()) { this.errores.nombre = 'El nombre es requerido.'; ok = false }
      if (!this.form.rut.trim())    { this.errores.rut    = 'El RUT es requerido.';    ok = false }
      return ok
    },
    guardarProveedor() {
      if (!this.validar()) return
      const nextId = this.store.proveedores.length
        ? Math.max(...this.store.proveedores.map(p => p.id)) + 1
        : 1
      this.store.proveedores.push({
        id:       nextId,
        nombre:   this.form.nombre.trim(),
        rut:      this.form.rut.trim(),
        contacto: this.form.contacto.trim()
      })
      this.limpiarForm()
    },
    limpiarForm() {
      this.form = { nombre: '', rut: '', contacto: '' }
      this.errores = { nombre: '', rut: '' }
    }
  }
}
</script>
