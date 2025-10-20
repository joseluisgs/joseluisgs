---
title: Despliegue de Aplicaciones Web 03 - Arquitectura Web y Fundamentos
description: Arquitectura web, apis, protocolos y despliegue moderno
date: '2025-10-20'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Blog
  - Docencia


publish: true
image: 'https://thumbs.dreamstime.com/b/web-software-developer-banner-seacrh-bar-thin-line-objects-work-tools-desk-59453071.jpg'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
El **Despliegue de Aplicaciones Web** es el proceso fundamental que garantiza que una aplicación pase del código fuente a un entorno de producción accesible. Este proceso no solo se trata de subir archivos, sino de asegurar la **estabilidad**, **seguridad** y **escalabilidad** del sistema para los usuarios finales.

En este tema, exploraremos la estructura detrás de cada acción web, desde el **Modelo Cliente-Servidor** hasta las arquitecturas modernas, pasando por los componentes clave como el **Protocolo HTTP** y las **APIs** que hacen posible el desarrollo web contemporáneo.
<!-- more -->

## 1. Componentes Clave y Roles en el Desarrollo Web

El desarrollo web se divide conceptualmente para gestionar la complejidad de la interacción entre el usuario y el servidor.

* **Front-end (Lado del Cliente)**: Es la parte visible y con la que el usuario interactúa directamente. Se construye con **HTML**, **CSS** y **JavaScript**, y su ejecución ocurre en el navegador del usuario.
* **Back-end (Lado del Servidor)**: Es el cerebro de la aplicación, responsable de la **lógica de negocio**, la **interacción con bases de datos** y la generación de **contenido dinámico**. Tecnologías como PHP, Java, Python o C# se usan aquí.

La tendencia moderna es que el Back-end sea **agnóstico** o **universal**, exponiendo su funcionalidad a través de **APIs (Application Programming Interfaces)** que pueden ser consumidas por cualquier cliente, ya sea web, móvil o de escritorio.

---

## 2. Modelos de Arquitectura de Software

La arquitectura define la estructura organizativa de un sistema de software. En el *backend*, destacan varios modelos de diseño:

| Arquitectura       | Descripción y Enfoque                                                                                                                                | Ideal para                                               |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------- |
| **Monolítica**     | Todos los componentes (lógica, interfaz, datos) están en un solo bloque. Fácil de desarrollar inicialmente, pero difícil de escalar.                 | Proyectos pequeños, MVPs.                                |
| **De Capas**       | Divide la aplicación en capas lógicas (presentación, negocio, datos) para mejorar la modularidad y el mantenimiento.                                 | Aplicaciones empresariales con requisitos claros.        |
| **Microservicios** | Servicios pequeños y autónomos, enfocados en una tarea específica y que se comunican con protocolos ligeros. Ofrece alta flexibilidad y resiliencia. | Aplicaciones complejas y grandes empresas (ej. Netflix). |
| **Serverless**     | El proveedor de nube gestiona la infraestructura, el desarrollador solo escribe el código. Ofrece escalabilidad automática y pago por uso.           | Funciones esporádicas, microservicios específicos.       |

### El Patrón Modelo-Vista-Controlador (MVC)
El **MVC** es un patrón arquitectónico clave que separa:
* **Modelo**: Gestiona los datos y el acceso a la base de datos.
* **Vista**: Presenta la información al usuario (la interfaz).
* **Controlador**: Responde a las acciones del usuario, solicita información al Modelo y prepara los datos para la Vista.

En este modelo, el servidor lleva el peso del procesamiento y la representación, lo que implica un **refresco de pantalla** en cada petición, y es el enfoque que se seguirá en el primer proyecto del curso.

---

## 3. Protocolo HTTP/HTTPS y APIs

### 3.1. HTTP: La Base de la Web
El **Protocolo HTTP** es la base de la comunicación web, caracterizándose por ser **sencillo**, **extensible** y, por defecto, **sin estado** (se soluciona con *cookies* y sesiones).

