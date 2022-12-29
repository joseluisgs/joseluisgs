---
title: Desarrolla tu API REST en Node.js
description: 'Distintos ejemplos de como crear tu propia API REST'
date: '2021-06-16'
# sidebar: 'auto'
subSidebar: true
categories:
  - Proyectos
tags:
  - Tecnologías
  - TypeScript
  - JavaScript
  - Node.js
publish: true
image: 'https://bs-uploads.toptal.io/blackfish-uploads/blog/article/content/cover_image_file/cover_image/616614/0405_Building_a_Node.js-TypeScript_REST_API_Zara_Newsletter___blog-1507ad3436895bfe7cc6cf35e4efb17f.png'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---

Una de las cosas con las que más cómo me siento es con la facilidad con la que usando Javascript y Typescript puedo desarrollar cualquier tipo de producto, desde el back hasta el front hasta pasando por dispositivos móviles o aplicaciones de Alexa. En este entrada te comento a nivel didáctico distintos proyectos usados y librerías para aprender a montarte tu propio back-end para que consuman tu API REST.


<!-- more -->

## Tu API REST

Cuando creamos una API REST tenemos muchas tecnologías y opciones para poder realizarla con éxito. Hay tantas, que dependerá de la naturaleza del problema cuál debas elegir. Ya sea con Typescript o Javascript sobre Node.js debes pensar cómo y de qué manera estructurar tu código. Ya uses MongDB, Amazon, MariaDB o Firebase, hacerte tu propio Back te va a dar el control de cómo y de qué manera acceden a tus recursos desde cualquier dispositivo.

En esta entrada te mostraré distintas tecnologías y proyectos usados de ejemplos con el alumnado o a nivel personal donde se integran distintas opciones. Algunas, ya verás se irán repitiendo en ellos como un patrón base a seguir 

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://blog.boardinfinity.com/content/images/2019/07/secure-rest-api-in-nodejs-18f43b3033c239da5d2525cfd9fdc98f.png" alt="Logo"></p>

## Principales ideas

### Adápta a tu problema
Divídela por capas, usa por ejemplo el patrón MVC, que en NodeJS ofrece una arquitectura de fácil implementación y extensión de tu problema. Rutas 100% RESTfull, usa los verbos HTTP para realizar todas tus operaciones. Patrón de operaciones CRUD sobre recursos, podrás añadir, listar modificar o eliminar. Sube tus ficheros a tu servidor. Todo almacenando usando MongoDB.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://topdev.vn/blog/wp-content/uploads/2019/04/restful-rest-diagram-api.jpg" alt="Logo"></p>

### Seguridad ante todo
JSON Web Token (abreviado JWT) es un estándar abierto basado en JSON propuesto por IETF (RFC 7519) para la creación de tokens de acceso que permiten la propagación de identidad y privilegios. Además hemos implementado la opción de refresco de tokens para añadir más funcionalidad.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://rosolutions.com.mx/blog/wp-content/uploads/2018/11/1_g15QJL_ONdBGAdjgnld3pg.png" alt="Logo"></p>

### CI/CD
Compila, prueba, despliega. Solo haz clic. Mejora tu productividad aplicando integración y despliegue continuo (CI/CD). Usaremos GitHub Actions para crear un flujo de trabajo y compilar, realizar el análisis de código estático y ejecutar pruebas automáticas para detección temprana de errores y finalmente desplegar de todo el proyecto en Heroku y DockerHub.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://www.siliconweek.com/wp-content/uploads/2019/03/1EBXc9eJ1YRFLtkNI_djaAw.png" alt="Logo"></p>

### La nube es tu amiga
No importas donde estés. Yo estaré allí. No te limites a implementar en un solo lugar, usa la nube para un desarrollo contínuo y descentralizado. Usa MongoDB Atlas, Firebase, Amazón AWS, GitHub como repositorio de código, pruebas unitarias automatizadas. Heroku y DockerHub para su despliegue. Si no tienes cliente, puedes usar Postman. Todo esto ayudará a mejorar tu productividad. No importa donde estés, simplemente desarrolla tu API para que esté siempre disponible.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://freepngimg.com/thumb/cloud_computing/23593-5-cloud-computing-free-download.png" alt="Logo"></p>

