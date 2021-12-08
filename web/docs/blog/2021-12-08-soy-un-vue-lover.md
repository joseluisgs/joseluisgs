---
title: Soy un Vue Lover
description: 'Libertad y potencia en mi Framework preferido para Front-end'
date: '2021-12-08'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Profesional
  - Tecnologías
  - Kotlin

publish: true
image: 'https://mindwrackindia.com/wp-content/uploads/2018/06/vuesplash.3e416f3.png'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan
# sticky: 1
---

Confieso, soy un Vue Lover y estoy orgulloso de serlo. Hace poco os hablé como [Kotlin siempre estaba en mi equipo](2021-11-28-kotlin-en-mi-equipo.md). Hoy me toca una de las entradas que más tiempo quería escribir. Aunque lo he ido adelantando a lo largo de esta web. Me canta Vue.js y poco a poco te voy a enseñar por qué es parte fundamental de mi [stack como desarrollador y profesor](2021-11-27-mi-stack.md).

<!-- more -->

## ¿Qué es Vue.js?
[Vue.js](https://vuejs.org/) es un framework progresivo de JavaScript de [código abierto](https://github.com/vuejs/vue) para la construcción de aplicaciones web. Fue creado por [Evan You](https://evanyou.me/), y es mantenido por él y por el resto del equipo de Vue Core. Vue.js te permite trabajar con plantillas, usar reactividad entus aplicaciones web, enrutamiento y hasta stores de datos. No voy a explicarte todo lo que se puede hacer de Vue.js, si no porqué me aporta mucho más que el resto de frameworks.

Si quieres conocer un poco más de Vue.js debes mirar este documental.

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/OrxmtDw4pVI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</p>

## ¿Por qué Vue.js?
Esta es la gran pregunta. Siempre me he decantado más por el Back-end que por el Front-end. Si trabajaba en clientes generalmente era en móvil. Veía mucho código en JS desorganizado, usando jQuery que lo alejaba de la lógica de como hacer aplicaciones grandes donde se procesa datos. 

A la hora de querer profundizar en frameworks del lado del cliente tuve la duda entre elegir Angular, React o Vue. Creo que casi todo el mundo ha pasado por eso. Debo recordar que desarrollo por gusto y particularmente y no me muevo por intereses empresariales. Además mi trabajo principal es docencia.

Angular lo rechacé si no por los "bailes" que hace Google. Lo he sufrido en móvil. React no me gusta como trabaja y de nuevo me veo a expensas de los intereses de Facebook. Vue.js me parecía una alternativa real, potente y en medio de ambas. Capaz de coger lo mejor de los dos. Es un proyecto libre y escuchan a la comunidad y están atentos a sus necesidades.

Para mi, Vue.js, se adapta muy bien a mi forma de desarrollar software. Desarrollo  basado en la descomposición de componentes que interactúan entre ellos. Puedo usar JavaScript o TypeScript cuando lo desee y sobre todo me ha encantado su ecosistema.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;"
  src="https://wallpapercave.com/wp/wp7134662.jpg"
  alt="Imagen">
</p>

## Ecosistema de Vue.js
Aquí es donde viene el punto fuerte. Vue.js no solo te permite hacer SPAs (Single Page Apps), tiene un ecosistema y una comunidad que lo hace bastante interesante y atrayente para mi. No sólo se trata de hacer componentes que se comunican con eventos y propiedades, si no de ofrecer una serie de herramientas, utilidades y extras que te hacen más fácil el trabajo.

### Vue CLI y Vite
Estos CLI te ofrecen toda la potencia para configurar y comenzar tus proyectos en Vue.js. 
[Vue CLI](https://cli.vuejs.org/) te ofrece todas las opciones para hacer tu proyecto una realidad a nivel de configuración. [Vite](https://vitejs.dev/) es toda una revolución. De nuevo Evan lo ha vuelto hacer ofreciéndonos una herramienta que realmente potencia tu desarrollo.

### DevTools
[Vue DevTools](https://devtools.vuejs.org/) es una extensión para Chrome que te ofrece la posibilidad de poder analizar y depurar tu aplicación Vue. Con ella puedes analizar los componentes, sus eventos y propiedades. También puedes analizar el enrutamiento y los estados de tu store.

### Vue Router
El sistema de [enrutamiento de Vue](https://router.vuejs.org/), es uno de los que más me gustan. Eficaz y muy sencillo. Es modular, con rutas dinámicas, query, efectos de transición y mucho más. Sin duda no parecerá que estés en una SPA cuando navegues en tu navegador.

### Vuex
El sistema de [estado de Vue](https://vuex.vuejs.org/) es realmente interesante. Se podría decir que se basa en el patrón Flux o Redux. Nos permite manejar el estado entre confirmaciones y mutaciones. Además, es compatible con las DevTools.

## Mi preferencias en Vue.js
No solo de los proyectos oficiales vive el desarrollador de Vue.js. Y entre la multitud de proyectos de su ecosistema realizados por la comunidad me gusta destacar los que más uso.

### Nux.js
[Nuxt.js](https://nuxtjs.org/)  es un framework que se utiliza para el desarrollo de aplicaciones web. Podemos utilizar nuxtJS para crear aplicacion estáticas(static page), de una sola página (SPA) o de servidor (SSR). NuxtJS es un framework que trabaja sobre VueJS, esto quiere decir que tenemos todo lo bueno de VueJS pero contando ya con una organización y configuración establecida desde el principio, que ayuda al desarrollador a enfocarse 100% en el desarrollo desde el principio.

### VuePress
Es uno de mis proyectos preferidos. Esta web esta desarrollada con [VuePress](https://vuepress.vuejs.org/). Nació porque Evan y su equipo necesitaban un sistema para documentar los proyectos y hacer blogs, sin la necesidad de montar grandes aplicaciones como puede pasar en Nuxt.js. Algo que te permita con Markdwon escribir documentación. Además se adapta muy bien a mi filosofía de trabajo jamstack.

### Pinia
No digas que es una simple store, es la STORE. [Pinia](https://pinia.esm.dev/) es uno de los proyectos que más feliz me ha hecho y más tiempo y dolores de cabeza me ha quitado. Uno de los problemas que le veo a Vuex es su rigidez y pasos extras para trabajar con tipos incluso en Vue3. Y mira que es flexible. Pinia, nos ofrece una visión de cómo debe ser una store moderna, efectiva, intuitiva, extensible y muy ligera. Es compatible con DevTools. He felicitado a [Eduardo](https://twitter.com/posva) por su excelente trabajo y recomiendo utilizar Pinia en todos los proyectos que puedas. De hecho marcará los pasos del próximo Vuex 5.

### Oruga
¿Componentes para Vue a los que les puedes aplicar cualquier estilo CSS? Eso es [Oruga](https://oruga.io/). Me canta [Bulma](https://bulma.io/) y me encanta [Buefy](https://buefy.org/). Muchos de mis proyectos parte de esa base. Pero es verdad que a veces buscas algo más, o simplemente quieres compatibilidad con Vue3. Oruga está creado por el equipo de Buefy, con la idea de no depender de un CSS si no de usar lo que consideres más oportuno en tu proyecto. [Walter](https://twitter.com/walter_tommasi) ha hecho un trabajo fantástico. Y en su página web tienes un ejemplo de como usar [distintos estilos para los mismos componentes](https://oruga.io/documentation/#base-style). 

### Quasar
Uso [Quasar](https://quasar.dev/) cuando quiero una aplicación para todo. Es verdad que puedo usar Electrón para Vue para mis aplicaciones de escritorio, o Tecnologías como NativeScript o Ionic para crear aplicaciones móviles. Quasar me ayuda a crear todo lo que quiera fácilmente. Con Quasar puedes hacer casi de todo:
- SPAs (Single Page App)
- SSR (Server-side Rendered App) (con cliente PWA)
- PWAs (Progressive Web App)
- BEX (Extensiones para Explorador)
- Mobile Apps (Android, iOS, …) con Cordova or Capacitor
- Multi-platform Desktop Apps (usando Electron)

<p style="text-align:center;">
  <img loading="lazy" style="border-radius: 0.25rem;"
  src="https://www.dreams.es/uploads/2020/vue-components.png"
  alt="Imagen">
</p>


## Aprende Vue.js

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


g
https://www.monterail.com/hubfs/vue-optimized.png
https://www.dreams.es/uploads/2020/vue-components.png