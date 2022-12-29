---
title: TDD en JavaScript II. Usando Cypress
description: 'Aprendiendo las bases del TDD en JS con Cypress'
date: '2021-08-09'
# sidebar: 'auto'
subSidebar: true
categories:
  - Blog
  - Proyectos
tags:
  - Docencia
  - Tecnologías
  - JavaScript
  - TDD
  - Cypress
publish: true
image: 'https://i.ytimg.com/vi/pJ349YntoIs/maxresdefault.jpg'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
Como ya comenzamos en [anteriores publicaciones](2021-08-06.TDD-javascript-I.md) vamos a seguir con una serie de apuntes y mini proyectos para iniciarse en TDD y BDD para realizar pruebas unitarias, de integración o E2E. En esta segunda parte nos centraremos en el uso de Cypress, para usarla en los test E2E, usándola en todo tipo de aplicaciones web, remarcando, por supuesto su uso en Vue.js.
<!-- more -->

## Introducción al Testing E2E
Los Tests E2E (End to End) simulan el comportamiento de un usuario real. Prueban toda la aplicación de principio a fin, cubriendo así secciones que las pruebas unitarias y las pruebas de integración no cubren.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://blog.irontec.com/wp-content/uploads/2019/01/test-pyramid-768x367.jpg" 
  alt="Imagen">
</p>

Aunque la pirámide de Cohn aconseja realizar más tests unitarios y de integración que tests E2E, ya que estos últimos pueden llegar a ser más frágiles y lentos, sabemos que son pruebas con mayor integración entre todas las partes de la aplicación y ejecutarán una gran parte del código de la aplicación.

El objetivo de estas pruebas es el mismo que cualquier otro tipo de prueba: la detección de errores. Pero la perspectiva E2E nos permite dar un paso más y, aparte de errores con una visibilidad más o menos inmediata, podremos determinar la existencia de indefiniciones funcionales o errores ocultos en base a las historias de usuarios.

### Objetivos 
En las pruebas E2E detectamos principalmente:

- Errores en la definición de la comunicación de dos sistemas: Un sistema envía unos parámetros, pero el sistema con el que se comunica espera recibir otros y se genera un error.
- Ausencia de un sistema: No tenemos la versión actualizada de un sistema que forma parte del flujo de negocio a probar, o no se ha tenido en cuenta que ese sistema debe participar o debe modificarse.
- Error en la definición del funcionamiento del flujo funcional: Todos los componentes y sistemas funcionan ‘ok’, hemos ejecutado la prueba de principio a fin sin errores, pero el resultado final es incoherente con el esperado. Esta es la gran potencia de las pruebas E2E, la detección de errores de definición y la solución suele pasar por una redefinición del proceso.
- Que las historias de usuario se cumplen.

Debido a la importancia del usuario, es importante que estos pruebas se realicen teniendo en cuenta las historias de usuario para comprobar que los resultados tras la interacción cumplen los criterios de aceptación.

## E2E en BDD/TDD
En definitiva definimos funcionalidades y escenarios de uso, que desarrollamos en distintos componentes y funciones que testeamos (test unitarios), integramos (integración) y finalmente comprobamos si todo el flujo sigue el escenario indicado desde el punto de vista del usuario. 

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://blog.softtek.com/hs-fs/hubfs/blogs/innovationlabs/bdd.png?width=832&name=bdd.png" 
  alt="Imagen">
</p>

### Historias de usuario
Una historia de usuario es una explicación general e informal de una función de software escrita desde la perspectiva del usuario final. Su propósito es articular cómo proporcionará una función de software valor al cliente.

Las historias de usuario nos muestran los requisitos a conseguir, la interacción a realizar, los resultados esperados y cómo se realizará la aceptación de las mismas es por ello que son nuestro principal "contrato" para nuestros test unitarios y sobre todo nuestros test E2".

#### Beneficios
Las historias de usuario tienen varios beneficios clave:
- Las historias centran la atención en el usuario. Una lista de tareas pendientes mantiene al equipo centrado en tareas que deben completarse, pero un conjunto de historias lo mantiene centrado en solucionar problemas para usuarios reales.
- Las historias permiten la colaboración. Con el objetivo definido, el equipo puede colaborar para decidir cómo ofrecer un mejor servicio al usuario y cumplir con dicho objetivo.
- Las historias impulsan soluciones creativas. Las historias fomentan que el equipo piense de forma crítica y creativa sobre cómo lograr mejor un objetivo.
- Las historias motivan. Con cada historia el equipo de desarrollo disfruta de un pequeño reto y una pequeña victoria, lo que aumenta la motivación.
- Son las base de nuestros test y nos aseguran que una vez cumplidas se cumple los requisitos del software y sus criterios de aceptación.

