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
