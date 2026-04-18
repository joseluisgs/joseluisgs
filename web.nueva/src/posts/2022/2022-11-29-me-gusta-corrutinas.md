---
title: Me encantan las Corrutinas
description: Como manejar la asincronía, concurrencia y reactividad de forma sencilla en tus módulos
date: 2022-11-29
category:
  - Blog
tag:
   - Docencia
   - Kotlin
   - Corrutinas
icon: fa-solid fa-code-branch
cover: https://kotlin.desarrollador-android.com/wp-content/uploads/2019/04/coroutines-kotlin.jpg
comment: true
sidebar: false
---

Si hay algo de lo que he disfrutado desde hace mucho tiempo es del uso de las Corrutinas en Kotlin. Este año he decidido explotar su uso en el backend y no puedo estar más satisfecho: rapidez, sencillez y nuevas filosofías de programación fácilmente aplicables sin recurrir a otros recursos.

<!-- more -->
## Corrutinas
Las corrutinas son une característica de Kotlin que viene a facilitar la programación asíncrona y reactividad de una manera muy sencilla. Si vienes de otros lenguajes ya conocesasync/await de JavaScript oC# o los observables de RxJavay compañía. Las corrutinas permiten escribir código asíncrono de forma secuencial, einfieren la complejidad subyacente de las callbacks y el manejo de hilos.

La diferencia principal es que el hilo no se bloquea, si no que se suspende mientras espera el resultado de una operación. Esto es fundamental en aplicaciones donde la concurrencia y el rendimiento son importantes, como en aplicaciones móviles o servicios web.

```kotlin
suspend fun ejemplo() {
    val resultado = operacionAsincrona()
    println(resultado)
}
```

## Scope y Context
Las corrutinas necesitan un contexto y un alcance (scope) para ejecutarse. El contexto incluye elDispatcher que define en qué hilo se ejecuta la corrutina (Main, IO, etc.) y el alcance define el tiempo de vida de la corrutina.

```kotlin
val scope = CoroutineScope(Dispatchers.Main + SupervisorJob())
```

## Funciones suspend
Las funciones suspend son funciones que pueden ser pausadas y reanudadas. Solo pueden ser llamadas desde una corrutina u otra función suspend.

```kotlin
suspend fun getDatos(): Datos {
    return withContext(Dispatchers.IO) {
        baseDeDatos.obtener()
    }
}
```

## async/await
Permite ejecutar varias operaciones en paralelo y esperar sus resultados.

```kotlin
val dato1 = async { getDatos1() }
val dato2 = async { getDatos2() }
println(dato1.await() + dato2.await())
```

## Flows
Los Flows son secuencias asíncronas que pueden emitir múltiples valores, perfect para manejo de streams de datos.

```kotlin
fun getDatosFlow(): Flow<Datos> = flow {
    while (true) {
        emit(getDatos())
        delay(1000)
    }
}
```

## Channels
Los channels permiten comunicación entre corrutinas de forma segura.

```kotlin
val channel = Channel<String>()
channel.send("mensaje")
val mensaje = channel.receive()
```

Las corrutinas han revolucionado la forma de programar en Kotlin, facilitando el manejo de operaciones asíncronas de forma clara y eficiente.