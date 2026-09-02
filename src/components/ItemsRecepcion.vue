<template>
  <div class="card detalle-card">
    <div class="seccion-header">
      <h3>🔍 Detalle Recepción #{{ recepcionId }}</h3>
      <span class="badge badge-alt">
        {{ itemsFiltrados.length }} ítem(s) · Total: {{ totalCantidad }}
      </span>
    </div>

    <!-- Formulario agregar ítem -->
    <form @submit.prevent="agregarItem" class="form-grid form-grid--inline">

      <div class="form-group">
        <label for="item-libro">Libro *</label>
        <select id="item-libro" v-model.number="form.libroId">
          <option :value="null">Selecciona un libro…</option>
          <option v-for="l in store.libros" :key="l.id" :value="l.id">
            {{ l.titulo }} ({{ l.isbn }})
          </option>
        </select>
        <span class="err" v-if="errores.libroId">{{ errores.libroId }}</span>
      </div>

      <!-- Cantidad tratada como número con v-model.number -->
      <div class="form-group">
        <label for="item-cantidad">Cantidad *</label>
        <input id="item-cantidad" v-model.number="form.cantidad"
               type="number" min="1" placeholder="Ej: 50" />
        <span class="err" v-if="errores.cantidad">{{ errores.cantidad }}</span>
      </div>

      <div class="form-group">
        <label for="item-estado">Estado *</label>
        <select id="item-estado" v-model="form.estado">
          <option value="correcto">Correcto</option>
          <option value="dañado">Dañado</option>
          <option value="mixto">Mixto</option>
        </select>
      </div>

      <div class="form-group">
        <label for="item-obs">Observación</label>
        <input id="item-obs" v-model="form.observacion" type="text"
               placeholder="Opcional…" />
      </div>

      <div class="form-actions">
        <button type="submit" class="btn btn-primary btn-sm">➕ Agregar ítem</button>
      </div>
    </form>

    <!-- Tabla de ítems filtrados por recepcionId -->
    <table class="tabla mt-1">
      <thead>
        <tr>
          <th>Libro</th>
          <th class="text-right">Cantidad</th>
          <th>Estado</th>
          <th>Observación</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="itemsFiltrados.length === 0">
          <td colspan="4" class="empty-row">Sin ítems en esta recepción.</td>
        </tr>
        <tr v-for="item in itemsFiltrados" :key="item.id"
            :class="'row-' + item.estado">
          <td>{{ nombreLibro(item.libroId) }}</td>
          <td class="text-right">{{ item.cantidad }}</td>
          <td>
            <span class="estado-badge" :class="'estado-' + item.estado">
              {{ item.estado }}
            </span>
          </td>
          <td>{{ item.observacion || '—' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

export default {
  name: 'ItemsRecepcion',
  props: {
    // Prop recibida como número (recepcionId) — coincide con :recepcion-id en Recepciones.vue
    recepcionId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      store: useRecepcionStore(),
      form: {
        libroId:     null,
        cantidad:    null,   // número, no string
        estado:      'correcto',
        observacion: ''
      },
      errores: { libroId: '', cantidad: '' }
    }
  },
  computed: {
    // Filtra correctamente usando recepcionId (Number) de la prop
    itemsFiltrados() {
      return this.store.items.filter(it => it.recepcionId === this.recepcionId)
    },
    totalCantidad() {
      return this.itemsFiltrados.reduce((acc, it) => acc + Number(it.cantidad), 0)
    }
  },
  methods: {
    validar() {
      let ok = true
      this.errores = { libroId: '', cantidad: '' }
      if (!this.form.libroId)            { this.errores.libroId  = 'Selecciona un libro.';           ok = false }
      if (!this.form.cantidad || this.form.cantidad < 1) {
                                           this.errores.cantidad  = 'Ingresa una cantidad válida.';  ok = false }
      return ok
    },
    agregarItem() {
      if (!this.validar()) return
      const nextId = this.store.items.length
        ? Math.max(...this.store.items.map(it => it.id)) + 1
        : 1
      this.store.items.push({
        id:          nextId,
        recepcionId: this.recepcionId,         // asociado solo a esta recepción
        libroId:     this.form.libroId,
        cantidad:    Number(this.form.cantidad), // tratado como número
        estado:      this.form.estado,
        observacion: this.form.observacion.trim()
      })
      this.limpiarForm()
    },
    limpiarForm() {
      this.form = { libroId: null, cantidad: null, estado: 'correcto', observacion: '' }
      this.errores = { libroId: '', cantidad: '' }
    },
    nombreLibro(id) {
      const l = this.store.libros.find(l => l.id === id)
      return l ? l.titulo : '—'
    }
  }
}
</script>

<style scoped>
.detalle-card { margin-top: 1.5rem; border-left: 4px solid #1565c0; }
.badge-alt { background: #1565c0; color: #fff; }
.mt-1 { margin-top: 1rem; }

.estado-badge {
  display: inline-block;
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  font-size: 0.78rem;
  font-weight: 600;
  text-transform: capitalize;
}
.estado-correcto { background: #e8f5e9; color: #2e7d32; }
.estado-dañado   { background: #ffebee; color: #c62828; }
.estado-mixto    { background: #fff8e1; color: #f57f17; }

.row-dañado { background: #fff5f5; }
.row-mixto  { background: #fffef0; }
</style>
