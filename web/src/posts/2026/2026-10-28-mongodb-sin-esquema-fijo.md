---
title: "MongoDB: La base de datos sin esquema fijo, donde viven tus documentos"
description: "Por qué Baidu, eBay y Forbes guardan sus datos como documentos y no como filas"
date: 2026-10-28
category:
  - Blog
  - Docencia
tag:
  - MongoDB
  - NoSQL
  - Base de datos de documentos
  - Arquitectura de Datos
  - .NET

icon: fa-solid fa-cubes

cover: https://i.imgur.com/hkmhVTc.jpg

comment: true
sidebar: false
footer: true
---

No sé cuándo fue la última vez que añadiste una columna a una tabla, pero me apuesto a que te acuerdas de lo que cuesta: `ALTER TABLE`, un café mientras corre el proceso y una oración al dios de las copias de seguridad. Y eso solo con la tabla vacía; con doscientos millones de filas, te llevas la tarde entera.

Hay un patrón que se repite en casi todos los modelos de datos que he mirado: el primer esquema se dibuja el primer día, en un diagrama entidad-relación, con las tablas escritas en piedra que pensamos que nunca van a cambiar. Luego los datos crecen, las necesidades cambian, y el esquema sigue ahí, fingiendo que el mundo no se mueve.

Hay bases de datos que no te condenan a vivir con esa decisión de por vida. Y una de ellas nació, literalmente, para guardar JSON. Ahí es donde entra MongoDB.

<!-- more -->

## ¿Qué es MongoDB?

MongoDB guarda **documentos**. No filas con columnas fijas: documentos. Cada documento es un objeto con sus campos, sus listas y hasta otros documentos dentro, y dos documentos de la misma colección no tienen por qué tener exactamente la misma forma.

Y el nombre viene de *huMONGOus* —«base de datos enorme»—. Lo empezó la empresa 10gen con una idea muy simple: guardar los datos sin definir antes su forma.

Eso suena a herejía si vienes de SQL. Y sin embargo es lo más natural: es el modelo de datos con el que ya piensas en tu código. Tu objeto de producto ya tiene una categoría dentro y una lista de etiquetas. La pregunta es si la base de datos te va a dejar guardarlo así, o si vas a tener que trocearlo en tres tablas y montarlo a mano con `JOIN`s.

| SQL (MariaDB) | MongoDB |
|---------------|---------|
| Base de datos | Base de datos |
| Tabla | Colección |
| Fila | Documento |
| Columna | Campo |
| `JOIN` | Sub-documento embebido (o `$lookup`) |
| Esquema fijo | Esquema flexible |
| `AUTO_INCREMENT` | `ObjectId` |

El término técnico es **esquema flexible**, y no significa «sin esquema». Significa que el esquema vive en tu código, en tu modelo, en las validaciones que tú decidas poner. La base de datos no te obliga a crear todas las columnas de antemano; te deja empezar con lo que necesitas hoy y añadir campos mañana sin `ALTER TABLE`.

Lo que no perdona: flexible no es improvisado. Si nadie cuida ese esquema, dos años después tienes documentos que no se parecen entre sí y un código que no sabe qué esperar. La disciplina no desaparece: se traslada de la base de datos a tu modelo.

Los documentos se almacenan en **BSON**, que es la representación binaria de JSON. No es JSON a secas porque JSON solo conoce texto, números y booleanos, y una base de datos necesita tipos: fechas, decimales exactos, identificadores, binarios. BSON añade esos tipos y además es binario: ocupa menos y se lee más deprisa.

Un documento de producto se ve así:

```json
{
  "_id": ObjectId("65f1c2e4a1b2c3d4e5f60789"),
  "nombre": "Teclado mecánico RGB",
  "precio": NumberDecimal("89.99"),
  "stock": 24,
  "categoria": {
    "id": 5,
    "nombre": "Periféricos"
  },
  "etiquetas": ["mecánico", "rgb", "oficina"],
  "createdAt": ISODate("2026-10-01T10:00:00Z")
}
```

