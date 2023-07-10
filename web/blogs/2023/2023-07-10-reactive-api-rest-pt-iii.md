---
title: Crea tu API REST reactiva con Kotlin y Ktor Parte III
description: Cómo crear un servicio REST aplicando reactividad y consideraciones a tener en cuenta para ello
date: '2023-07-10'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Proyectos
  - Blog
  - Docencia
  - Kotlin
  - Ktor

publish: true
image: 'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MNYTHm0fGgHP_UUalJuCUg.png'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
Continuamos y finalizamos nuestro tutorial con esta tercera parte de cómo  crear una API REST Reactiva, siguiendo lo aprendido en la [primera parte](2023-05-29-reactive-api-rest-pt-i.md) y en la [segunda parte](./2023-06-19-reactive-api-rest-pt-ii.md). Te recuerdo que esta serie de artículos forman parte de mis actividades con [Hyperskill](https://hyperskill.org/) de [Jetbrains Academy](https://lp.jetbrains.com/jba-students/). Se basan en la traducción de lo publicado Medium. Recomiendo que leáis el original en inglés y votéis para que sigan saliendo más partes: [Creating Your Reactive REST API with Kotlin and Ktor Part III](https://link.medium.com/QjZf0pNLjBb).

<!-- more -->

::: warning Sobre la traducción
Lamentablemente no tengo tiempo para traducir todos los artículos que escribo, para continuar con la primera parte he usado ChatGPT y pulido los errores que me he encontrado. De nuevo te recomiendo la lectura del original en inglés si buscas el 100% de exactitud: [Creating Your Reactive REST API with Kotlin and Ktor Part III](https://link.medium.com/QjZf0pNLjBb).
:::

## Introducción

Ahora es el momento de la tercera y última parte de este tutorial sobre la creación de un servicio REST reactivo.

En la [primera parte](./2023-05-29-reactive-api-rest-pt-i.md), discutimos los beneficios de aplicar la reactividad en nuestros servicios y creamos nuestro primer punto final utilizando Ktor. En la [segunda parte](2023-06-19-reactive-api-rest-pt-ii.md), implementamos algunos servicios: WebSockets, caché, almacenamiento y utilizamos la programación orientada al ferrocarril para gestionar nuestros errores y realizar pruebas utilizando mocks.

En la parte final, nos centraremos en mejorar la inyección de dependencias, proporcionar mecanismos de autenticación y autorización, documentar y desplegar nuestro servicio en un contenedor. Por favor, visita los tutoriales anteriores primero para entender algunos de los pasos tomados aquí y dados por sentado, o para ver cómo se ha organizado el código.

Como en otros tutoriales, el objetivo es mostrarte todo lo que aprenderás a través de las pistas en [Hyperskill](https://hyperskill.org/tracks?utm_source=medium_hs&utm_medium=social&utm_campaign=ktor3&utm_term=27.07.2023). **Hyperskill es el lugar perfecto para profundizar, ampliar tus conocimientos y aprender más sobre lo que se presenta en este tutorial. Es la plataforma ideal para aprender tecnologías de Kotlin y utilizar Ktor. No dudes en unirte y continuar tu viaje de aprendizaje**. Recuerda que este código es pedagógico y muestra muchos de los contenidos que aprenderás de manera didáctica y fácil de leer. No está destinado a crear el mejor código de producción en entornos reales. Sabemos que muchas cosas se pueden hacer mejor, pero se exageran en el código para que, como estudiante, puedas analizar las posibilidades. Tómatelo con calma y consulta Hyperskill para obtener más características geniales para tus servicios de Kotlin y Ktor. Por favor, siéntete libre de experimentar y modificar lo que pueda mejorar tu auto-codificación con diferentes ejemplos y alcanzar tus objetivos.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*MNYTHm0fGgHP_UUalJuCUg.png">
</p>

## Inyección de dependencias con Koin

La inyección de dependencias es un patrón de diseño utilizado en el desarrollo de software para lograr un acoplamiento flexible y promover un código modular y reutilizable. En este patrón, las dependencias (objetos externos o servicios) requeridas por una clase se proporcionan en lugar de que la clase las cree o administre ellas mismas. Hay varias razones por las que deberías usar la inyección de dependencias:
- Desacoplamiento: Al inyectar dependencias, una clase no necesita saber cómo crear o administrarlas. Esto desacopla la clase de las implementaciones específicas de sus dependencias, lo que facilita el mantenimiento, las pruebas y las modificaciones futuras.
- Reutilización: Con la inyección de dependencias, las dependencias se pueden reutilizar en múltiples clases o módulos. Promueve la reutilización de código, ya que la misma dependencia se puede inyectar en diferentes clases sin duplicar código o crear dependencias fuertes.
- Testabilidad: La inyección de dependencias facilita las pruebas unitarias al permitir que las dependencias se simulen o se reemplacen fácilmente con objetos de prueba. Esto permite pruebas aisladas de componentes individuales sin configuraciones complejas o dependencia de recursos externos.
- Flexibilidad: La inyección de dependencias facilita el intercambio o cambio de dependencias sin modificar las clases que dependen de ellas. Esta flexibilidad permite una adaptación más sencilla a los requisitos cambiantes o la integración de nuevas funcionalidades.

En nuestro servicio, utilizamos [Koin](https://insert-koin.io/). Koin es un marco de inyección de dependencias ligero y multiplataforma para Kotlin. Proporciona una forma simple y concisa de manejar dependencias en tus proyectos de Kotlin. Con Koin, puedes definir e inyectar dependencias fácilmente sin necesidad de una configuración compleja o código redundante. Ofrece un [DSL](https://insert-koin.io/docs/reference/koin-core/dsl/) (Lenguaje Específico del Dominio) que te permite declarar y resolver dependencias de forma legible e intuitiva. Podemos usar [anotaciones](https://insert-koin.io/docs/setup/annotations) o una versión especial para [Ktor](https://insert-koin.io/docs/reference/koin-ktor/ktor). Me encanta Koin porque se adapta a lo que necesitas en cualquier situación.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*F4dBIOwBb3mfOb7z28hOtg.png">
</p>

Añadimos las siguientes dependencias en nuestro archivo build.gradle.kts y sincronizamos el proyecto. Utilizaremos anotaciones porque si eres nuevo en Koin, el objetivo final es facilitar la inyección de dependencias y no aprender todo el DSL u otras opciones que ofrece Koin, por lo que necesitamos agregar el complemento ksp y opciones con Koin.

```kotlin
plugins {
    kotlin("jvm") version "1.8.21"
    id("io.ktor.plugin") version "2.3.1"
    id("org.jetbrains.kotlin.plugin.serialization") version "1.8.21"
    // KSP for Koin Annotations
    id("com.google.devtools.ksp") version "1.8.21-1.0.11"
}

//...
dependencies {
// ...
// Koin for Dependency Injection
  implementation("io.insert-koin:koin-ktor:$koin_ktor_version") // Koin for Ktor
  implementation("io.insert-koin:koin-logger-slf4j:$koin_ktor_version") // Koin Logger
  implementation("io.insert-koin:koin-annotations:$koin_ksp_version") // Koin Annotations for KSP
  ksp("io.insert-koin:koin-ksp-compiler:$koin_ksp_version") // Koin KSP Compiler for KSP
}
```

### Configuración de Koin
Antes de continuar, necesitamos configurar Koin en Ktor. Gracias a su funcionalidad para Ktor, esto es una tarea sencilla. Una vez más, crearemos un complemento llamado "Koin". Dado que utilizaremos Koin con anotaciones, no es necesario definir nada más explícitamente. Todas las dependencias se definirán utilizando anotaciones, creando automáticamente un módulo predeterminado con todas las dependencias precalculadas. Es sencillo y directo. Por último, como hemos hecho anteriormente, cargaremos este complemento en nuestra aplicación. Te recomiendo cargarlo como el primer complemento, ya que estas dependencias serán necesarias desde el principio.

```kotlin
fun Application.configureKoin() {
  install(Koin) {
  slf4jLogger() // Logger
  defaultModule() // Default module with Annotations
}
```

```kotlin
fun Application.module() {
  configureKoin() // Configure the Koin plugin to inject dependencies
  configureWebSockets() // Configure the websockets plugin
  // ...
}
```

### Inyección de la configuración
Creemos una clase de configuración para encapsular los ajustes de nuestro servicio. De esta manera, podemos utilizar diferentes archivos de configuración si es necesario. Al hacer esto, podemos inyectar fácilmente esta configuración. Utilizaremos la anotación @Singleton para asegurarnos de que solo haya una instancia de ella.

```kotlin
@Singleton
class AppConfig {
  val applicationConfiguration: ApplicationConfig = ApplicationConfig("application.conf")
  // We can set here all the configuration we want from application.conf or from other sources
  // val applicationName: String = applicationConfiguration.property("ktor.application.name").getString()
  // val applicationPort: Int = applicationConfiguration.property("ktor.application.port").getString().toInt()
}
```

### Preparando el Repositorio y los Servicios

Utilizamos la anotación @Singleton en nuestro repositorio y servicios.

```kotlin
@Singleton
class RacketsRepositoryImpl(
  private val dataBaseService: DataBaseService
) : RacketsRepository {
  //...
}

@Singleton
class DataBaseService(
  private val myConfig: AppConfig,
) {
  //...
}

@Singleton
class CacheService(
  private val myConfig: AppConfig,
) {
  //...
}

@Singleton
class StorageServiceImpl(
  private val myConfig: AppConfig
) : StorageService {
  //...
}

@Singleton
class RacketsServiceImpl(
  private val racketsRepository: RacketsRepository,
  private val cacheService: CacheService
) : RacketsService {
  //...
}
```

### Inyectando dependencias en las rutas
Ahora es el momento de inyectar dependencias en las rutas. Para hacer esto, podemos usar get, que nos proporciona una inyección inmediata, o lazy, que nos proporciona una inyección perezosa, lo que significa que las dependencias se inyectarán cuando las necesitemos. En nuestro caso, recuperaremos el repositorio utilizando get para tenerlo disponible de inmediato. Sin embargo, el almacenamiento será lazy porque solo es necesario cuando se carga una imagen. Es importante tener en cuenta que esto puede variar según el problema o las necesidades específicas. Como podemos ver fácilmente, Koin inyectará las dependencias que necesitamos donde las necesitemos, casi como por arte de magia. ¡No es maravilloso!

```kotlin
// Dependency injection by Koin
val racketsService: RacketsService = get()
val storageService: StorageService by inject()
```

## Autenticación y autorización con JWT
La autenticación verifica la identidad de un usuario o entidad, mientras que la autorización implica conceder o denegar acceso en función de los privilegios del usuario. JWT (JSON Web Token) es un mecanismo de autenticación y autorización basado en tokens en aplicaciones web. JWT es un token compacto y autocontenido que consta de tres partes: el encabezado, la carga útil y la firma. Transporta de manera segura información sobre la identidad y los permisos del usuario.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*Gsx2qgoi8OgzFBVaQ9-I5w.png">
</p>

El token es generado por el servidor después de una autenticación exitosa y se incluye en las solicitudes posteriores para autorización. Cuando se recibe una solicitud con un JWT, el servidor verifica la autenticidad del token utilizando una clave secreta. Extrae la información necesaria de la carga útil y determina si el usuario tiene los permisos necesarios para acceder a los recursos solicitados. Al utilizar JWT, los desarrolladores pueden implementar un sistema de autenticación y autorización seguro y escalable para servicios sin necesidad de mantener un estado de sesión en el lado del servidor. Simplifica la gestión de sesiones de usuario y permite la comunicación sin estado entre el cliente y el servidor.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*STlfA5M6VAQfET7zXoWGHA.png">
</p>

### Añadiendo dependencias
El primer paso es agregar las dependencias necesarias para manejar JWT. Además, utilizaremos Bcrypt para cifrar las contraseñas de los usuarios. Agrega las siguientes dependencias a nuestro archivo build.gradle.kts y sincroniza el proyecto.

```kotlin
// Auth JWT
implementation("io.ktor:ktor-server-auth-jvm:$ktor_version")
implementation("io.ktor:ktor-server-auth-jwt-jvm:$ktor_version")
implementation("io.ktor:ktor-server-host-common-jvm:$ktor_version")
// BCrypt
implementation("com.ToxicBakery.library.bcrypt:bcrypt:$bcrypt_version")
```

### Configuración del token
Añadamos nuestra configuración de token a nuestro archivo application.conf.

```json
# JWT
jwt {
  secret = "IL0v3L34rn1ngKt0rWithJ0s3Lu1sGS4ndHyp3r$k1ll"
  realm = "rackets-ktor"
  ## Expiration time: 3600s (1 hour)
  expiration = "3600"
  issuer = "rackets-ktor"
  audience = "rackets-ktor-auth"
}
```

### Servicio de tokens
El siguiente paso es crear un servicio que genere los tokens y nos permita verificarlos.

```kotlin
sealed class TokenException(message: String) : RuntimeException(message) {
    class InvalidTokenException(message: String) : TokenException(message)
}

@Single
class TokensService(
    private val myConfig: AppConfig
) {

    val audience by lazy {
        myConfig.applicationConfiguration.propertyOrNull("jwt.audience")?.getString() ?: "jwt-audience"
    }
    val realm by lazy {
        myConfig.applicationConfiguration.propertyOrNull("jwt.realm")?.getString() ?: "jwt-realm"
    }
    private val issuer by lazy {
        myConfig.applicationConfiguration.propertyOrNull("jwt.issuer")?.getString() ?: "jwt-issuer"
    }
    private val expiresIn by lazy {
        myConfig.applicationConfiguration.propertyOrNull("jwt.tiempo")?.getString()?.toLong() ?: 3600
    }
    private val secret by lazy {
        myConfig.applicationConfiguration.propertyOrNull("jwt.secret")?.getString() ?: "jwt-secret"
    }

    init {
        logger.debug { "Init tokens service with audience: $audience" }
    }

    fun generateJWT(user: User): String {
        return JWT.create()
            .withAudience(audience)
            .withIssuer(issuer)
            .withSubject("Authentication")
            // user claims and other data to store
            .withClaim("username", user.username)
            .withClaim("usermail", user.email)
            .withClaim("userId", user.id.toString())
            // expiration time from currentTimeMillis + (tiempo times in seconds) * 1000 (to millis)
            .withExpiresAt(Date(System.currentTimeMillis() + expiresIn * 1000L))
            // sign with secret
            .sign(
                Algorithm.HMAC512(secret)
            )
    }

    fun verifyJWT(): JWTVerifier {

        return try {
            JWT.require(Algorithm.HMAC512(secret))
                .withAudience(audience)
                .withIssuer(issuer)
                .build()
        } catch (e: Exception) {
            throw TokenException.InvalidTokenException("Invalid token")
        }
    }
}
```

### Repositorio de usuarios
Ahora necesitamos un repositorio de usuarios, por lo que necesitamos nuestro modelo de usuario.

```kotlin
data class User(
    val id: Long = NEW_USER,
    val name: String,
    val email: String,
    val username: String,
    val password: String,
    val avatar: String = DEFAULT_IMAGE,
    val role: Role = USER,
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val updatedAt: LocalDateTime = LocalDateTime.now(),
    val deleted: Boolean = false
) {

    companion object {
        const val NEW_USER = -1L
        const val DEFAULT_IMAGE = "https://i.imgur.com/fIgch2x.png"
    }

    enum class Role {
        USER, ADMIN
    }
}
```

También necesitamos nuestras tablas y entidades y sus mapeadores para almacenarlos en la base de datos.

```kotlin
object UserTable : H2Table<UserEntity>("users") {
    // Autoincrement and primary key
    val id = autoIncrementBigInt(UserEntity::id).primaryKey()

    // Other fields
    val name = varchar(UserEntity::name)
    val email = varchar(UserEntity::email)
    val username = varchar(UserEntity::username)
    val password = varchar(UserEntity::password)
    val avatar = varchar(UserEntity::avatar)
    val role = varchar(UserEntity::role)

    // metadata
    val createdAt = timestamp(UserEntity::createdAt, "created_at")
    val updatedAt = timestamp(UserEntity::updatedAt, "updated_at")
    val deleted = boolean(UserEntity::deleted)
}

data class UserEntity(
    // Id
    val id: Long?, //

    // data
    val name: String,
    val email: String,
    val username: String,
    val password: String,
    val avatar: String = User.DEFAULT_IMAGE,
    val role: String = User.Role.USER.name,
    val createdAt: LocalDateTime = LocalDateTime.now(),
    val updatedAt: LocalDateTime = LocalDateTime.now(),
    val deleted: Boolean = false
)
```

Finalmente, agregaremos algunos datos de ejemplo utilizando BCrypt para tener algunos usuarios disponibles. En nuestro servicio de base de datos, instruiremos a crear las tablas de usuario y cargar estos datos, como en tutoriales anteriores. Necesitamos Bcrypt para cifrar las contraseñas, ya que proporciona un algoritmo de cifrado seguro y computacionalmente costoso que ayuda a proteger las contraseñas de los usuarios de ser comprometidas o descifradas fácilmente por posibles atacantes, y almacenamos las contraseñas cifradas en nuestra base de datos.

Es hora de codificar nuestro repositorio para manejar usuarios e implementar las operaciones CRUD correspondientes.

```kotlin
@Singleton
class UsersRepositoryImpl(
  private val dataBaseService: DataBaseService
) : UsersRepository {


  override suspend fun findAll(): Flow<User> = withContext(Dispatchers.IO) {
    logger.debug { "findAll" }
  
    return@withContext (dataBaseService.client selectFrom UserTable).fetchAll()
    .map { it.toModel() }
  }
  
  // . . .
  
  
  override suspend fun checkUserNameAndPassword(username: String, password: String): User? =
  withContext(Dispatchers.IO) {
    val user = findByUsername(username)
    return@withContext user?.let {
    if (Bcrypt.verify(password, user.password.encodeToByteArray())) {
      return@withContext user
    }
    return@withContext null
    }
  }
  // . . .
  override suspend fun findById(id: Long): User? = withContext(Dispatchers.IO) {
    logger.debug { "findById: Buscando usuario con id: $id" }
  
    return@withContext (dataBaseService.client selectFrom UserTable
      where UserTable.id eq id
      ).fetchFirstOrNull()?.toModel()
   }
  // . . .
}
```

### Servicio de usuarios
Ahora es el momento de nuestro servicio, donde también podemos implementar el almacenamiento en caché para usuarios y seguir un enfoque similar al que hicimos en el tutorial anterior con raquetas con Railway Oriented Programming (UserErrors).

```kotlin
@Singleton
class UsersServiceImpl(
  private val usersRepository: UsersRepository,
  private val cacheService: CacheService
) : UsersService {

  override suspend fun findAll(): Flow<User> {
    logger.debug { "findAll: search all users" }
    return usersRepository.findAll()
  }
  
  override suspend fun findById(id: Long): Result<User, UserError> {
    logger.debug { "findById: search user by id" }

    // find in cache if not found in repository
    return cacheService.users.get(id)?.let {
        logger.debug { "findById: found in cache" }
        Ok(it)
    } ?: run {
        usersRepository.findById(id)?.let { user ->
            logger.debug { "findById: found in repository" }
            cacheService.users.put(id, user)
            Ok(user)
        } ?: Err(UserError.NotFound("User with id $id not found"))
    }
  }

  override suspend fun findByUsername(username: String): Result<User, UserError> {
    logger.debug { "findById: search user by username" }
    // find in cache if not found in repository
    return usersRepository.findByUsername(username)?.let { user ->
      logger.debug { "findById: found in repository" }
      cacheService.users.put(user.id, user)
      Ok(user)
    } ?: Err(UserError.NotFound("User with username: $username not found"))
  }
  // . . .
}
```

### Configurar el plugin JWT
Antes de continuar, debemos configurar el [complemento JWT](https://ktor.io/docs/jwt.html). De esta manera, podemos interceptar los tokens JWT utilizando nuestro servicio de tokens para analizar su validez. En el complemento **Security.kt**.

```kotlin
fun Application.configureSecurity() {
  // Inject the token service
  val jwtService: TokensService by inject()

  authentication {
      jwt {
          // Load the token verification config
          verifier(jwtService.verifyJWT())
          // With realm we can get the token from the request
          realm = jwtService.realm
          validate { credential ->
              // If the token is valid, it also has the indicated audience,
              // and has the user's field to compare it with the one we want
              // return the JWTPrincipal, otherwise return null
              if (credential.payload.audience.contains(jwtService.audience) &&
                  credential.payload.getClaim("username").asString().isNotEmpty()
              )
                  JWTPrincipal(credential.payload)
              else null
          }

          challenge { defaultScheme, realm ->
              throw TokenException.InvalidTokenException("Invalid or expired token")
          }
      }
  }

}
```

También podemos utilizar **StatusPages** para devolver automáticamente respuestas de error al encontrarnos con tokens JWT inválidos o expirados.

```kotlin
// Token is not valid or expired
exception<TokenException.InvalidTokenException> { call, cause ->
  call.respond(HttpStatusCode.Unauthorized, cause.message.toString())
}
```

### Rutas de usuarios
Ahora es el momento de crear las rutas para permitir que los usuarios se registren, inicien sesión o realicen operaciones específicas en función de sus roles. Vamos a inyectar las dependencias que necesitamos.

Podemos utilizar el método [authenticate](https://ktor.io/docs/authentication.html#authenticate-route) para indicar que esas rutas o solicitudes deben estar autenticadas. Además, podemos obtener los datos del token utilizando **JWTPrincipal**.

```kotlin
authenticate {
  // Get the user info --> GET /api/users/me (with token)
  get("/me") {
      logger.debug { "GET Me /$ENDPOINT/me" }

      // Token came with principal (authenticated) user in its claims
      // Be careful, it comes with quotes!!!
      val userId = call.principal<JWTPrincipal>()
          ?.payload?.getClaim("userId")
          .toString().replace("\"", "").toLong()

      usersService.findById(userId)
          .mapBoth(
              success = { call.respond(HttpStatusCode.OK, it.toDto()) },
              failure = { handleUserError(it) }
          )
  }
  // Get all users --> GET /api/users/list (with token and only if you are admin)
  get("/list") {
      logger.debug { "GET Users /$ENDPOINT/list" }

      val userId = call.principal<JWTPrincipal>()
          ?.payload?.getClaim("userId")
          .toString().replace("\"", "").toLong()

      usersService.isAdmin(userId)
          .onSuccess {
              usersService.findAll().toList()
                  .map { it.toDto() }
                  .let { call.respond(HttpStatusCode.OK, it) }
          }.onFailure {
              handleUserError(it)
          }
  }
  //..
}
```

Ahora, con Postman, podemos usar nuestros tokens para hacer solicitudes. Puedes obtener una respuesta 401 si no estás autorizado o un código 403 Prohibido si no eres administrador.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*2b8FdCILdVYtp0tPuoAOqA.png">
</p>

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*WCG3T3UjGkbOFLz6jMVSFw.png">
</p>

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*S4Kc9smHLvqsphosKBL4_A.png">
</p>

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*zLWjGhkTtyQB7FdkEdKWHg.png">
</p>

## SSL/TSL y HTTPS

Tenemos un problema, y puedes ver que nuestra contraseña al iniciar sesión necesita estar encriptada de extremo a extremo. SSL/TLS (Secure Sockets Layer/Transport Layer Security) es crucial en un servicio por las siguientes razones:

- Cifrado: SSL/TLS garantiza una comunicación segura mediante la encriptación de la transmisión de datos y previene el acceso no autorizado a información sensible.
- Integridad de datos: SSL/TLS verifica que los datos no se modifiquen durante la transmisión, evitando la manipulación o modificación por parte de actores maliciosos.
- Autenticación: SSL/TLS permite la autenticación del servidor, validando la identidad del servidor para establecer confianza con los clientes y evitar suplantaciones.
- Confianza y credibilidad: Implementar SSL/TLS genera confianza y credibilidad con los usuarios, asegurándoles que sus datos están protegidos y fomentando una experiencia de usuario positiva.
- Cumplimiento: A menudo, se requiere SSL/TLS para el cumplimiento normativo, garantizando la protección de datos sensibles y el cumplimiento de estándares y regulaciones de la industria.

**En este ejemplo, utilizaremos certificados autofirmados, pero no los utilices en producción. Solo lo hacemos para demostrar cómo asegurar nuestras comunicaciones.**

Creemos una carpeta llamada cert y, con este script, generaremos nuestro almacén de claves (keystore) que contiene la clave privada y pública del servidor y su certificado para mostrarlo a los clientes.

```bash
#!/usr/bin/env bash
## Server KeyStore: Private Key + Public Certificate (PKCS12)
keytool -genkeypair -alias serverKeyPair -keyalg RSA -keysize 4096 -validity 365 -storetype PKCS12 -keystore server_keystore.p12 -storepass 1234567
```

### Añadiendo dependencias
Agregamos las siguientes dependencias en nuestro archivo build.gradle.kts y sincronizamos el proyecto.

```kotlin
// SSL/TLS
implementation("io.ktor:ktor-network-tls-certificates:$ktor_version")
```

### Configurar SSL/TLS
Ahora es el momento de configurar el [servicio](https://ktor.io/docs/ssl.html). Agregaremos esta opción en nuestro archivo de configuración application.conf con el puerto seguro y las opciones de SSL.

```json
ktor {
    deployment {
        port = 8080
        port = ${?PORT}
        ## SSL, you need to enable it
        sslPort = 8083
        sslPort = ${?SSL_PORT}
    }

    # Configure the main module
    application {
        modules = [ joseluisgs.dev.ApplicationKt.module ]
    }

    ## Development mode
    # Enable development mode. Recommended to set it via -Dktor.deployment.environment=development
    # development = true
    deployment {
        ## Watch for changes in this directory and automatically reload the application if any file changes.
        watch = [ classes, resources ]
    }

    ## Modo de ejecución
    environment = dev
    environment = ${?KTOR_ENV}

    ## To enable SSL, you need to generate a certificate and configure it here
    security {
        ssl {
           keyStore = cert/server_keystore.p12
           keyAlias = "serverKeyPair"
           keyStorePassword = "1234567"
           privateKeyPassword = "1234567"
        }
    }
}
```

A partir de ahora, todas las solicitudes al puerto seguro con Postman estarán encriptadas.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*9uy87-i-QYG-J0fb7Sh5ug.png">
</p>

## Documentar nuestro servicio
Es hora de documentar nuestro servicio. Utilizaremos Dokka para generar la documentación del código Kotlin y Swagger para la documentación de la API.

Dokka es un motor de documentación para Kotlin. Permite a los desarrolladores generar una documentación completa para su código, incluyendo clases, funciones, propiedades y más. Dokka analiza el código fuente y genera documentación en formato HTML u otros formatos que los desarrolladores pueden navegar y acceder fácilmente.

Swagger es un marco de trabajo de código abierto y una herramienta poderosa para diseñar, construir, documentar y consumir APIs RESTful. Proporciona un conjunto de herramientas que permiten a los desarrolladores definir especificaciones de API utilizando la especificación OpenAPI (OAS), anteriormente conocida como Swagger Specification. Con Swagger, los desarrolladores pueden crear documentación interactiva de la API que incluye detalles sobre los endpoints, formatos de solicitud/respuesta, parámetros, requisitos de autenticación y más. También permite probar y explorar las API directamente desde la documentación.

### Añadiendo dependencias
Agregamos las siguientes dependencias en nuestro archivo **build.gradle.kts** y sincronizamos el proyecto. Para Dokka, agregamos el plugin.

```kotlin
// Dokka for documentation
id("org.jetbrains.dokka") version "1.8.10"
```

Utilizaremos la siguiente biblioteca para Swagger: Ktor Swagger, que ofrece una función de extensión para documentar nuestras rutas.

```kotlin
repositories {
  mavenCentral()
  maven("https://jitpack.io") // For Swagger UI
}
```

Necesitaremos opciones de CORS

```kotlin
// CORS
implementation("io.ktor:ktor-server-cors:$ktor_version")
// To generate Swagger UI
implementation("io.github.smiley4:ktor-swagger-ui:$ktor_swagger_ui_version")
```

### Configurar los plugins
Necesitamos configurar el **plugin CORS**. CORS (Cross-Origin Resource Sharing) es un mecanismo de seguridad implementado en los navegadores web que controla el acceso a recursos desde diferentes orígenes. Permite o restringe las solicitudes de origen cruzado, ayudando a prevenir el acceso no autorizado y proteger los datos del usuario. Aquí tienes un ejemplo.

```kotlin
fun Application.configureCors() {
  install(CORS) {
    anyHost() // Allow from any host
    allowHeader(HttpHeaders.ContentType) // Allow Content-Type header
    allowHeader(HttpHeaders.Authorization)
    allowHost("client-host") // Allow requests from client-host
  }
}
```

Ahora configuramos el **plugin Swagger** para establecer las opciones globales y detectar los endpoints.

```kotlin
fun Application.configureSwagger() {
  // https://github.com/SMILEY4/ktor-swagger-ui/wiki/Configuration
  // http://xxx/swagger/
  install(SwaggerUI) {
      swagger {
          swaggerUrl = "swagger"
          forwardRoot = false
      }
      info {
          title = "Ktor Hyperskill Reactive API REST"
          version = "latest"
          description = "Example of a Ktor API REST using Kotlin and Ktor"
          contact {
              name = "José Luis González Sánchez"
              url = "https://github.com/joseluisgs"
          }
          license {
              name = "Creative Commons Attribution-ShareAlike 4.0 International License"
              url = "https://joseluisgs.dev/docs/license/"
          }
      }

      schemasInComponentSection = true
      examplesInComponentSection = true
      automaticTagGenerator = { url -> url.firstOrNull() }
      // We can filter paths and methods
      pathFilter = { method, url ->
          url.contains("rackets")
          //(method == HttpMethod.Get && url.firstOrNull() == "api")
          // || url.contains("test")
      }

      // We can add security
      securityScheme("JWT-Auth") {
          type = AuthType.HTTP
          scheme = AuthScheme.BEARER
          bearerFormat = "jwt"
      }
  }
}
```

Agregamos estos plugins a nuestro **módulo de la aplicación**:

```kotlin
fun Application.module() {
  configureKoin() // Configure the Koin plugin to inject dependencies
  configureSecurity() // Configure the security plugin with JWT
  configureWebSockets() // Configure the websockets plugin
  configureSerialization() // Configure the serialization plugin
  configureRouting() // Configure the routing plugin
  configureValidation() // Configure the validation plugin
  configureStatusPages() // Configure the status pages plugin
  configureCompression() // Configure the compression plugin
  configureCors() // Configure the CORS plugin
  configureSwagger() // Configure the Swagger plugin
}
```

### Documentar con Dokka
Para documentar con Dokka, podemos utilizar sus [anotaciones](https://kotlinlang.org/docs/kotlin-doc.html).

```kotlin
/**
* Find by ID, if not exists return null
* @param id Long ID
* @return Racket? Racket or null
*/
override suspend fun findById(id: Long): Racket? = withContext(Dispatchers.IO) {
  logger.debug { "findById: $id" }

  return@withContext (dataBaseService.client selectFrom RacketTable
  where RacketTable.id eq id)
  .fetchFirstOrNull()?.toModel()
}
```

Ahora con Gradle → Documentation, puedes generar la documentación de Dokka.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*FGHW0Kz2fo5ybGw1K7nGcA.png">
</p>

### Documentar con Swagger
Para documentar con Swagger, podemos completar nuestras rutas y peticiones con opciones de documentación.

```kotlin
routing {
  route("/$ENDPOINT") {

      // Get all racket --> GET /api/rackets
      get({
          description = "Get All Rackets"
          request {
              queryParameter<Int>("page") {
                  description = "page number"
                  required = false // Optional
              }
              queryParameter<Int>("perPage") {
                  description = "number of elements per page"
                  required = false // Optional
              }
          }
          response {
              default {
                  description = "List of Rackets"
              }
              HttpStatusCode.OK to {
                  description = "List of Rackets"
                  body<List<RacketResponse>> { description = "List of Rackets" }
              }
          }
      }) {
          // QueryParams: rackets?page=1&perPage=10
          call.request.queryParameters["page"]?.toIntOrNull()?.let {
              val page = if (it > 0) it else 0
              val perPage = call.request.queryParameters["perPage"]?.toIntOrNull() ?: 10

              logger.debug { "GET ALL /$ENDPOINT?page=$page&perPage=$perPage" }

              racketsService.findAllPageable(page, perPage)
                  .toList()
                  .run {
                      call.respond(HttpStatusCode.OK, RacketPage(page, perPage, this.toResponse()))
                  }

          } ?: run {
              logger.debug { "GET ALL /$ENDPOINT" }

              racketsService.findAll()
                  .toList()
                  .run { call.respond(HttpStatusCode.OK, this.toResponse()) }
          }
      }

      // Get one racket by id --> GET /api/rackets/{id}
      get("{id}", {
          description = "Get Racket by ID"
          request {
              pathParameter<Long>("id") {
                  description = "Racket ID"
              }
          }
          response {
              HttpStatusCode.OK to {
                  description = "Racket"
                  body<RacketResponse> { description = "Racket" }
              }
              HttpStatusCode.NotFound to {
                  description = "Racket not found"
                  body<RacketError.NotFound> { description = "Racket not found" }
              }
          }
      }) {
          logger.debug { "GET BY ID /$ENDPOINT/{id}" }

          call.parameters["id"]?.toLong()?.let { id ->
              racketsService.findById(id).mapBoth(
                  success = { call.respond(HttpStatusCode.OK, it.toResponse()) },
                  failure = { handleRacketErrors(it) }
              )
          }
      }
//...
}
```

Ahora podemos ver la documentación de Swagger en http://0.0.0.0:8080/swagger.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*7OF1d1p_t8zB9qOJ-KCOyw.png">
</p>

## Test de las rutas
En tutoriales anteriores, hemos aprendido cómo probar nuestros repositorios o servicios, ya sea a través de pruebas unitarias o pruebas con dobles utilizando mocks. Ahora es el momento de probar nuestros endpoints. Hemos utilizado Postman, que es excelente para estos escenarios y se puede optimizar para realizar pruebas eficientes de los endpoints. Sin embargo, Ktor proporciona un motor de pruebas especial que no crea un servidor web, no se vincula a sockets y no realiza ninguna solicitud HTTP real. En su lugar, se conecta directamente a los mecanismos internos y procesa una llamada de aplicación. Esto resulta en una ejecución de pruebas más rápida en comparación con ejecutar un servidor web completo para las pruebas. Saber cómo utilizar estas herramientas para mejorar nuestras implementaciones y optimizar las pruebas es excelente.

### Añaadir dependencias
Agrega las siguientes dependencias en nuestro archivo **build.gradle.kts** y sincroniza el proyecto.

```kotlin
// Ktor Test
testImplementation("io.ktor:ktor-server-test-host:$ktor_version")
implementation("io.ktor:ktor-client-content-negotiation:$ktor_version") // For testing with Ktor Client JSON
implementation("io.ktor:ktor-client-auth:$ktor_version") // For testing with Ktor Client Auth JWT
```

### Pruebas
Ahora podemos probar las rutas deseadas de forma rápida y eficiente utilizando este método. Puedes pasar tokens como encabezados o procesar solicitudes multipart para subir imágenes.

Un ejemplo con raquetas

```kotlin
private val json = Json { ignoreUnknownKeys = true }

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation::class)
class RacketsRoutesKtTest {
  // Load configuration from application.conf
  private val config = ApplicationConfig("application.conf")

  val racket = RacketRequest(
      brand = "Test",
      model = "Test",
      price = 10.0,
      numberTenisPlayers = 1,
  )

  // New we can user it to test routes with Ktor
  @Test
  @Order(1)
  fun testGetAll() = testApplication {
      // Set up the test environment
      environment { config }

      // Launch the test
      val response = client.get("/api/rackets")

      // Check the response and the content
      assertEquals(HttpStatusCode.OK, response.status)
      // Check the content if we want
      // val result = response.bodyAsText()
      // val list = json.decodeFromString<List<RacketResponse>>(result)
      // ....

  }
//...
  @Test
  @Order(4)
  fun testPut() = testApplication {
      environment { config }
  
      val client = createClient {
          install(ContentNegotiation) {
              json()
          }
      }
  
      // Create
      var response = client.post("/api/rackets") {
          contentType(ContentType.Application.Json)
          setBody(racket)
      }
  
      // Take the id of the result
      var dto = json.decodeFromString<RacketResponse>(response.bodyAsText())
  
      // Update
      response = client.put("/api/rackets/${dto.id}") {
          contentType(ContentType.Application.Json)
          setBody(racket.copy(brand = "TestBrand2", model = "TestModel2"))
      }
  
      // Check that the response and the content is correct
      assertEquals(HttpStatusCode.OK, response.status)
      val result = response.bodyAsText()
      dto = json.decodeFromString<RacketResponse>(result)
      assertAll(
          { assertEquals("TestBrand2", dto.brand) },
          { assertEquals("TestModel2", dto.model) },
          { assertEquals(racket.price, dto.price) },
          { assertEquals(racket.numberTenisPlayers, dto.numberTenisPlayers) },
      )
  }

  @Test
  @Order(5)
  fun testPutNotFound() = testApplication {
      environment { config }
  
      val client = createClient {
          install(ContentNegotiation) {
              json()
          }
      }
  
      val response = client.put("/api/rackets/-1") {
          contentType(ContentType.Application.Json)
          setBody(racket.copy(brand = "TestBrand2", model = "TestModel2"))
      }
  
      assertEquals(HttpStatusCode.NotFound, response.status)
  }
// ...
}
```

O usando JWT con usuarios

```kotlin
private val json = Json { ignoreUnknownKeys = true }

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
@TestMethodOrder(MethodOrderer.OrderAnnotation::class)
class UsersRoutesKtTest {
  private val config = ApplicationConfig("application.conf")

  val userDto = UserCreateDto(
      name = "Test",
      email = "test@test.com",
      username = "test",
      password = "test12345",
      avatar = User.DEFAULT_IMAGE,
      role = User.Role.USER
  )

  val userLoginDto = UserLoginDto(
      username = "test",
      password = "test12345"
  )

  val userLoginAdminDto = UserLoginDto(
      username = "pepe",
      password = "pepe1234"
  )

  @Test
  @Order(1)
  fun registerUserTest() = testApplication {
      // Set up the test environment
      environment { config }
      val client = createClient {
          install(ContentNegotiation) {
              json()
          }
      }

      // Launch the test
      val response = client.post("/api/users/register") {
          contentType(ContentType.Application.Json)
          setBody(userDto)
      }

      // Check the response and the content
      assertEquals(response.status, HttpStatusCode.Created)
      val res = json.decodeFromString<UserDto>(response.bodyAsText())
      assertAll(
          { assertEquals(res.name, userDto.name) },
          { assertEquals(res.email, userDto.email) },
          { assertEquals(res.username, userDto.username) },
          { assertEquals(res.avatar, userDto.avatar) },
          { assertEquals(res.role, userDto.role) },
      )
  }


  @Test
  @Order(2)
  fun login() = testApplication {
      environment { config }
      val client = createClient {
          install(ContentNegotiation) {
              json()
          }
      }

      client.post("/api/users/register") {
          contentType(ContentType.Application.Json)
          setBody(userDto)
      }

      val responseLogin = client.post("/api/users/login") {
          contentType(ContentType.Application.Json)
          setBody(userLoginDto)
      }

      assertEquals(responseLogin.status, HttpStatusCode.OK)
      val res = json.decodeFromString<UserWithTokenDto>(responseLogin.bodyAsText())
      assertAll(
          { assertEquals(res.user.name, userDto.name) },
          { assertEquals(res.user.email, userDto.email) },
          { assertEquals(res.user.username, userDto.username) },
          { assertEquals(res.user.avatar, userDto.avatar) },
          { assertEquals(res.user.role, userDto.role) },
          { assertNotNull(res.token) },
      )
  }

  @Test
  @Order(3)
  fun meInfoTest() = testApplication {
      environment { config }

      var client = createClient {
          install(ContentNegotiation) {
              json()
          }
      }

      var response = client.post("/api/users/register") {
          contentType(ContentType.Application.Json)
          setBody(userDto)
      }

      response = client.post("/api/users/login") {
          contentType(ContentType.Application.Json)
          setBody(userLoginDto)
      }

      assertEquals(response.status, HttpStatusCode.OK)

      val res = json.decodeFromString<UserWithTokenDto>(response.bodyAsText())
      // token
      client = createClient {
          install(ContentNegotiation) {
              json()
          }
          install(Auth) {
              bearer {
                  loadTokens {
                      // Load tokens from a local storage and return them as the 'BearerTokens' instance
                      BearerTokens(res.token, res.token)
                  }
              }
          }
      }

      response = client.get("/api/users/me") {
          contentType(ContentType.Application.Json)
      }

      assertEquals(response.status, HttpStatusCode.OK)
      val resUser = json.decodeFromString<UserDto>(response.bodyAsText())
      assertAll(
          { assertEquals(resUser.name, userDto.name) },
          { assertEquals(resUser.email, userDto.email) },
          { assertEquals(resUser.username, userDto.username) },
          { assertEquals(resUser.avatar, userDto.avatar) },
          { assertEquals(resUser.role, userDto.role) },
      )
  }
// ...
}
```

## Despliegue con Docker

A continuación, vamos a desplegar nuestro servicio. Utilizaremos Docker para desplegarlo. Docker es una plataforma de código abierto que permite a los desarrolladores automatizar el despliegue y la gestión de aplicaciones dentro de contenedores aislados. Los contenedores son entornos ligeros, portátiles y autosuficientes que empaquetan todas las dependencias y componentes necesarios para ejecutar una aplicación. Algunas ventajas de desplegar un servicio con Docker son:
- Portabilidad: Los contenedores Docker pueden ejecutarse de manera consistente en diferentes entornos, como desarrollo, pruebas y producción, garantizando que la aplicación se comporte de la misma manera en todas partes.
- Escalabilidad: Docker permite escalar fácilmente los servicios desplegando múltiples contenedores en varias máquinas, utilizando eficientemente los recursos.
- Aislamiento: Los contenedores proporcionan aislamiento a nivel de proceso, evitando conflictos entre dependencias y permitiendo una mejor asignación de recursos.
- Versionado y Reversiones: Las imágenes Docker se pueden versionar, lo que permite realizar fácilmente reversiones a versiones anteriores en caso de problemas o errores.
- Integración con DevOps: Docker se integra bien con las prácticas de DevOps, facilitando la integración continua, la entrega continua (CI/CD) y la automatización de infraestructura.

Docker simplifica el proceso de implementación, mejora la portabilidad de las aplicaciones y optimiza la utilización de recursos, lo que lo convierte en una opción popular para desplegar y gestionar servicios.

Podemos utilizar el [plugin Ktor](https://ktor.io/docs/docker.html#configure-plugin) para crear nuestro contenedor y configurarlo.

```kotlin
// To generate Docker Image with JRE 17
ktor {
    docker {
        localImageName.set("hyperskill-reactive-api-kotlin-ktor")
        imageTag.set("0.0.1-preview")
        jreVersion.set(io.ktor.plugin.features.JreVersion.JRE_17)
        portMappings.set(
            listOf(
                io.ktor.plugin.features.DockerPortMapping(
                    8080,
                    8080,
                    io.ktor.plugin.features.DockerPortMappingProtocol.TCP
                ),
                io.ktor.plugin.features.DockerPortMapping(
                    8083,
                    8083,
                    io.ktor.plugin.features.DockerPortMappingProtocol.TCP
                )
            )
        )
    }
}
```

Sin embargo, en este ejemplo, tenemos certificados y mostraremos cómo hacerlo manualmente. Para este propósito, tenemos un archivo Dockerfile que crea un contenedor exclusivamente para generar un JAR ejecutable y posteriormente crear nuestro contenedor final. Además, podemos resumir este proceso en un archivo Docker Compose.

```dockerfile
# With this file we create a Docker image that contains the application
FROM gradle:7-jdk17 AS build
# We create a directory for the application and copy the build.gradle file
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle buildFatJar --no-daemon

# We create a new image with the application
FROM openjdk:17-jdk-slim-buster
EXPOSE 8080:8080
EXPOSE 8083:8082
# Directory to store the application
RUN mkdir /app
# Copy the certificate to the container (if it is necessary)
RUN mkdir /cert
COPY --from=build /home/gradle/src/cert/* /cert/
# Copy the jar file to the container
COPY --from=build /home/gradle/src/build/libs/ktor-reactive-rest-hyperskill-all.jar /app/ktor-reactive-rest-hyperskill.jar
# Run the application
ENTRYPOINT ["java","-jar","/app/ktor-reactive-rest-hyperskill.jar"]
```
<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*ueiFS6nNw0hYEVpJG0QuZA.png">
</p>



## ¿Y ahora cómo podrías continuar?

Espero que esta serie de tutoriales haya sido interesante y te haya abierto opciones para desarrollarte como programador, creando tus propios servicios. Pero esto es solo la punta del iceberg de las muchas cosas que puedes hacer. El único límite que tendrás eres tú mismo, así que te invito a seguir mejorando y programando tus servicios.

Tienes el código de este proyecto en [https://github.com/joseluisgs/ktor-reactive-rest-hyperskill](https://github.com/joseluisgs/ktor-reactive-rest-hyperskill). El código de esta parte está en este enlace: [https://github.com/joseluisgs/ktor-reactive-rest-hyperskill/releases](https://github.com/joseluisgs/ktor-reactive-rest-hyperskill/releases). Por favor, no olvides dar una estrella o seguirme para estar al tanto de nuevos tutoriales y noticias. 

**Puedes seguirlo commit por commit y usar el archivo de respaldo de Postman para probarlo**. 

Recuerda que este no es un código para usar en un entorno real o de producción. Es un proyecto didáctico para que puedas experimentar, analizar, mejorar o adaptar a tu forma de programar. Se trata de presentar conceptos y ver cómo funcionan. Cualquier sugerencia o propuesta que tengas, puedes hacer un "issue" o una solicitud de extracción (pull request).

Sin embargo, todavía tenemos muchas secciones por cubrir y contenido para que profundices y refuerces en [Hyperskill](https://hyperskill.org) a través de diferentes temas y tareas que te ayudarán a mejorar como desarrollador en tecnologías Kotlin. Las siguientes pistas ofrecidas por JetBrains Academy en Hyperskill pueden ser un punto de partida perfecto. Toda la información y explicación de conceptos y técnicas se muestran en estos artículos. ¡No te los pierdas!
- [Desarrollador Kotlin](https://hyperskill.org/tracks/3?category=4&utm_source=medium_hs&utm_medium=social&utm_campaign=ktor&utm_term=16.05.2023)
- [Desarrollador Backend Kotlin (Ktor)](https://hyperskill.org/tracks/45?category=20&utm_source=medium_hs&utm_medium=social&utm_campaign=ktor&utm_term=16.05.2023)

Estas pistas te brindarán experiencia práctica utilizando herramientas de vanguardia y te enseñarán cómo construir aplicaciones del lado del servidor, asegurar el almacenamiento persistente de datos en bases de datos y probar de manera efectiva la funcionalidad de tus aplicaciones utilizando herramientas modernas.

Te animamos a dejar cualquier pregunta o comentario en la sección de comentarios debajo de esta publicación del blog. Además, puedes seguirnos en plataformas de redes sociales como en [Reddit](https://www.reddit.com/r/Hyperskill/), [Twitter](https://twitter.com/yourhyperskill), [LinkedIn](https://www.linkedin.com/company/hyperskill) y [Facebook](https://www.facebook.com/myhyperskill) para estar informado sobre nuestros últimos artículos y proyectos.