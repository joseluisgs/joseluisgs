---
title: Me encantan las Corrutinas
description: 'Como manejar la asincronía, concurrencia y reactividad de forma sencilla en tus módulos'
date: '2022-11-29'
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
image: 'https://kotlin.desarrollador-android.com/wp-content/uploads/2019/04/coroutines-kotlin.jpg'
# sticky: 1
---
Si hay algo de lo que he disfrutado desde hace mucho tiempo es del uso de las Corrutinas en Kotlin. Este año he decidido explotar su uso en el backend y no puedo estar más satisfecho: rapidez, sencillez y nuevas filosofías de programación fácilmente aplicables sin recurrir a otros recursos.

<!-- more -->
## Corrutinas

Una [corrutina](https://kotlinlang.org/docs/coroutines-overview.html) es un hilo de ejecución ligero que nos permite ejecutar código de forma asíncrona. De hecho su nombre viene de *rutina concurrente*. En Kotlin, las corrutinas son una forma de programación asíncrona/concurrente que nos permite simplificar el código para que se vea y se escriba como si fuese secuencial.

No voy a entrar en detalles de cómo funcionan las corrutinas, ya que hay muchos artículos que lo explican muy bien: documentación de [Kotlin](https://kotlinlang.org/docs/coroutines-overview.html) o [Baeldung](https://www.baeldung.com/kotlin/coroutines). Tampoco voy a explicar cómo funcionan o [se han implementado](https://www.amazon.com/Kotlin-Coroutines-Tutorials-Second-Mastering/dp/1942878958), porque no es es este el objetivo. En este artículo voy a hablar de cómo las corrutinas nos pueden ayudar a simplificar el código asíncrono y concurrente y qué me han ofrecido a nivel docente en mis módulos. 

Pero entro  a describir sus características más importantes:
- Ligereza: Puedes ejecutar muchas corrutinas en un solo subproceso debido a la compatibilidad con la suspensión, que no bloquea el subproceso en el que se ejecuta la corrutina. La suspensión ahorra más memoria que el bloqueo y admite muchas operaciones simultáneas.
- Menos fugas de memoria: Usa la simultaneidad estructurada para ejecutar operaciones dentro de un alcance.
- Compatibilidad con cancelación incorporada: Se propaga automáticamente la cancelación a través de la jerarquía de corrutinas en ejecución.

## Funciones de suspensión
una **función de suspensión** e sun concepto clave que da forma a la filosofía de la scorrutinas. Una función de suspensión, es una función que puede pausar su ejecución. Cuando una función de suspensión se suspende, la corrutina que la ejecuta se suspende y se puede reanudar en algún momento en el futuro. Las funciones de suspensión se marcan con la palabra clave suspend. ¿Qué significa todo esto? Cuando trabajamos con hilos, estos hilos tienen a bloquearse sobre todo al realizar operaciones de entrada y salida. Una corrutina está asociado a un hilo, pero no bloquea el hilo, sino que suspende la corrutina. Esto nos permite ejecutar muchas corrutinas en un solo hilo. Es decir, cuando una corrutina se suspende libera su hilo que puede ser utilizado por otra corrutina, cuando se reanuda la corrutina, el hilo se vuelve a ocupar, y no tiene por que ser el mismo hilo que estaba ocupado antes. Lo que ha hecho el equipo de Kotlin, es crear un hilo de ejecución ligero que se puede suspender y reanudar sobre los hilos existentes utilizando ideas de programación asíncrona y concurrente conocidas como: callbacks, promesas, futures, pools, etc y mapeando los hilos ofrecidos por la JVM y el sistema para que se puedan utilizar de forma eficiente.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://doordash.engineering/wp-content/uploads/2021/11/coroutine-11-1-1024x484.jpg"
  alt="Imagen">
</p>

Recuerda que los hilos son "caros", pues están limitados por el número de núcleos de CPU y lo que te posibilite el sistema operativo. Todos tus servicios "compiten" por ellos. Gracias a las corrutinas, podemos aprovechar aprovechar mucho más los recursos en backend al no ocupar tantos hilos. De hecho en una prueba de clase probamos a lanzar 13.000 hilos, el máximo soportado por el sistema operativo de clase (Linux) y llegamos a más de 1.500.000 de corrutinas sin tener problemas realizando la misma operación. Esto ya es una ventaja considerable, aunque el valor depende de las operaciones a realizar.


::: tip  
Este año hemos aprendido lo que realmente significa bloquear ⛔, a valorar los recursos compartidos, operaciones de entrada y salida, y comprender la importancia del cambio de contexto y que los recursos no son infinitos. Bienvenidos/as al mundo de la suspensión ✅. 
Como broma, te diré que nunca "suspender" ha tenido un significado tan positivo en clase 😅.
:::


## Concurrencia estructurada
Las corrutinas se mueven dentro de un alcance o [scope](https://kotlinlang.org/docs/coroutines-basics.html#structured-concurrency). Cuando una corrutina se cancela, se cancelan todas las corrutinas que se están ejecutando en el mismo alcance que la corrutina que se cancela. Siempre suelo poner la imagen de unas muñecas Matrioska. Esto se conoce como concurrencia estructurada, evitando fugas de memoria, o que se queden elementos "zombies" en el sistema, todo un plus para el alumnado que ve que no crea fugas de memoria.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://blendup.art/wp-content/uploads/2019/07/significado_tatuagem_matrioska_1-1024x576.jpg"
  alt="Imagen">
</p>


## Mecanismos de sincronización
Las corrutinas se pueden sincronizar de forma segura utilizando los mecanismos de sincronización de Kotlin. Esto nos permite sincronizar corrutinas de forma segura: tenemos los [semáforos](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-semaphore/) y [cerrojos](https://kotlinlang.org/api/kotlinx.coroutines/kotlinx-coroutines-core/kotlinx.coroutines.sync/-mutex/) y otros elementos como canales. Por lo tanto podemos trabajar con ellas de una manera similar a como lo hemos hecho con los hilos protegiendo nuestras secciones críticas.

::: tip  
Mecanismos de sincronización específicos, muy similares a los que conoces en hilos, de hecho puedes incluso montarte monitores. Otra cosa es que los necesites. Ya lo verás.
:::

## Async y await
[Async y await](https://kotlinlang.org/docs/composing-suspending-functions.html#concurrent-using-async) son dos palabras clave que nos permiten trabajar con corrutinas de forma asíncrona como si fuera secuencial ❤️. Async nos permite crear una corrutina que se ejecuta de forma asíncrona y await nos permite esperar a que se complete la corrutina. Esto nos permite trabajar con corrutinas de forma asíncrona, pero sin tener que lidiar con callbacks, promesas, etc. De hecho podemos incurso incorporar timeouts, etc. En el siguiente ejemplo podemos ver como se trabaja con async y await y lanzar varias peticiones concurrentes, y nos suspendemos para esperar sus resultado, si este no ha llegado:

```kotlin
fun main() = runBlocking {
    
    val time = measureTimeMillis {
    
        val one = async { doSomethingUsefulOne() }
        val two = async { doSomethingUsefulTwo() }
        println("The answer is ${one.await() + two.await()}")
    
    }
    
    println("Completed in $time ms")
}
```

::: tip  
Sinceramente Async/Await ha sido un gran avance respecto al uso de Future/FutureCallable por su sencilles de implementación en clase. de hecho el uso de Timeouts es una gran ventaja ✅.
:::


## Dispatchers
Los [dispatchers](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html) son los encargados de ejecutar las corrutinas en un contexto. Por defecto, las corrutinas se ejecutan en el hilo que las lanza. Pero podemos cambiar el contexto y con ello el conjuntos de hilos en el que se ejecutan las corrutinas utilizando los dispatchers. De esta manera podemos asignar nuestro código asíncrono a un conjunto de workers o pool de hilos que se encargan de ejecutar las corrutinas optimizados para determinadas tareas/operaciones. Esto nos permite ejecutar corrutinas en hilos diferentes, y de esta manera aprovechar los recursos de forma eficiente. En el siguiente ejemplo podemos ver como se trabaja con dispatchers:

```kotlin
fun main() = runBlocking {
  
    val one = async(Dispatchers.IO) { // eficiente en operaciones I/O
        println("I'm working in thread ${Thread.currentThread().name}")
    }
    val two = async(Dispatchers.Default) { // en el dispacher por defecto
        println("I'm working in thread ${Thread.currentThread().name}")
    }

     println("The answer is ${one.await() + two.await()}")
    
}
```

Existen distintos tipos de [Dispacher](https://kotlinlang.org/docs/coroutine-context-and-dispatchers.html#dispatchers-and-threads) pre-establecidos, pero te recomiendo para el back usar IO (operaciones de entrada y salida), Default (para operaciones intensivas) o crearte tu propio hilo para ello.

::: tip  
El uso de Dispachers simplifica mucho cómo y de qué manera vas a trabajar con los recursos. De hecho, gracias a ellos el alumnado ha aprendido a analizar sus tipos de operaciones, características para decidir cuál es el idóneo ✅.
:::

## Canales
Si hay algo que me parece simple de usar para realizar coordinación y sincronización son los [canales](https://kotlinlang.org/docs/channels.html). Similares a una Blockin Queue, pero con la ventaja de no bloquear, si no que se suspenden, siendo [Hot Streams](https://kt.academy/article/cc-hot-cold). 

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/max/786/1*0wWtCaRrUZ1DaYM8j25i3Q.webp"
  alt="Imagen">
</p>

Además, se pueden configurar de distinta manera para que su comportamiento sea el más adecuado para nuestro caso de uso. Con ellos podemos crear productores y consumidores de información gracias a sus interfaces de SendChannel y ReceiveChannel, aplicar pipelines de procesamiento de datos, fan-in, fan-out, o bradcasting, etc. 

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://jivimberg.io/images/posts/2019-04-18/Channels.gif"
  alt="Imagen">
</p>

En el siguiente ejemplo podemos ver como se trabaja con canales:

```kotlin
fun main() = runBlocking {
  
    val channel = Channel<Int>()
    
    launch {
        for (x in 1..5) channel.send(x * x)
        channel.close()
    }

    launch {
        for (y in channel) 
        println(y)
    }
    
}
```

::: tip
Los canales son una gran herramienta para coordinar y sincronizar tareas 👮. De hecho, gracias a ellos el alumnado ha aprendido a analizar sus tipos de operaciones, sincronizarlas, aprender a combinarlos sabiendo sus características ahorrando tiempo en creación de monitores o similares ✅.
:::


## Flujos
Pero sin duda, una de las cosas que me tiene enganchado son los flujos 👨🏻‍💻. Los [Flows](https://kotlinlang.org/docs/flow.html) de Kotlin son una secuencia de valores que se emiten de forma asíncrona, son [Cold Streams](https://kt.academy/article/cc-hot-cold). Son similares a los observables de Rx (RxJs, RxJava), pero con la ventaja de que no son tan complejos de usar. Además, gracias a ello podemos realizar operaciones de transformación, filtrado, mapeo, etc. de forma muy sencilla y siguiendo una api similar a las de las colecciones y secuencias. 

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://developer.android.com/static/images/kotlin/flow/flow-entities.png"
  alt="Imagen">
</p>

El uso de Flows es muy realmente simple, solo tenemos que crear una función que retorne un Flow y con ello se nos abre un mundo de posibilidades. El primero de ellos es la programación reactiva. Ya que podemos conectarnos a una base de datos y emitir los datos que se van actualizando en tiempo real. Otro de sus usos es tener un stream de datos que se actualiza en tiempo real, como por ejemplo, un stream de datos de un sensor. Pero uno de los más interesantes, es la posibilidad de tener un [estado](https://developer.android.com/kotlin/flow/stateflow-and-sharedflow) [compartido y reactivo](https://www.kodeco.com/22030171-reactive-streams-on-kotlin-sharedflow-and-stateflow). De hecho su facilidad para acercarnos a la reactividad y estados compartidos, es lo que más uso le hemos dado en para hacer servicios reactivos que acceden a datos.


```kotlin
fun main() = runBlocking {
  
    val flow = flow {
        for (i in 1..3) {
            delay(100)
            emit(i)
        }
    }
    
    launch {
        flow.collect { value -> println(value) }
    }
    
}
```

::: tip
Los flujos han abierto la puerta a que apliquemos otras formas de programación, como la reactiva, y nos han permitido crear servicios reactivos o estados compartidos de una forma simple y sin recurrir a recursos externos ✅.
:::


## Otras aplicaciones
No voy a entrar en otras aplicaciones con corrutinas, porque hay bastantes, ni de otros frameworks que hacen uso de ellas como [Ktor](https://ktor.io/), o la programación de [sockets](https://ktor.io/docs/servers-raw-sockets.html) no bloqueantes. Pero he disfrutado mucho haciendo un servicio de chat reactivo con una caché de mensajes compartida. De hecho montarlo ha supuesto muchas menos líneas de código y mucha menos complejidad que hacerlo con otras alternativas en Java.

De la misma manera se pueden aplicar con Spring para construir servicios reactivos ya sea con SQL o NoSQL con muy buenos resultados.

## Conclusiones
Yo ya había trabajado con las corrutinas en desarrollo móvil, pero ha sido este año cuando he decidido dar el salto con ella en mis módulos de segundo de DAM como son Acceso a Datos y Programación de Servicios y Procesos. Creo que ha sido un gran acierto su incorporación en el Backend como complemento a los hilos y todo lo relacionado con ellos: Futures, monitores, semáforos, etc.

Sin duda, las corrutinas son una herramienta muy potente y que nos permite hacer código más limpio y mantenible y legible y nos abre las puertas a que fácilmente programemos siguiendo otras filosofías sin necesidad de instalar librerías externas pues nos ofrecen todo para ello.

Como he dicho, no es un artículo para explicarte cómo funcionan, pero sí para mostrarte sus ventajas a nivel docente y en el back. También te recomiendo que le eches un vistazo al blog de [Roman Elizarov, Project Lead for the Kotlin Programming Language de JetBrains](https://elizarov.medium.com/) donde comenta muchos aspectos interesantes de cómo está hecho Kotlin por dentro y las Corrutinas.

::: tip  <span class="iconify" data-icon="logos:kotlin-icon" />Pon una corrutina en tu vida y verás como todo cambia
Bienvenido/a al mundo de las suspensión, de la concurrencia y de la programación reactiva. Bienvenido/a al mundo de las corrutinas.

Puedes ver distintos ejemplos de su uso en los apuntes de mis módulos y prácticas disponibles en <span class="iconify" data-icon="logos:github-icon" /> [Github](https://github.com/joseluisgs)
:::