Fíjate en lo que hay dentro: un sub-documento embebido (`categoria`), una lista (`etiquetas`) y tipos propios de BSON (`NumberDecimal`, `ISODate`, `ObjectId`). Ninguna fila de SQL hace esto sola: para eso existen los `JOIN`s.

## El ObjectId: 12 bytes que no necesitan base de datos

El `_id` de MongoDB no necesita `AUTO_INCREMENT`, y no es un capricho: es una decisión de diseño con consecuencias. Un `ObjectId` mide exactamente 12 bytes, partidos en tres piezas:

| Pieza | Bytes | Qué aporta |
|-------|-------|------------|
| Marca de tiempo | 4 | Segundos desde 1970: sabes cuándo se creó sin mirar nada |
| Identificador aleatorio | 5 | Único por proceso: dos servidores no se pisan |
| Contador | 3 | Incrementa dentro del proceso: ordena las inserciones |

En hexadecimal son 24 caracteres y, lo mejor de todo, **se generan en el cliente**. Tú creas el objeto, le pones el ID antes de tocar la base de datos, y si dos usuarios pulsan «guardar» al mismo tiempo desde dos continentes, cada uno genera el suyo sin consultar a nadie.

Compara con `AUTO_INCREMENT`: para asignar el siguiente número hay que preguntar a la base de datos, que se convierte en el punto por el que pasan todas las escrituras. En una base de datos centralizada no es un problema. En un clúster distribuido por cinco países, lo es.

Y compara con un UUID: un UUID v4 son 16 bytes de puro azar, y eso significa que dos IDs cercanos en el tiempo caen en posiciones aleatorias del índice, que es lo peor que le puede pasar a un árbol B. El ObjectId empieza por la marca de tiempo, así que las inserciones recientes caen juntas en el índice. Y el orden viene de serie.

De hecho, si te suena esto de los IDs distribuidos, ya lo toqué desde otro ángulo en el artículo de [Redis](/posts/2026/2026-08-17-redis-base-datos-clave-valor.html), donde Shopify resolvía el mismo problema con un contador `INCR` atómico. Mismo problema, dos soluciones: que los genere la base de datos, o que los genere tu aplicación.

## De tablas y JOINs a colecciones y documentos

El cambio no es de sintaxis, es de mentalidad. En SQL modelas **entidades**: Producto, Categoría, Pedido, y los cruces entre ellas. En MongoDB modelas **lo que vas a leer**: si tu pantalla de listado necesita el producto con su nombre de categoría, el nombre de categoría va dentro del producto.

Mismo caso, dos mundos:

```mermaid
flowchart TD
    subgraph SQL["Modelo relacional"]
        T1[(producto<br/>id, nombre, precio, categoria_id)]
        T2[(categoria<br/>id, nombre)]
        T1 -->|JOIN| T2
    end
    subgraph DOC["Modelo documento"]
        D[(producto<br/>_id, nombre, precio<br/>categoria: id + nombre)]
    end
    SQL -->|3 consultas o un JOIN| R[Resultado]
    DOC -->|1 documento| R
    style T1 fill:#0d6efd,color:#fff
    style D fill:#198754,color:#fff
```

Si vienes de SQL, esta es tu tabla de traducción: no cambia lo que quieres conseguir, cambia dónde lo consigues.

| En SQL hacías | Aquí lo haces así |
|---|---|
| Normalizar hasta la tercera forma normal | Desnormalizas: lo que se lee junto, se guarda junto |
| Clave ajena con `REFERENCES` | El `id` viaja dentro del documento, y la integridad la cuida tu código |
| `JOIN` para montar cada respuesta | El documento llega ya montado |
| `AUTO_INCREMENT` de la tabla | `ObjectId` generado en el cliente (ya lo vimos) |
| `ALTER TABLE` para evolucionar el modelo | Añades el campo cuando haga falta; el esquema vive en tu código |
| Transacciones ACID por defecto | Existen, pero el diseño trabaja para no necesitarlas (más abajo) |
| Índices en columnas | Índices en campos: tan obligatorios como siempre |

