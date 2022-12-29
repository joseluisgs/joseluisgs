---
title: Testeando en Vue.js con  con Jest y Cypress
description: 'Aplicando Vue Test Utils en un ejemplo para obtener el tiempo'
date: '2021-08-05'
# sidebar: 'auto'
subSidebar: true
categories:
  - Proyectos
tags:
  - Tecnologías
  - Vue.js
  - Jest
  - Cypress
publish: true
image: 'https://i.imgur.com/gV4LZJZ.jpg'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---

Cuando desarrollamos cualquier aplicación es fundamental que aseguramos que todo funciona de la mejor manera posible. Para ello, debemos probar nuestra aplicación en un entorno de pruebas. En este proyecto mostramos como usar Vue Test Utils en una aplicación para consultar el tiempo usando Vue.js y OpenWeatherMap API y mostrar distintos mecanismos de la testeo bajo TDD usando Jest y Cypress dentro de Vue Test Utils. 


<!-- more -->

## Vue Weather Testing

El objetivo de este proyecto es partir de una simple aplicación realizada en Vue.js que consulta el tiempo de una ciudad (buscador) usando OpenWeatherMap API y en base a ella, mostrar distintos formas de realizar los test usando Jest y Cypress dentro de Vue Test Utils. 

No es tanto el aspecto estético si no el interno, mostrando como realizar Test Unitarios, de Integración y E2E sobre una app Vue.js, donde se pueda ver cómo testear tanto un componente aislado y dentro de este sus propiedades y métodos, como la interrelación de distintos componentes que dan forma a esta aplicación, así como la app como un todo. 

Antes de seguir, os puedo indicar que prepararé un ejemplo de aplicación de la metodología TDD donde abordaremos también el uso de Jest y Cypress para realizar pruebas de nuestros proyectos y cuyas referencias y repositorios indico a lo largo de esta entrada.

