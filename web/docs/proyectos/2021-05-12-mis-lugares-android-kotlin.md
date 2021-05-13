---
title: Mis Lugares app Android en Kotlin
description: 'Un ejemplo de todo lo visto en Programación Multimedia y Dispositivos Móviles de 2º DAM'
date: '2021-05-12'
# sidebar: 'auto'
subSidebar: true
categories:
  - Proyectos
  - Docencia
tags:
  - Docencia
  - Tecnologías
  - Proyectos
  - Android
  - Kotlin
  - Firebase
  - REST
publish: true
image: 'https://3.bp.blogspot.com/-E_61ZBmBlwo/XaeWvxlFvWI/AAAAAAAAMqQ/7Zc_eiWh25kznrDFwwpEvHvRHSby-P2XwCLcBGAsYHQ/s1600/Introducing_LTS_Android_NDK_r21.png'
twitter_creator: joseluisgonsan
twitter_site: joseluisgonsan
# sticky: 1
---

[Mis Lugares](https://github.com/joseluisgs/MisLugares) es la App que resume todo lo trabajado en Programación Multimedia y Dispositivos Móviles. El objetivo principal es tener un app que cubra la mayoría de la funcionalidad y contenidos que se ven en este módulo de DAM, donde simulamos ser una empresa desarrollando un producto real. A continuación te comento los aspectos más importantes.

<!-- more -->

## Contexto

Cuando plantee este curso, quisé darle un enfoque púramente práctico trabajando con documentación oficial y proyectos reales, usando tecnologías demandadas por las empresas del sector de nuestra zona. Es por ello que decidí darle un giro de tuerca a Mis Lugares 2019 adaptándo a las circunstancias actuales.

Por un lado, trabajamos en base a un reto/proyecto real. Segundo, se suprimen los apuntes por documentación oficial. Esto al principio choca, pero a la larga se agradece. En la profesión del desarrollo móvil las tecnologías cambian y es bueno adquirir la destreza de cómo moverse por documentaciones oficiales y cómo consultarlas.

Por otro lado se ha usado GitHub/Git con el objetivo de control de código, diario de clase. El alumnado puede seguir lo hecho en clase, comparar el código, ver las distintas versiones o tecnologías por rama, aportar nuevas ideas, colaborar en grupo para su desarrollo, etc. Moviéndote por las ramas puedes ver las distintas opciones y soluciones presentadas a los problemas y tecnologías vistos en clase.

Finalmente se ha ido aplicando distintas tecnologías con el objetivo de abrir la puertas en el desarrollo móvil al alumnado y con ello sean capaces de dominar los aspectos más destacados de las mismas para después desarrollar sus propias app.

:::tip Mis lugares
- Apuntes
- Ejemplo real
- Código para experimentar
- Aplicación de distintas tecnologías
- Manejo de repositorios
  :::

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://ciberninjas.com/wp-content/uploads/2021/02/21-nuevo-curriculum-android.png" alt="Logo"></p>

## Mis Lugares App

2DAM PMYDM App para poner en práctica todo lo visto en este curso en la primera parte del temario relacionada con Programación Móvil
en sistemas Android usando de lenguaje Kótlin. Podrás llevar tus momentos favoritos siempre en tu móvil.

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/App-Android-g" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Code-Kotlin-blue" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Firebase-%20Ready-FFA000" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/badge/Lisence-MIT-green" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" src="https://img.shields.io/github/last-commit/joseluisgs/MisLugaresKotlinRealm" alt="Logo">
</p>

### Descripción

En esta App manejaremos conceptos como diseño de interfaces dinámicas, almacenamiento en teléfono, base de datos y el uso
de sensores y elementos de tu móvil Android como pueden ser la cámara y el GPS, además de actualizaciones en tiempo real de la información usando como lenguaje de referencia Kotlin. La aplicación es de ámbito docente y obviamente muchos aspectos son mejorables, pero hay que entender el contexto en el cual se genera y se usa en clase.

El objetivo es poder llevar un registro de tus lugares favoritos siempre en tu móvil. A lo largo del curso avanzaremos y complementaremos el proyecto con distintas tecnologías en sus distintas versiones.

Es importante, antes de abordar esta App, que revises [los proyectos realizados en este curso](https://github.com/joseluisgs?tab=repositories).
En definitiva, este es un proyecto integrador que resume lo trabajado en este módulo.

### Versiones y revisiones

Las versiones no están pensadas para que el alumnado maneje distintas técnicas. El objetivo es que aprenda a usar la tecnología más idónea dependiendo del problema

- **v1.0.0**: Versión donde el almacenamiento de todos los datos se hace de manera local usando una base de datos [Realm](https://realm.io/).
  Las imágenes se usan usando el sistema de codificación en Base64. Esta manera no es muy correcta, pero puede ser útil si
  nos enfrentamos a servicios remotos donde desconocemos como subir la imagen. Este sistema tiene el problema de que sobrecarga
  la base de datos y no es muy recomendado salvo excepciones como esta. Se puede ver versión alternativa almacenando las imágenes en sistema de almacenamiento interno y externo.
- **v2.0.0**: Versión donde el almacenamiento de todos los datos se hace a través de una API REST con el objetivo de salir
  al exterior para enviar o recibir información. De nuevo mandaremos las imágenes en Base64, aunque lo ideal sería hacer peticiones
  multipart. De nuevo se hace hincapié en el uso docente y este es acercar la tecnología de uso de Servicios Web y de una API REST
  para poder intercambiar información con una app móvil y el exterior (otros servidores y recursos).
  Para el desarrollo de la API REST nos basaremos en el proyecto [API REST Fake](https://github.com/joseluisgs/APIRESTFake).
- **v3.0.0**: Versión donde se integra Firebase como sistema de backend de nuestra aplicación. Con ello nos ofrece poder
  realizar un backend compatible con distintos clientes (móviles o web). Para ello haremos uso
  de las distintas funcionalidades que nos aporta como [Authentication](https://firebase.google.com/products/auth?hl=es),
  [Firestore](https://firebase.google.com/products/firestore?hl=es), [Storage](https://firebase.google.com/products/storage?hl=es),
  [Messaging](https://firebase.google.com/products/cloud-messaging?hl=es) o [Analytics](https://firebase.google.com/docs/analytics).

#### Referencias

Se destacan las siguientes tecnologías usadas en algún momento o versión del proyecto, cuyos enlaces son los mismos que hemos utilizado como apuntes en clase y ejemplos individuales de los mismos están en mi [GitHub](https://github.com/joseluisgs).

- [Android](https://developer.android.com/docs)
- [Kotlin](https://kotlinlang.org/)
- [Interfaz de Usuario](https://developer.android.com/guide/topics/ui)
- [Imágenes y gráficos](https://developer.android.com/guide/topics/graphics)
- [Audio y vídeo](https://developer.android.com/guide/topics/media)
- [Bases de Datos Realm.io](https://realm.io/docs/kotlin/latest/)
- [Uso de cámara](https://developer.android.com/training/camera)
- [Sistemas de almacenamiento](https://developer.android.com/guide/topics/data)
- [Manejo de permisos](https://developer.android.com/guide/topics/permissions/overview)
- [Uso de Intents](https://developer.android.com/guide/components/intents-common?hl=es)
- [Geolocalización](https://developer.android.com/training/location)
- [Google Maps](https://developers.google.com/maps/documentation/android-sdk/intro)
- [Uso de preferencias](https://developer.android.com/training/data-storage/shared-preferences?hl=es)
- [Tareas en segundo plano](https://developer.android.com/guide/background)
- [Funciones de Voz](https://developer.android.com/training/wearables/apps/voice)
- [Animaciones](https://developer.android.com/training/animation/overview)
- [Material Design](https://material.io/)
- [Json con Gson](https://github.com/google/gson)
- [Códigos QR](https://github.com/zxing/zxing)
- [Permisos con Dexter](https://github.com/Karumi/Dexter)
- [Imágenes con Picasso](https://square.github.io/picasso/)
- [Sesiones y Tokens](https://programacionymas.com/blog/jwt-vs-cookies-y-sesiones)
- [API REST](https://www.bbvaapimarket.com/es/mundo-api/api-rest-que-es-y-cuales-son-sus-ventajas-en-el-desarrollo-de-proyectos/#:~:text=En%20el%20campo%20de%20las,a%20partir%20de%20ese%20software.)
- [HTTP Métodos de petición](https://developer.mozilla.org/es/docs/Web/HTTP/Methods)
- [HTTP Código de estado de respuestas](https://developer.mozilla.org/es/docs/Web/HTTP/Status)
- [Retrofit](https://square.github.io/retrofit/)
- [Firebase](https://firebase.google.com/docs?hl=es)

### Uso del Firebase v3.X.X

En la versión 3.X.X se hace uso de Google Firebase como sistema o conjunto de servicios a usar por nuestro cliente: auntenticación,
base de datos en tiempo real, almacenamiento de ficheros y notificaciones.
Es por ello que es fundamental que asegures cómo configurar tanto Firebase, como tu proyecto Android, para que funcione
perfectamente. Te recomiendo sigas siempre la guía oficial de [Firebase](https://firebase.google.com/docs/android/setup?hl=es)
o [consultes otras alternativas](https://www.youtube.com/watch?v=IiuKAmgRYeM&list=PLNdFk2_brsRcaGhfeeiVkW72qTYcn_nfQ)
actualizadas para ello si no será imposible que lo integres en tu propio proyecto. Cuidado con el nombre de paquetes.

### Uso del servidor propio para API REST v2.X.X

Para la versión 2.X.X se hace uso del servidor propio [API REST Fake](https://github.com/joseluisgs/APIRESTFake), con
el objetivo de no complicar el asunto aprendiendo a hacer un servidor propio REST completo. Para ello se ha creado en la carpeta
API REST todo lo necesario para correr ese servidor, usando una base de datos JSON. De esta manera no te tienes que preocupar
en como se desarrolla este tipo de servicios, si no solo en consumirlo y usarlo en tu app móvil.

Para ello es fundamental tener instalado en tu sistema operativo [NodeJS](https://nodejs.org/es/).
La base de datos está en el directorio bd y se llama db.json, y debe tener una estructura de array de objetos por cada recurso a consumir.
Puedes leer más al respecto en [API REST Fake](https://github.com/joseluisgs/APIRESTFake) o consultar los ejemplos.

Esta pequeña aplicación que simula un servidor de API REST está probado en _Linux_ y _OS X_. Si la vas a usar en _Windows_, por favor
asegúrate que los scripts de NPM son compatibles y las rutas de tu sistema.

#### Configuración y puesta en marcha

Para arrancar el servidor debes hacer lo siguiente desde la carpeta apirest:

```bash
$npm install --> Instala las dependencias necesarias para su uso
$npm start   --> Inicia el servidor.
```

Si todo ha ido bien obtendrás la siguiente salida:

```bash
⚑ Servidor JSON funcionando ✓ -> http://localhost:6969
⚑ Fake API REST por joseluisgs ✓ -> https://github.com/joseluisgs/APIRESTFake
```

Te recomiendo el uso de [Postman](https://www.postman.com/) para testear y comprender como hacer las llamadas que luego
realizarás en [Retrofit](https://square.github.io/retrofit/).

### Consideraciones para ver los mapas

Los mapas hace uso de Google Map Api Key, es por ello que debes activar la clave de la API y activarla para tu proyecto,
pues puede que varíe a la huella del mio, o que simplemente yo haya desactivado la mía (te recuerdo que es un proyecto para fin docente y lo activo y desactivo sobre la marcha).
Por favor sigue [este tutorial](https://developers.google.com/maps/documentation/android-sdk/get-api-key?hl=es-419) para que puedas ver tus mapas con tu clave.

Recuerda cambiar el fichero Manifest y añadir:

```xml
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
<meta-data android:name="com.google.android.geo.API_KEY"
android:value="@string/google_maps_key" />
```

Te recomiendo que mires la pestaña Run, pues si falla el mapa te dirá si no se ha podido identificar correctamente con la clave de tu API generada. En el modo debug se hace en ese fichero con la huella SHA-1 y se pone, en el Modo Release,
se debe generar con keytool la huella SHA-1 con los datos del paquete Release, crear un proyecto y subirla
[https://developers.google.com/maps/documentation/android-sdk/get-api-key](https://developers.google.com/maps/documentation/android-sdk/get-api-key).

### Capturas

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/BIhr1xY.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/PrZxEZw.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/ZWrNzlM.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/h4iZgY2.jpg" alt="Logo">
</p>

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/d3AOKdM.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/9fIDBM8.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/Kd4h7aL.jpg" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="325" src="https://i.imgur.com/va9mYna.jpg" alt="Logo">
</p>


#### Herramientas usadas

Estas son las herramientas que más hemos usado en clase para la realización de este proyecto:

<p style="text-align:center;">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://logodownload.org/wp-content/uploads/2015/05/android-logo-7-1.png" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/600px-Kotlin_Icon.png" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-logomark.png?hl=es-419" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://resources.jetbrains.com/storage/products/intellij-idea/img/meta/intellij-idea_logo_300x300.png" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://miro.medium.com/max/650/1*zzvdRmHGGXONZpuQ2FeqsQ.png" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://cdn.iconscout.com/icon/free/png-256/github-153-675523.png" alt="Logo">
<img loading="lazy" style="border-radius: 0.25rem;" height="45" src="https://user-images.githubusercontent.com/17736615/30980083-f7f8a860-a43c-11e7-939e-f6717a2210fe.png" alt="Logo">
</p>


### Licencia

Este proyecto esta licenciado bajo licencia **MIT**, si desea saber más, visite el fichero
[LICENSE](https://github.com/joseluisgs/MisLugaresKotlinRealm/blob/master/LICENSE) para su uso docente y educativo.