Nadie prohíbe hacer `JOIN`s en MongoDB: existe `$lookup` y funciona. Pero el espíritu del modelo es que casi no los necesites, porque el documento ya llega con lo puesto. Leer deprisa es gratis; escribir algo repetido es la moneda con la que pagas.

Esto tiene un nombre: **desnormalizar**. Y no es un pecado, es la decisión por defecto aquí. Lo conté con más detalle en [CQRS: ¿mito, moda o realidad?](/posts/2026/2026-09-30-cqrs-mito-moda-realidad.html): separar el modelo de lectura del de escritura es, en el fondo, elegir la forma del dato para cada camino.

## Embeber o referenciar: la pregunta que define tu modelo

Llegamos al corazón del artículo. Todo diseño en MongoDB se resume en una pregunta por cada relación: **¿esto lo embebo dentro del documento, o lo dejo referenciado?**

La regla general, en una frase: **si lo lees siempre junto, guárdalo junto**.

| Situación | Decisión | Ejemplo |
|-----------|----------|---------|
| Relación 1:1 | Embeber | Dirección de envío de un pedido |
| 1:N con N acotado | Embeber | Los 30 productos de un pedido |
| 1:N sin techo | Referenciar | Los pedidos de un usuario |
| N:N | Referenciar | Productos ↔ categorías si un producto tiene muchas |
| Datos que cambian muy a menudo | Referenciar | Stock en un documento que se lee 10.000 veces por hora |
| Subdocumento gigante que solo a veces se usa | Referenciar o partir | PDFs, historiales largos |

Para verlo con un caso que tiene de verdad varias relaciones —el de siempre en sistemas de venta—, este es el diagrama entidad-relación que te dan en cualquier curso de SQL:

```mermaid
erDiagram
    CLIENTE ||--o{ VENTA : realiza
    VENTA ||--o{ LINEA_VENTA : contiene
    LINEA_VENTA }o--|| PRODUCTO : refiere
```

Cuatro tablas y tres `JOIN` para mostrar un recibo. Con documentos: una consulta y cero `JOIN`.

```json
{
  "_id": ObjectId("665f1c2e4a1b2c3d4e5f60789"),
  "fecha": ISODate("2026-10-20T18:30:00Z"),
  "cliente": { "id": 17, "nombre": "Ana Ruiz", "email": "ana@ejemplo.es" },
  "lineas": [
    { "producto": { "id": 5, "nombre": "Teclado mecánico" }, "cantidad": 2, "precioUnitario": NumberDecimal("89.99") },
    { "producto": { "id": 12, "nombre": "Ratón inalámbrico" }, "cantidad": 1, "precioUnitario": NumberDecimal("24.50") }
  ],
  "total": NumberDecimal("204.48")
}
```

Cada elección de ese documento es una fila de la tabla de arriba:

- **Cliente embebido**: lo lees con sus ventas, siempre juntos — la regla de oro.
- **Líneas embebidas**: son la venta misma, acotadas —dos, diez, cincuenta— y no cambian.
- **Producto referenciado**: solo `id` y nombre del momento; descripción y stock siguen vivos en su colección.
- **`total` precalculado**: el atributo computado del patrón de más abajo; no lo sumas en cada lectura.

Y esto congela, y esa es la decisión que hay que tomar con los ojos abiertos: la línea guarda el precio del momento —si mañana el teclado sube a 99,99, el recibo de ayer no se entera, que es exactamente lo que quieres en un ticket—. Pero si Ana cambia su email, sus ventas antiguas seguirán con el viejo. **Embeber no es gratis: lees deprisa y escribes caro** — y de paso congelas el dato. Si debe cambiar para todos, tienes miles de copias por delante; si es historia, ni lo pienses.

::: warning
Antes de embeber una lista, pregúntate si crecerá sin límite. Un array de comentarios embebido funciona perfecto con 50 comentarios; con 50.000 acabarás chocando con el siguiente límite del que hablamos ahora mismo.
:::

## El límite de los 16 MB

