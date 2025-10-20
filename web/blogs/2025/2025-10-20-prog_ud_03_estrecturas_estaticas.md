---
title: Programación 03 - Aplicación de Estructuras de Almacenamiento Estáticas
description: Arrays, Cadenas (String), Expresiones Regulares, y la base de los algoritmos de Ordenación y Búsqueda
date: '2025-10-20'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Blog
  - Docencia

publish: true
image: 'https://miro.medium.com/v2/resize:fit:1400/1*XcIydJ9zewURnwQJl9yo1w.png'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---
Las **Estructuras de Almacenamiento Estáticas** son la columna vertebral de la programación. En esta unidad, nos adentraremos en el manejo eficiente de datos mediante estructuras de tamaño fijo, centrándonos en los **Arrays** (vectores y matrices), la gestión avanzada de **Cadenas de Texto** y, finalmente, explorando los fundamentos de los **Algoritmos de Ordenación y Búsqueda** que nos permiten manipular y consultar estos datos.

Comprender la **inmutabilidad** y el modelo de **paso por referencia** de estas estructuras en el lenguaje DAW es esencial para evitar errores comunes y escribir código robusto.

<!-- more -->

## 1. Arrays: La Base del Almacenamiento Estático

Un **array** es una estructura de datos fundamental que almacena una colección ordenada de elementos del **mismo tipo**.

### 1.1. Características Clave

Los arrays en DAW son estructuras de datos muy eficientes, caracterizadas por:
* **Homogeneidad (Tipo Fijo):** Todos los elementos son del mismo tipo de dato.
* **Tamaño Fijo (Inmutabilidad):** El tamaño se establece al crearse y no puede alterarse. Si se requiere un tamaño diferente, se debe crear un **nuevo array** y **copiar** los datos.
* **Contigüidad en Memoria:** Los elementos se almacenan en posiciones de memoria contiguas, lo que garantiza su alta eficiencia.
* **Acceso por Índice:** El acceso a cualquier elemento se realiza mediante su índice, proporcionando un tiempo de acceso constante ($O(1)$).

### 1.2. Indexación y Tipos de Referencia

En el lenguaje DAW, la indexación es **Cero-basada**, es decir, el primer elemento se encuentra en el índice `0`. Acceder a un índice fuera de los límites (negativo o mayor/igual al tamaño) produce una excepción (`ArrayIndexOutOfBoundsException`).

Crucialmente, los arrays son **Tipos de Referencia** en DAW. Esto implica que:
* Al pasar un array a una función, se pasa una **copia de su dirección de memoria** (referencia).
* Cualquier modificación a los elementos dentro de la función afecta al array **original**.
* Para obtener una copia verdaderamente independiente, se debe realizar una **Clonación Manual** (copia profunda), creando un nuevo array y copiando los valores elemento por elemento.

## 2. Arrays Multidimensionales (Matrices) y Técnicas Avanzadas

Los arrays multidimensionales (matrices) extienden el concepto del array unidimensional para manejar estructuras de datos con múltiples dimensiones, como tablas o rejillas (filas y columnas).

### 2.1. Gestión de la Identidad y Clonación

En las matrices, el concepto de referencia se vuelve más complejo.

* **Identidad (`==`)**: El operador `==` solo compara si dos matrices apuntan a la **misma dirección de memoria** (Identidad), no si tienen el mismo contenido.
* **Clonación Profunda**: Una simple asignación o copia superficial resulta en una **doble referencia**. Para obtener una copia realmente independiente de una matriz, se requiere una **Clonación Profunda Manual**, que implica copiar tanto las referencias de las filas como los valores internos de cada elemento.

### 2.2. Doble Búfer (`Double Buffering`)

El `Double Buffering` es una técnica avanzada esencial para la simulación y la animación.

* **Teoría**: Consiste en usar dos matrices (**búfer frontal** y **búfer trasero**). Mientras el búfer frontal se muestra al usuario, los cálculos y modificaciones se aplican en el búfer trasero.
* **Eficiencia**: Una vez completado el cálculo, el **mecanismo de intercambio (`Swap`)** simplemente intercambia las referencias (punteros) de los dos búferes. Esta operación es de **tiempo constante** ($O(1)$), mucho más eficiente que copiar todos los datos (que sería $O(n^2)$).

