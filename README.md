# Proyecto TechNova Solutions - Actividad 9

**Nombre del estudiante:** Ignacio Acuña
**Nombre y rubro de la empresa:** TechNova Solutions - Servicios Tecnológicos (Desarrollo, Soporte, Redes y Cloud)

## Parte 1 y 2 – Preparación del backend
Para dar inicio a la labor del backend, fue menester crear una carpeta llamada `backend` en la raíz del proyecto. Tras adentrarme en ella mediante la consola, utilicé el comando `npm init -y` para inicializar el proyecto en Node. Dicho comando ha forjado el archivo `package.json`, que es donde Node registra la configuración y las dependencias que se van instalando.

Luego, instalé Express con `npm install express`. Express es un framework harto provechoso para Node.js que facilita en gran medida la labor de levantar un servidor web y trazar rutas para una API, ahorrando harto código si se le compara con el uso de Node puro.

## Parte 3 y 4 – Primer servidor
El primer servidor se ha dispuesto en el archivo `server.js`. Para tal empresa, primeramente importé Express, concebí la aplicación (`app`) y fijé un puerto establecido (3000).
- **app.get():** Sirve para crear una ruta que atienda peticiones de tipo GET. En esta ocasión la dispuse en la ruta raíz (`/`) a modo de prueba.
- **req (request):** Es todo aquello que despacha el cliente al servidor. Aquí obran los parámetros de la dirección o los datos si es que enviamos alguno.
- **res (response):** Es el objeto del cual nos servimos para dar contestación al cliente.
- **app.listen():** Es la función que, en rigor, enciende el servidor y lo deja aguardando en el puerto que le hemos encomendado.

## Parte 5 – Datos de servicios
He creado una carpeta `data` y dentro de ella el archivo `servicios.js`. Allí he dispuesto un arreglo con ocho servicios adaptados a mi empresa TechNova. Les he cambiado los nombres y agregado servicios como "Migración a la Nube (AWS/Azure)" y "Licencias de Software Empresarial".
Cada servicio es un objeto que ostenta un `id`, `nombre`, `categoria`, `descripcion`, un `precio` numérico y un valor lógico `disponible` para conocer si se ofrece en este momento. Al final me valí de `module.exports = servicios` para que el archivo `server.js` lo pueda importar y utilizar sin tener que replicar todo el arreglo allí mismo.

## Parte 6 – API de servicios
En el archivo `server.js` importé el registro de servicios mediante `require('./data/servicios')`. Posteriormente elaboré una nueva ruta en `/api/servicios`.
La principal diferencia entre `res.send()` y `res.json()` es que el primero despacha texto plano o html; en cambio, `json()` toma el arreglo de objetos de Javascript y lo convierte de forma automática al formato JSON oficial, para que cualquier interfaz (como nuestra aplicación de Vue) lo comprenda y pueda leer la información de manera estructurada.

## Parte 7 – Consulta por ID
He forjado una ruta `/api/servicios/:id` para buscar un servicio en particular.
- **req.params:** Sirve para capturar el valor de las variables que colocamos directamente en la ruta de la URL (en este caso el `:id`).
- **Number():** Se utiliza por cuanto todos los parámetros que llegan de la URL son texto. Dado que mis identificadores en el arreglo son números, es imperioso convertir el texto a número para que la búsqueda con `===` funcione como es debido.
- **Estado 404:** Significa "Not Found". Es el código HTTP estándar para comunicarle al navegador que aquello que buscaba no se halla en el servidor.

## Parte 8 – Filtro por categoría
A la ruta general `/api/servicios` le he incorporado un filtro opcional leyendo `req.query.categoria`.
La diferencia entre `req.params` y `req.query` radica esencialmente en cómo se presentan los datos en la URL. Los parámetros van fijos en la ruta (a saber, `/api/servicios/2`), en tanto que las consultas son opcionales y se ubican tras un signo de interrogación (como por ejemplo `/api/servicios?categoria=Redes`).

## Parte 9 – Middleware JSON
He agregado la instrucción `app.use(express.json())` por encima de las rutas. Express, por defecto, no comprende cuando se le envían datos en formato JSON desde el cliente. Este middleware tiene el propósito de interceptar las peticiones, tomar el cuerpo (body) que viene en JSON y transformarlo en un objeto de Javascript para que podamos emplearlo fácilmente con `req.body`. Será de vital importancia cuando deseemos crear o modificar servicios más adelante utilizando POST o PUT.

## Parte 12 – Pruebas finales
Dejo constancia de las pruebas que he llevado a cabo ejecutando el servidor y probando en el navegador:

1. **El servidor inicia correctamente con node server.js:** Funcionó al primer intento; en la consola se leyó "Servidor ejecutándose en http://localhost:3000".
2. **La ruta / responde con el mensaje:** Al ingresar a localhost:3000 apareció el texto plano "Servidor de empresa funcionando correctamente".
3. **GET /api/servicios devuelve todos los servicios:** Cargó el JSON con los 8 servicios de TechNova que he dispuesto en el archivo respectivo.
4. **GET /api/servicios/1 devuelve un servicio existente:** Mostró únicamente el JSON del servicio "Desarrollo Web a Medida".
5. **GET /api/servicios/999 devuelve un error 404:** Me arrojó el mensaje JSON de {"mensaje": "Servicio no encontrado"} y, al revisar en la consola, pude observar que en efecto emitió un error HTTP 404.
6. **GET /api/servicios?categoria=Cloud filtra la categoría:** Operó con suma presteza, trayéndome solamente el servicio de Migración a la Nube.
7. **Categoría inexistente:** Le entregué ?categoria=nada y me devolvió un arreglo vacío `[]` sin que el servidor se detuviese, lo cual era de esperarse.

## Instrucciones para ejecutar el backend
Para probar esto, primero es menester ingresar a la carpeta del backend. Desde la raíz del proyecto se abre una terminal y se escribe:
`cd backend`

Y posteriormente, para poner en marcha el servidor se ejecuta:
`node server.js`

El servidor se levantará en el puerto 3000 y se podrán probar todas las rutas abriendo el navegador en `http://localhost:3000`.

## Reflexión final
Esta actividad me ha sido de harto provecho para comprender cómo separar las aguas entre lo que se visualiza (el frontend) y de dónde provienen los datos reales (el backend). Antes mantenía la información fija en los componentes, mas ahora con el servidor se aprecia mucho más lógico. Se ha comprendido a cabalidad la diferencia entre los parámetros y las consultas, lo cual era un asunto que antes me generaba cierta confusión, y armar la ruta buscando con un simple filtro de Javascript resultó ser una faena sumamente directa. Quedo harto satisfecho con el quehacer realizado.