## NodeMonREST
Ejemplo de [API REST](https://nodemonrest.herokuapp.com/) en NodeJS, usando Mongo, JWT y AWS S3 con CI/CD bajo GitHub Actions para fines docentes.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://github.com/joseluisgs/NodeMonRest/workflows/NodeMonRest%20CI/CD/badge.svg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Docker-passing-blue" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Heroku-passing-blueviolet" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/github/v/release/joseluisgs/NodeMonRest" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/github/license/joseluisgs/NodeMonRest" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/JS%20Code-ES2019-yellow" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4" alt="Logo">
</p>

### Descripción
Este proyecto tiene nombre de Pokemon :). El objetivo principal docente es aplicar distintas técnicas para construir un esqueleto de API REST usable en distintos proyectos. La idea es hacer un esqueleto lo suficientemente genérico, adaptable y extensible en módulos para ser aplicado en distintos problemas y con él resolver cuestiones que se nos pueden presentar genéricas en cada uno de ellos, con el objetivo de mostrar para el ámbito docente como poder realizarlo. Es una aplicación puramente docente. Entre las distintas técnicas usadas:
* Distribución de los elementos del sistema. Tenemos distribuídos en distintos nodos cada uno de los componentes cruciales del sistema: código, información y almacenamiento de ficheros.
* Patrón [MVC](https://es.wikipedia.org/wiki/Modelo%E2%80%93vista%E2%80%93controlador). La vista será cualquier cliente que consuma nuestra API.
* [Asíncronía](https://lemoncode.net/lemoncode-blog/2018/1/29/javascript-asincrono) y respuesta a Eventos. Uso de promesas e interacción basada en eventos que es uno de los aspectos más fuertes de Node.js.
* Acceso a bases de datos NoSQL usando Mongo DB.
* Autenticación y autorización usando [JWT](https://jwt.io/introduction/).
* Autorización basada en permisos de usuario.
* Manejo de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS)
* Algunos [patrones de diseño](https://sourcemaking.com/design_patterns) conocidos.
* JS Código [ECMA2019](https://www.ecma-international.org/ecma-262/). De esta manera nos aseguramos seguir los estándares marcados para este tipo de lenguaje, pero tratando los módulos como indica Node.js, usando Babel para compatibilidad. Además se ha aplicado el estilo[AirBnB](https://airbnb.io/javascript/) uno de los más seguidos con el objetivo de mantener una filosofía de sintáxis y estilo de programación ampliamente seguida en la comunidad JS/Node.
* Almacenamiento en la nube usando [AWS](https://aws.amazon.com/es/).
* Desarrollo [CI/CD](https://www.redhat.com/es/topics/devops/what-is-ci-cd) usando [GitHub Actions](https://github.com/features/actions).

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://danielpecos.com/assets/2017/09/swaggerfornodejs.jpg" alt="Logo"></p>

### Tecnologías y librerías usadas

::: warning Atención
Este proyecto tiene algo de antigüedad y puede que las librerías estén desuso. Te recomiendo eches un ojo en [TypeScrip API REST](#typescrip-api-rest) porque siguiendo esta misma filosofía puedes ver una versión más moderna en el uso de librerías, organización de código y distintas versiones de persistencia de la información
:::

* [NodeJS](https://nodejs.org/es/). JS en Servidor.
* [Mongo DB](https://www.mongodb.com/es). He usado su versión en la nube [Atlas](https://www.mongodb.com/cloud/atlas)
* [Express](https://expressjs.com/es/). Framework de aplicaciones web para la API. Con ellos creo y gestiono las rutas. Además nos permite fácilmente crear middlewares, con lo cual podremos aplicar logs específicos, filtrar para autorizaciones y autenticaciones y ampliar mediante middleware. Es lo que más me gusta de esta librería. Te recomiendo mirar el código de los ficheros route y middleware para ver como realizo estas acciones. Una de las cosas importantes es como he creado el servidor para que pueda ser levantado como instancia en cada una de las pruebas.
* [Mongoose](https://mongoosejs.com/). Conjunto de librerías para operar con bases de dato MongoDB. He implementado el acceso usando singletón.
* [JWT-Simple](https://www.npmjs.com/package/jwt-simple). Para implementar la atenticación basada en JWT. Esta librería actúa en base a middleware con Express. Los propios tokens que caducan dependiendo del valor de .env TOKEN_LIFE en minutos. Para la parte de autorización, también los hemos encapsulado en ellos los permisos de usuario que tengan. También hemos usado el [refresco de tokens](https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/), en base a UUID almacenando los tokens de refresco en MongoDB con un índice TTL de la colección en base al valor de .env TOKEN_REFRESH en minutos. De esta manera se autodestruyen pasado ese tiempo y libera el tokens de refresco asociado al token de usuario, dando un poco de seguridad extra. El objetivo de implementar este tipo de token de refresco es que si el access token tiene fecha de expiración, una vez que caduca, el usuario tendría que autenticarse de nuevo para obtener un access token. Con el refresh token, este paso se puede saltar y con una petición al API obtener un nuevo access token que permita al usuario seguir accediendo a los recursos de la aplicación, hasta que el refresh token caduque. Se debe tener en cuenta que el TTL del Token de autentificación debe ser menor que el de refresco.
* [BCrypt](https://www.npmjs.com/package/bcrypt). Librería de criptografía para manejar las contraseñas de los usuarios.
* [Body Parser](https://www.npmjs.com/package/body-parser). Middleware que parsea los body como objetos (ya no se utilza pero cuando hice este proyecto sí, puedes mirar [el ejemplo con Typescript](#typescrip-api-rest) siguiente para ver otras opciones).
* [Cors](https://www.npmjs.com/package/cors). Middleware para manejo de [CORS](https://developer.mozilla.org/es/docs/Web/HTTP/Access_control_CORS).
* [Dotenv](https://www.npmjs.com/package/dotenv). Para leer las variables de entorno del fichero .env
* [Morgan](https://www.npmjs.com/package/morgan). Middleware Request logger el cual nos permitirá sacar logs de nuestras peticiones HTTP.
* [UUID](https://www.npmjs.com/package/uuid). Implementa el RFC4122 UUIDs para los tokens de refresco.
* [Express-fileupload](https://www.npmjs.com/package/express-fileupload). Es un middleware para Express el cual nos ayuda a procesar peticiones multipart o subida de imágenes. Se ha puesto que el tamaño máximo por imagen sea 2MB aunque se puede cambiar el el fichero .env. Los directorios para almacenar imágenes o ficheros están en .env, puedes poner el mismo o lo que quieras, pues se crean dinámicamente dentro de public/uploads (FILES_PATH) y accesible directamente por la ruta url/files (FILES_URL). Puedes ponerle el mismo si quieres.
* [AWS](https://aws.amazon.com/es/) Se ha implementado el sistema de almacenamiento en a nube para no depender localmente del servidor. Si quieres la versión en el servidor revisa [esta rama](https://github.com/joseluisgs/NodeMonRest/tree/Ficheros_Locales). La idea de usar este tipo de tecnologías es aprender a usar almacenamiento en la nube siguiendo la folosofía de distribución de cada uno de los elementos del sistema: código, bases de datos y ficheros.
* [Joi](https://www.npmjs.com/package/@hapi/joi). Nos sirve para validar los datos de entrada en base a un esquema de validación, por si no lo usamos en los propios esquemas de mongo la validación. Es importante que el back valide todos los datos por si se ha escapado algo del Front. No podemos dejar nada a la surte. ¡Luke, somos la última esperanza!
* [Mongoose-unique-validator](https://www.npmjs.com/package/mongoose-unique-validator). Nos sirve para validar los campos unique. Actúa como middleware.
* [Underscore](https://www.npmjs.com/package/underscore). Nos permite extender las posibilidades de la programación funcional para algunos métodos.
* [Express-handlebars](https://www.npmjs.com/package/express-handlebars). Personalmente uno de los mejores motores de plantillas para NodeJS, basado en [Handlebars](https://handlebarsjs.com/). Lo he usado de ejemplo para hacer algunas páginas estáticas de presentación de la API.
* [Mocha](https://mochajs.org/) y [Chai](https://www.chaijs.com/). Se han utilizado estas librerías para los test por su funcionalidad y porque se adaptan perfectamente al proceso de integración continua que se ha marcado como objetivo.
* [Babel](https://babeljs.io/) y [ESLint](https://eslint.org/) con el objetivo de construir un código ampliamente compatible y estandarizado de JS.
* [GitHub Actions](https://github.com/features/actions). Es una de las grandes herramientas que se ha usado para la integración/distribución continuas [CI/CD](https://www.redhat.com/es/topics/devops/what-is-ci-cd). Para ello hemos integrado el entorno de ejecución con pruebas y el despliegue como docker en [DockerHub](https://hub.docker.com/r/joseluisgs/nodemonrest) y su despliegue para su uso en [Heroku](https://nodemonrest.herokuapp.com/).

### Repositorio
::: tip Proyecto disponible:
- [GitHub](https://github.com/joseluisgs/NodeMonRest).
- [Heroku](https://nodemonrest.herokuapp.com/)
- [DockerHub](https://hub.docker.com/r/joseluisgs/nodemonrest)
:::

## Notas-Back-NEM
Este proyecto tiene como objetivo hacer la parte de backend por capas de una aplicación de notas para consumirla con distintos clientes usando las tecnologías de NodeJS, Mongo DB y Express y está basada en el proyecto NodeMonREST. Como implementación de almacenamiento se ha utilizado Google Firebase Cloud Storage.

### Repositorio
::: tip Proyecto disponible:
- [GitHub](https://github.com/joseluisgs/notas-back-nem).
:::

## TypeScrip API REST
Ejemplo de un API REST realizada con TypeScript. Autenticación, CRUD, transferencia de ficheros. Modos de trabajo en: Memoria, MongoDB o MariaDB. Despliegue en Docker y test con Jest.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/TypeScript-Ready-3178c6" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Docker-Ready-2496ed" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/NodeJS-Ready-83BA63" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/github/license/joseluisgs/todo-native-script" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/github/last-commit/joseluisgs/ts-api-rest" alt="Logo">
</p>

### Descripción
El proyecto consiste en que tengas un ejemplo de API REST pero realizada con TypeScript con el objetivo de mejorar con tipos tus desarrollos. Además propone el uso de ficheros, autenticación y autorización mediante JWT. Tiene tres modos de uso Memoria, con MongoDB (NoSQL) y MariaDB (SQL). Acceso desde: http://localhost:8000.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://res.cloudinary.com/practicaldev/image/fetch/s--06ezZhc0--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/cosh3nee9nkfwnsmpn9p.png" alt="Logo"></p>

### Arquitectura y diseño
El diseño de esta API REST se corresponde con el patrón Servidor->Enrutador->Controlador->Modelo. 
El Servidor escucha en un puesto diversas peticiones. Las procesa según su ruta o punto de entrada y se las pasa al Enrutador.
El Enrutador analiza la petición dependiendo de la ruta y se la pasa al Controlador correspondiente a dicha ruta que ejecutará el método indicado.
El Controlador realiza el método indicado según la ruta consultando los modelos y almacenamiento para ello.
El Modelo es la estructuración de los datos a tratar.

En todo momento se ofrece información de la petición en base a los códigos de estado HTTP.

### Modos de funcionamiento
Este proyecto está basado en dos modos de funcionamiento en la url: http://localhost:8000. 
- Memoria: Usando almacenamiento en memoria. Lo tienes en la rama Memoria.
- MogoDB: Usando almacenamiento en MogoDB. Lo tienes en la rama MongoDB.
- MariaDB: Usando almacenamiento en MariaDB. Lo tienes en la rama MariaDB.

### Autenticación y Autorización: JWT y Middleware
Se ha implementado un sistema de atenticación y autorización basado en JWT y aplicando un Middleware para analizar si el usuario puede entrar a un recurso, ya sea por que está autenticado para ello (auth), o tiene permisos dependiendo su rol (grant), o dicho recurso le pertenece, si tenemos datos que los relacionen (owner). Se ha jugado con distintas políticas dependiendo del recurso y se puede adaptar a las distintas necesidades del problema. En el código podrás ver distintas soluciones con middleware o dentro del controlador.

### Validadores de datos
Se ha implemedo dos sistemas de validación de campos según los requisitos de los tipos de datos. Por un lado un middleware de validación y por otro, si no queremos hacerlo de esta manera, con funciones auxiliares en el propio controlador.

### EndPoints
Los Endpoints para conectarse y consumir esta api rest, empiezan siempre por /api/vx/recurso, donde x es a versión de esta api, y recurso es el recurso a consumir, por ejemplo /api/v1/juegos desde http://localhost:8000.

| Método | Recurso | Auten/Autor. | Descripción |
| -- | -- | -- | -- |
| POST| user/register | -- | Registra un usuario/a |
| POST| user/login | -- | Se indentifica en el sistema y obtiene token de acceso |
| GET| /user/id | auth | Obtiene los datos del usuario/a con id indicado si pertenece a él/ella |
| PUT| /user/id | auth | Modifica los datos del usuario/a con id indicado si pertenecen a él/ella |
| DELETE| /user/id | auth | Elimina el usuario/a con id indicado si pertenecen a él/ella |
| GET| /juegos | -- | Obtiene todos las juegos |
| GET | /juegos/id | -- | Obtiene el juego con el id indicado |
| POST | /juegos | auth | Añade el juego |
| PUT | /juegos/id | auth, owner | Modifica el juego con el id indicado si pertenece al usuario/a |
| DELETE | /juegos/id | auth  | Elimina el juego con el id indicado si pertenece al usuario/a |
| GET| /files | auth, grant('ADMIN') | Obtiene todos los ficheros. Solo Admin |
| GET | /files/id | auth | Obtiene datos del fichero con el id indicado si pertenece al usuario/a |
| GET | /files/download/id | -- | Descarga el fichero con el id indicado |
| POST | /files | auth | Añade el fichero |
| PUT | /files/id | auth | Modifica el fichero con el id indicado si pertenece al usuario/a |
| DELETE | /files/id | auth | Elimina el fichero con el id indicado si pertenece al usuario/a |


### TDD: JEST
Se ha usado la librería Jest, con TypeScript para realizar los test siguiendo un enfoque TDD y Supertest para testear las peticiones HTTP a la API.

### Repositorio
::: tip Proyecto disponible
- [GitHub](https://github.com/joseluisgs/ts-api-rest).
- [DockerHub](https://hub.docker.com/r/joseluisgs/ts-api-rest)
:::