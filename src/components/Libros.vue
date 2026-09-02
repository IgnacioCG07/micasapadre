<template>
  <div class="seccion">
    <div class="seccion-header">
      <h2>📖 Libros</h2>
      <span class="badge">{{ store.libros.length }} registrados</span>
    </div>

    <!-- Formulario -->
    <div class="card form-card">
      <h3>Registrar Libro</h3>
      <form @submit.prevent="guardarLibro" class="form-grid">

        <div class="form-group">
          <label for="libro-isbn">ISBN *
            <span class="hint">(10 o 13 caracteres)</span>
          </label>
          <input id="libro-isbn" v-model="form.isbn" type="text"
                 placeholder="Ej: 9789561228123" maxlength="13" />
          <span class="err" v-if="errores.isbn">{{ errores.isbn }}</span>
        </div>

        <div class="form-group">
          <label for="libro-titulo">Título *</label>
          <input id="libro-titulo" v-model="form.titulo" type="text"
                 placeholder="Ej: Matemáticas 5°" />
          <span class="err" v-if="errores.titulo">{{ errores.titulo }}</span>
        </div>

        <div class="form-group">
          <label for="libro-editorial">Editorial *</label>
          <input id="libro-editorial" v-model="form.editorial" type="text"
                 placeholder="Ej: Santillana" />
          <span class="err" v-if="errores.editorial">{{ errores.editorial }}</span>
        </div>

        <div class="form-group">
          <label for="libro-nivel">Nivel</label>
          <select id="libro-nivel" v-model="form.nivel">
            <option value="">Selecciona nivel…</option>
            <option v-for="n in niveles" :key="n" :value="n">{{ n }}</option>
          </select>
        </div>

        <!-- Nombre del campo: anioPublicacion (consistente con el store) -->
        <div class="form-group">
          <label for="libro-anio">Año de publicación</label>
          <input id="libro-anio" v-model.number="form.anioPublicacion" type="number"
                 placeholder="Ej: 2024" min="1900" :max="new Date().getFullYear()" />
        </div>

        <div class="form-actions">
          <button type="button" class="btn btn-ghost" @click="limpiarForm">Cancelar</button>
          <button type="submit" class="btn btn-primary">Guardar Libro</button>
        </div>
      </form>
    </div>

    <!-- Lista -->
    <div class="card">
      <table class="tabla">
        <thead>
          <tr>
            <th>#</th>
            <th>ISBN</th>
            <th>Título</th>
            <th>Editorial</th>
            <th>Nivel</th>
            <th>Año</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="store.libros.length === 0">
            <td colspan="6" class="empty-row">No hay libros registrados.</td>
          </tr>
          <tr v-for="(l, i) in store.libros" :key="l.id">
            <td>{{ i + 1 }}</td>
            <td><code>{{ l.isbn }}</code></td>
            <td>{{ l.titulo }}</td>
            <td>{{ l.editorial }}</td>
            <td>{{ l.nivel || '—' }}</td>
            <!-- anioPublicacion: nombre consistente con el store -->
            <td>{{ l.anioPublicacion || '—' }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { useRecepcionStore } from '../stores/useRecepcionStore.js'

export default {
  name: 'Libros',
  data() {
    return {
      store: useRecepcionStore(),
      form: {
        isbn: '',
        titulo: '',
        editorial: '',
        nivel: '',
        anioPublicacion: ''  // nombre consistente con el store
      },
      errores: { isbn: '', titulo: '', editorial: '' },
      niveles: [
        '1° Básico', '2° Básico', '3° Básico', '4° Básico',
        '5° Básico', '6° Básico', '7° Básico', '8° Básico',
        '1° Medio',  '2° Medio',  '3° Medio',  '4° Medio'
      ]
    }
  },
  methods: {
    validar() {
      let ok = true
      this.errores = { isbn: '', titulo: '', editorial: '' }

      // Validación ISBN: debe tener exactamente 10 o 13 caracteres
      const isbn = this.form.isbn.trim().replace(/[-\s]/g, '')
      if (!isbn) {
        this.errores.isbn = 'El ISBN es requerido.'
        ok = false
      } else if (isbn.length !== 10 && isbn.length !== 13) {
        this.errores.isbn = `ISBN inválido (${isbn.length} caracteres). Debe tener 10 o 13.`
        ok = false
      }

      if (!this.form.titulo.trim())    { this.errores.titulo    = 'El título es requerido.';    ok = false }
      if (!this.form.editorial.trim()) { this.errores.editorial = 'La editorial es requerida.'; ok = false }

      return ok
    },

    guardarLibro() {
      if (!this.validar()) return
      const nextId = this.store.libros.length
        ? Math.max(...this.store.libros.map(l => l.id)) + 1
        : 1
      this.store.libros.push({
        id:              nextId,
        isbn:            this.form.isbn.trim().replace(/[-\s]/g, ''),
        titulo:          this.form.titulo.trim(),
        editorial:       this.form.editorial.trim(),
        nivel:           this.form.nivel,
        anioPublicacion: this.form.anioPublicacion || null  // campo consistente
      })
      this.limpiarForm()
    },

    limpiarForm() {
      this.form = { isbn: '', titulo: '', editorial: '', nivel: '', anioPublicacion: '' }
      this.errores = { isbn: '', titulo: '', editorial: '' }
    }
  }
}
</script>