MongoDB no te deja guardar un documento de cualquier tamaño: el techo son **16 MB** (16.777.216 bytes, para el purista). Suena a capricho, y es lo contrario: es la garantía de que leer o escribir un documento cuesta lo mismo hoy que dentro de dos años, porque cabe entero en un mensaje de red, en memoria y en caché.

Para que te hagas una idea: 16 MB son unos 33.000 comentarios de 500 bytes. Nadie lee 33.000 comentarios en una pantalla. El problema no es el límite, es que el modelo a veces cae en la tentación.

Cuándo duele: colecciones con arrays que crecen sin parar —comentarios, historiales, listas de eventos, líneas de tiempo— y archivos binarios que alguien quiere guardar «solo por ahora». Tres soluciones, de la más simple a la más ambiciosa:

1. **Referenciar.** Los comentarios van a su propia colección con `productoId`. Es el camino habitual.
2. **Acotar o paginar el array.** Guardas los primeros N y el resto en otra parte; o partes el documento en bloques, como hace el patrón *bucket*.
3. **GridFS.** Para binarios de verdad —vídeos, PDFs, ZIPs—, MongoDB trocea el archivo en piezas de 255 kB en dos colecciones (`fs.files` y `fs.chunks`) y te lo deja tratar como si fuera un archivo más. Es a dónde van los archivos que superan el techo.

::: warning
El array que crece es la forma más común de chocar con los 16 MB, y suele descubrirse en producción, un viernes. Si tu documento lleva una lista sin límite claro, ya estás avisado.
:::

## Patrones de diseño que salvan proyectos

Los patrones de diseño de MongoDB se aprenden como recetas, y estas cinco cubren el 90% de los casos:

| Patrón | Cuándo | Cómo |
|--------|--------|------|
| Sub-documento embebido | Relación 1:1 o 1:N acotada | Lo guardas dentro, se lee en un toque |
| Aplanado (denormalización) | Lecturas muy repetidas | Repites el dato en cada documento y aceptas el coste de actualizar |
| Bucket | Series temporales, IoT, métricas | Varios registros pequeños embebidos en un documento de tamaño controlado |
| Árbol | Categorías de dos niveles, organigramas | Anidamiento directo; para profundidad libre, `$graphLookup` |
| Atributo computado | Contadores y agregados | Lo precalculas al escribir en vez de contar en cada lectura |

El patrón *bucket* merece una mención porque es el menos obvio. En lugar de un documento por lectura de sensor —que serían decenas de millones de documentos diminutos—, metes las lecturas de un día en un solo documento con un array. Menos documentos, menos índices, menos memoria desperdiciada: MongoDB tiene un tipo de colección específico para esto, **Time Series**, que hace el trabajo por ti.

Y el atributo computado es la misma lección de siempre: si el listado muestra «(24 reseñas)», no cuentes 24 reseñas en cada carga. Guarda el contador, incrementa al escribir y lee gratis. Tu yo del futuro, el que mira la factura de la base de datos, lo agradecerá.

## Índices: lo que separa una demo de producción

Sin índice, cada consulta barre **toda la colección**. En una demo con 500 documentos no lo notas; en producción con 10 millones, esa misma consulta se lleva tu CPU por delante. La buena noticia es que MongoDB te dice qué está haciendo: con `explain()` ves si hubo un `COLLSCAN` (barrido completo) o no.

```javascript
// Índice compuesto: filtrar por categoría y ordenar por precio
db.productos.createIndex({ categoriaId: 1, precio: -1 })

// Índice multikey: funciona sobre los elementos del array
db.productos.createIndex({ etiquetas: 1 })

// Índice TTL: el documento expira solo, sin cron ni limpieza
db.sesiones.createIndex({ expira: 1 }, { expireAfterSeconds: 3600 })
```

Un consejo de manual para el compuesto: ordénalos siguiendo la regla **ESR** — primero la igualdad (*equality*), después el orden (*sort*), al final el rango (*range*). Un índice `{ categoriaId: 1, precio: -1 }` sirve para «productos de la categoría 5 ordenados por precio»; al revés, no.