Los elementos clave de HTTP son:
* **Métodos (Verbos)**: Definen la acción a realizar sobre un recurso:
    * **GET**: Obtener un recurso.
    * **POST**: Añadir un nuevo recurso o enviar datos.
    * **PUT**: Actualizar o reemplazar completamente un recurso.
    * **DELETE**: Borrar un recurso.
* **Códigos de Estado**: Indican el resultado de la petición. Los más comunes son:
    * **2XX (Éxito)**: `200 OK` (procesada correctamente).
    * **4XX (Error del Cliente)**: `404 Not Found` (recurso no encontrado).
    * **5XX (Error del Servidor)**: El servidor falló al completar la petición.

### 3.2. HTTPS y Servicios Web (APIs)
**HTTPS** es la versión segura de HTTP que **cifra** la información, garantizando la privacidad mediante **certificados digitales** y los protocolos **SSL/TLS**.

Un **Servicio Web** es una **API** que permite a otra aplicación comunicarse remotamente. A diferencia de una página web dinámica que genera HTML para el usuario, un servicio web expone **datos estructurados** (JSON, XML) para que **otras aplicaciones** los consuman y procesen.

Los principales protocolos de comunicación de API incluyen:
* **REST**: Estilo arquitectónico basado en HTTP para operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre recursos. Utiliza principalmente **JSON**.
* **GraphQL**: Permite a los clientes solicitar **exactamente los datos que necesitan** en una sola petición.
* **gRPC**: Marco de Llamada a Procedimiento Remoto (RPC) de alto rendimiento, basado en HTTP/2 y **Protocol Buffers** (binario).
* **WebSocket**: Proporciona canales de comunicación **persistentes, bidireccionales y en tiempo real**.

---

## 4. Servidores, Despliegue y CI/CD

### 4.1. Funcionamiento y Herramientas del Servidor
Un **servidor web** (ej. **Apache** o **Nginx**) atiende peticiones de recursos estáticos o delega la ejecución de código dinámico. Un **servidor de aplicaciones** (ej. **Tomcat** para Java) se especializa en el contenido dinámico.

La funcionalidad de **Virtual Hosts** en Apache permite que un único servidor físico aloje múltiples sitios web independientes.

### 4.2. Escalabilidad y Despliegue Moderno
La **Escalabilidad** es la capacidad de un sistema para soportar una mayor carga de trabajo.
* **Escalabilidad Vertical ("Scale Up")**: Aumentar los recursos (CPU, RAM) de un único servidor.
* **Escalabilidad Horizontal ("Scale Out")**: Añadir más servidores (nodos) y distribuir la carga mediante **Balanceadores de Carga**.

El despliegue actual se basa en:
* **Contenedores (Docker y Kubernetes)**: **Docker** facilita la creación y despliegue de aplicaciones de forma consistente a través de contenedores ligeros. **Kubernetes** es la plataforma que automatiza el despliegue, escalado y gestión de estos contenedores.
* **CI/CD**: Las prácticas de **Integración Continua (CI)** y **Despliegue Continuo (CD)** automatizan el ciclo de vida del desarrollo de software, desde el *commit* del código hasta su lanzamiento en producción, permitiendo una entrega de valor más rápida y eficiente.

---

## Enlaces de interés:

**Vídeo resumen del tema**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/8hMghl24sP8" frameborder="0" allowfullscreen></iframe>
</p>

**Podcast del tema**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/SJaedJqq8pE" frameborder="0" allowfullscreen></iframe>
</p>

**Vídeo sobre APIs y protocolos**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/-b2Aq3Dce_E" frameborder="0" allowfullscreen></iframe>
</p>


**Link al repositorio del módulo:** [https://github.com/joseluisgs/DespliegueAplicacionesWeb-03-2025-2026](https://github.com/joseluisgs/DespliegueAplicacionesWeb-03-2025-2026)