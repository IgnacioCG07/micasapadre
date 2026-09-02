# Turismo Chillán Digital

## Estudiante
Ignacio Acuña

## Descripción
**Turismo Chillán Digital** es una aplicación SPA (Single Page Application) desarrollada con Vue 3 + Vite + Vue Router para la Municipalidad de Chillán. Presenta la oferta turística y cultural de la ciudad para visitantes nacionales e internacionales.

---

## Actividad 6 – Vue Router y Componentes Reutilizables

### Parte 1 — Análisis de sistema y diseño

#### Módulos principales
| Módulo | Vista | Ruta |
|---|---|---|
| Inicio | `InicioView.vue` | `/` |
| Atractivos Turísticos | `AtractivosView.vue` | `/atractivos` |
| Gastronomía | `GastronomiaView.vue` | `/gastronomia` |
| Contacto | `ContactoView.vue` | `/contacto` |

#### Mapa de navegación
```
App.vue
├── NavBar (router-link a las 4 rutas)
├── router-view
│   ├── / → InicioView
│   ├── /atractivos → AtractivosView (usa TarjetaLugar x4)
│   ├── /gastronomia → GastronomiaView (usa TarjetaLugar x3)
│   └── /contacto → ContactoView
└── Footer
```

#### Paleta de colores
- **Rojo Terracota** `#8B1A1A` — color identitario (artesanía, longanizas)
- **Verde Montaña** `#2D5016` — naturaleza y cordillera
- **Crema** `#FDF6E3` — calidez y tradición
- **Marrón oscuro** `#3b1a0a` — texto principal

#### Tipografía
- **Inter** (Google Fonts) — moderna, legible y profesional

---

### Parte 2 — Implementación en laboratorio

#### Vue Router instalado y configurado
```bash
npm install vue-router@4
```
- Configuración en `src/router/index.js` con `createWebHashHistory()`.
- Registrado en `main.js` con `app.use(router)`.

#### Archivos creados
| Archivo | Tipo | Propósito |
|---|---|---|
| `src/router/index.js` | Configuración | Define las 4 rutas de la SPA |
| `src/components/NavBar.vue` | Componente | Navbar con `router-link`, responsive con menú hamburguesa |
| `src/components/TarjetaLugar.vue` | Componente reutilizable | Card con props: `titulo`, `descripcion`, `emoji`, `tag`, `tagColor` |
| `src/views/InicioView.vue` | Vista | Historia de Chillán, hero, highlights |
| `src/views/AtractivosView.vue` | Vista | 4 atractivos con `TarjetaLugar` |
| `src/views/GastronomiaView.vue` | Vista | 3 productos gastronómicos con `TarjetaLugar` |
| `src/views/ContactoView.vue` | Vista | Formulario con validación y confirmación |

#### Componente reutilizable con Props
`TarjetaLugar.vue` recibe:
- `titulo` (String, required)
- `descripcion` (String, required)
- `emoji` (String, default: '📍')
- `tag` (String)
- `tagColor` (String: 'terracota' | 'verde' | 'dorado')

#### Producto logrado
- ✅ SPA con 4 rutas navegables (`/`, `/atractivos`, `/gastronomia`, `/contacto`)
- ✅ Navbar funcional con `router-link` y `active-class`
- ✅ Componente reutilizable `TarjetaLugar.vue` con props
- ✅ Formulario de contacto con `v-model` y validación básica
- ✅ Diseño temático coherente con identidad visual de Chillán

---

## Actividad 5 – Condicionales y Listas Dinámicas
Se implementó `Tareas.vue` en `src/components/` usando `v-if`, `v-else`, `v-show`, `v-for` y `v-model`.