::: tip
Indexa lo que filtras y ordenas — y nada más. Cada índice extra compra velocidad de lectura a cambio de lentitud en cada escritura y de RAM ocupada. Si dudas, mide con `explain()` antes de añadirlo. No hay atajo: el índice que no usas es una factura que pagas en silencio.
:::

## El mito de «MongoDB no es transaccional»

Te lo dijeron en la universidad, o en el café, o en Twitter: *MongoDB no tiene transacciones*. Era cierto hace años, y ya no lo es. Desde la versión 4.0 (2018) MongoDB soporta transacciones **ACID multi-documento** dentro de un replica set, y desde la 4.2 también en clústeres particionados. Dos documentos, dos colecciones, todo o nada: se puede.

Pero ojo: la lección no es la que parece. Que pueda no significa que sea el camino por defecto. Las transacciones distribuidas cuestan: bloqueos, coordinación y un diseño que se complica. Si descubres que tu modelo de MongoDB necesita una transacción a cada paso, casi seguro que lo que necesitas es una base de datos relacional, y está bien reconocerlo. PostgreSQL también está escuchando.

## MongoDB en la vida real

Como en el artículo de Redis, tres casos contrastados con fuentes de las propias compañías:

| Compañía | Qué guarda en MongoDB | Cifra |
|----------|----------------------|-------|
| **Baidu** | Datos de su plataforma en la nube | Más de 600 nodos y petabytes de datos |
| **eBay** | Catálogo de producto y aplicaciones críticas | Réplica de hasta 50 miembros repartida entre centros de datos |
| **Forbes** | Su plataforma editorial completa | Migración a MongoDB Atlas en 6 meses; 58% más rápido construyendo productos nuevos |

El caso de eBay es el más ilustrativo de los tres: un replica set de 50 miembros distribuido entre varios centros de datos para que el catálogo esté disponible en todas partes, con lecturas servidas desde los secundarios. Y el de Forbes ilustra el argumento del esquema flexible: un medio donde el contenido cambia a cada momento —artículos, vídeos, listas, formatos nuevos— y donde un formato nuevo no exige una migración de esquema.

Y no es solo cuestión de catálogos: SAP eligió MongoDB como componente central de su plataforma como servicio, para que sus clientes no tengan que esperar a cada migración de esquema.

## MongoDB en .NET: driver nativo vs EF Core

Tu servidor habla C#, y aquí hay dos caminos para llegar a MongoDB. Los dos son oficiales, y los dos conviven en mi tienda a propósito, uno por repositorio.

```csharp
// Driver nativo: control total, la API de MongoDB a fondo
var coleccion = database.GetCollection<Pedido>("pedidos");
var pedidos = await coleccion
    .Find(p => p.UserId == userId)
    .SortByDescending(p => p.Fecha)
    .Limit(10)
    .ToListAsync();
```

```csharp
// EF Core: el mismo viaje con LINQ y DbContext
services.AddEntityFrameworkMongoDB()
    .AddDbContext<TiendaContext>(o => o.UseMongoDB(connectionString, "tienda"));

var pedidos = await context.Pedidos
    .Where(p => p.UserId == userId)
    .OrderByDescending(p => p.Fecha)
    .Take(10)
    .ToListAsync();
```

| Aspecto | Driver nativo | EF Core |
|---------|---------------|---------|
| Curva de aprendizaje | API propia de MongoDB | LINQ y `DbContext` que ya conoces |
| Pipelines de agregación | Naturales | Posibles, pero incómodos |
| Seguimiento de cambios | Manual (tú decides) | Automático |
| Migraciones de esquema | No aplica (esquema flexible) | No aplica |
| Madurez | Estándar de facto desde hace años | Oficial, pero mucho más reciente |

