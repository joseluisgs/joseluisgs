---
title: Kotlin siempre en mi equipo
description: 'Uno de mis lenguajes multiusos preferidos'
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

Hace poquito, te hablé que había [vuelto a Java](2021-11-17-he-vuelto-a-java.md) y que lo seguía odiando. En esta entrada entenderás parte del porqué. Quiero presentarte a Kotlin, uno de los lenguajes que más uso y que es pilar de mi [stack de desarrollo](2021-11-27-mi-stack.md). Es elegante y es potente. Me facilita la vida tanto a nivel docente como a nivel de desarrollador. Quiero que conozcas a uno de los lenguajes más completos que existen en el mercado y después de conocerlo, quizás te pueda servir para tu desarrollo dada su versatilidad.

<!-- more -->

## Un poco de historia
Kotlin es un lenguaje de programación de tipado estático, multiparadigma y multiplataforma que se ejecuta más ágil sobre la máquina virtual de Java y que también puede ser compilado a código fuente de JavaScript. _Solamente con esto ya deberías prestarle toda la atención como desarrollador_. Te facilita a que con un solo lenguaje te muevas por el mundo de la JMV, la web y Node.js y dispositivos móviles, así como distintos sistemas operativos.

Piensa que es un lenguaje muy joven y que ha bebido de las mejores cosas que existen en los lenguajes actuales y que evoluciona rápidamente. Imagina que debes diseñar Java en el 2016. Ten por seguro que no lo harías como hace 30 años, pensando en la cantidad de programadores C/C++ que había y en hacer algo similar para ellos. Kotlin es una visión moderna de cómo debería ser un lenguaje de programación pensado para programar en los tiempos actuales.

Kotlin cubre todos los paradigmas, por lo que es ideal para enseñar: programación estructurada, modular, orientada a objetos y funcional. Además, como he dicho, es 100% interoperable con Java, por lo que puede usar todas sus clases y paquetes, lo que te da un abanico de librerías listas para usar y las de NPM por ejemplo si lo usas como lenguaje a compilar a JavaScript. Es Null-safe, lo que significa que no hay ningún problema con el manejo de null.

Desde mi punto de vista, el único problema de Kotlin, es que ha estado muy ligado a lenguaje solo para Android. Esta es una de sus características, pero no la única, y aunque importante, hay mucho más que lo hacen un lenguaje potente, elegante y muy efectivo para desarrollar todo tipo de proyectos. Poco a poco te iré desgranando sus ventajas como lenguaje y como herramienta docente y quizás pueda convencerte de que lo uses.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://wallpaperaccess.com/full/3098934.png"
  alt="Imagen">
</p>

## Kotlin a nivel docente
¿Por qué aprender a programar con Kotlin o por qué enseñarlo?

Posteriormente hablaré de todas sus bondades técnicas, pero como docente que soy, y profesor en desarrollo de software, te voy a contar mi punto de vista de por qué Kotlin es un lenguaje muy bueno para aprender/enseñar programación.

### Aprendizaje gradual
Kotlin te permite moverte siguiendo los distintos paradigmas existentes. Puedes usarlo como lenguaje para programación estructurada y modular, exprimir la programación orientada a objetos y asentar las bases de programación funcional.

Por ejemplo, cuando comenzamos un curso de programación usando Java. Un simple "Hola mundo!" tiene una carga conceptual enorme. ¿Qué hacemos? Podemos optar por pedirle al alumnado un acto de fe, obviar algunos conceptos, o intentar explicarlos hasta "donde se pueda". Esto puede dar problemas como que el alumnado no entienda el porqué de algunos conceptos, o que no entienda que es lo que hace el código, o que utilice por error o por defecto algunos elementos y adquiera vicios inapropiados, como el uso de static en todos lados.

Analicemos un "Hola mundo!" en Java:

```java
public class HolaMundo {
  public static void main(String[] args) {
    System.out.println("Hola mundo!");
  }
}
```
Como ves, nos aparecen varios conceptos como _public_ (visibilidad), _class_ (todo debe ser una clase sin haber comenzado los objetos), _static_ (métodos de clases, sin ver OO), _void_ (no devuelve nada), _main_ (es el punto de entrada de la aplicación), _String[] args_ (es un array de cadenas de texto), _System_ (es una clase de Java que nos permite escribir en pantalla), _out_ (indica la salida) _println_ (es un método de la clase System que imprime en pantalla).

No voy a entrar si queremos hacer el típico programa que pida un dato o inicie un diálogo por consola y aparezca la clase _Scanner_ y con ello la locura de porqué se hace así. Demasiada carga para tan poca cosa.

