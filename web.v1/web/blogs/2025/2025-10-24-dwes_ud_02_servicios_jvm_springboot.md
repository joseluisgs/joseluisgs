---
title: Desarrollo Web en Entornos Servidor 02 - Servicios Web con JVM y Spring Boot
description: Programación avanzada de Java y desarrollo de servicios web utilizando Spring Boot sobre la JVM
date: '2025-10-24'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Blog
  - Docencia

publish: true
image: 'https://puroguramu.akcstudio.com/spring-boot.png'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
El **Desarrollo de Servicios Web en JVM** con **Spring Boot** es el pilar del desarrollo *backend* moderno.

La **Máquina Virtual de Java (JVM)** es un **estándar indiscutible** en el desarrollo empresarial y de alto tráfico gracias a su **rendimiento estable**, su capacidad de **escalabilidad horizontal** (manejo de miles de hilos) y su robusto ecosistema de herramientas.

**Spring Boot** es el **framework por referencia** en este ecosistema. Ofrece una solución completa para simplificar la configuración, implementar la **Inyección de Dependencias (DI)** y abordar de forma modular aspectos complejos como la **Seguridad**, el **Acceso a Datos** y la **Comunicación Asíncrona**. Su filosofía es el **"convención sobre configuración"**, lo que acelera dramáticamente el desarrollo.

<!-- more -->

Esta unidad de **2º DAW** te enseñará a construir APIs REST de nivel industrial, cubriendo desde la arquitectura Java hasta la optimización con caché Redis y la seguridad JWT.

## 1. Proyecto del Curso 🚀

El **Proyecto** es el eje central de la unidad. Aquí se integran todos los conocimientos adquiridos para construir una **API REST completa y robusta** de nivel de producción. Servirá como tu **porfolio** de *backend* profesional.

