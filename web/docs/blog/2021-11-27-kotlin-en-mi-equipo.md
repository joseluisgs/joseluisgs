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
Kotlin está muy bien diseñado y te permite una curva de aprendizaje gradual, donde utilizas lo que necesitas cuando lo necesitas, evitando escribir o utilizar conceptos que no necesitas y pueden ser más complicados de entender cuando uno comienza a programar.

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
- Las [funciones](https://kotlinlang.org/docs/functions.html), son otro punto a favor. Podemos definir funciones con un número variable de parámetros. Además podemos definir funciones en linea, de extensión 

## Conclusión
Uno de los objetivos que tengo pendientes es mostrar como muchas partes del temario de DAM y DAW se pueden desarrollar con Kotlin con apuntes y prácticas tipo de distintos módulos y compartirlo. De hecho, como ves cubre todo y más. Espero que tú, como alumno o docente te animes a usar Kotlin, no solo para Android y con esta entrada hayas descubierto cómo este lenguaje te puede aportar experiencias muy positivas para tus desarrollos. Y si podemos compartirlo mejor.

En mi [repositorio](https://github.com/joseluisgs) tienes ya algunos proyectos tipo. Si necesitas algo más no dudes en contactar conmigo.