Repitamos el mismo ejemplo con Kotlin:

```kotlin
fun main() {
  println("Hola mundo!")
}
```

Kotlin está muy bien diseñado y te permite una curva de aprendizaje gradual, donde utilizas lo que necesitas cuando lo necesitas, evitando escribir o utilizar conceptos que no necesitas y pueden ser más complicados de entender cuando uno comienza a programar y usando la sintaxis justa en el momento justo, y no siendo tan verboso como Java.

A partir de aquí puedes ir aprendiendo y dominando nuevos conceptos desde tipos, funciones, clases, objetos, colecciones, funciones lambda, etc.

### Sigues usando el ecosistema de Java
Todas tus clases, librerías y programas existentes en Java son 100% compatibles con Kotlin. Es decir, si tu programa necesita una clase de Java, puedes usarla en Kotlin. Puedes hacer uso de Maven para instalar librerías de Java en tu proyecto incluso de Maven/Gradle para gestionarlo.

### Di Hola a JS
Además, Kotlin te permite ser compilado o a JavaScript. Si necesitas aplicaciones que hagan uso de JavaScript, puedes usar Kotlin y luego convertirte a JavaScript. Además, te permite no solo aplicaciones web, si no en Node.js, o usar frameworks como Express, React, etc. Tienes NPM a tu disposición para cualquier librería.

### Lenguaje puente
Kotlin te permite saltar de Java a JavaScript, con una sintaxis a medio camino entre el primero y TypeScript. Aprendiendo Kotlin podrás migrar fácilmente a estos dós últimos.

::: tip <span class="iconify" data-icon="cib:kotlin"></span> Kotlin y docencia
  - Fácil de aprender
  - Multiparadigma y multiplataforma
  - JVM, Node.js, web, Maven Central y NPM
  - Con kotlin puedes aprender otros lenguajes facilitando el salto.
:::

## Elementos de Kotlin
A continuación, voy a resumirte elementos de Kotlin que pueden interesarte