**Link al repositorio del Proyecto completo:** [https://github.com/joseluisgs/DesarrolloWebEntornosServidor-02-Proyecto-SpringBoot](https://github.com/joseluisgs/DesarrolloWebEntornosServidor-02-Proyecto-SpringBoot)

---

## 2. Contenidos I: Lenguaje Java y Programación en el Lado del Servidor ⚙️

Esta sección asegura que se dominen los conceptos avanzados de **Java** necesarios para escribir código eficiente y escalable en la **JVM**.

### 2.1. Programación Concurrente, Asincrónica y Reactiva
La diferencia fundamental radica en el manejo de la **E/S (Input/Output)**:
* **Concurrente/Síncrona:** Una petición bloquea un hilo del servidor esperando la respuesta de la BBDD (E/S bloqueante).
* **Asincrónica/Reactiva:** El hilo atiende la petición y la libera para que atienda a otro cliente mientras espera la respuesta de la BBDD (E/S no bloqueante). Esto es clave para lograr una **alta concurrencia** y **escalabilidad**.

### 2.2. Patrones, Arquitectura y Railway Oriented Programming (ROP)
Se establece la **Arquitectura por Capas (REST/MVC)** como estándar para la separación de responsabilidades. **ROP** es introducido como un patrón funcional que obliga a gestionar explícitamente tanto el camino de **éxito** como el de **error** de una operación (usando tipos `Result<T, E>`), previniendo excepciones no controladas y mejorando la robustez.

### 2.3. Testing, Docker y TestContainers
La **calidad del código** se garantiza mediante el **Testing** (**Unitario** para la lógica pura, **Integración** para las capas con dependencias). **Docker** se usa para asegurar la **paridad de entornos** (el famoso "en mi máquina funciona"). **TestContainers** extiende esto, permitiendo que los tests de integración levanten y destruyan **contenedores reales** (ej. una instancia de Postgres o Redis) al inicio y fin de la prueba.

---

## 3. Contenidos II: Servicios Web con Java y Spring Boot 🛠️

Se profundiza en el uso de **Spring Boot** para crear APIs REST funcionales y con prestaciones avanzadas, cubriendo desde el acceso a datos hasta el despliegue.

### 3.1. Servicios REST, Spring Web REST y Estructura
Se profundiza en el **Contenedor IoC (Inversion of Control)** de Spring y cómo inyecta dependencias mediante anotaciones (`@Autowired`). Se explica el mapeo de peticiones HTTP en el **Controlador** (`@RestController`) y el papel de los **DTOs (Data Transfer Objects)** para **desacoplar** las entidades de dominio del formato de comunicación.

### 3.2. Spring Data JPA y NoSQL (MongoDB)
**JPA** es el estándar de **ORM (Object-Relational Mapping)**, usando el patrón **Repository** para el acceso a datos sin escribir SQL (CRUD). Se contrasta el **esquema rígido** de JPA con el **modelo de documentos dinámico** de **MongoDB**, explicando cómo se simulan las relaciones complejas sin *joins* mediante **referencias** (ej. `DBRef`).

### 3.3. Seguridad, Autenticación, Autorización y JWT
El **`SecurityFilterChain`** actúa como un "muro de defensa" interceptando cada petición. Se implementa un modelo de seguridad **Stateless** donde **JWT** es la clave: un token firmado digitalmente que contiene la identidad del usuario, eliminando la necesidad de sesiones en el servidor. Esto se protege obligatoriamente con **HTTPS/SSL**.

### 3.4. Redis y Caché Avanzada
**Redis** es una base de datos **Key-Value en memoria (RAM)**, lo que le da una velocidad superior. Se utiliza para almacenar resultados de consultas caras (caching). Las anotaciones **`@Cacheable`**, **`@CachePut`** y **`@CacheEvict`** permiten a Spring gestionar automáticamente el ciclo de vida de estos datos en caché.

### 3.5. WebSockets, GraphQL y Emails Asíncronos
**WebSockets** establece un **canal persistente y bidireccional (full-duplex)** sobre HTTP para el tiempo real. **GraphQL** resuelve el problema de **Over-fetching** (recibir más datos de los necesarios) permitiendo al cliente definir la estructura de la respuesta. El envío de **Emails** se realiza en un **hilo asíncrono** para evitar que la operación (que es lenta) detenga la respuesta de la API principal.

---

## 4. Enlaces de interés: Videos Esenciales 📺

### 4.1. Contenidos I: Lenguaje Java y Programación en el Lado del Servidor

**Podcast Java**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/LSrQzZ9j5UI" frameborder="0" allowfullscreen></iframe>
</p>

**Resumen Java**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kzRO1HZ6EiY" frameborder="0" allowfullscreen></iframe>
</p>

**Sincronía y Asincronía**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gv4k_ZbY_OM" frameborder="0" allowfullscreen></iframe>
</p>

**Programación Reactiva**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/dWQ_rj11Mw4" frameborder="0" allowfullscreen></iframe>
</p>

**Podcast Servidores Síncronos, Asíncronos y Reactivos**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/s-7fkrlg7cE" frameborder="0" allowfullscreen></iframe>
</p>

**Railway Oriented Programming**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/kiCIgkgk2cA" frameborder="0" allowfullscreen></iframe>
</p>

**Retrofit y APIs REST**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/b6aFf9LsPnI" frameborder="0" allowfullscreen></iframe>
</p>

### 4.2. Contenidos II: Servicios Web con Java y Spring Boot

**Podcast Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HvWx4jJmAsU" frameborder="0" allowfullscreen></iframe>
</p>

**Resumen Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/p_pT95ekaa4" frameborder="0" allowfullscreen></iframe>
</p>

**Construyendo Servicios Web con Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/oat9HhL2Nvc" frameborder="0" allowfullscreen></iframe>
</p>

**Spring Data JPA y SQL**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/teZSHyXWLzs" frameborder="0" allowfullscreen></iframe>
</p>

**WebSockets con Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QyOSZc2g8fQ" frameborder="0" allowfullscreen></iframe>
</p>

**NoSQL y Mongo con Spring Data**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/HBAxD8--R-s" frameborder="0" allowfullscreen></iframe>
</p>

**Seguridad: Autenticación y Autorización con Spring Security**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/0AQUKy0CVPc" frameborder="0" allowfullscreen></iframe>
</p>

**GraphQL con Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/c_aNuF8oBVM" frameborder="0" allowfullscreen></iframe>
</p>

**Caché avanzada con Redis en Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/wk3_8ktYgKQ" frameborder="0" allowfullscreen></iframe>
</p>

**Envío de Emails con Spring Boot**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/RFidXHt0cmc" frameborder="0" allowfullscreen></iframe>
</p>

### 4.3. Lista de Reproducción

**Lista de Reproducción Completa del Tema:** [https://www.youtube.com/watch?v=tlRgLmopS1g&list=PLGIH-7eZDbVzq51Vk4XHAgQ4fTHZVTLRl](https://www.youtube.com/watch?v=tlRgLmopS1g&list=PLGIH-7eZDbVzq51Vk4XHAgQ4fTHZVTLRl)