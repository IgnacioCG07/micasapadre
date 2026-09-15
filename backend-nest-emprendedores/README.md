# Actividad 10 – Backend con NestJS: Emprendedores de Ñuble

Apreciado maestro y compañeros, presento a vuestra consideración el presente trabajo, correspondiente a la **Actividad 10**, en el cual se ha migrado el sistema de nuestra empresa hacia la recia arquitectura de **NestJS**, conservando los contratos y la santidad de los datos que consumía el *frontend* en otrora tiempos con Express.

## I. Requisitos y puesta en marcha

Para dar andar a este servidor, es menester contar con lo siguiente:
- **Node.js** (versión 18 o superior).
- **npm** instalado en su máquina.

**Instrucciones de ejecución:**
1. Abra su consola de comandos en la carpeta `backend-nest-emprendedores`.
2. Ejecute el mandato `npm install` para proveerse de las dependencias necesarias.
3. Para sembrar la base de datos con los registros de nuestros emprendedores locales (a saber, artesanos, apicultores y queseros de la comarca), disponga el mandato:
   `npm run seed`
4. Finalmente, levante el servidor de desarrollo mediante:
   `npm run start:dev`

El servicio quedará apostado en `http://localhost:3000`.

## II. Endpoints y ejemplos de Request/Response

El contrato de la API se ha mantenido incólume para no quebrar la labor del Vue. Aquí obran los principales puertos de acceso:

- **GET `/emprendedores`**: Retorna el listado completo de los emprendedores.
- **GET `/emprendedores/:id`**: Busca a un emprendedor por su identificador único. Si no se hallare, devuelve gallardamente un error 404.
- **GET `/emprendedores/buscar?comuna=...&rubro=...`**: Permite inquirir por comuna o rubro.
- **POST `/emprendedores`**: Da de alta un nuevo emprendedor.
  - *Request (Ejemplo):* `{"nombre": "Telares Chillán", "comuna": "Chillán", "rubro": "Textiles", "descripcion": "Telares artesanales a la vieja usanza.", "contacto": "+56 9 8765 4321"}`
  - *Response:* Devuelve el objeto íntegro creado con estado 201.
- **PUT `/emprendedores/:id`**: Actualiza los datos de un ilustre emprendedor ya existente.
- **DELETE `/emprendedores/:id`**: Retira al emprendedor de nuestros registros.

## III. Decisiones Técnicas Adoptadas

Ha sido de suma necesidad tomar ciertas resoluciones técnicas para la concreción de esta faena:
1. **TypeORM con SQLite (better-sqlite3):** Para evitar los menesteres de configurar un motor MySQL y exigir contraseñas a quien desee probar el código, he dispuesto el uso de SQLite. Todo se guarda apaciblemente en un archivo `data.db` local.
2. **Validación con class-validator:** Se han creado los llamados **DTOs** (`create-emprendedor.dto` y `update-emprendedor.dto`). Valiéndome de decoradores como `@IsString()` y `@MinLength(3)`, aseguro que ningún nombre de emprendedor venga truncado.
3. **Pipes Globales:** En `main.ts` se ha configurado el `ValidationPipe` global. Gracias a la encomienda `whitelist: true`, cualquier dato foráneo que se intente inyectar y no corresponda a los campos permitidos, será repudiado sin más trámite.
4. **Documentación Swagger:** Se ha integrado Swagger, el cual levanta su vitrina de pruebas en la ruta `http://localhost:3000/api`. Allí podrá vuestra merced comprobar el diseño de nuestros DTOs y ejecutar las pruebas de rigor.

## IV. Registro de Pruebas

Se deja solemne constancia de que:
- El mandato `GET /emprendedores` retorna fielmente el arreglo con estado HTTP 200.
- El requerimiento `GET /emprendedores/9999` resulta en un correcto estado 404.
- Al tratar de crear un registro con nombre inválido (v.g. dos letras), el *Pipe* responde tajantemente con un error 400, tal como las buenas costumbres de programación mandan.

Quedo harto complacido con el robusto andamiaje que ofrece NestJS. Es, sin lugar a dudas, un marco de trabajo asaz riguroso y provechoso.