Mi regla personal: si el repositorio se limita a leer y escribir documentos, el proveedor de EF Core va sobrado y ahorra verbosidad. En cuanto necesitas una agregación de verdad —un `$group` con `$lookup` y tres etapas de transformación—, el driver nativo te lo sirve en bandeja. En la tienda, `PedidosNativeRepository` y `PedidosEfCoreRepository` hacen lo mismo, cada uno a su manera, y compararlos cara a cara es la mejor documentación que he encontrado. Todo está en los dos repos de GitHub —[TiendaDawApi-Cqrs-MediatR-NetCore](https://github.com/joseluisgs/TiendaDawApi-Cqrs-MediatR-NetCore) y [TiendaDawApi-NetCore](https://github.com/joseluisgs/TiendaDawApi-NetCore)—, y el desglose de cada camino en mis [apuntes de la UD02](https://github.com/joseluisgs/2DAW-DesarrolloWebServidor).

## Réplica, sharding y Atlas

Dos piezas de infraestructura que conviene conocer aunque no las montes tú.

El **replica set** es la réplica de Mongo: un nodo *primario* recibe las escrituras y se las copia a los secundarios mediante el *oplog*, un registro de operaciones que los secundarios reproducen en el mismo orden. Si el primario cae, los secundarios celebran una elección y uno asciende. Mientras tanto, las lecturas siguen saliendo desde los secundarios sin problemas.

```mermaid
flowchart TD
    A[Cliente] --> P[(Primario<br/>lecturas + escrituras)]
    P -->|oplog| S1[(Secundario<br/>lecturas)]
    P -->|oplog| S2[(Secundario<br/>lecturas + copia)]
    P -->|si cae| E{Elección}
    E --> S1
    style P fill:#dc3545,color:#fff
    style S1 fill:#198754,color:#fff
    style S2 fill:#198754,color:#fff
```

El **sharding** es el paso siguiente: cuando un solo servidor ya no da abasto, repartes los datos entre varios. La pieza clave es la *shard key*, el campo por el que se decide dónde vive cada documento. Por rangos va bien cuando consultas rangos consecutivos; por hash reparte mejor la carga, a costa de perder ese orden. Mal elegida, la shard key se convierte en el cuello de botella de tu clúster, y cambiarla después es un trabajo de cirugía mayor.

Y luego está **Atlas**, el servicio gestionado de MongoDB: tú escribes documentos, ellos se ocupan de réplicas, copias de seguridad y particionado. Hay un nivel gratuito —M0— que monta un replica set completo, y para clase o para un proyecto de módulo es más que suficiente.

::: tip
Para desarrollo, un contenedor y Compass (la interfaz gráfica oficial) te bastan. Para producción, Atlas te ahorra el mantenimiento de la infraestructura: la misma razón por la que te irías a un servicio gestionado de Redis o de PostgreSQL.
:::

## Change Streams: la base de datos te avisa

Hay una diferencia enorme entre preguntar cada cinco segundos «¿ha cambiado algo?» y que la base de datos te avise en cuanto pasa. MongoDB hace lo segundo de forma nativa con los **Change Streams** (flujos de cambios): escuchas en tiempo real inserciones, modificaciones y borrados de una colección.

Y no es magia: bebe del *oplog*, el registro de operaciones del que acabo de hablar. Por eso el requisito es el mismo que el del replica set — **no funciona en un servidor suelto**. Si montas el `docker-compose` de más abajo, que es un standalone, `WatchAsync()` te devuelve un error; necesitas un replica set, aunque sea de un solo nodo.

Además, ojo con lo que MongoDB **no** hace: no te abre un WebSocket a la página. Por seguridad y por arquitectura de red, el flujo estándar son tres pasos:

1. MongoDB emite el evento mediante el Change Stream.
2. Tu backend se suscribe con un cursor (`WatchAsync()`) y lo mantiene abierto.
3. Tu backend recibe el evento al instante y se lo retransmite a los clientes por WebSocket o SSE — en .NET, el vehículo habitual es **SignalR**.

El ejemplo, en C# y con colección tipada: lo que sale del stream es un `Venta`, no un `BsonDocument` suelto.

```csharp
IMongoCollection<Venta> ventas = database.GetCollection<Venta>("ventas");

// UpdateLookup: sin esto, una actualización solo trae los campos que
// cambiaron; con esto, el documento completo después del cambio
var opciones = new ChangeStreamOptions
{
    FullDocument = ChangeStreamFullDocumentOption.UpdateLookup
};

var pipeline = new EmptyPipelineDefinition<ChangeStreamDocument<Venta>>();

using var cursor = await ventas.WatchAsync(pipeline, opciones);
await cursor.ForEachAsync(cambio =>
{
    switch (cambio.OperationType)
    {
        case ChangeStreamOperationType.Insert:
            Console.WriteLine($"Venta nueva: {cambio.FullDocument.Total}");
            break;

        case ChangeStreamOperationType.Update:
            Console.WriteLine($"Venta modificada: {cambio.DocumentKey["_id"]}");
            break;

        case ChangeStreamOperationType.Delete:
            // En un borrado ya no hay documento: solo queda la clave
            Console.WriteLine($"Venta eliminada: {cambio.DocumentKey["_id"]}");
            break;
    }
});
```

Si esto te suena a CQRS, no es casualidad: en la tienda los cambios viajan como eventos de dominio de MediatR y el read model se sincroniza con ellos; el Change Stream es la misma idea, pero la trae MongoDB de fábrica.

## ¿Cuándo usar MongoDB y cuándo no?

Como en Redis, las dos listas:

**Usa MongoDB cuando:**
- Tus datos son documentos naturales: anidados, con listas, con formas que varían
- El esquema va a evolucionar y no quieres migraciones dolorosas
- Lees documentos enteros y devuelves el objeto sin montarlo a mano
- Necesitas consultas sobre la marcha con índices secundarios
- Quieres escalar horizontalmente sin rediseñar el modelo
- Buscas dentro de los datos (índices de texto o Atlas Search) además de filtrar

**No uses MongoDB cuando:**
- Tus datos son un entramado de relaciones y casi todas las consultas acaban cruzando tablas
- Necesitas integridad referencial estricta con claves ajenas y restricciones
- Todo tu modelo son transacciones fuertes a cada paso —eso es SQL, y está bien
- Lo que imaginas es una tabla plana y gigante sin estructura interna
- Tu equipo conoce bien SQL y no hay ningún dolor que justifique el cambio

MongoDB no es la respuesta a todo, igual que Redis. Es la respuesta a un tipo de pregunta concreta: *mis datos tienen forma, y quiero guardarlos con esa forma*.

## Docker: MongoDB en un momento

```yaml
# docker-compose.yml
services:
  mongo:
    image: mongo:8
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
volumes:
  mongo-data:
```

```bash
docker-compose up -d
docker-compose exec mongo mongosh --eval "db.runCommand({ping: 1})"
# → { ok: 1 }
```

Y si prefieres la vista gráfica, [MongoDB Compass](https://www.mongodb.com/products/compass) es la interfaz oficial: te conectas a `localhost:27017`, ves colecciones, documentos e índices, y hasta te explica los planes de ejecución de tus consultas con un clic.

## Reflexión

Modelar con documentos no es renunciar al diseño. Es hacerlo antes, en el sitio donde te sale gratis: en tu modelo de código, en vez de en un esquema rígido que pagarás con migraciones. Embeber o referenciar, el techo de los 16 MB, el ObjectId que se genera solo, los índices que separan la demo de producción. Son decisiones pequeñas que, tomadas en orden, componen un modelo que aguanta.

Baidu sostiene petabytes con 600 nodos. eBay reparte su catálogo en una réplica de 50 miembros. Forbes montó su plataforma editorial en Atlas en seis meses. Y en clase, con un contenedor y una tarde, montas lo mismo en tu portátil.

Si esto te ha encajado, el camino continúa: en [Redis](/posts/2026/2026-08-17-redis-base-datos-clave-valor.html) vimos la caché que va delante de la base de datos, y en [CQRS](/posts/2026/2026-09-30-cqrs-mito-moda-realidad.html) vimos cómo separar lecturas y escrituras —con MongoDB como read model de la tienda—. Los tres artículos son el mismo tema visto desde tres ventanas: dónde viven tus datos y por qué.

*¿Has modelado con documentos alguna vez? ¿Has tenido que partir un documento de 16 MB en producción? ¿Embes o referencias? Cuéntamelo en los comentarios.*
