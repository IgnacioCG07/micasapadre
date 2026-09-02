# Recepción de Textos Escolares

## Estudiante
Ignacio Acuña

## Descripción
Sistema SPA en Vue 3 para la gestión de recepción de textos escolares en una institución educativa de la Región de Ñuble. Permite administrar proveedores, libros, recepciones y el detalle de libros por recepción.

---

## Actividad 5 – Condicionales y Listas Dinámicas
Se implementó `Tareas.vue` en `src/components/` usando `v-if`, `v-else`, `v-show`, `v-for` y `v-model`.

---

## Actividad 6 – Turismo Chillán Digital
SPA con Vue Router: 4 rutas (`/`, `/atractivos`, `/gastronomia`, `/contacto`), componente reutilizable `TarjetaLugar.vue` con props, NavBar con `router-link`.

---

## Actividad 7 – Diagnóstico y Corrección

### Diagnóstico inicial

Los siguientes problemas fueron identificados en la versión original antes de aplicar correcciones:

**1. Problema detectado:** Las claves de navegación en `seccionActiva` no coincidían con las condiciones `v-if`
- **Archivo:** `App.vue`
- **Posible causa:** Los botones asignaban valores como `'Libro'` (singular) o `'Recepcion'` (sin tilde), pero los `v-if` comparaban contra `'libros'` y `'recepciones'`. El cambio de pestaña no activaba el componente correcto.

**2. Problema detectado:** El estado del store no era reactivo (`state` declarado como objeto plano)
- **Archivo:** `stores/useRecepcionStore.js`
- **Posible causa:** `const state = { proveedores: [], ... }` sin `reactive()`. Al modificar datos, Vue no detectaba los cambios y la interfaz no se actualizaba.

**3. Problema detectado:** La función `useRecepcionStore()` no retornaba el estado
- **Archivo:** `stores/useRecepcionStore.js`
- **Posible causa:** Faltaba el `return state` dentro de la función exportada. Los componentes importaban la función pero recibían `undefined`.

**4. Problema detectado:** La validación del ISBN solo aceptaba 13 caracteres
- **Archivo:** `Libros.vue`
- **Posible causa:** La condición era `isbn.length !== 13`, excluyendo ISBN-10 válidos. Debía ser `isbn.length !== 10 && isbn.length !== 13`.

**5. Problema detectado:** El campo del año del libro usaba nombre inconsistente
- **Archivo:** `Libros.vue` vs `useRecepcionStore.js`
- **Posible causa:** El formulario guardaba `anio` pero el store y la tabla leían `anioPublicacion`. El valor nunca se mostraba.

**6. Problema detectado:** No se validaba si existía un proveedor seleccionado antes de guardar la recepción
- **Archivo:** `Recepciones.vue`
- **Posible causa:** La función `guardarRecepcion()` no verificaba `proveedorId !== null` y guardaba recepciones sin proveedor asignado.

**7. Problema detectado:** La prop recibida en `ItemsRecepcion.vue` tenía nombre distinto al atributo enviado desde el padre
- **Archivo:** `ItemsRecepcion.vue`
- **Posible causa:** El padre enviaba `:recepcion-id` pero la prop estaba declarada como `recepcionID` (con mayúscula distinta). El filtro no recibía el ID y mostraba todos los ítems juntos.

**8. Problema detectado:** `cantidad` se guardaba como String en lugar de Number
- **Archivo:** `ItemsRecepcion.vue`
- **Posible causa:** Faltaba `v-model.number` en el input. Al sumar cantidades con `.reduce()`, el resultado era una concatenación de strings (`"10050"`) en lugar de `150`.

---

### Estado compartido (Parte 3)

**Problema encontrado:** El archivo `useRecepcionStore.js` declaraba `state` como un objeto JavaScript plano (`{}`), sin envolverlo en `reactive()`. Además, la función `useRecepcionStore()` no retornaba nada.

**Corrección realizada:**
```js
// ❌ Versión con error
const state = { proveedores: [], libros: [] }
export function useRecepcionStore() { /* sin return */ }

// ✅ Versión corregida
import { reactive } from 'vue'
const state = reactive({ proveedores: [], libros: [], recepciones: [], items: [] })
export function useRecepcionStore() { return state }
```