## 3. Cadenas de Texto (`string`) y Expresiones Regulares

Las cadenas de texto son, fundamentalmente, arrays de caracteres, pero con una característica crucial: la **inmutabilidad**.

### 3.1. Inmutabilidad y Rendimiento con `StringBuilder`

* **Inmutabilidad**: Una vez que una cadena (`string`) se ha creado, no puede ser modificada. Cada operación de concatenación (`+`) o modificación crea una **nueva cadena** en memoria.
* **Rendimiento**: Para operaciones intensivas de manipulación o concatenación de texto, el uso repetido del operador `+` es ineficiente.
* **`StringBuilder`**: Es una clase diseñada para construir cadenas de manera **mutable**. Almacena la cadena internamente y solo crea el objeto `string` final cuando se solicita, optimizando el rendimiento.

### 3.2. Expresiones Regulares (`Regex`)

Las expresiones regulares son secuencias de caracteres que definen un patrón de búsqueda.

* **Funcionalidad**: Se usan para tareas como la **validación** de formatos (ej. email, DNI), la **búsqueda** de patrones complejos y la **sustitución** de texto.
* **Conceptos Clave**: Se basan en **metacaracteres** que representan conjuntos de caracteres o cuantificadores (ej. `.` para cualquier carácter, `+` para una o más ocurrencias).

## 4. Algoritmos de Ordenación (`Sorting`) y Búsqueda (`Searching`)

### 4.1. Algoritmos de Ordenación

La ordenación es el proceso de organizar los elementos de una colección siguiendo un orden específico (ascendente o descendente).

* **Burbuja (`Bubble Sort`)**: Intercambia pares de elementos adyacentes si están en el orden incorrecto. Es simple pero ineficiente ($O(n^2)$).
* **Selección (`Selection Sort`)**: Encuentra repetidamente el elemento mínimo (o máximo) y lo coloca en la posición inicial no ordenada. También ineficiente ($O(n^2)$).
* **Inserción (`Insertion Sort`)**: Construye la matriz final un elemento a la vez, insertando el elemento actual en su posición correcta dentro de la sub-matriz ya ordenada.
* **Rápida (`QuickSort`)**: Utiliza una estrategia de "divide y vencerás". Elige un elemento pivote y particiona la matriz en dos sub-arrays, con los elementos menores al pivote en un lado y los mayores en el otro. Es el método más rápido en promedio ($O(n \log n)$).

### 4.2. Algoritmos de Búsqueda

La búsqueda es el proceso de encontrar la ubicación de un elemento dentro de una colección.

* **Búsqueda Lineal (`Linear Search`)**: Recorre la colección elemento por elemento hasta encontrar el valor deseado. Funciona en cualquier array, pero es lento ($O(n)$).
* **Búsqueda Binaria (`Binary Search`)**: Requiere que la colección esté **ordenada**. Divide repetidamente a la mitad el intervalo de búsqueda. Es extremadamente rápida ($O(\log n)$).

---

## Enlaces de interés:

**Podcast**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/rQ4tlnVeTYQ" frameborder="0" allowfullscreen></iframe>
</p>

**Resumen del tema**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/092HimAhjog" frameborder="0" allowfullscreen></iframe>
</p>

**Vídeo: Arrays**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/K9n_Plv0CYU" frameborder="0" allowfullscreen></iframe>
</p>

**Vídeo: Strings**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/fTFaNeDxgvU" frameborder="0" allowfullscreen></iframe>
</p>

**Vídeo: Algoritmos de Ordenación y Búsqueda**

<p style="text-align:center;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/_z3R-pQSD50" frameborder="0" allowfullscreen></iframe>
</p>

**Link al repositorio del módulo:** [https://github.com/joseluisgs/Programacion-03-2025-2026](https://github.com/joseluisgs/Programacion-03-2025-2026)