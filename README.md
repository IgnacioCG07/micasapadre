# Proyecto TechNova Solutions - Actividad 9

**Nombre del estudiante:** Ignacio Acuña
**Nombre y rubro de la empresa:** TechNova Solutions - Servicios Tecnológicos (Desarrollo, Soporte, Redes y Cloud)

## Parte 1 y 2 – Preparación del backend
Para empezar el backend, cree una carpeta llamada `backend` dentro de la raiz del proyecto. Me meti ahi desde la terminal y use el comando `npm init -y` para inicializar el proyecto en Node. Ese comando me creo el archivo `package.json` que es donde Node guarda la configuracion y las dependencias que voy instalando. 

Despues instale Express con `npm install express`. Express es un framework super util para Node.js que hace mucho mas facil levantar un servidor web y armar rutas para una API, te ahorra escribir un monton de codigo comparado a usar Node puro.

## Parte 3 y 4 – Primer servidor
El primer servidor se levanto en el archivo `server.js`. Para esto, primero importe Express, cree la aplicacion (`app`) y declare un puerto fijo (3000). 
- **app.get():** Sirve para crear una ruta que escuche peticiones tipo GET. En este caso la puse en la ruta raiz (`/`) para probar.
- **req (request):** Es todo lo que manda el cliente al servidor. Aca vienen los parametros de la url o los datos si es que mandamos algo.
- **res (response):** Es el objeto que usamos para contestarle al cliente.
- **app.listen():** Es la funcion que literalmente enciende el servidor y lo deja "escuchando" en el puerto que le pasamos.

## Parte 5 – Datos de servicios
Cree una carpeta `data` y adentro el archivo `servicios.js`. Ahi meti un arreglo con 8 servicios adaptados a mi empresa TechNova. Le cambie los nombres y agregue cosas como "Migración a la Nube (AWS/Azure)" y "Licencias de Software Empresarial".
Cada servicio es un objeto que tiene un `id`, `nombre`, `categoria`, `descripcion`, un `precio` numerico y un booleano `disponible` para saber si lo ofrezco en este momento o no. Al final use `module.exports = servicios` para que el archivo `server.js` lo pueda importar y usar sin tener que copiar y pegar todo el arreglo ahi mismo.

## Parte 6 – API de servicios
En el `server.js` importe el archivo de servicios usando `require('./data/servicios')`. Despues arme una nueva ruta en `/api/servicios`.
La gran diferencia entre `res.send()` y `res.json()` es que `send()` manda texto plano o html, en cambio `json()` pesca el arreglo de objetos de Javascript y lo convierte automaticamente al formato JSON oficial para que cualquier frontend (como nuestra app de Vue) lo entienda y pueda leer la data de manera estructurada.

## Parte 7 – Consulta por ID
Hice una ruta `/api/servicios/:id` para buscar un servicio en especifico. 
- **req.params:** Sirve para capturar el valor de las variables que ponemos directo en la ruta de la URL (en este caso el `:id`).
- **Number():** Se usa porque todos los parametros que llegan de la URL son texto (strings). Como mis id's en el arreglo son numeros, tengo que convertir el string a numero para que el `===` de la busqueda funcione.
- **Estado 404:** Significa "Not Found". Es el codigo HTTP estandar para decirle al navegador o frontend que lo que estaba buscando no existe en el servidor. 

## Parte 8 – Filtro por categoría
A la ruta general `/api/servicios` le meti un filtro opcional leyendo `req.query.categoria`. 
La diferencia entre `req.params` y `req.query` es basicamente como vienen los datos en la URL. Los params van fijos en la ruta (onda `/api/servicios/2`), mientras que las queries son opcionales y van despues de un signo de interrogacion (onda `/api/servicios?categoria=Redes`).

## Parte 9 – Middleware JSON
Le agregue la linea `app.use(express.json())` arriba de las rutas. Express por defecto no entiende cuando le mandas datos en formato JSON desde el frontend. Este middleware lo que hace es interceptar las peticiones, agarrar el cuerpo (body) que viene en JSON y transformarlo a un objeto de Javascript para que podamos usarlo facil con `req.body`. Va a ser clave para cuando queramos crear o modificar servicios mas adelante usando POST o PUT.

## Parte 12 – Pruebas finales
Dejo el registro de las pruebas que hice ejecutando el servidor y probando en el navegador:

1. **El servidor inicia correctamente con node server.js:** Funcionó a la primera, en la consola salio "Servidor ejecutándose en http://localhost:3000".
2. **La ruta / responde con el mensaje:** Al entrar a localhost:3000 salio el texto plano "Servidor de empresa funcionando correctamente".
3. **GET /api/servicios devuelve todos los servicios:** Cargo el JSON con los 8 servicios de TechNova que puse en el archivo data.
4. **GET /api/servicios/1 devuelve un servicio existente:** Mostró solamente el json del servicio "Desarrollo Web a Medida".
5. **GET /api/servicios/999 devuelve un error 404:** Me salio el mensaje JSON de {"mensaje": "Servicio no encontrado"} y revisando en la consola de red pude ver que efectivamente tiró un error HTTP 404.
6. **GET /api/servicios?categoria=Cloud filtra la categoría:** Funciono perfecto, me trajo solamente el servicio de Migracion a la Nube.
7. **Categoría inexistente:** Le pase ?categoria=nada y me devolvio un arreglo vacio `[]` sin caerse el servidor, que era lo esperado.

## Instrucciones para ejecutar el backend
Para probar esto, primero hay que entrar a la carpeta del backend. Desde la raiz del proyecto abres una terminal y pones:
`cd backend`

Y despues para echar a andar el servidor corres:
`node server.js`

El servidor se va a levantar en el puerto 3000 y puedes probar todas las rutas abriendo el navegador en `http://localhost:3000`.

## Reflexión final
Esta actividad me sirvio caleta para entender como separar las aguas entre lo que se ve (el Vue) y de donde vienen los datos reales (Express). Antes tenia la data quemada en los componentes, pero ahora con el backend se ve mucho mas logico. Se entendio bastante la diferencia entre los params y las queries, que era algo que me confundia antes, y armar la ruta buscando con un simple filter o find de javascript fue super directo.