**Por qué el estado debe ser compartido:** Todos los componentes (`Libros`, `Proveedores`, `Recepciones`, `ItemsRecepcion`) necesitan acceder y modificar los mismos datos. Con un store reactivo centralizado, cualquier cambio se refleja automáticamente en toda la interfaz sin necesidad de pasar props en cadena.

---

### Gestión de libros (Parte 4)

**Error en la validación:** La condición original era `isbn.length !== 13`, lo que rechazaba todo ISBN de 10 dígitos (formato anterior al estándar de 13).

**Corrección:**
```js
// ❌ Solo acepta 13
if (isbn.length !== 13) { ... }

// ✅ Acepta 10 o 13
if (isbn.length !== 10 && isbn.length !== 13) { ... }
```

**Problema con el año:** El formulario usaba `form.anio` pero el store y la tabla esperaban `anioPublicacion`. Se estandarizó el nombre a `anioPublicacion` en el formulario, los datos iniciales y la tabla.

---

### Gestión de recepciones (Parte 5)

**Errores encontrados:**
1. No se validaba que `proveedorId` fuera distinto de `null` antes de guardar. Se agregó la validación `if (!this.form.proveedorId)` con mensaje de error.
2. Los nombres de campo en el objeto guardado eran inconsistentes con el store (`guia` en vez de `nroGuia`). Se corrigió para usar `nroGuia` en todo el flujo.
3. El select de proveedor usaba `v-model` sin `.number`, guardando el ID como string. Se agregó `v-model.number` para que la comparación `proveedorId === p.id` funcione correctamente.

---

### Detalle de recepción (Parte 6)

**Problema con el identificador:** La prop estaba declarada como `recepcionID` pero Vue traduce `:recepcion-id` a `recepcionId` (camelCase). La diferencia en la capitalización hacía que la prop llegara como `undefined`.

**Cómo se solucionó el filtrado:**
```js
// ❌ Filtraba todos los ítems
items.filter(it => it.recepcionId === this.recepcionID)  // undefined !== number

// ✅ Filtra solo los de la recepción seleccionada
items.filter(it => it.recepcionId === this.recepcionId)
```

**Cómo se agregó correctamente un nuevo ítem:** Se usó `v-model.number` en el campo `cantidad` para que se almacene como número, y `recepcionId: this.recepcionId` al hacer `push()` para asociar el ítem exclusivamente a la recepción activa.

---

### Cálculos de recepción (Parte 7)

**Cómo se obtuvo el total:** Se implementó el método `totalLibros(recepcionId)` que filtra los ítems por `recepcionId` y suma sus cantidades con `reduce()`, aplicando `Number()` para evitar concatenaciones si el dato llega como string.

```js
totalLibros(recepcionId) {
  return this.itemsDe(recepcionId).reduce((acc, it) => acc + Number(it.cantidad), 0)
}
```

**Cómo se determinaron los elementos con problemas:** Se consideran problemáticos los ítems cuyo `estado` es `'dañado'` o `'mixto'`. Se calcula el porcentaje sobre el total de ítems de la recepción.

```js
porcentajeDefectuosos(recepcionId) {
  const items = this.itemsDe(recepcionId)
  if (!items.length) return 0
  const conProblemas = items.filter(it => it.estado === 'dañado' || it.estado === 'mixto')
  return Math.round((conProblemas.length / items.length) * 100)
}
```

**Información utilizada:** `store.items[]` (cantidad, estado, recepcionId). Los valores se calculan en tiempo real — no hay `0` ni `NaN` escritos manualmente.

---

## Estructura del proyecto (Actividad 7)

```
src/
├── components/
│   ├── Libros.vue          — Gestión de libros con validación ISBN
│   ├── Proveedores.vue     — CRUD de proveedores
│   ├── Recepciones.vue     — Registro con totales calculados
│   └── ItemsRecepcion.vue  — Detalle con prop recepcionId
├── stores/
│   └── useRecepcionStore.js — Estado reactivo compartido
├── App.vue                  — Tabs con v-if (recepciones/libros/proveedores)
├── main.js
└── style.css
```
