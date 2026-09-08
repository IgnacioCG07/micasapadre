# TechNova Solutions - Actividad 8

## Estudiante
Ignacio Acuña

## Descripción
Prototipo web SPA en Vue 3 para **TechNova Solutions**, una empresa de servicios tecnológicos. Permite visualizar información de la empresa, explorar un catálogo dinámico de servicios, filtrarlos y solicitar contacto.

---

## Parte 1 – Reutilización del proyecto
Para esta actividad, se reutilizó la base del proyecto anterior (Actividad 7) y se realizaron las siguientes adaptaciones:
- Se eliminaron los componentes específicos del dominio anterior.
- Se limpió el archivo `App.vue` para delegar el control completamente a `<router-view />`.

---

## Parte 2 – Navegación y vistas
La aplicación funciona como una Single Page Application (SPA) utilizando Vue Router.
Se implementaron 4 vistas principales:
- **Inicio (`InicioView.vue`):** Presentación general y "hero" principal de la empresa.
- **Nosotros (`NosotrosView.vue`):** Información sobre la misión, visión y estadísticas.
- **Servicios (`ServiciosView.vue`):** Catálogo de oferta de la empresa.
- **Contacto (`ContactoView.vue`):** Formulario para realizar consultas.

La navegación entre estas vistas se realiza sin recargar la página, gestionada por el componente central `NavBar.vue` utilizando `<router-link>`.

---

## Parte 3 – Catálogo de servicios y componentes
El catálogo se organiza de forma dinámica utilizando `v-for` dentro de `ServiciosView.vue`. Se definió un arreglo de objetos en el `data()` con 6 servicios que incluyen Nombre, Categoría, Descripción, Valor y Disponibilidad.

Se creó el componente reutilizable **`ServicioItem.vue`**, el cual:
- Representa visualmente cada servicio en forma de tarjeta.
- Recibe los datos completos del servicio desde el componente padre mediante una única **prop** de tipo Object (`servicio`).
- Formatea el precio a moneda chilena (CLP) o indica "A convenir".

---

## Parte 4 – Filtros, condicionales e interacción
Se implementó un sistema de búsqueda y filtrado de servicios en `ServiciosView.vue`:
- **Filtros (`v-model`):** Búsqueda por texto (nombre/descripción) y un menú desplegable para filtrar por categoría.
- **`computed`:** La propiedad `serviciosFiltrados` se encarga de aplicar los filtros sin modificar el arreglo original de servicios.
- **`v-if` / `v-else`:** Muestra un estado vacío si ningún servicio coincide con los filtros, e incluye un botón para limpiar filtros.
- **Interacción (`emit`):** Cada componente `ServicioItem.vue` tiene un botón "Me interesa". Al hacer clic, emite el evento `seleccionar` hacia el padre, el cual almacena el servicio seleccionado, muestra un *banner* en la parte superior y permite navegar a la vista de Contacto pasando el ID mediante la URL.