### Programación estructurada y modular
- Kotlin es un lenguaje orientado a objetos con tipado estático. Aun así define unos [tipos como primitivos](https://kotlinlang.org/docs/basic-types.html) para facilitarnos su uso. Tambien tenemos cadenas y Arrays. Ideales para comenzar a programar. De hecho, tiene los [String Templetes](https://kotlinlang.org/docs/basic-types.html#string-templates)] vienen fantásticos para no perderte concatenando elementos.
- El [control de flujo](https://kotlinlang.org/docs/control-flow.html) se puede realizar con elementos conocidos como condicionales, bucles definidos e indefinidos. Destacamos el when, que es condicional múltiple supervitaminado, y el for, que al moverse con rangos nos facilita no usar comparaciones tediosas que pueden provocar errores.
- Las [funciones](https://kotlinlang.org/docs/functions.html), son otro punto a favor. Podemos definir funciones con un número variable de parámetros. Además podemos definir funciones en línea, de extensión (de lo mejor que podrás encontrarte) y sobre carga de operadores de la manera más sencilla.
- Seguridad ante Nulos: Null es un problema y desde su concepción se ha tratado de evitar de distintas maneras. Es aquí donde Kotlin tiene uno de sus puntos fuertes gracias a su facilidad para detectarlos, protegerse ante ellos y hacer instrucciones que realicen alguna acción en caso de no serlo, si recurrir a complicadas comparaciones u objetos Optionals.

### Programación orientada a objetos
- Kotlin trabaja con clases y objetos [Clases](https://kotlinlang.org/docs/classes.html). Podemos tener constructores en la misma definición de clase e inicializadores. Para instanciar no necesitamos _new_.
- La [herencia](https://kotlinlang.org/docs/inheritance.html) es simple para clases, pero multiple para interfaces. Los métodos y variables de clase, se incluyen en los objetos de tipo "companion", lo que los dota de esa característica especial que tienen un elemento de clase.
- Las [propiedades](https://kotlinlang.org/docs/properties.html) y los getter&setter ya van ya de serie y depende de su visibilidad y se se definen como _var_ o _val_ (variables o constantes). De esta manera podemos implementar el patrón Builder de una manera muy simple.
- Clases específicas: gracias a notaciones como [Data](https://kotlinlang.org/docs/data-classes.html) podemos crear clases para solo almacenar datos (típicas POJO en Java) en una sola línea. Con [Object](https://kotlinlang.org/docs/object-declarations.html) podemos crear clases siguiendo el patrón Singleton. Con todo lo indicado quizás no necesitemos recurrir a Lombok más.

**Kotlin**
```kotlin
data class Person(var name: String, var surname: String, var id: String)
```
**Java**
```java
public class Person {
  private String name;
  private String surname;
  private String id;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getSurname() {
    return surname;
  }

  public void setSurname(String surname) {
    this.surname = surname;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  @Override public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Person person = (Person) o;
    if (name != null ? !name.equals(person.name) : person.name != null) return false;
    if (surname != null ? !surname.equals(person.surname) : person.surname != null)
      return false;
    return id != null ? id.equals(person.id) : person.id == null;
  }

  @Override public int hashCode() {
    int result = name != null ? name.hashCode() : 0;
    result = 31 * result + (surname != null ? surname.hashCode() : 0);
    result = 31 * result + (id != null ? id.hashCode() : 0);
    return result;
  }

  @Override public String toString() {
    return "Person{" +
    "name='" + name + ''' +
    ", surname='" + surname + ''' +
    ", id='" + id + ''' +
    '}';
  }
}
```

- [Genéricos](https://kotlinlang.org/docs/generics.html), con ello podemos dotar de toda la potencia de la programación genérica, pensando en qué queremos hacer y no con qué tipo.

### Colecciones
Vale, podría ir en el apartado anterior. A parte de poder usar todas las de Java, Kotlin tiene una serie de colecciones que puedes usar con una característica muy importante, poder trabajar con la mutabilidad e inmutabilidad.

De esta manera podemos trabajar, por ejemplo, con listas constantes de solo lectura. Una gran ventaja para no meter la pata. Es decir, una lista de solo lectura, que sería un dolor de cabeza en Java, aquí la tienes de serie. Por supuesto todas trabaja con estructuras funcionales si se da el caso, sin recurrir a los streams, como parche o transformando los objetos.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://kotlinlang.org/docs/images/collections-diagram.png"
  alt="Imagen">
</p>

### Programación funcional
Kotlin es un lenguaje que se mueve muy bien con la programación funcional y las [lambdas](https://kotlinlang.org/docs/lambdas.html) pues fue concebido para ello, y no siendo un añadido como en otros lenguajes. Por lo que todo resulta muy natural y sencillo, pues bebe de su "primo" Scala.

A partir de aquí, tenemos una serie de operaciones usando este paradigma para el manejo de [colecciones](https://kotlinlang.org/docs/collection-operations.html). Operaciones para realizar transformaciones, filtrado, adiciones y sustracciones, agrupamiento, recolección de datos, ordenamiento, o funciones de agregación. Lo que necesites y más.

### Programación concurrente
Kotlin puede hacer uso de Hilos, Callbacks y Futures (promesas de Java) para hacer uso de la programación concurrente y mecanismos de sincronización conocidos (semáforos, monitores, synchroniozed, etc). Pero su punto fuerte es el uso de las [Corrutinas](https://kotlinlang.org/docs/coroutines-guide.html). Una corrutina (definidas tambien como un hilo liviano y optimizado) es un conjunto de sentencias que realizan una tarea específica, con la capacidad suspender o resumir su ejecución sin bloquear un hilo. Esto permite que tengas diferentes corrutinas cooperando entre ellas, suspendiéndose y resumiéndose en puntos especificados por ti o por Kotlin. Con ellas podemos ejecutar código en paralelo y/o asíncrono de una forma muy sencilla y óptima. No significa que exista un hilo por cada corrutina, al contrario, puedes ejecutar varias en un solo.

```kotlin
suspend fun fetchTwoDocs() =
  coroutineScope {
    val deferredOne = async { fetchDoc(1) }
    val deferredTwo = async { fetchDoc(2) }
    deferredOne.await()
    deferredTwo.await()
}
```

Con ellas podrás crear tu propio procesamiento concurrente optimizando los recursos del sistema. Este comportamiento de las corrutinas en Kotlin te permite:

- Reducir recursos del sistema al evitar la creación de grandes cantidades de hilos
- Facilitar el retorno de datos de una tarea asíncrona
- Facilitar el intercambio de datos entre tareas asíncronas
<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/max/2000/1*I3OMp4jIytzR7GKpRkEiAA.png"
  alt="Imagen">
</p>

### Programación de servicios
Kotlin te permite trabajar con el [Back-end](https://kotlinlang.org/docs/server-overview.html#deploying-kotlin-server-side-applications) de tu aplicación de manera muy efectiva. Puedes usar [Spring](https://spring.io/guides/tutorials/spring-boot-kotlin/) sin ningún problema y con una gran cantidad de funcionalidades. Si tu excusa para no usar Kotlin en back era Spring, ya se te ha acabado. Con ello podrás hacer por ejemplo tu API REST.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://raw.githubusercontent.com/spring-guides/tut-spring-boot-kotlin/master/images/initializr.png"
  alt="Imagen">
</p>

Pero quizás quieras crear servicios web de una manera asíncrona y sencillas. Kotlin pone a tu disposición [Ktor](https://ktor.io/) para ello. No necesitas Spring o Express para hacer un API REST o GraphQL de manera rápida.

Por otro lado, puedes usar [JPA](https://www.baeldung.com/kotlin/jpa) sobre Hibernate o Spring Data para trabajar en tu acceso a datos a cualquier tipo de base de datos. También podemos usar JABX para XML, o GSON o Jackson para JSON, Java NIO2, o las propias funciones de Kotlin para ficheros.

¿Quieres más? Necesitas moverte con [Node.js](https://www.baeldung.com/kotlin/javascript). ¿Una back sobre Express?, ¿librerías de NPM. Con Kotlin puedes hacerlo. Puedes crear tus aplicaciones en Node.js

### Desarrollo de clientes
Con Kotlin puedes crear el cliente que quieras o como quieras. JVM: Puedes usar JavaFX o cualquier paquete de Java para implementar tu cliente. JavaScript/Web: Puedes usar Kotlin para crear tu cliente o aplicación web como lenguaje tipado. Puedes trabajar en [Vanilla JavaScript](https://kotlinlang.org/docs/js-project-setup.html) o con frameworks tan conocidos como [React](https://kotlinlang.org/docs/js-get-started.html).

<p style="text-align:center;">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://i1.wp.com/hipertextual.com/wp-content/uploads/2019/06/hipertextual-kotlin-lenguaje-oficial-android-que-quiere-comerse-java-2019922347.jpg"
  alt="Imagen">
</p>

Por supuesto puedes trabajar para móviles, todos conocemos su potencial sobre [Android](https://developer.android.com/kotlin). Pero ademas nos permite realizar desarrollos para [iOS](https://kotlinlang.org/lp/mobile/).

Pero el gran paso es poder hacerlo todo y en todas las plataformas con Kotlin es [Compose](https://www.jetbrains.com/lp/compose-mpp/), o como crear interfaces de usuario de manera declarativa y con ello poder crear nuestras aplicaciones para Windows, Mac, Linux, Android, iOS, Web, etc.

<p style="text-align:center;">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://raw.githubusercontent.com/JetBrains/compose-jb/master/artwork/readme/apps.png"
  alt="Imagen">
</p>

### Testing
Obviamente para nuestros [tests](https://kotlinlang.org/docs/mpp-run-tests.html) podemos hacer uso de JUnit o Mockito. Pero además tenemos nuestras de [librerías propias](https://kotlinlang.org/api/latest/kotlin.test/) para ello.

### Desarrollo nativo
Si tu problema es el escepticismo del rendimiento sobre JVM, también puedes [desarrollar nativamente](https://kotlinlang.org/docs/native-get-started.html#count-the-unique-letters-in-your-name) con iteroperabiliad con [C](https://kotlinlang.org/docs/native-c-interop.html) o[ Objective C](https://kotlinlang.org/docs/native-objc-interop.html).

### Ciencia de los datos
Kotlin puede ser una gran alternativa para la [ciencia de los datos](https://kotlinlang.org/docs/data-science-overview.html). Puedes usar sus librerías e integración por ejemplo con terceros.

### DSL y Kotlin
Kotlin puede ser usado como [lenguaje de dominio específico](https://www.jetbrains.com/es-es/mps/concepts/domain-specific-languages/) para [resolver determinadas tareas](https://proandroiddev.com/writing-dsls-in-kotlin-part-1-7f5d2193f277) de una[ manera rápida y muy legible](https://medium.com/kotlin-en-android/kotlin-dsl-introduccion-f112557f5662).

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://miro.medium.com/max/7680/1*noONs72PvMEkwVfQbbG75Q.png"
  alt="Imagen">
</p>

### Patrones de Diseño
Kotlin puede ser usado sobre [patrones de diseño](https://github.com/dbacinski/Design-Patterns-In-Kotlin) y aprovechar su sintaxis para hacerlos más asequibles y fáciles de implementar, ya hemos hablado de cómo conseguir por ejemplo Sigleton con la notación object. A continuación mostramos un simple ejemplo para el patrón Builder.

```kotlin
class FoodOrder private constructor(
  val bread: String?,
  val condiments: String?,
  val meat: String?,
  val fish: String?) {

  data class Builder(
    var bread: String? = null,
    var condiments: String? = null,
    var meat: String? = null,
    var fish: String? = null) {

      fun bread(bread: String) = apply { this.bread = bread }
      fun condiments(condiments: String) = apply { this.condiments = condiments }
      fun meat(meat: String) = apply { this.meat = meat }
      fun fish(fish: String) = apply { this.fish = fish }
      fun build() = FoodOrder(bread, condiments, meat, fish)
    }
}
```

### Shell y Scripting
Quizás te guste Node.js y su consola. Si ejecutamos el compilador sin parámetros entraremos en la [consola de Kotlin](https://kotlinlang.org/docs/command-line.html#run-the-repl), donde podemos ejecutar código de Kotlin y ver sus resultados.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://kotlinlang.org/docs/images/kotlin-shell.png"
  alt="Imagen">
</p>

Además, podemos usar Kotlin como lenguaje de scripting, con ficheros .kts. Un ejemplo:

Ejemplo de script llamado

```kotlin
import java.io.File
// Toma el path pasado en -d, o el path actual
val path = if (args.contains("-d")) args[1 + args.indexOf("-d")]
else "."
val folders = File(path).listFiles { file -> file.isDirectory() }
folders?.forEach { folder -> println(folder) }
```

Podemos llamarlo como

```shell
$ kotlinc -script list_folders.kts -- -d <path_folder>
```

## <span class="iconify" data-icon="cib:kotlin"></span> Kotlin vs <span class="iconify" data-icon="cib:java"></span> Java

No se trata de una guerra, si no que cad acual elija según sus intereses programando.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.spaceotechnologies.com/wp-content/uploads/2019/09/Java-Vs-Kotlin.png"
  alt="Imagen">
</p>

## Aprende Kotlin

**Cursos y documentación**

<span class="iconify" data-icon="bx:bxs-file-doc"></span> [Documentación](https://kotlinlang.org/docs/home.html)

<span class="iconify" data-icon="bx:bxs-file-doc"></span> [Ejemplos](https://play.kotlinlang.org/byExample/overview)

<span class="iconify" data-icon="bx:bxs-file-doc"></span> [Koans](https://play.kotlinlang.org/koans/overview)

<span class="iconify" data-icon="bx:bxs-file-doc"></span> [JetBrains Coursea](https://www.coursera.org/learn/kotlin-for-java-developers).

<span class="iconify" data-icon="bx:bxs-file-doc"></span> [JetBrains Academy](https://hyperskill.org/tracks).

**En Youtube**, mis preferidos y siempre recomendados son:

<span class="iconify" data-icon="akar-icons:youtube-fill"></span> Antonio Leiva [DevExperto](https://www.youtube.com/c/DevExperto).

<span class="iconify" data-icon="akar-icons:youtube-fill"></span> Brais Moure [MoureDev](https://www.youtube.com/c/MouredevApps).

## Conclusión

Kotlin ha supuesto un gran avance en el ecosistema de la JVM, de hecho, muchos de los avances de Java desde la versión 8 vienen de "inspirarse" en Kotlin. No voy a negar que coincido con las palabras de un desarrollador del ecosistema de Spring: _"Lo mejor que le puede pasar a un desarrollador de Java, es codificar en Kotlin"_. También espero haber conseguido que dejes ver a Kotlin como el lenguaje que solo sirve para programar en Android y lo tengas en cuenta para más tipos de desarrollos.

Uno de los objetivos que tengo pendientes, y quiero realizar, es mostrar como muchas partes del temario de DAM y DAW se pueden desarrollar con Kotlin. Para ello realizaré apuntes y prácticas tipo. Los compartiré en mi repositorio y web. De hecho, como ves cubre todo el temario de ambos ciclos y más. Deseo que tú, como alumno o docente te animes a usar Kotlin, no solo para Android y con esta entrada hayas descubierto cómo este lenguaje te puede aportar experiencias muy positivas para tus desarrollos. Y si podemos compartirlo, mucho mejor.

En mi [repositorio](https://github.com/joseluisgs) tienes ya algunos proyectos tipo. Si necesitas algo más no dudes en contactar conmigo.

<p style="text-align:center;">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.adesso-mobile.de/wp-content/uploads/2021/02/kotlin-einfu%CC%88hrung.jpg"
  alt="Imagen">
</p>