Este proyecto puede verse como una continuación del contenido mostrado en:
- [Testing JS con JEST](https://github.com/joseluisgs/testing-js-jest)
- [Testing JS con Cypress](https://github.com/joseluisgs/testing-js-cypress)

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Vue.js-%20Ready-%2342b983" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/TypeScript-Ready-3178c6" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/JS%20Style-AirBnB-ff69b4" alt="Logo">
</p>


## Testeando con Vue Test Utils
### Jest
[Jest](https://jestjs.io/docs/es-ES/getting-started) es una de posibilidades que tenemos para testear nuestro código o proyecto en Vue.js. Se define como la suite de "test con 0 configuración", es decir, mientras otras suite de test necesitan de de un motor (test runner) para pasar los test y de la propia suit de test como de una librería de aserciones o matchers, Jest intenta que todo esto esté ya agrupado para agilizar el procesos de test desde el principio. Esto no quiere decir que no se pueda ampliar o profundizar y personalizar con otras librerías o no tenga la potencia de otros y está pensada para test unitarios y de integración.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://miro.medium.com/max/1058/1*xHwuLD0XRtfxhjV-qQjWrQ.png" alt="Jest">
</p>

::: tip Antes de seguir
- Te recomiendo que visites este proyecto para que te suenen algunos conceptos: [Testing JS con JEST](https://github.com/joseluisgs/testing-js-jest)
:::

#### ShallowMount vs Mount
- shallowMount: Nos permite cargar un componente de manera individual para testearlo, creando un wrapper pero sin componentes hijos.
- mount: Carga el componente y sus componentes hijos.

shallowMount() es mejor para probar un componente individual de forma aislada, ya que los componentes secundarios (hijos) se eliminan. Es ideal para las pruebas unitarias. Además, el uso de shallowMount() para probar un componente con muchos componentes secundarios (hijos) puede mejorar el tiempo de ejecución de la prueba unitaria, ya que no hay ningún costo (en términos de tiempo) para renderizar o usar los componentes secundarios (hijos).

mount() es útil cuando desea incluir la prueba del comportamiento de los componentes secundarios (hijos) en el test.

El objeto wrapper nos permite probar todos los aspectos del HTML generado por el componente Vue y todas las propiedades (como los datos o métodos) del componente Vue.

#### Aserciones y Matchers
 Los [Matchers](https://jestjs.io/docs/es-ES/using-matchers) nos permiten comparar de diferente manera valores esperados con los obtenidos. Podemos hacerlo de la siguiente manera, aunque hay [más](https://jestjs.io/docs/es-ES/expect):

##### Igualdad
  - .toBe: Usado para comparar valores primitivos
  - .toEqual: Usado para comparar recursívamente todas las propiedades de un objetos, también conocido como igualdad profunda.

##### Numéricos
  - .toBeLessThan: El valor es menor que.
  - .toBeLessThanOrEqual: El valor es menor o igual que.
  - .toBeGreaterThanOrEqual: El valor es mayor o igual que.
  - .toBeGreaterThan: El valor es mayor que.

##### Boolean, Nulos y Undefined
  - .toBeTruthy: El valor es verdadero.
  - .toBeFalsy: El valor es falso.
  - .toBeUndefined: El valor es ‘undefined’
  - .toBeNull: El valor es ‘null’

##### Arrays y contenido
  - .toContain: Contiene el elemento dentro del array
  - .toHaveLength: El array tiene la longitud

##### Strings
  - .toMatch: Comprueba que un texto coincide con una expresión regular
  - .toHaveLength: Comprueba la longitud.
  - Podemos usar otros anteriores

#### Uso de Mocks
Simulamos las llamadas a la API REST sin salir al exterior. De esta manera: 
- Simulamos peticiones a la API REST satisfactorias
- Simulamos llamadas a la API REST que fallán
Usando los mocks, podemos ver cómo reaccionan nuestros componentes sin necesidad de "gastar" tiempo en llamar constantemente al servicio externo.

#### Estructura de un Test
```js
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'  // Importa el componente a testear
import axios from 'axios'    // Importa la librerías a mockear

// Mockeamos las librerías que vamos a usar
jest.mock('axios')

// Describimos la suit de test
describe('Tests para el ... Componente', () => {
  let wrapper = null

  // Antes de cada test
  beforeEach(() => {
    // Creamos los mocks 

    // renderizamos el componente
    wrapper = shallowMount(App)
  })

  // Despues de cada test
  afterEach(() => {
    jest.resetModules()
    jest.clearAllMocks()  // Si estas mockeando una librería
  })

  test('Caso de Test X', () => {
    // comprobamos el nombre del componente
    expect(wrapper.vm.$options.name).toMatch('...')

  })

  test('Caso de Test Y', () => {
    ...
  })

  ...
})
```
#### Code Coverage
Si quieres tener un informe de la cobertura de tu código (%) añade estas líneas a tu fichero jest.config.js
```js
collectCoverage: true,
collectCoverageFrom: [
  "src/**/*.{js,vue}",
  "!**/node_modules/**"
],
coverageReporters: [
  "html",
  "text-summary"
]
```

### Cypress
[Cypress](https://www.cypress.io/) es una de las muchas posibilidades que tenemos para testear nuestro código o proyecto en Vue.js para realizar pruebas E2E de manera automatizada con mucha potencia y nos permite muchas posibilidades para analizar que nuestro que interaccionamos con nuestro código resolviendo las historias de usuario a realizar.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://miro.medium.com/max/400/1*AtCVsPmCft1K516gsb9n4Q.png" alt="Jest">
</p>

::: tip Antes de seguir
- Te recomiendo que visites este proyecto para que te suenen algunos conceptos: [Testing JS con Cypress](https://github.com/joseluisgs/testing-js-cypress)
:::

#### Aserciones
Puedes consultarlas [aquí](https://docs.cypress.io/guides/references/assertions.html). Pero se basan principalmente en [Chai](https://docs.cypress.io/guides/references/assertions.html#Chai) y [Sinon](https://docs.cypress.io/guides/references/assertions.html#Sinon-Chai).

#### Algunos métodos útiles de Cypress
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

#### Buenas pŕacticas
Es importante que tengamos [buenas prácticas](https://docs.cypress.io/guides/references/best-practices.html) para testear sin problemas. Entre ellas el manejo de selectores óptimos para nuestros elementos de la web, como pueden ser selectores de web del tipo con selectores del tipo id como son: data-testid (mi preferido para usarlo también con JEST) o data-cy.


## Repositorio
::: tip Proyecto disponible
- [GitHub](https://github.com/joseluisgs/vue-weather-testing).
- [Web](https://joseluisgs.github.io/vue-weather-testing)
:::