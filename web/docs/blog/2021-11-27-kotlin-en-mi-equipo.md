---
title: Kotlin siempre en mi equipo
description: 'Una de mis lenguajes multiusos preferidos'
date: '2021-11-28'
# sidebar: 'auto'
subSidebar: true
categories:
  - Blog
tags:
  - Profesional
  - Tecnologías
  - Kotlin
publish: true
image: 'https://content.techgig.com/photo/82324241/5-reasons-why-you-should-learn-kotlin-in-2021.jpg'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan
# sticky: 1
---
Hace poquito, te hablé que había [vuelto a Java](2021-11-17-he-vuelto-a-java.md) y que lo seguía odiando. En esta entrada entenderás parte del porqué. Quiero presentarte a Kotlin, uno de los lenguajes que más uso y que es pilar de mi [stack de desarrollo](2021-11-27-mi-stack.md). Es elegante y es potente. Me facilita la vida tanto a nivel docente como a nivle de desarrollador. Quiero que conozcas a uno de los lenguajes más completos que existen en el mercado.
<!-- more -->

## Un poco de historia
Kotlin es un lenguaje de programación de tipado estático, multiparadigma y multiplataforma que se ejecuta más agil sobre la máquina virtual de Java y que también puede ser compilado a código fuente de JavaScript. Solamente con esto ya deberías prestarle toda la atención como desarrollador. Te facilita a que con un solo lenguaje te muevas por el mundo de la JMV, la web y Node.js y dispositivos móviles, así como distintos sistemas operativos. 

Piensa que es un lenguaje muy joven y que ha bebido de las mejores cosas que existen en los lenguajes actuales y que evoluciona rápidamente. Imagina que debes diseñar Java en el 2016. Te por seguro que no lo harías como hace 30 años, pensando en la cantidad de programadores C/C++ que había. Kotlin es una visión moderna de cómo deberia ser un lenguaje pensado para programar en los tiempos actuales.

Kotlin cubre todos los paradigmas, por lo que es ideal para enseñar: programación estructurada, modular, orientada a objetos y funcional. Además, como he dicho, es 100% interoperable con Java, por lo que puede usar todas sus clases y paquetes, lo que te da un abanico de librerías listas para usar y las de NPM por ejemplo si lo usas como lenguaje a compilar a JavaScript. Es Null-safe, lo que significa que no hay ningún problema con el manejo de null. 

Desde mi punto de vista, el único problema de Kotlin, es que ha estado muy ligado a lenguaje para Android. Esta es una de sus características, pero no la única, y aunque importante, hay mucho más que lo hacen un lenguaje potente, elegante y muy efectivo para desarrollar.Poco a poco te iré desgranando sus ventajas, como lenguaje y como herramienta docente y convencerte de que lo uses.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://wallpaperaccess.com/full/3098934.png" 
  alt="Imagen">
</p>


## Kotlin a nivel docente
¿Por que aprender a programar con Kotlin o por qué enseñarlo?

Posteriormente hablaré de todas sus bondades técnicas, pero como docente que soy, y profesor en desarrollo de software, te voy a contar mi punto de vista de por qué Kotlin es un lenguaje muy bueno para aprender/enseñar programación.

### Aprendizaje gradual
Kotlin te permite moverte siguiendo los distintos paradigmas existentes. Puedes usarlo como lenguaje para programación estructurada y modular, exprimir la programación orientada a objetos y asentar las bases de programación funcional.

Por ejemplo, cuando comenzamos un curso de programación usando Java, ya un simple "Hola mundo1!" tiene una carga conceptual enorme. ¿Qué hacemos?. Podemos optar por pedirle al alumnado un acto de fé, obviar algunos conceptos, o intentar explicarlos hasta "donde se pueda". Esto puede dar problemas como que el alumnado no entienda el porqué de algunos conceptos, o que no entienda que es lo que hace el código, o que utilice por error o por defecto algunas cosas.

