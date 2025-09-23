---
title: Despliegue de Aplicaciones Web 02 - Introducción a la virtualización
description: La tecnología que ha revolucionado la forma de desarrollar y desplegar software
date: '2025-09-23'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Blog
  - Docencia

publish: true
image: 'https://www.nextgencodingcompany.com/_next/image/?url=%2Fresearch%2Fdocker.png'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
La segunda unidad didáctica del módulo de Despliegue de Aplicaciones Web se centra en la virtualización con contenedores, una tecnología que ha cambiado las reglas del juego en el mundo del desarrollo y despliegue de aplicaciones. El objetivo principal es solucionar la inconsistencia de entornos que a menudo lleva a la clásica frase: "Pero si en mi máquina funciona".
<!-- more -->
El problema fundamental es que cada entorno es un mundo, con diferentes versiones de software, librerías y configuraciones de red, lo que hace que las aplicaciones sean impredecibles. Los contenedores de Docker solucionan esto al empaquetar una aplicación con todo lo que necesita para funcionar en una unidad aislada y estandarizada.

## Contenidos clave de la unidad
En esta unidad, aprenderás los conceptos esenciales de Docker y cómo aplicarlos en el desarrollo y despliegue de aplicaciones, incluyendo:

Diferencia entre contenedores y máquinas virtuales (VM): Los contenedores son mucho más ligeros y eficientes porque comparten el kernel del sistema operativo del anfitrión, mientras que una VM simula un ordenador completo y es más pesada.

Componentes principales de Docker: Descubrirás los dos pilares fundamentales:

- Imágenes: La plantilla o la receta inmutable que contiene todo lo necesario para la aplicación.
- Contenedores: La instancia viva y en ejecución de una imagen, donde reside y funciona la aplicación.
- Comandos básicos de Docker CLI: Conocerás los comandos esenciales para gestionar el ciclo de vida de los contenedores, como docker run para poner en marcha un contenedor, docker ps para ver los activos, docker pull para descargar imágenes y docker stop y docker rm para detenerlos y borrarlos.
- Creación de imágenes con Dockerfile: Aprenderás a crear tus propias imágenes personalizadas de forma reproducible y transparente. El Dockerfile es un simple archivo de texto con una lista de instrucciones paso a paso para construir la imagen.
- Orquestación con Docker Compose: Verás cómo Docker Compose simplifica el despliegue de aplicaciones multicontenedor (como un servidor web y una base de datos) usando un único archivo de configuración (docker-compose.yml) y un solo comando.

Esta forma de trabajar no solo proporciona portabilidad, consistencia y eficiencia, sino que también promueve la reproducibilidad, eliminando el problema de que "solo funciona en mi máquina".

Enlaces de interés:

**Vídeo resumen del tema**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/ScgZLt8Ek8Y" frameborder="0" allowfullscreen></iframe>
</p>

**Podcast del tema**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/-8EoCawmjuw" frameborder="0" allowfullscreen></iframe>
</p>


Espero que esta entrada te sea de gran utilidad para tu web. Si necesitas algún ajuste, házmelo saber.


**Link al repositorio del módulo:** [https://github.com/joseluisgs/DespliegueAplicacionesWeb-02-2025-2026](https://github.com/joseluisgs/DespliegueAplicacionesWeb-02-2025-2026)


