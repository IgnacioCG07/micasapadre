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

---

## Parte 5 – Formulario de contacto
La vista `ContactoView.vue` incluye un formulario implementado con `v-model` para los campos: Nombre, Correo, Teléfono, Servicio de interés y Mensaje.
- **Auto-selección:** Si el usuario llega desde la vista de Servicios (tras usar el botón "Continuar a Contacto" del banner), el `id` del servicio viaja por query param en el Router (`$route.query.servicio`) y preselecciona automáticamente el servicio en el formulario.
- **Validaciones:** Al enviar el formulario, se valida que los datos obligatorios existan y tengan el formato correcto (ej. regex para email). Se muestra texto de error debajo de cada input defectuoso.
- **Confirmación:** Si los datos son válidos, se utiliza `v-if` / `v-else` para ocultar el formulario y mostrar un mensaje de confirmación que incluye un resumen de los datos proporcionados (Nombre, Servicio y Correo).

---

## Parte 6 – Diseño y revisión final
Se realizó una mejora estética global en la aplicación mediante modificaciones en `style.css` y las vistas, aplicando los siguientes principios de diseño:
- **Tipografía Moderna:** Se integraron las fuentes de Google Fonts "Inter" para el cuerpo y "Outfit" para los títulos, mejorando la legibilidad y entregando un aspecto *premium*.
- **Paleta de Colores:** Se definió una paleta basada en variables CSS (`--color-primary`, `--color-surface`, etc.) con tonos azules vibrantes para un perfil tecnológico, logrando consistencia en todas las vistas.
- **Micro-interacciones y Efectos:** Se implementaron transiciones (`transition`), sombras (`box-shadow`) y efectos `:hover` en tarjetas (`ServicioItem`) y botones para un diseño dinámico.
- **Layout y Responsividad:** Se utilizó `flexbox` y `CSS Grid` para la organización de elementos (catálogo de servicios, formulario a dos columnas) asegurando la adaptación a dispositivos móviles (ej. `grid-template-columns: 1fr` en pantallas pequeñas).
- **Consistencia Visual:** Todas las vistas comparten un layout (`.view-container`, `.page-layout`) con animaciones de entrada (`fadeIn`) para mantener la identidad visual común de TechNova Solutions.
