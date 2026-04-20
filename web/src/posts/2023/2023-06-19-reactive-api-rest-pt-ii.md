---
title: Crea tu API REST reactiva con Kotlin y Ktor Parte II
description: Cómo crear un servicio REST aplicando reactividad y consideraciones a tener en cuenta para ello
date: 2023-06-19
category:
  - Blog
  - Docencia
tag:
  - Docencia
  - Proyectos
  - Kotlin
  - Ktor
icon: fa-solid fa-plug
cover: https://miro.medium.com/v2/resize:fit:720/format:webp/1*0f7cDW-SPHD23LtnVi2Bgw.png
comment: true
sidebar: false
---

Continuamos con nuestro tutorial de cómo crear una API REST reactiva y cómo asentar las bases de este paradigma en el desarrollo de servicios como ya vimos en la primera parte. Te recuerdo que esta serie de artículos forman parte de mis actividades con Hyperskill de JetBrains Academy.

<!-- more -->

::: warning Sobre la traducción
Lamentablemente no tengo tiempo para traducir todos los artículos que escribo; para continuar con la primera parte he usado ChatGPT y pulido los errores que me he encontrado. De nuevo te recomiendo la lectura del original en inglés si buscas el 100% de exactitud: [Creating Your Reactive REST API with Kotlin and Ktor Part II](https://medium.com/p/7b6b087f61e7).
:::

## Introducción

Estos tutoriales tienen como objetivo mostrarte todo lo que aprenderás a través de los *tracks* de Hyperskill de JetBrains Academy. Hyperskill es el lugar perfecto para profundizar, ampliar tus conocimientos y aprender más sobre lo que se presenta en este tutorial.

Esta parte es un poco larga porque creamos toda la estructura de características increíbles de nuestro servicio. Tómalo con calma y visita Hyperskill para obtener más funciones geniales para tus servicios de Kotlin y Ktor.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*0f7cDW-SPHD23LtnVi2Bgw.png">
</p>

## DTOs y *Mappers*

Nuestro primer punto es mejorar las solicitudes y respuestas. Para lograr esto, introduciremos un patrón interesante: DTO (*Data Transfer Object*). Los DTO nos permiten transferir datos entre diferentes componentes de una aplicación, encapsulando la información de forma estandarizada.

Gracias a los DTO, podemos encapsular las solicitudes y respuestas mapeando entidades o diferentes tipos de datos entre ellos.

## Validaciones y Páginas de Estado

Uno de nuestros problemas fundamentales es asegurarnos de que la información recibida sea correcta. No tiene sentido que nuestra raqueta tenga un precio negativo o que tengamos una marca o modelo vacío.

Para asegurar la corrección de la información entrante, utilizamos el complemento *RequestValidation* en Ktor. Este complemento nos permite validar el cuerpo de las solicitudes entrantes.

## Almacenamiento Reactivo en la Base de Datos

Sabemos que tener un almacenamiento en memoria puede resultar tedioso. Implementemos nuestro repositorio para trabajar con una base de datos reactiva.

La diferencia principal entre JDBC y R2DBC radica en su enfoque y funcionamiento. JDBC es una API tradicionalmente utilizada en entornos Java para interactuar de manera síncrona con bases de datos relacionales. Sigue un enfoque de bloqueo.

Por otro lado, R2DBC es una API reactiva diseñada para la interacción asíncrona y reactiva con bases de datos relacionales. Permite operaciones de base de datos sin bloqueo.

El primer paso es seleccionar una biblioteca que nos ayude a programar con una base de datos reactiva. Utilizaremos Kotysa. Kotysa es un ORM ligero que ofrece una forma idiomática de escribir SQL seguro en términos de tipos de Kotlin utilizando el enfoque JDBC o R2DBC.

## Codificando nuestros servicios

El siguiente paso es enriquecer el sistema de notificación en tiempo real con WebSockets y otras características avanzadas.

### *Railway Oriented Programming* (ROP)

ROP es un concepto de programación funcional para manejar errores y componer operaciones secuenciales. Organiza las operaciones en una secuencia de pasos, donde cada paso puede tener éxito y continuar al siguiente paso en el camino deseado o fallar y dirigirse a un camino de manejo de errores.

## *Testing*

Ahora entramos en una parte crucial y esencial: probar nuestro código. Para hacer esto, haremos uso de JUnit. JUnit es un marco de pruebas de código abierto ampliamente utilizado para aplicaciones Java.

Puedes encontrar el código de este proyecto en GitHub. Por favor, no olvides darle una estrella o seguirme para estar al tanto de nuevos tutoriales y noticias.

**Puedes seguirlo *commit* por *commit* y utilizar el archivo de respaldo de Postman para probarlo.**

Recuerda que este no es un código para usar en un entorno real o de producción. Es un proyecto didáctico para que puedas experimentar, analizar, mejorar o adaptar a tu forma de programar.

Las siguientes pistas ofrecidas por JetBrains Academy en Hyperskill pueden ser un punto de partida perfecto:
- Desarrollador Kotlin
- Desarrollador *Backend* Kotlin (Ktor)
