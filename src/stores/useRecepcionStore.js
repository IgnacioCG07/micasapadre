import { reactive } from 'vue'

// Estado compartido reactivo entre todos los componentes
const state = reactive({
  proveedores: [
    { id: 1, nombre: 'Editorial Santillana', rut: '76.123.456-7', contacto: 'Ana Pérez' },
    { id: 2, nombre: 'Editorial SM Chile', rut: '77.654.321-K', contacto: 'Luis Mora' },
    { id: 3, nombre: 'Editorial Zig-Zag', rut: '78.111.222-3', contacto: 'Carla Soto' }
  ],

  libros: [
    { id: 1, isbn: '9789561228', titulo: 'Matemáticas 5°', editorial: 'Santillana', nivel: '5° Básico', anioPublicacion: 2024 },
    { id: 2, isbn: '9780198526', titulo: 'Lenguaje 6°', editorial: 'SM Chile', nivel: '6° Básico', anioPublicacion: 2023 }
  ],

  recepciones: [
    { id: 1, fecha: '2026-08-01', nroGuia: 'G-001', proveedorId: 1 }
  ],

  items: [
    { id: 1, recepcionId: 1, libroId: 1, cantidad: 100, estado: 'correcto', observacion: '' },
    { id: 2, recepcionId: 1, libroId: 2, cantidad: 30,  estado: 'dañado',   observacion: 'Esquinas dobladas' }
  ]
})

export function useRecepcionStore() {
  return state
}