Analicemos un "Hola mundo!" en Java:
```java
public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("Hola mundo!");
  }
}
```

Como ves, nos aparecen varios conceptos como *public* (visibilidad), *class* (todo debe ser una clase sin haber comenzado los objetos), *static* (métodos de clases, sin ver OO), *void* (no devuelve nada), *main* (es el punto de entrada de la aplicación), *String[] args* (es un array de cadenas de texto), *System* (es una clase de Java que nos permite escribir en pantalla), *out* (indica la salida) *println* (es un método de la clase System que imprime en pantalla). 

No voy a entrar si queremos hacer el típico programa que pida un dato o inicie un diálogo por consola y aparezca la clase *Scanner*. En definitiva una locura. Demasiada carga para tan poca cosa. 

Repitamos el mismo ejemplo con Kotlin:
```kotlin
fun main() {
  println("Hola mundo!")
}
```
Kotlin está muy bien diseñado y te permite una curva de aprendizaje gradual, donde utilizas lo que necesitas cuando lo necesitas, evitando escribir o utilizar conceptos que no necesitas y pueden ser más complicados de entender cuando uno comienza a programar y usando la sintaxis justa en el momento justo, no siendo tan verboso como Java.

A partir de aquí puedes ir aprendiendo y dominando nuevos conceptos desde tipos, funciones, clases, objetos, colecciones, funciones lambda, etc.

### Sigues usando el ecosistema de Java
Todas tus clases, librerías y programas existentes en Java son 100% compatibles con Kotlin. Es decir, si tu programa necesita una clase de Java, puedes usarla en Kotlin. Puedes hacer uso de Maven para instalar librerías de Java en tu proyecto incluso de Gradle para gestionarlo.

### Di Hola a JS
Además Kotlin te permite ser compilado o a JavaScript. Si necesitas aplicaciones que hagan uso de JavaScript, puedes usar Kotlin y luego convertirte a JavaScript. Ademá, ter permite no solo aplicaciones web, si no en Node.js, o usar frameworks como Express, React, etc. Tienes NPM a tu disposición para cualquier librería.

### Lenguaje puente
Kotlin te permite saltar de Java a JavaScript, con una sintaxis a medio camino entre el primero y TypeScript. Aprendiendo Kotlin podrás migrar facilmente a estos dós últimos.

::: tip  <span class="iconify" data-icon="cib:kotlin"></span> Kotlin y docencia
-  Fácil de aprender
-  Multiparadigma y multiplataforma
-  JVM, Node.js, web, Maven Central y NPM
-  Con kotlin puedes aprender otros lenguajes facilitando el salto.
:::

## Elementos de Kotlin
A continuación, voy a desgranarte elementos de Kotlin que pueden interesarte

