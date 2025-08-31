---
title: Ya no sé programar si no es reactivo
description: 'O como la reactividad ayuda en determinadas aplicaciones'
date: '2022-12-06'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Competencias
  - Formación
  - Kotlin
  - Docencia

publish: true
image: 'https://reactiveweb.org/wp-content/uploads/2024/11/Reactive-Programming-vs-Asynchronous-%E2%80%93-A-Comparison.jpg'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
La frase no es mía, es de del gran [Antonio Leiva](https://devexperto.com/) 👈, en una de las charlas que tenemos a menudo. Pero me ha dado pie a escribir esta entrada, que no es más que una reflexión sobre la programación reactiva y su uso en determinadas aplicaciones y cómo llevarla al terreno de la docencia para explicar sus beneficios al alumnado. ¡Ya somos dos, mi admirado DevExperto! 💪

<!-- more -->
## Reactividad: ¿esto qué es?
Vayamos por partes. O sigamos los pasos que hemos realizado en Programación de Servicios y Procesos este curso. La programación reactiva es un paradigma de programación que se basa en la reactividad. La reactividad es un concepto que se basa en la capacidad de reaccionar ante un estímulo. En el caso de la programación reactiva, se basa en la capacidad de reaccionar ante un cambio de estado. Y no es un unicornio mágico que los desarrolladores hablemos por rincones oscuros de la web, es algo más simple y sencillo que combina distintas ideas y patrones de programación para conseguir ese resultado: *reaccionar ante un cambio de estado*.

## ¿Qué es un cambio de estado?
Por ejemplo, si estamos en nuestro timeline de Twitter/LinkedIn o red favorita y alguien nos menciona, nos llega un mensaje, nos llega una notificación, etc. ¿Estamos constantemente preguntando si nos han mencionado para mostrar esa notificación? ¡No!  De alguna manera, delegamos esa acción y somos nosotros los que reaccionamos ante ese cambio de estado.

## Patrón Observer y los eventos
Esto es tan viejo, como el [patrón Observer](https://refactoring.guru/es/design-patterns/observer) o el el propio uso de los eventos. En el patrón Observer, tenemos un sujeto que es el que emite los cambios de estado y un observador que es el que reacciona ante esos cambios de estado. De hecho lenguajes como Kotlin <span class="iconify" data-icon="logos:kotlin-icon" /> lo tienen incorporado en el sistema en varios tipos de delegados: [observable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.properties/-delegates/observable.html) o [vetoable](https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.properties/-delegates/vetoable.html). En el caso de los eventos, tenemos un emisor de eventos y un receptor de eventos. En ambos casos, el emisor y el receptor no se conocen entre sí, pero ambos saben que el otro existe y que reaccionará ante un cambio de estado. ¿Lo ves? Lo llevas usando todo el tiempo y no lo sabías.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://refactoring.guru/images/patterns/content/observer/observer-comic-1-es.png"
  alt="Imagen">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://refactoring.guru/images/patterns/diagrams/observer/structure.png"
  alt="Imagen">
</p>

Aquí te dejo una simple implementación en Kotlin <span class="iconify" data-icon="logos:kotlin-icon" /> de un patrón Observer por si tienes curiosidad usada en clase. Lo ves ya sabes reactividad <span class="iconify" data-icon="logos:reactivex" />:

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

    // Usamos los delegados que automaticamente si detectan un cambio avisan
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
La programación asíncrona es un concepto que se basa en la ejecución de tareas de forma no síncrona. Esto quiere decir, que no se tiene por qué ejecutar una detrás de otras en el mismo hilo de ejecución esperando una instrucción a la anterior para poder ejecutarse. La programación asíncrona nos da la capacidad de “diferir” la ejecución de una rutina a la espera de que se complete una operación, normalmente de I/O (red, disco duro, etc.), y así evitar bloquear la ejecución hasta que se haya completado la tarea en cuestión. Esto además nos permite ejecutar varias tareas a la vez de manera concurrente, sin tener que esperar a que una de ellas termine para poder ejecutar la siguiente.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://blog.kakaocdn.net/dn/btDTJ1/btqKEAB7QfT/frFPyvHrNiygGeJLzyW7tK/img.png"
  alt="Imagen">
</p>

¿Y por qué es importante la asincronía para ser reactivos? ¿Sabes cuando has de reaccionar? Por ejemplo, ¿debes bloquearte para ello si necesitas reaccionar si hay un cambio en la base de datos? Es por ello que la programación reactiva se basa en la programación asíncrona como uno de sus pilares fundamentales.

Te dejo un ejemplo de programación asíncrona en Kotlin con async/await para [procesar un RSS](https://github.com/joseluisgs/ProgServiciosProcesos-02-2022-2023/blob/main/19-Corrutinas/src/main/kotlin/corrutinas/06-RSS-Async.kt) <span class="iconify" data-icon="logos:kotlin-icon" />:

```kotlin
fun main() = runBlocking<Unit> {
    measureTimeMillis {
        println("Obteniendo noticias")
        val noticiasAsync = async { getNoticias("https://www.20minutos.es/rss/") }
        print("Descargando:")
        // Esto es para que se quede bonito, pero en el fondo me está suspendiendo con el delay!!!
        while (!noticiasAsync.isCompleted) {
            print(".")
            delay(250)
        }
        println()
        println("Noticias descargadas")
        val noticias = noticiasAsync.await()
        println("Noticias obtenidas: ${noticias.size}")

        noticias.forEachIndexed { index, noticia ->
            println("Nº ${index + 1}: $noticia")
        }
    }.let { println("Tiempo total: $it ms") }
}
```
## Procesamiento de colecciones
Y sí, procesar colecciones de manera asíncrona es fundamental para la reactividad, si no, ¿cómo vas a detectar el famoso cambio de estado ante distintos valores? Si tenemos una fuente de datos como una base de datos que puede cambiar, lo ideal es reaccionar ante el cambio y procesar esos datos de manera asíncrona.

## Programación reactiva
Ahora sí estamos preparados para saber que es la programación reactiva de acuerdo a su manifiesto.

La [programación reactiva](https://profile.es/blog/que-es-la-programacion-reactiva-una-introduccion/) es un paradigma enfocado en el trabajo con flujos de datos (nuestras colecciones) finitos o infinitos de manera asíncrona con el objetivo de reaccionar al cambio de estado que pueda producirse en los mismo. Su concepción y evolución ha ido ligada a la publicación del [Reactive Manifesto](https://www.reactivemanifesto.org/es), que establecía las bases de los sistemas reactivos, los cuales deben ser:
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

No te líes, procesas el cambio de estado observando y procesando colecciones (flujos de datos) de manera asíncrona. Es decir: patrón observador, programación asíncrona y procesamiento de colecciones en base a ideas similares al productor-consumidor y el manejo del Backpressure (se genera más elementos de los que un Subscriber puede consumir).
:::

## Librerías de programación reactiva
Existen varias librerías de programación reactiva, te cito algunas:
- [Kotlin Flows](https://kotlinlang.org/docs/flow.html): es la librería de Kotlin que te permite [procesar flujos de datos de manera asíncrona](https://elizarov.medium.com/reactive-streams-and-kotlin-flows-bfd12772cda4) y reaccionar ante el cambio de los mismos. 
- [Rx](https://reactivex.io/): fueron las pioneras en el desarrollo reactivo Js, .Net y Java/Kotlin, (actualmente van por la versión 3). Se encuentran completamente integradas en frameworks como Spring MVC, Spring Cloud y Netflix OSS.
- [Reactor](https://projectreactor.io/): Parte de RxJava 2. Este API introduce los tipos Flux y Mono como implementaciones de Publisher, los cuales generan series de 0…N y 0…1 elementos respectivamente
- [NgRx](https://ngrx.io/): es un marco para construir aplicaciones reactivas en Angular.
- [LiveData](https://developer.android.com/topic/libraries/architecture/livedata?hl=es-419) es una clase de contenedor de datos observables. LiveData está optimizado para ciclos de vida, lo que significa que respeta el ciclo de vida de otros componentes de las apps, como actividades, fragmentos o servicios and Android.

Los que me conocen saben muy pro Kotlin, por lo que te dejo una sencilla implementación de[ Kotlin Flows para procesar un RSS](https://github.com/joseluisgs/ProgServiciosProcesos-02-2022-2023/blob/main/19-Corrutinas/src/main/kotlin/flows/09-RSS-Flows.kt). Como puedes ver, esta vez no preguntamos activamente si hay noticias, simplemente observamos el flujo de datos y reaccionamos ante el cambio de estado asíncronamente, simplemente cuando lleguen o vayan llegando las procesamos.

```kotlin
fun main() = runBlocking<Unit> {
    measureTimeMillis {
        println("Obteniendo noticias")
        val noticiasFlow = getNoticiasAsFlow("https://www.20minutos.es/rss/")

        launch {
            // en una parte de la interfaz podemos actualizar las noticias cada 3 segundos
            delay(3000)
            noticiasFlow.collect {
                println("Actualización de noticias Cliente 1")
                println("Noticias Cliente 1: ${it.size}")
                it.distinct().take(10).forEachIndexed { index, noticia ->
                    println("Cliente 1 -> Noticia ${index + 1}: ${noticia.titulo}")
                }
            }
        }

        // En otra parte de la interfaz solo recoger las 10 primeras noticias una vez
        launch {
            // Otro cliente!!
            noticiasFlow.take(10).collect {
                println("Actualización de noticias Cliente 2")
                println("Noticias Cliente 2: ${it.size}")
                it.take(10).forEachIndexed { index, noticia ->
                    println("Cliente 2 -> Noticia ${index + 1}: ${noticia.titulo}")
                }
            }
        }

    }.also { println("Tiempo de ejecución: $it ms") }
}
```

## Aplicaciones de programación reactiva
Entramos en la parte interesante, ¿Cuáles son las aplicaciones de la programación reactiva? Pues si has seguido el artículo, en todo lo quue implique reaccionar ante un cambio que no sabes cuándo se producirá y por lo tanto no puedes preguntar activamente por el mismo bloqueando el hilo principal.

### Interactividad en aplicaciones
En aplicaciones de escritorio, móviles o web, la interactividad es un factor clave. La programación reactiva permite que las aplicaciones reaccionen ante los cambios de estado de manera asíncrona y sin bloquear el hilo principal. Por ejemplo, si estamos en un móvil, podemos suscribirnos a los cambios en la base de datos y si hay un cambio actualizar nuestra interfaz de usuario sin bloquear el hilo principal. Esto en librerías como [Android Jetpack con Room](https://developer.android.com/codelabs/basic-android-kotlin-training-intro-room-flow#8) es sencillo ya que podemos enganchar un flujo. De esta manera podemos suscribirnos a una api rest, una base de datos y reaccionar ante los cambios de estado mostrando cambios, notificaciones o lo que queramos de manera sencilla en nuestra interfaz.
<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0EQEzBf6mmA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

### Servicios reactivos
Como profesor de PSP, En servicios, la ejecución asíncrona y sin bloqueo y la E/S suelen ser más rentables mediante un uso más eficiente de los recursos. Ayuda a minimizar la contención (congestión) en los recursos compartidos del sistema, que es uno de los mayores obstáculos para la escalabilidad, la baja latencia y el alto rendimiento.

Imagina un servicio que necesita realizar 10 solicitudes a una base de datos y esperar su respuestas. Digamos que cada solicitud tarda 100 milisegundos. Si necesita ejecutarlos de manera secuencial sincrónica, el tiempo total de procesamiento será de aproximadamente 1 segundo. Mientras que si es capaz de ejecutarlos todos de forma asincrónica, el tiempo de procesamiento será de solo 100 milisegundos.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.oreilly.com/content/wp-content/uploads/sites/2/2019/06/rmsa_0205-f7eae52869f830276d27303f906ed984.png"
  alt="Imagen">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.oreilly.com/content/wp-content/uploads/sites/2/2019/06/rmsa_0206-90859a48270159117ee15bc1df03f001.png"
  alt="Imagen">
</p>

Por otro lado, sabemos que los accesos a la base de datos con JDBC por ejemplo son bloqueantes, si conseguimos trabajar con drivers reactivos como R2DBC podemos mejorar el rendimiento de nuestro servicio al no bloquear nunca la llamada.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.oreilly.com/content/wp-content/uploads/sites/2/2019/06/rmsa_0207-30c0306d4e47f1d4549937a30c2edb03.png"
  alt="Imagen">
</p>

Con estas ideas en mente, podemos ver que la programación reactiva es una buena opción para servicios que necesiten realizar muchas operaciones y con ello no penalizar el rendimiento de nuestro servicio.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://frandorado.github.io/assets/images/posts/2019-06-26/spring-mvc-webflux-chart.png">
</p>

### Conclusiones
A lo largo de esta entrada he intentado acercaos a la programación reactiva, sus conceptos básicos y sus aplicaciones. No es algo tan temible y creo que podrás usarla en tus proyectos sin problemas. Para mi es fundamental en módulos como Acceso a Datos y Programación de Servicios y Procesos saber dominar los elementos claves detectando cuándo es necesaria y qué ventajas nos aporta.

Te invito a que te adentres en este mundo, sobre todo, que poco a poco lo integres en tu back o front y por supuesto en tus proyectos y clases. 

Por favor si te ha gustado, comparte y comenta. Si tienes alguna duda o quieres comentar algo, puedes hacerlo en [Twitter](https://twitter.com/joseluisgonsan)/[LinkedIn](https://www.linkedin.com/in/joseluisgonsan/) o consultar proyectos para el alumnado en mi [GitHub](https://github.com/joseluisgs).

::: tip  Yo tampoco sé programar sin reactividad
Y sí, amigo [Antonio](https://devexperto.com/), yo tampoco sé programar sin reactividad y así nos va. Interfaces que reaccionan, microservicios mas ligeros, bases de datos que no bloquean, etc... Todo es reactividad.
:::

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://cdn-images-1.medium.com/fit/t/1600/480/1*JFYXKcW3Gae_2MFWwFX5lg.png">
</p>


