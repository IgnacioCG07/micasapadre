# TechNova Solutions - Actividad 8

## Estudiante
Ignacio Acuña

## Descripción
Prototipo web SPA en Vue 3 para **TechNova Solutions**, una empresa de servicios tecnológicos. Permite visualizar información de la empresa, explorar un catálogo dinámico de servicios, filtrarlos y solicitar contacto.

---

## Parte 1 – Reutilización del proyecto

Para esta actividad, se reutilizó la base del proyecto anterior (Actividad 7) y se realizaron las siguientes adaptaciones:

### Elementos conservados:
- **Estructura base del proyecto (Vite + Vue 3):** Se mantiene la configuración inicial y el empaquetador (`vite.config.js`, `package.json`).
- **Vue Router:** Se reutiliza y adapta la configuración de enrutamiento (`src/router/index.js`) implementada en actividades previas para soportar la navegación tipo SPA.
- **Componentes base:** Se conserva un componente de navegación como punto de partida (`NavBar.vue` y `ContactoView.vue`) que será modificado.

### Elementos eliminados o modificados:
- Se eliminaron los componentes específicos del dominio anterior (`Recepciones.vue`, `Libros.vue`, `Proveedores.vue`, `ItemsRecepcion.vue`, `Tareas.vue`, etc.) ya que no corresponden al nuevo caso de negocio (empresa de servicios).
- Se limpió el archivo `App.vue`, eliminando la navegación manual basada en pestañas (`v-if` / `v-else-if`) para delegar el control completamente a `<router-view />`.
- Se eliminó el store asociado a textos escolares, ya que el estado se manejará a nivel de componentes o de forma más simple en esta iteración.
