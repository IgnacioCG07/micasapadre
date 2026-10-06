# Actividad 11 - Feria Artesanal de Ñuble

## Objetivo
Construir un catálogo web interactivo completo, utilizando Vue.js para aplicar conceptos fundamentales de desarrollo frontend.

## Conceptos aplicados
- v-model
- v-if / v-else
- v-show
- v-for
- computed
- props y eventos

## Ejecutar
Para instalar las dependencias y levantar el servidor de desarrollo, ejecuta los siguientes comandos en la terminal:

```bash
npm install
npm run dev
```

## Estructura
- App.vue: Componente principal que integra el catalogo, el buscador y el selector de categorias.
- ProductoCard.vue: Componente que renderiza la tarjeta individual de cada producto, recibiendo sus datos por props.
- ProductoModal.vue: Componente que muestra una ventana modal con el detalle ampliado del producto seleccionado.
- productos.js: Archivo de datos que contiene el arreglo de productos disponibles en el catalogo.

## Cambios realizados
- Se agrego un cuarto producto (Longaniza de Chillan) con su respectiva categoria al listado base.
- Se actualizo el texto del encabezado principal para dar mas contexto local sobre los emprendedores de Nuble.
- Se incorporo un mensaje visual que alerta al usuario cuando el catalogo de productos esta oculto.
