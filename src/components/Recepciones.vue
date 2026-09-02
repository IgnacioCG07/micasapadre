<template>
  <div class="seccion">
    <div class="seccion-header">
      <h2>📋 Recepciones</h2>
      <span class="badge">{{ store.recepciones.length }} registradas</span>
    </div>

    <!-- Formulario -->
    <div class="card form-card">
      <h3>Registrar Recepción</h3>
      <form @submit.prevent="guardarRecepcion" class="form-grid">

        <div class="form-group">
          <label for="rec-fecha">Fecha *</label>
          <input id="rec-fecha" v-model="form.fecha" type="date" />
          <span class="err" v-if="errores.fecha">{{ errores.fecha }}</span>
        </div>

        <div class="form-group">
          <label for="rec-guia">N° Guía / Factura *</label>
          <input id="rec-guia" v-model="form.nroGuia" type="text" placeholder="Ej: G-002" />
          <span class="err" v-if="errores.nroGuia">{{ errores.nroGuia }}</span>
        </div>

        <!-- Selección de proveedor: validado antes de guardar -->
        <div class="form-group">
          <label for="rec-proveedor">Proveedor *</label>
          <select id="rec-proveedor" v-model.number="form.proveedorId">
            <option :value="null">Selecciona un proveedor…</option>
            <option v-for="p in store.proveedores" :key="p.id" :value="p.id">
              {{ p.nombre }}
            </option>
          </select>
          <span class="err" v-if="errores.proveedorId">{{ errores.proveedorId }}</span>
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-ghost" @click="limpiarForm">Cancelar</button>
          <button type="submit" class="btn btn-primary">Guardar Recepción</button>
        </div>
      </form>
    </div>

    <!-- Tabla de recepciones -->
    <div class="card">
      <table class="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>Fecha</th>
            <th>N° Guía</th>
            <th>Proveedor</th>
            <th class="text-right">Total libros</th>
            <th class="text-right">% Def.</th>
            <th>Detalle</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.recepciones.length === 0">
            <td colspan="7" class="empty-row">No hay recepciones registradas.</td>
          </tr>
          <tr v-for="(r, i) in store.recepciones" :key="r.id">
            <td>{{ i + 1 }}</td>
            <td>{{ r.fecha }}</td>
            <td>{{ r.nroGuia }}</td>
            <td>{{ nombreProveedor(r.proveedorId) }}</td>
            <!-- Totales calculados con métodos -->
            <td class="text-right">{{ totalLibros(r.id) }}</td>
            <td class="text-right">{{ porcentajeDefectuosos(r.id) }}%</td>
            <td>
              <button class="btn btn-sm btn-outline"
                      @click="verDetalle(r.id)">
                {{ recepcionSeleccionada === r.id ? '✖ Cerrar' : '🔍 Ver' }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Detalle de la recepción seleccionada -->
    <ItemsRecepcion
      v-if="recepcionSeleccionada !== null"
      :recepcion-id="recepcionSeleccionada"
    />
  </div>
</template>

<script>
import { useRecepcionStore } from '../stores/useRecepcionStore.js'
import ItemsRecepcion from './ItemsRecepcion.vue'

export default {
  name: 'Recepciones',
  components: { ItemsRecepcion },
  data() {
    return {
      store: useRecepcionStore(),
      form: { fecha: '', nroGuia: '', proveedorId: null },
      errores: { fecha: '', nroGuia: '', proveedorId: '' },
      recepcionSeleccionada: null
    }
  },
  methods: {
    validar() {
      let ok = true
      this.errores = { fecha: '', nroGuia: '', proveedorId: '' }
      if (!this.form.fecha)        { this.errores.fecha        = 'La fecha es requerida.';     ok = false }
      if (!this.form.nroGuia.trim()) { this.errores.nroGuia    = 'El número de guía es requerido.'; ok = false }
      // Validar que exista un proveedor seleccionado (no null)
      if (!this.form.proveedorId)  { this.errores.proveedorId  = 'Debe seleccionar un proveedor.'; ok = false }
      return ok
    },

    guardarRecepcion() {
      if (!this.validar()) return
      const nextId = this.store.recepciones.length
        ? Math.max(...this.store.recepciones.map(r => r.id)) + 1
        : 1
      // Guardar con los nombres de campo correctos (consistentes con el store)
      this.store.recepciones.push({
        id:          nextId,
        fecha:       this.form.fecha,
        nroGuia:     this.form.nroGuia.trim(),
        proveedorId: this.form.proveedorId
      })
      this.limpiarForm()
    },

    limpiarForm() {
      this.form = { fecha: '', nroGuia: '', proveedorId: null }
      this.errores = { fecha: '', nroGuia: '', proveedorId: '' }
    },

    nombreProveedor(id) {
      const p = this.store.proveedores.find(p => p.id === id)
      return p ? p.nombre : '—'
    },

    verDetalle(id) {
      this.recepcionSeleccionada = this.recepcionSeleccionada === id ? null : id
    },

    // Parte 7: Cálculos con propiedades computadas (implementadas como métodos)
    itemsDe(recepcionId) {
      // Filtra ítems que pertenecen a esta recepción
      return this.store.items.filter(it => it.recepcionId === recepcionId)
    },

    totalLibros(recepcionId) {
      // Suma cantidad de todos los ítems de la recepción (tratados como Number)
      return this.itemsDe(recepcionId).reduce((acc, it) => acc + Number(it.cantidad), 0)
    },

    porcentajeDefectuosos(recepcionId) {
      const items = this.itemsDe(recepcionId)
      if (!items.length) return 0
      const conProblemas = items.filter(it => it.estado === 'dañado' || it.estado === 'mixto')
      return Math.round((conProblemas.length / items.length) * 100)
    }
  }
}
</script>
