---
title: Ya no sé programar si no es reactivo
description: O como la reactividad ayuda en determinadas aplicaciones
date: 2022-12-06
category:
  - Blog
  - Docencia
tag:
  - Docencia
  - Kotlin
  - Programacion-Reactiva
icon: fa-brands fa-kotlin
cover: https://reactiveweb.org/wp-content/uploads/2024/11/Reactive-Programming-vs-Asynchronous-%E2%80%93-A-Comparison.jpg
comment: true
sidebar: false
footer: true
---

La frase no es mía, es del gran Antonio Leiva 👈, en una de las charlas que tenemos a menudo. Pero me ha dado pie a escribir esta entrada, que no es más que una reflexión sobre la programación reactiva y su uso en determinadas aplicaciones y cómo llevarla al terreno de la docencia para explicar sus beneficios al alumnado. ¡Ya somos dos, mi admirado DevExperto! 💪

<!-- more -->
## Reactividad: ¿esto qué es?
Vayamos por partes. O sigamos los pasos que hemos realizado en Programación de Servicios y Procesos este curso. La programación reactiva es un paradigma de programación que se basa en la reactividad. La reactividad es un concepto que se basa en la capacidad de reaccionar ante un estímulo. En el caso de la programación reactiva, se basa en la capacidad de reaccionar ante un cambio de estado. Y no es un unicornio mágico del que los desarrolladores hablemos por rincones oscuros de la web; es algo más simple y sencillo que combina distintas ideas y patrones de programación para conseguir ese resultado: *reaccionar ante un cambio de estado*.

## ¿Qué es un cambio de estado?
Por ejemplo, si estamos en nuestro *timeline* de Twitter/LinkedIn o red favorita y alguien nos menciona, nos llega un mensaje, nos llega una notificación, etc. ¿Estamos constantemente preguntando si nos han mencionado para mostrar esa notificación? ¡No! De alguna manera, delegamos esa acción y somos nosotros los que reaccionamos ante ese cambio de estado.

## Patrón *Observer* y los eventos
Esto es tan viejo como el patrón *Observer* o el propio uso de los eventos. En el patrón *Observer*, tenemos un sujeto que es el que emite los cambios de estado y un observador que es el que reacciona ante esos cambios de estado. De hecho, lenguajes como Kotlin lo tienen incorporado en el sistema en varios tipos de delegados: *observable* o *vetoable*. En el caso de los eventos, tenemos un emisor de eventos y un receptor de eventos. En ambos casos, el emisor y el receptor no se conocen entre sí, pero ambos saben que el otro existe y que reaccionará ante un cambio de estado. ¿Lo ves? Lo llevas usando todo el tiempo y no lo sabías.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-es.png"
  alt="Imagen">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://refactoring.guru/images/patterns/diagrams/observer/structure.png"
  alt="Imagen">
</p>

Aquí te dejo una simple implementación en Kotlin de un patrón *Observer* por si tienes curiosidad, usada en clase. Lo ves, ya sabes: reactividad.

```kotlin
// Una interfaz, podríamos usar genéricos
interface Publisher {
    fun onNews(news: String)
}

// Radio Una clase que implementa la interfaz
class RadioChannel : Publisher {
    override fun onNews(news: String) = println("La radio informa: $news")
}

// Periodico Una clase que implementa la interfaz
class Newspaper : Publisher {
    override fun onNews(news: String) = println("El periódico informa: $news")
}

// Agencia que es observada
class NewsAgency {
    // Lista de observadores, son los que implementan la interfaz
    private val listeners = mutableListOf<Publisher>()

    // Usamos los delegados que automáticamente, si detectan un cambio, avisan
    var news: String by Delegates.observable(initialValue = "") { _, old, new ->
        if (new != old) listeners.map { listener -> listener.onNews(new) }
    }

    // Añadimos un observador
    fun subscribe(publisher: Publisher) = listeners.add(publisher)

    // Eliminamos un observador
    fun unsubscribe(publisher: Publisher) = listeners.remove(publisher)
}

fun main() {
    // Preparamos los objetos observadores que reaccionarán ante un cambio de estado
    val radioChannel = RadioChannel()
    val newspaper = Newspaper()
    val newsAgency = NewsAgency()

    // Suscribimos a la agencia, me observan si cambio de estado
    newsAgency.subscribe(radioChannel)
    newsAgency.subscribe(newspaper)

    // Lanzamos una noticia. Al estar el delegado, la observa y automáticamente notifica
    // A mis observadores ante el cambio de estado, ¿lo ves?
    newsAgency.news = "¡Nadal Gana!"
    newsAgency.news = "¡Hoy llueve!"
    newsAgency.news = "¡Todos han aprobado!"

    // Los periódicos se retiran
    newsAgency.unsubscribe(newspaper)
    newsAgency.news = "Llegan las vacaciones :)"
}
```

## Programación asíncrona
La programación asíncrona es un concepto que se basa en la ejecución de tareas de forma no síncrona. Esto quiere decir que no se tiene por qué ejecutar una detrás de otra en el mismo hilo de ejecución esperando una instrucción a la anterior para poder ejecutarse. La programación asíncrona nos da la capacidad de "diferir" la ejecución de una rutina a la espera de que se complete una operación, normalmente de I/O (red, disco duro, etc.), y así evitar bloquear la ejecución hasta que se haya completado la tarea en cuestión. Esto además nos permite ejecutar varias tareas a la vez de manera concurrente, sin tener que esperar a que una de ellas termine para poder ejecutar la siguiente.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://blog.kakaocdn.net/dn/btDTJ1/btqKEAB7QfT/frFPyvHrNiygGeJLzyW7tK/img.png"
  alt="Imagen">