#### ¿Cómo usarlas?
- Describe tareas o subtareas: decide qué pasos específicos deben completarse y quién es responsable de cada uno de ellos.
- Perfiles de usuario: ¿para quién? Si hay varios usuarios finales, considera crear varias historias.
- Pasos ordenados: escribe una historia para cada paso en un proceso más grande.
- Escucha el feedback: habla con los usuarios y capta sus problemas o necesidades en lo que dicen. No es necesario tener que estar adivinando las historias cuando puedes obtenerlas de tus clientes.
- Tiempo: el tiempo es un tema delicado. Muchos equipos de desarrollo evitan hablar sobre el tiempo, y en su lugar confían en sus marcos de trabajo de estimación. Dado que las historias deberían completarse en un sprint, aquellas que puedan necesitar semanas o meses deberían dividirse en historias más pequeñas o considerarse un epic independiente.

#### Plantilla y ejemplos de historias de usuario
Las historias de usuario suelen expresarse con una frase simple con la siguiente estructura:

“Como [perfil], [quiero] [para].”

Desglosemos esta estructura:

- “Como [perfil]”: ¿para quién desarrollamos esto? No solo buscamos un puesto, buscamos el perfil de la persona. Max. Nuestro equipo debería comprender quién es Max. Con suerte hemos entrevistado a muchos Max. Comprendemos cómo trabaja esa persona, cómo piensa y cómo se siente. Sentimos empatía por Max.
- “Quiere”: aquí describimos su intención, no las funciones que usan. ¿Qué es lo que están intentando lograr realmente? Esta descripción debería realizarse con independencia de las implementaciones; si describes algún elemento de la IU y no el objetivo del usuario, estás cometiendo un error.
- “Para”: ¿cómo encaja su deseo inmediato de hacer algo en la perspectiva general? ¿Cuál es el beneficio general que intentan lograr? ¿Cuál es el gran problema que debe resolverse?

Por ejemplo, las historias de usuario pueden tener este aspecto:
- Como Pepe, quiero invitar a mis amigos, para que podamos disfrutar de este servicio juntos.
- Como Ana, quiero organizar mi trabajo, para poder sentir que tengo un mayor control.
- Como gestor, quiero poder comprender el progreso de mis compañeros, para poder informar sobre nuestros éxitos y fallos.