## Programación estructurada y modular
- Kotlin es un lenguaje orientado a objetos con tipado estatico. Aun así define unos [tipos como primitivos](https://kotlinlang.org/docs/basic-types.html) para facilitarnos su uso. Tenemos cadenas y Arrays. Ideales para comenzar a programar.
- El [control de flujo](https://kotlinlang.org/docs/control-flow.html) se puede realizar con elementos conocidos como condicionales, bucles definidos e indefinidos. Destacamos el when, que es condicional múltiple supervitaminado, y el for, que al moverse con rangos nos facilita no usar comparaciones tediosas que pueden provocar errores.
- Las [funciones](https://kotlinlang.org/docs/functions.html), son otro punto a favor. Podemos definir funciones con un número variable de parámetros. Además podemos definir funciones en linea, de extensión (de lo mejor que podrás encontrarte) y sobre carga de operadores de la manera más sencilla.
- Seguridad ante Nulos: Null es un problema y desde su concepción se ha tratado de evitar de distintas maneras. Es aquí donde Kotlin tiene uno de sus puntos fuertes gracias a su facilidad para detectarlos, protegerse ante ellos y hacer instrucciones que realicen alguna acción en caso de no serlo, si recurrir a complicadas comparaciones u objetos Optionals.

## Programación orientada a objetos
- Kotlin trabaja con clases y objetos [Clases](https://kotlinlang.org/docs/classes.html). Podemos tener constructores en la misma definición de clase e inicializadores. Para instanciar no necesitamos *new*. 
- La [herencia](https://kotlinlang.org/docs/inheritance.html) es simple para clases, pero multiple para interfaces. Los métodos y variables de clase, se incluyen en los objetos de tipo "companion", lo que los dota de esa característica especial que tienen un elemento de clase. 
- Las [propiedades](https://kotlinlang.org/docs/properties.html) y los getter&setter ya van ya de serie y depende de su visibilidad y se se definen como *var* o *val* (variables o constantes). De esta manera podemos implementar el patrón Builder de una manera muy simple.
- Clases específicas: gracias a notaciones como [Data](https://kotlinlang.org/docs/data-classes.html) podemos crear clases para solo almacenar datos (típicas POJO en Java) en una sola línea. Con [Object](https://kotlinlang.org/docs/object-declarations.html) podemos crear clases siguiendo el patrón Singleton. Con todo lo indicado quizás no necesitemos recurrir a Lombok más.
- [Genéricos](https://kotlinlang.org/docs/generics.html), con ello podemos dotar de toda la potencia de la programación genérica, pensando en qué queremos hacer y no con qué tipo.

## Colecciones
Vale, podría ir en el apartado anterior. A parte de poder usar todas las de Java, Kotlin tiene una serie de colecciones que puedes usar con una característica muy importante, poder trabajar con la mutabilidad e inmutabilidad.
De esta manera podemos trabajar por ejemplo, con listas constantes de solo lectura. Una gran ventaja para no meter la pata. Es decir, una lista de solo lectura, que sería un dolor de cabeza en Java, aquí la tienes de serie. Por supuesto todas trabaja con estructuras funcionales si se da el caso, sin recurrir a los streams, como parche o transformando los objetos.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://kotlinlang.org/docs/images/collections-diagram.png" 
  alt="Imagen">
</p>

## Programación funcional
Kotlin es un lenguaje que se mueve muy bien con la programación funcional y las [lambdas](https://kotlinlang.org/docs/lambdas.html) pues fue concebido para ello, y no siendo un añadido como en otros lenguajes. Por lo que todo resulta muy natural y sencillo, pues bebe de su "primo" Scala.

A partir de aquí tenemos una serie de operaciones usando este paradigma para el manejo de [colecciones](https://kotlinlang.org/docs/collection-operations.html). Operaciones para realizar transformaciones, filtrado, adiciones y sustracciones, agrupamiento, recolección de datos, ordenamiento, o funciones de agregación. Lo que necesites y más.

## Programación concurrente
Kotlin puede hacer uso de Hilos, Callbacks y Futures (promesas de Java) para hacer uso de la programación concurrente y mecanismos de sincronización conocidos (semáforos, monitores, synchroniozed, etc). Pero su punto fuerte es el uso de las [Corrutinas](https://kotlinlang.org/docs/coroutines-guide.html). Una corrutina (definidas tambien como un hilo liviano y optimizado) es un conjunto de sentencias que realizan una tarea específica, con la capacidad suspender o resumir su ejecución sin bloquear un hilo. Esto permite que tengas diferentes corrutinas cooperando entre ellas, suspendiéndose y resumiéndose en puntos especificados por ti o por Kotlin Con ellas podemos ejecutar código en paralelo y/o asíncrono de una forma muy sencilla y óptima. No significa que exista un hilo por cada corrutina, al contrario, puedes ejecutar varias en un solo. Donde podrás crear tu propio procesamiento concurrente optimizando los recursos del sistema. Este comportamiento de las corrutinas en Kotlin te permite:
- Reducir recursos del sistema al evitar la creación de grandes cantidades de hilos
- Facilitar el retorno de datos de una tarea asíncrona
- Facilitar el intercambio de datos entre tareas asíncronas

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://miro.medium.com/max/2000/1*I3OMp4jIytzR7GKpRkEiAA.png" 
  alt="Imagen">
</p>

## Programación de servicios
Kotlin te permite trabajar con el [Back-end](https://kotlinlang.org/docs/server-overview.html#deploying-kotlin-server-side-applications) de tu aplicación de manera muy efectiva. Puedes usar [Spring](https://spring.io/guides/tutorials/spring-boot-kotlin/) sin ningún problema y con una gran cantidad de funcionalidades. Si tu excusa para no usar Kotlin en back era Spring, ya se te ha acabado. Con ello podrás hacer por ejemplo tu API REST.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://raw.githubusercontent.com/spring-guides/tut-spring-boot-kotlin/master/images/initializr.png" 
  alt="Imagen">
</p>

Pero quizás quieras crear servicios web de una manera asíncrona y sencillas. Kotlin pone a tu disposición [Ktor](https://ktor.io/) para ello. No necesitas Sprting o Express para hacer un API REST o GraphQL de manera rápida.

Por otro lado, puedes usar [JPA](https://www.baeldung.com/kotlin/jpa) sobre Hibernate o Spring Data para trabajar en tu accesos a datos a cualquier tipo de base de datos.

¿Quieres más? Necesitas moverte con [Node.js](https://www.baeldung.com/kotlin/javascript). ¿Una back sobre Express?, ¿librerías de NPM. Con Kotlin puedes hacerlo. Puedes crear tus aplicaciones en Node.js

## Desarrollo de clientes
Con Kotlin puedes crear el cliente que quieras o como quieras. JVM: Puedes usar JavaFX o cualquier paquete de Java para implementar tu cliente. JavaScript/Web: Puedes usar Kotlin para crear tu cliente o aplicación web como lenguaje tipado. Puedes trabajar en [Vanila JavaScript](https://kotlinlang.org/docs/js-project-setup.html) o con frameworks tan conocidos como [React](https://kotlinlang.org/docs/js-get-started.html).

Por supuesto puedes trabajar para móviles, todos conocemos su potencial sobre [Android](https://developer.android.com/kotlin). Pero ademas nos permite realizar desarrollos paa [iOS](https://kotlinlang.org/lp/mobile/).

Pero el gran paso es poder hacerlo todo y en todas las plataformas con Kotlin es [Compose](https://www.jetbrains.com/lp/compose-mpp/), o como crear interfaces de usuario de manera declarativa y con ello poder crear nuestras aplicaciones para Windows, Mac, Linux, Android, iOS, Web, etc.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://raw.githubusercontent.com/JetBrains/compose-jb/master/artwork/readme/apps.png" 
  alt="Imagen">
</p>

## Testing
Obviamente para nuestros [tests](https://kotlinlang.org/docs/mpp-run-tests.html) podemos hacer uso de JUnit o Mockito. Pero además tenemos nuestras de [librerías propias](https://kotlinlang.org/api/latest/kotlin.test/) para ello.

## Desarrollo nativo
Si


## Conclusión
Kotlin ha supuesto un gran avance en el ecosistema de la JVM, de hecho muchos de los avances de Java desde la versión 8 vienen de "inspirarse" en Kotlin.

Uno de los objetivos que tengo pendientes es mostrar como muchas partes del temario de DAM y DAW se pueden desarrollar con Kotlin con apuntes y prácticas tipo de distintos módulos y compartirlo. De hecho, como ves cubre todo y más. Espero que tú, como alumno o docente te animes a usar Kotlin, no solo para Android y con esta entrada hayas descubierto cómo este lenguaje te puede aportar experiencias muy positivas para tus desarrollos. Y si podemos compartirlo mejor.

En mi [repositorio](https://github.com/joseluisgs) tienes ya algunos proyectos tipo. Si necesitas algo más no dudes en contactar conmigo.