</p>

¿Por qué es importante la asincronía para ser reactivos? ¿Sabes cuándo has de reaccionar? Por ejemplo, ¿debes bloquearte para ello si necesitas reaccionar si hay un cambio en la base de datos? Es por ello que la programación reactiva se basa en la programación asíncrona como uno de sus pilares fundamentales.

## Procesamiento de colecciones
Y sí, procesar colecciones de manera asíncrona es fundamental para la reactividad; si no, ¿cómo vas a detectar el famoso cambio de estado ante distintos valores? Si tenemos una fuente de datos como una base de datos que puede cambiar, lo ideal es reaccionar ante el cambio y procesar esos datos de manera asíncrona.

## Programación reactiva
Ahora sí estamos preparados para saber qué es la programación reactiva de acuerdo a su manifiesto.

La programación reactiva es un paradigma enfocado en el trabajo con flujos de datos (nuestras colecciones) finitos o infinitos de manera asíncrona con el objetivo de reaccionar al cambio de estado que pueda producirse en los mismos. Su concepción y evolución ha ido ligada a la publicación del *Reactive Manifesto*, que establecía las bases de los sistemas reactivos, los cuales deben ser:
- Responsivos: aseguran la calidad del servicio cumpliendo unos tiempos de respuesta establecidos.
- Resilientes: se mantienen responsivos incluso cuando se enfrentan a situaciones de error.
- Elásticos: se mantienen responsivos incluso ante aumentos en la carga de trabajo.
- Orientados a mensajes: minimizan el acoplamiento entre componentes al establecer interacciones basadas en el intercambio de mensajes de manera asíncrona.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.reactivemanifesto.org/images/reactive-traits-es.svg"
  alt="Imagen">
</p>

::: tip  Programación reactiva: programación asíncrona de flujos observables

No te líes, procesas el cambio de estado observando y procesando colecciones (flujos de datos) de manera asíncrona. Es decir: patrón observador, programación asíncrona y procesamiento de colecciones en base a ideas similares al productor-consumidor y el manejo del *Backpressure* (se genera más elementos de los que un *Subscriber* puede consumir).
:::

## Librerías de programación reactiva
Existen varias librerías de programación reactiva:
- Kotlin *Flows*: es la librería de Kotlin que te permite procesar flujos de datos de manera asíncrona y reaccionar ante el cambio de los mismos.
- Rx: fueron las pioneras en el desarrollo reactivo JS, .NET y Java/Kotlin, se encuentran completamente integradas en *frameworks* como Spring MVC, Spring Cloud y Netflix OSS.
- *Reactor*: Parte de RxJava 2. Esta API introduce los tipos *Flux* y *Mono* como implementaciones de *Publisher*.
- NgRx: es un marco para construir aplicaciones reactivas en Angular.
- *LiveData* es una clase de contenedor de datos observables. *LiveData* está optimizado para ciclos de vida.

Los que me conocen saben que soy muy pro Kotlin, por lo que te dejo una sencilla implementación de Kotlin *Flows* para procesar un RSS. Como puedes ver, esta vez no preguntamos activamente si hay noticias; simplemente observamos el flujo de datos y reaccionamos ante el cambio de estado asíncronamente; simplemente cuando lleguen o vayan llegando las procesamos.

## Aplicaciones de programación reactiva
Entramos en la parte interesante: ¿cuáles son las aplicaciones de la programación reactiva? Pues si has seguido el artículo, en todo lo que implique reaccionar ante un cambio que no sabes cuándo se producirá y por lo tanto no puedes preguntar activamente por el mismo bloqueando el hilo principal.

### Interactividad en aplicaciones
En aplicaciones de escritorio, móviles o web, la interactividad es un factor clave. La programación reactiva permite que las aplicaciones reaccionen ante los cambios de estado de manera asíncrona y sin bloquear el hilo principal.

### Servicios reactivos
En servicios, la ejecución asíncrona y sin bloqueo y la E/S suelen ser más rentables mediante un uso más eficiente de los recursos. Ayuda a minimizar la contención en los recursos compartidos del sistema, que es uno de los mayores obstáculos para la escalabilidad, la baja latencia y el alto rendimiento.

Imagina un servicio que necesita realizar 10 solicitudes a una base de datos y esperar sus respuestas. Digamos que cada solicitud tarda 100 milisegundos. Si necesita ejecutarlas de manera secuencial síncrona, el tiempo total de procesamiento será de aproximadamente 1 segundo. Mientras que si es capaz de ejecutarlas todas de forma asíncrona, el tiempo de procesamiento será de solo 100 milisegundos.

Por otro lado, sabemos que los accesos a la base de datos con JDBC, por ejemplo, son bloqueantes; si conseguimos trabajar con *drivers* reactivos como R2DBC, podemos mejorar el rendimiento de nuestro servicio al no bloquear nunca la llamada.

### Conclusiones
A lo largo de esta entrada he intentado acercaros a la programación reactiva, sus conceptos básicos y sus aplicaciones. No es algo tan temible y creo que podrás usarla en tus proyectos sin problemas. Para mí es fundamental en módulos como Acceso a Datos y Programación de Servicios y Procesos saber dominar los elementos clave detectando cuándo es necesaria y qué ventajas nos aporta.

Te invito a que te adentres en este mundo, sobre todo, que poco a poco lo integres en tu *back* o *front* y, por supuesto, en tus proyectos y clases.

::: tip  Yo tampoco sé programar sin reactividad
Y sí, amigo Antonio, yo tampoco sé programar sin reactividad y así nos va. Interfaces que reaccionan, microservicios más ligeros, bases de datos que no bloquean, etc... Todo es reactividad.
:::