## CYPRESS
[Cypress](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell) es una de las muchas posibilidades que tenemos para testear nuestro código o proyecto en JavaScript/HTML para realizar pruebas E2E de manera automatizada con mucha potencia y nos permite muchas posibilidades para analizar que nuestro que interaccionamos con nuestro código resolviendo las [historias de usuario](https://www.atlassian.com/es/agile/project-management/user-stories) a realizar. Debo remarcar que Cypres nos permite hacer pruebas de integración y de componentes en sus últimas versiones.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://buddy.works/blog/thumbnails/cypress-cover.png" 
  alt="Imagen">
</p>

En cualquier caso, las bases de estos ejemplos te servirá para las distintas alternativas existentes.

Recuerda que Cypress.io es una herramienta de testeo de front-end de código abierto construida para la web moderna. Este framework “todo en uno” incluye librerías de aserciones, mocks y pruebas end-to-end automáticas sin utilizar Selenium. Como dice en su web: "Cypress prueba todo lo que se ejecuta en un navegador web”. Esto no implica que te saltes los test unitarios 😉

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://i.ytimg.com/vi/woI490HRM34/maxresdefault.jpg" 
  alt="Imagen">
</p>

### Otras alternativas
Existen muchas alternativas. En este tutorial me centro en Cypress, pero como he dicho hay varias ya sea para test unitarios, BDD, TDD, BDD o E2E. Te recomiendo [este artículo](https://medium.com/welldone-software/an-overview-of-javascript-testing-7ce7298b9870) para tener una visión al respecto.

::: tip  <i class="iconfont reco-github"></i> Proyectos y repositorios
Esta entrada toma como punto de partida el siguiente proyecto: 
-  [Testing JS con Cypress](https://github.com/joseluisgs/testing-js-cypress)
-  [Vue Weather Testing](https://github.com/joseluisgs/vue-weather-testing)
:::


### Instalación
Es importante seguir la [documentación oficial](https://jestjs.io/docs/es-ES/getting-started). 

```bash
npm install cypress --save-dev
```

### Otras configuraciones
Otras configuraciones realizadas las tienes en [Package.json](./package.json)

### Ejecutando Cypress
Debes tener un directorio llamado tests, y en ellos ficheros .spec.test.
```bash
./node_modules/.bin/cypress open
```

```bash
npm run cy:open
```

### La carpeta Cypress
- Fixtures: Datos estáticos que pueden ser utilizados para los tests.
- Integration: Lugar donde colocaremos los tests. Por defecto contiene una carpeta de tests de ejemplo.
- Plugins: Permiten acceder, modificar o ampliar el comportamiento interno de Cypress.
- Support: Lugar para colocar comportamientos reutilizables, como comandos personalizados o anulaciones globales, que estarán disponibles para todos los tests.

### Asercciones
Puedes consultarlas [aquí](https://docs.cypress.io/guides/references/assertions.html). Pero se basan principalmente en [Chai](https://docs.cypress.io/guides/references/assertions.html#Chai) y [Sinon](https://docs.cypress.io/guides/references/assertions.html#Sinon-Chai).

### Algunos métodos útiles de Cypress
- visit: redirige a Chrome a la url que se le pasa por parámetro.
- get: obtiene un elemento por el identificador que le pasemos, para realizar acciones sobre él. Como hemos explicado en el apartado anterior, todos los identificadores que pasemos será obtenidos del CSS.
- children: nos permite obtener un elemento que pasamos por parámetro, que desciende del elemento que hemos obtenido con la función get.
- click: realiza un click sobre el elemento que hayamos obtenido con la función get.
- type: escribe sobre el elemento obtenido un texto que pasamos por parámetro. Por ejemplo, usamos esta función para elementos input donde queremos introducir un texto.
submit: permite enviar el contenido del formulario.
- contains: para indicar el contenido del elemento.
- have.attr: para indicar que el elemento tiene un atributo en concreto.
- include: para indicar que el atributo de un elemento incluye un texto.

A todas las funciones se les puede pasar un json con el elemento timeout. Este elemento nos permite incluir un tiempo que nos ayudará a esperar a que el elemento termine de cargar en la página.

### Ejecutando los Tests
El comando run ejecutará todos tests que tengamos dentro de la carpeta Integration.
```bash
./node_modules/.bin/cypress run
```

```bash
npm run cy:run
```

#### Si el test falla
Si nuestro test fallase, podríamos ejecutarlo en modo headed para poder depurarlo más fácilmente.
```bash
./node_modules/.bin/cypress run --headed
```

```bash
npm run cy:run --headed
```

### Buenas pŕacticas
Es importante que tengamos [buenas prácticas](https://docs.cypress.io/guides/references/best-practices.html) para testear sin problemas. Entre ellas el manejo de selectores óptimos para nuestros elementos de la web, como pueden ser selectores de web del tipo con selectores del tipo id como son: data-testid (mi preferido para usarlo también con JEST) o data-cy.

### Ejemplos
En a carpeta Integrations/examples tienes muchos ejemplos para aprender todo de como usarlo. [Aquí] también (https://github.com/bhaidar/testing-workshop-cypress) puede encontrar más información de como usarlo.


## Testeando un Framework: Vue.js
Nos centraremos en ejecutar el comando test:e2e para ejecutar nuestros test e2e con Cypress. Aunque como he indicado, en las nuevas versiones de Cypress podemos testear aisladamente cada componente, así como conjuntamente.

Para ello crearemos el proyecto con [Vue CLI](https://cli.vuejs.org/) indicando en la configuración manual el uso de test e2e. Puedes verlo en el proyecto todoapp del respositorio indicado, una aplicación clonada del listado de ejemplos de Vue.js y que solo nos interesa para testear. Podríamos haber cogido cualquiera nuestra :). Un ejemplo completo más profundo lo tienes [aquí](https://www.cypress.io/blog/2017/11/28/testing-vue-web-application-with-vuex-data-store-and-rest-backend/).

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" 
  src="https://external-preview.redd.it/3FhNraSXNHOViE2YLUCYjjD_GlyAaMw0gcA2VI40R4s.jpg?auto=webp&s=c547decaa3066c5bc1845332427b850270ef84e7" 
  alt="Imagen">
</p>

### Configurando Cypress con Vue CLI

```bash
? Please pick a preset: Manually select features
? Check the features needed for your project: Choose Vue version, Babel, Linter, Unit, E2E
? Choose a version of Vue.js that you want to start the project with 2.x
? Pick a linter / formatter config: Airbnb
? Pick additional lint features: Lint on save
? Pick a unit testing solution: Jest
? Pick an E2E testing solution: (Use arrow keys)
❯ Cypress (Chrome only) 
  Nightwatch (WebDriver-based) 
  WebdriverIO (WebDriver/DevTools based) 
```
Ejemplo para ejecutar los test
```bash
npm run test:e2e
```
E iremos aplicando ATDD/TDD en Test E2E. Puedes seguir el proyecto todoapp commit a commit, así como sucesivos tests que vayan surgiendo.

::: tip  <i class="iconfont reco-github"></i> Proyectos y repositorios que pueden ayudarte a iniciarse con Cypress
-  [Testing JS con Cypress](https://github.com/joseluisgs/testing-js-cypress)
-  [Vue Weather Testing](https://github.com/joseluisgs/vue-weather-testing)
:::