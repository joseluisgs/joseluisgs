---
title: Regreso a .NET en DAW. 20 razones para el cambio
description: Reflexiones sobre la transición en el contexto de la nueva Formación Profesional de DAW y el auge de la IA.
date: '2025-12-31'
# sidebar: 'auto'
subSidebar: true

categories:
  - Blog

tags:
  - Blog
  - Docencia

publish: true
image: 'https://www.ryadel.com/wp-content/uploads/2020/09/asp-net-core-c-sharp-logo.jpg'

# si quieres que se muestre en la portada fija
# sticky: 1

# si quieres que se muestre en la portada
giscus: true 

---

En noviembre de 2021, escribí un artículo que muchos de vosotros recordáis: **["Kotlin siempre en mi equipo"](https://joseluisgs.dev/blogs/2021/2021-11-28-kotlin-en-mi-equipo.html)**. En aquel entonces, defendía a Kotlin como la herramienta pedagógica definitiva (y lo sigue siendo). Sigo pensando que su diseño es magistral para su uso en la docencia, pero los tiempos han cambiado. La **Nueva Ley de FP**, la presión por enviar alumnos a la empresa en primero (quien pueda) y la realidad de un mercado backend en España que sigue anclado en tecnologías de "gran empresa", me han obligado realizar este cambio, con el objetivo de adaptar la enseñanza a las necesidades de esta nueva ley y su impacto en la docencia de primero (y segundo) de DAW donde tenemos que buscar el equilibrio entre la enseñanza de conceptos fundamentales (mi principal objetivo) y la preparación para el mercado laboral y la Fase de Formación en Empresas.

Este curso, he decidido pasarme a la **plataforma .NET con C#**. No es una decisión tomada a la ligera. Es una respuesta crítica y meditada a los retos que tenemos como docentes en este nuevo panorama educativo y profesional.

<!-- more -->

Antes de terminar este año 2025 y comenzar el 2026, quiero compartir con vosotros las razones detrás de este cambio y cómo .NET no solo es una plataforma robusta y moderna, sino también una herramienta pedagógica excepcional.

Te voy a dejar mis 20 razones para este cambio de paradigma en la docencia de DAW.


## 1. Nueva FP ¿Por que Kotlin ya no es suficiente?
Aunque Kotlin es un lenguaje moderno y expresivo, capaz de tocar de manera clara todos los paradigmas y conceptos de la programación, su ecosistema. Un lenguaje que ha experimentado un crecimiento significativo en los últimos años, especialmente en el desarrollo de aplicaciones Android y backend con Ktor o Spring Boot en todo el mundo. Sin embargo, su adopción en el mercado laboral español, especialmente en el ámbito empresarial, sigue siendo limitada en comparación con otras tecnologías más establecidas como .NET y JVM.

Antes, sin la fase de formación en empresas en primero, podía permitirme el lujo de enseñar Kotlin, centrándome en los conceptos fundamentales de la programación y dejando que los alumnos se adaptaran a las tecnologías específicas del mercado en segundo o durante sus prácticas. Kotlin es el mejor lenguaje puente para luego saltar a Java, C#, TypeScript, Swift o incluso Python.El objetivo era claro, enseñar a pensar en código, no en tecnologías específicas y en segundo espacializarnos en las tecnologías más demandadas con una base sólida y trabajada en primero.

El nuevo calendario de FP exige que los alumnos estén listos para formarse en empresas desde el primer año, con suerte. De hecho, ya no formamos tanto se cede parte de esa formación a las empresas (y perdonad que siga sin creérmelo, por lo menos en esta especialidad y en estos días, ojalá en el futuro cambie). A parte, tenemos el problema de las horas y si van todos los alumnos, si no van, a dónde van, etc. Un caos didáctico que me obliga a priorizar y buscar el equilibrio entre seguir trasmitiendo una base sólida de programación y preparar a los alumnos para que al menos puedan desenvolverse en la Fase de Formación en Empresas. Pero ya tenemos menos horas en primero y segundo, por lo que debo priorizar.

Debido a que yo no puedo asegurar la formación, ni horas ni a las empresas donde van a ir los alumnos o simplemente saber qué contenidos trabajaran en la empresa (y si los van a trabar realmente) debo asegurarme de que los conocimientos que adquieran en el aula sean directamente aplicables en el entorno laboral de una forma más directa. Y ahí es donde .NET brilla sobre Kotlin, por lo menos en España.

**C# y .NET** ofrecen un equilibrio perfecto entre **modernidad, robustez y demanda laboral**. Permiten a los alumnos aprender conceptos fundamentales de programación (según mi punto de vista) mientras se preparan para un mercado que valora estas habilidades. 

Quiero destacar que no soy un novato de C# y .NET, de hecho gané un premio con C# junto a mi equipo, Microsoft Imagine Cup España 2007 en lae especialidad de "Software Design" [ver](https://www.eleconomista.es/empresas-finanzas/noticias/196598/04/07/Estudiantes-granadinos-representaran-a-Espana-en-la-Imagine-Cup-Microsoft.html), pasé a Kotlin porque es la leche, y soy formador/certificador con JetBrains a nivel de mundial y ahora vuelvo a C#. He visto la evolución de ambos lenguajes y plataformas, y creo que .NET ha madurado de una manera que lo hace ideal para la enseñanza en DAW actual, bajo mi filosofía de aprendizaje. Creo que mi experiencia me permite hacer esta afirmación con fundamento y objetividad.

# Ventajas clave de C# y .NET para 1º DAW

## 2. El "Muro de Entrada": La pedagogía del punto de entrada

Sabemos que Java es poderoso, pero que le cuesta evolucionar y que otros lenguajes han tomado la delantera en términos de características modernas. Sin embargo,uno de los mayores errores de Java ha sido su incapacidad para adaptarse a una enseñanza gradual, para ir conociendo todos los paradigmas y fundamentos algorítmicos. Para que un alumno escriba su primera línea de código en Java, tiene que realizar un "acto de fe" masivo. Tiene que escribir una clase, un método estático y entender qué es un array de strings.

**Java (El peso de la herencia):**
Para explicar esto, tengo que adelantar conceptos de Programación Orientada a Objetos (clases), Visibilidad (`public`) y Contexto Estático (`static`) y ver que hay un array de strings (`String[] args`) cuando el alumno aún no sabe qué es una variable y solo quiere escribir su primera línea de código.

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("¿Por qué tengo que escribir todo esto y para qué sirve?");
    }
}

```

Incluso con las mejoras recientes (JEP 445), Java lucha por ocultar su complejidad, pero la estructura subyacente sigue asomando de forma prematura, enseñando lo que es un método `main` antes de que el alumno entienda la lógica básica.

```java
void main() {
    System.out.println("Pero sigo necesitando un método main y no lo he visto antes");
}
```


En cambio, **C# con Top-Level Statements** permite seguir el orden lógico del razonamiento humano: **Estructurada -> Modular -> Objetos -> Funcional**. Empezamos con la lógica, y el resto viene después, cuando el alumno está preparado. Sin duda es más eficiente pedagógicamente, no necesitas ni un método `main`.

**C# (Moderno):**

```csharp
// Directo, limpio, sin ruido.
Console.WriteLine("Aquí empieza la lógica, no la burocracia");

```

### Modularidad sin redundancia

Mientras Java intenta simplificar su sintaxis, C# ya ofrece un ecosistema maduro donde la modularidad es limpia y potente. Un ejemplo claro es la gestión de parámetros: en lugar de obligar al alumno a aprender la **sobrecarga de métodos** (escribir el mismo método varias veces con distintos argumentos), C# utiliza **parámetros opcionales y nombrados**.

Esto no solo es más fácil de enseñar, sino que es más eficiente en el mundo real.

```csharp
// Una sola definición cubre múltiples escenarios
void Saludar(string nombre = "Mundo", int veces = 1) 
{
    for (int i = 0; i < veces; i++) 
    {
        Console.WriteLine($"Hola, {nombre}!");
    }
}

// Flexibilidad total en la llamada:
Saludar();                         // Usa valores por defecto
Saludar("Ana", 3);                 // Argumentos posicionales
Saludar(veces: 5, nombre: "Luis"); // Argumentos nombrados: claridad absoluta

```

Además, C# permite un control granular de la memoria y la intención mediante modificadores de parámetros que Java no posee de forma equivalente:

* `out`: Para devolver múltiples valores de forma explícita.
* `ref`: Para paso por referencia real (no solo de la referencia al objeto).
* `in`: Para asegurar que un parámetro es de solo lectura, optimizando el rendimiento en estructuras grandes.


## 3. Tipado fuerte y explícito desde el principio
C# es un lenguaje fuertemente tipado, lo que significa que los tipos de datos son explícitos y claros desde el principio. Esto ayuda a los alumnos a comprender mejor cómo funcionan los datos y las operaciones en programación, así como a evitar errores comunes relacionados con tipos de datos y conversiones implícitas.

```csharp
int numero = 10; // Tipo explícito
string texto = "Hola, Mundo"; // Tipo explícito
double decimalNumero = 15.5; // Tipo explícito

// Inferencia de tipos con 'var'
var otroNumero = 20; // El compilador infiere que es int
var otroTexto = "Adiós, Mundo"; // El compilador infiere que es string
```

## 4. Seguridad ante nulos: Compilación vs. Runtime

Para mi esto es fundamental y más si este control es a nivel de compilación. El `NullPointerException` es el cáncer del aprendizaje. Java intentó solucionarlo con `Optional`, pero es un parche verboso que ensucia el código. En C#, el control de nulos es nativo y ocurre en **tiempo de compilación y de manera elegante**.

**La verbosidad de Java con Optional:**

```java
Optional<String> nombre = Optional.ofNullable(alumno.getNombre());
String resultado = nombre.map(String::toUpperCase).orElse("SIN NOMBRE");

```

**La elegancia de C# (Null Safety nativo):**
En C#, si una variable puede ser nula, lleva un `?`. Si no, el compilador te avisa. Es el mismo poder que me enamoró de Kotlin.

```csharp
string? nombre = alumno.Nombre;
string resultado = nombre?.ToUpper() ?? "SIN NOMBRE"; // El compilador me protege

```

## 5. Propiedades: Encapsulamiento sin el ruido
En Java, el encapsulamiento requiere escribir métodos `get` y `set`, lo que añade ruido y complejidad innecesaria, salvo que uses librerías de terceros como Lombok. C# introduce **propiedades** que permiten un acceso limpio y controlado a los campos, manteniendo el encapsulamiento sin la verbosidad, muy similar a Kotlin.



**Java (Verbosidad):**

```java
public class Alumno {
    private String nombre;
    public String getNombre() {
        return nombre;
    }
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
```

**C# (Propiedades limpias):**

```csharp
public class Alumno {
    public string Nombre { get; set; } // Encapsulamiento sin ruido
}
```

Podemos indicar que si una Propiedad es de solo lectura o escritura, usando `get;` o `set;` según convenga, o si es inmutable usando `init;` o la visibilidad, por ejemplo que no se pueda modificar desde fuera de la clase `private set;

```csharp
public class Alumno {
    public string Nombre { get; private set; } // Solo lectura desde fuera
    public int Edad { get; init; } // Inmutable después de la inicialización
}

var alumno = new Alumno { Nombre = "Luis", Edad = 20 };
```
Finalmente , con las Backing Fields, podemos tener lógica adicional en las propiedades sin perder la simplicidad, o usar campos calculados si es necesario.

```csharp
public class Alumno {
    public string Nombre { get; private set; } // Solo lectura desde fuera
    public int Edad { 
        get => field;
        // Podemos usar init para inmutabilidad después de la inicialización, pero lo dejamos con set para este ejemplo
        set {
            if (value < 0) throw new ArgumentException("La edad no puede ser negativa");
            field = value;
        }
    }
}
```



## 6. Tuplas, Estructuras, Clases y Registros: Elección según la necesidad
C# ofrece **estructuras (structs)** para datos ligeros (en el stack) y **clases** para objetos complejos, además de **registros (records)** para inmutabilidad y comparación por valor. Esto permite enseñar a los alumnos a elegir la herramienta adecuada según el caso, fomentando un diseño de software más consciente. Lo mejor de Clases y Data Classes de Kotlin juntos. Y además, los registros son inmutables por defecto, lo que fomenta buenas prácticas de programación funcional.

Si no, tienes las tuplas para datos temporales y ligeros, ideal para devolver múltiples valores sin crear una clase específica.

```csharp
public struct Punto {
    public int X { get; set; }
    public int Y { get; set; }
}

public record Alumno(string Nombre, int Edad); // Inmutable y por valor

var punto = new Punto { X = 10, Y = 20 };
var alumno = new Alumno("Juan", 20);
var otroAlumno = alumno with { Edad = 21 }; // Nuevo objeto con cambio

// Tuplas para múltiples valores
(int suma, int producto) Calcular(int a, int b) {
    return (a + b, a * b);
}

// Usamos desestructuración
var (suma, producto) = Calcular(3, 4);

```

## 7. Inicializadores de con Propiedades o constructores con parámetros nombrados y valores por defecto
C# permite inicializar objetos usando inicializadores de propiedades, lo que hace que el código sea más limpio y fácil de leer, similar a los data classes de Kotlin. 
```csharp
var alumno = new Alumno {
    Nombre = "Ana",
    Edad = 22
};
```

Además, los constructores en C# pueden tener parámetros nombrados y valores por defecto, lo que facilita la creación de objetos sin necesidad de múltiples sobrecargas de constructores, cosa que ya hemos visto antes.

```csharp
public class Alumno {
    public string Nombre { get; set; }
    public int Edad { get; set; }

    public Alumno(string nombre = "Desconocido", int edad = 18) {
        Nombre = nombre;
        Edad = edad;
    }
}

var alumno = new Alumno(edad: 22); // Nombre por defecto, Edad especificada
```

Finalmente, tenemos constructores primarios, ideales para ir al grano cuando queremos definir clases inmutables o registros.

```csharp
public class Alumno(string nombre, int edad) {
    public string Nombre { get; } = nombre;
    public int Edad { get; } = edad;
}
var alumno = new Alumno("Luis", 20);
```

## 8. LINQ: El lenguaje de las colecciones que habla SQL

Los `Streams` de Java son potentes, pero su sintaxis es alienígena para alguien que está aprendiendo Bases de Datos. **LINQ** en C# es el puente perfecto. Su similitud con SQL es tan grande que los alumnos aprenden ambos conceptos a la vez.

**Ejemplo comparativo de procesamiento de datos:**

Imagina esto en Java:

```java
// Streams: Verboso y menos intuitivo
List<Alumno> aprobados = listaAlumnos.stream()
    .filter(a -> a.getNota() >= 5)
    .sorted(Comparator.comparing(Alumno::getApellidos))
    .map(a -> new AlumnoDTO(a.getNombre() + " " + a.getApellidos(), a.getNota()))
    .collect(Collectors.toList());
```

```csharp
// LINQ: Parecido a SQL, fácil de razonar
var aprobados = listaAlumnos
    .Where(a => a.Nota >= 5)
    .OrderBy(a => a.Apellidos)
    .Select(a => new AlumnoDTO($"{a.Nombre} {a.Apellidos}", a.Nota))
    .ToList();
```

A parte de todo esto, C# y .NET ofrecen muchas colecciones y estructuras de datos listas para usar, lo que facilita la enseñanza de algoritmos y estructuras fundamentales sin tener que reinventar la rueda, ya sean listas, diccionarios, conjuntos, pilas o colas, todas con una sintaxis coherente y fácil de entender, además de sus versiones inmutables y concurrentes.


## 9. Programación Funcional, Extensiones y Pattern Matching

Java mete la programación funcional con calzador. Es demasiado verboso y poco intuitivo.


C# la abraza, ofreciendo características que hacen que el código sea más expresivo y limpio como pasaba con Kotlin.

* **Funciones de extensión:** Me permiten "limpiar" el código, y extender sin heredar. De lo que más usaba en Kotlin.
* **Pattern Matching:** Permite descomponer y analizar datos de forma clara y concisa.
* **Sobrecarga de operadores:** Permite definir cómo se comportan los operadores para tipos personalizados, haciendo el código más intuitivo.

**C# (Poder expresivo):**

```csharp
// Función de extensión + Pattern Matching + Switch Expression
public static string Categorizar(this double nota) => nota switch
{
    >= 9 => "Sobresaliente",
    >= 7 => "Notable",
    >= 5 => "Aprobado",
    _    => "Suspenso"
};

// Uso:
double miNota = 8.5;
Console.WriteLine(miNota.Categorizar()); // Imprime: Notable

```
## 10. Genéricos con "Guardas" (Constraints)

En Java, los genéricos son "borrados" en tiempo de ejecución (Type Erasure). En C#, son reales y, lo más importante, se pueden restringir. Esto permite enseñar **Diseño de Software** de alto nivel.

```csharp
// Solo aceptamos tipos que sean clases y tengan constructor
public class Almacen<T> where T : class, new() 
{
    public T GetNuevo() => new T();
}

```

## 11. Interoperabilidad total con otras plataformas
C# y .NET ofrecen una interoperabilidad excepcional con otras plataformas y lenguajes, lo que permite a los alumnos trabajar en entornos mixtos sin problemas. Esto es especialmente útil en proyectos empresariales donde la integración con sistemas existentes es común.

## 12. Ficheros y Serialización simplificada
Al contrario de Java, que requiere librerías externas para muchas tareas comunes, C# y .NET incluyen soporte nativo para trabajar con ficheros y serialización (JSON, XML) de manera sencilla y directa tal y como ocurre en Kotlin.

```csharp
// Leer y escribir JSON nativo
var alumno = new Alumno { Nombre = "Luis", Edad = 23 };
string json = JsonSerializer.Serialize(alumno);
var alumnoRecuperado = JsonSerializer.Deserialize<Alumno>(json);
```

## 12. Bases de Datos
Podemos usar las ventajas de ADO.NET para conexiones directas o **Entity Framework Core** para un ORM potente y moderno. EF Core permite trabajar con bases de datos relacionales usando LINQ, lo que facilita la enseñanza de conceptos de bases de datos y programación al mismo tiempo.

**Ejemplo con ADO.NET:**

```csharp
using (var conexion = new SqlConnection(cadenaConexion)) {
    conexion.Open();
    var comando = new SqlCommand("SELECT * FROM Alumnos WHERE Edad > @edad", conexion);
    comando.Parameters.AddWithValue("@edad", 18);
    using (var lector = comando.ExecuteReader()) {
        while (lector.Read()) {
            Console.WriteLine($"{lector["Nombre"]} - {lector["Edad"]}");
        }
    }
}
```

**Ejemplo con Entity Framework Core:**

```csharp
public class Alumno {
    [Key]
    public int Id { get; set; }
    [Required]
    public string Nombre { get; set; }
    [Range(0, 120)]
    public int Edad { get; set; }
}

public class EscuelaContext : DbContext {
    public DbSet<Alumno> Alumnos { get; set; }
}

var contexto = new EscuelaContext();
var alumnos = contexto.Alumnos
    .Where(a => a.Edad > 18)
    .ToList();
```

## 13. Interfaces de Usuario: Muchas opciones para todos los niveles
C# y .NET ofrecen múltiples opciones para crear interfaces de usuario, desde aplicaciones de consola hasta aplicaciones web y de escritorio. Esto permite adaptar la enseñanza según el nivel del alumno y el contexto del proyecto trasmitiendo conceptos de estado de la interfaz, eventos y si es necesario patrones de diseño como MVVM o MVC.

## 14. Testing con NUnit y Moq
C# tiene un ecosistema de testing muy maduro con frameworks como **NUnit** para pruebas unitarias y **Moq** para mocking. Esto facilita la enseñanza de buenas prácticas de desarrollo y asegura que los alumnos comprendan la importancia de las pruebas en el desarrollo de software.

```csharp
[TestFixture]
public class AlumnoServiceTests {
    [Test]
    public void TestRegistrarAlumno() {
        var servicio = new AlumnoService();
        var resultado = servicio.Registrar(new Alumno { Nombre = "Test" });
        Assert.IsTrue(resultado);
    }
}
```

# Ventajas clave de C# y .NET para 2º DAW

Aquí viene el gran cambio, pues uno de mis objetivos eran enseñar tres entornos: JVM (SpringBoot), .NET (ASP.NET Core) y PHP (Laravel). Y así fue hasta el año pasado, Este será el último año que lo haga de hecho ya ha desaparecido PHP. Por lo que solo me centraré en JVM y .NET a nivel de servicios y páginas web dinámicas. El motivo, es que no hay tiempo, puedes tener alumnos que no han hecho la fase de formación en empresas de primero y se le suman las horas a segundo. Un caos que de nuevo me obliga a priorizar. Más vale poco bien hecho que mucho mal hecho. Además, no salir de .NET me permite profundizar más y mejor en un solo ecosistema.

## 15. Asincronía, Reactividad y ROP: La bases del backend moderno

Enseñarle a un alumno `CompletableFuture` en Java es invitarle a dejar la programación (sé que he exagerado), pero debes unirle lo que es el ExecutorService. En C#, el modelo `async/await` es tan transparente que la programación asíncrona deja de ser un "muro" para ser una herramienta más. Muy similar a lo que pueden encontrar en JavaScript/TypeScript.

**Asincronía limpia:**

```csharp
public async Task<Alumno> GetAlumnoAsync(int id) 
{
    var response = await _client.GetAsync($"/api/alumnos/{id}");
    return await response.Content.ReadFromJsonAsync<Alumno>();
}

```

**Reactividad y LINQ:**
Podemos usar colecciones Asíncronas o Reactivas dependiendo si queremos un patrón "pull" u "push". Además, con LINQ podemos transformar flujos de datos de manera declarativa.

```csharp
// Patrón Pull (IAsyncEnumerable):
public async IAsyncEnumerable<Alumno> GetAlumnosAsync() {
    var response = await _client.GetAsync("/api/alumnos");
    var alumnos = await response.Content.ReadFromJsonAsync<List<Alumno>>();
    foreach (var alumno in alumnos) {
        yield return alumno;
    }
}

// Patrón Push (IObservable):
public IObservable<Alumno> GetAlumnosObservable() {
    return Observable.Create<Alumno>(async observer => {
        var response = await _client.GetAsync("/api/alumnos");
        var alumnos = await response.Content.ReadFromJsonAsync<List<Alumno>>();
        foreach (var alumno in alumnos) {
            observer.OnNext(alumno);
        }
        observer.OnCompleted();
    });
}

var alumnosAsync = GetAlumnosAsync().Where(a => a.Edad >= 18)
    .Select(a => new { a.Nombre, a.Edad } );

await foreach (var alumno in alumnosAsync) {
    Console.WriteLine($"{alumno.Nombre} - {alumno.Edad}");
}

var alumnosObservable = GetAlumnosObservable()
    .Where(a => a.Edad >= 18)
    .Select(a => new { a.Nombre, a.Edad });

alumnosObservable.Subscribe(alumno => 
    Console.WriteLine($"{alumno.Nombre} - {alumno.Edad}"));
```

**ROP: Adios al Try-Catch infinito**
C# permite implementar el patrón de "Vía de Tren". Si algo falla, el flujo se desvía, pero el código sigue siendo una línea recta. Los errores de dominio no son excepciones, son datos.

```csharp
public Result<Alumno> Registrar(AlumnoRequest req) =>
    .Ensure(r => ValidarDatos(r))
    .Bind(r => ComprobarDuplicados(r))
    .Bind(r => GuardarEnBD(r))
    .Bind(r => EnviarEmailBienvenida(r))
    .Tap(alumno => Log.Info($"Alumno registrado: {alumno.Id}"));


var resultado = servicio.Registrar(req)
    .Match(
      alumno => Console.WriteLine($"Alumno registrado: {alumno.Id}"),
      error => Console.WriteLine($"Error: {error.Mensaje}")
);

```

---

## 16. ASP.NET Core: El "Navío Insignia" del Backend para 2DAW

ASP.NET Core no es solo un framework; es un ecosistema coherente para DAW. Permite crear APIs RESTful robustas y escalables con una curva de aprendizaje suave. Su integración nativa con Entity Framework Core, Identity para seguridad y Middleware para gestión de peticiones lo convierten en una opción completa para el desarrollo backend. Además lo podemos usar no solo para servicios sino también para aplicaciones web completas con Razor Pages o Blazor.

### Controladores REST con ASP.NET Core MVC

Podemos crear controladores REST de manera sencilla y clara, con inyección de dependencias nativa y soporte completo para asincronía.

```csharp
[ApiController]
[Route("api/[controller]")]
// Usamos Primary Constructor para una inyección de dependencias ultra limpia
public class AlumnosController(IService service) : ControllerBase 
{
    [HttpGet("{id:int}")]
    public async Task<IActionResult> Get(int id) 
    {
        // Uso de pattern matching para un retorno elegante
        return await service.GetById(id) is { } res 
            ? Ok(res) 
            : NotFound();
    }

    [HttpPost]
    public async Task<IActionResult> Post(AlumnoRequest req) 
    {
        // En C#, el [ApiController] ya maneja el BadRequest automático 
        var resultado = await service.Save(req);
        return CreatedAtAction(nameof(Get), new { id = resultado.Id }, resultado);
    }
}

```

### Minimal APIs con Minimal APIs
ASP.NET Core permite crear APIs mínimas con una sintaxis muy concisa, ideal para microservicios o prototipos rápidos. Con `MapGroup`, mantenemos la organización del código sin necesidad de decoradores como [Route]. Al eliminar el motor de controladores, el pipeline de ASP.NET Core tiene menos capas que atravesar. El resultado es un menor consumo de memoria y un tiempo de respuesta más rápido (menor latencia), ideal para arquitecturas modernas de microservicios o aplicaciones de alto rendimiento.

```csharp
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddScoped<IService, AlumnoService>();

var app = builder.Build();

// Agrupamos las rutas para mayor limpieza
var alumnosApi = app.MapGroup("/api/alumnos");

// GET: Obtener por ID con validación de tipo en ruta
alumnosApi.MapGet("/{id:int}", async (int id, IService service) =>
    await service.GetById(id) is { } res 
        ? Results.Ok(res) 
        : Results.NotFound());

// POST: Crear nuevo alumno
alumnosApi.MapPost("/", async (AlumnoRequest req, IService service) =>
{
    var resultado = await service.Save(req);
    return Results.Created($"/api/alumnos/{resultado.Id}", resultado);
});

app.Run();
```

### Leer configuración desde appsettings.json de forma sencilla
ASP.NET Core facilita la gestión de configuraciones mediante el archivo `appsettings.json`. Podemos mapear configuraciones directamente a clases fuertemente tipadas, lo que mejora la seguridad y la claridad del código. Entre ellas para producción, desarrollo, testing, etc.

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=myServer;Database=myDB;User Id=myUser;Password=myPass;"
  },
  "Logging": {
    "LogLevel": {
      "Default": "Information",
      "Microsoft": "Warning"
    }
  }
}
```

```csharp
public class AppSettings {
    public ConnectionStrings ConnectionStrings { get; set; }
    public Logging Logging { get; set; }
}

public class ConnectionStrings {
    public string DefaultConnection { get; set; }
}

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<AppSettings>(builder.Configuration);
var app = builder.Build();
```

### Inyección de Dependencias nativa y potente
ASP.NET Core tiene un sistema de inyección de dependencias integrado que facilita la gestión de servicios y repositorios, promoviendo un diseño desacoplado y testeable.

Tenemos varias opciones de ciclo de vida para los servicios:
* `Transient`: Una nueva instancia cada vez que se solicita. Para servicios ligeros.
* `Scoped`: Una instancia por solicitud HTTP. Ideal para servicios que manejan datos de usuario.
* `Singleton`: Una única instancia durante toda la vida de la aplicación. Útil para servicios que mantienen estado global.

```csharp
services.AddTransient<ITransientService, TransientService>();
services.AddScoped<IScopedService, ScopedService>();
services.AddSingleton<ISingletonService, SingletonService>();
```

### Seguridad con Identity y JWT
ASP.NET Core ofrece un sistema de autenticación y autorización robusto con Identity, que se integra fácilmente con JWT para proteger nuestras APIs.

```csharp
services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options => {
        options.TokenValidationParameters = new TokenValidationParameters {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = "tu-issuer",
            ValidAudience = "tu-audience",
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes("tu-secreto"))
        };
    });
```

A nivel de autorización, podemos usar políticas y roles para controlar el acceso a recursos específicos.

```csharp
[Authorize(Roles = "Admin")]
public IActionResult AdminOnly() {
    return Ok("Solo accesible para administradores");
}
```


### WebSockets normales o con SignalR

Mientras en otros lenguajes tienes que gestionar el protocolo de WebSockets a mano, **SignalR** te da una abstracción de "Hubs" que funciona sola, gestionando reconexiones y fallbacks automáticamente. Esto es una ventaja para conocer los dos mundos: WebSockets y comunicación en tiempo real.

```csharp
public class ChatHub : Hub {
    public async Task SendMessage(string user, string message) {
        await Clients.All.SendAsync("ReceiveMessage", user, message);
    }
}
```

### GraphQL con HotChocolate
HotChocolate es una librería moderna para implementar GraphQL en ASP.NET Core. Permite definir esquemas y resolvers de manera sencilla, facilitando la creación de APIs flexibles y eficientes.

```csharp
public class Query {
    public IEnumerable<Alumno> GetAlumnos([Service] IAlumnoService service) => service.GetAll();
}

services
    .AddGraphQLServer()
    .AddQueryType<Query>();
``` 

### Caching con MemoryCache y Distributed Cache con Redis
ASP.NET Core ofrece soporte nativo para caching en memoria y distribuido. Podemos usar `IMemoryCache` para caché local y `IDistributedCache` para caché distribuido con Redis.

```csharp
services.AddMemoryCache();
services.AddStackExchangeRedisCache(options => {
    options.Configuration = "localhost:6379";
    options.InstanceName = "SampleInstance";
});
```

### Validación con Data Annotations y Fluent Validation
ASP.NET Core soporta validación de modelos usando Data Annotations, lo que permite definir reglas de validación directamente en las clases de modelo.

```csharp
public class Alumno {
    [Required]
    public string Nombre { get; set; }
    [Range(0, 100)]
    public int Edad { get; set; }
}
```

### Middleware personalizado
Podemos crear middleware personalizado para gestionar peticiones y respuestas, permitiendo implementar lógica transversal como logging, manejo de errores o autenticación.

```csharp
public class LoggingMiddleware {
    private readonly RequestDelegate _next;

    public LoggingMiddleware(RequestDelegate next) => _next = next;

    public async Task InvokeAsync(HttpContext context) {
        Console.WriteLine($"Request: {context.Request.Method} {context.Request.Path}");
        await _next(context);
        Console.WriteLine($"Response: {context.Response.StatusCode}");
    }
}
```

### NoSQL, más allá de SQL: MongoDB y Redis
ASP.NET Core se integra fácilmente con MongoDB usando librerías como MongoDB.Driver, permitiendo trabajar con bases de datos NoSQL de manera eficiente, similar a su filosofía y con integración en LINQ.

```csharp
public class AlumnoService {
    private readonly IMongoCollection<Alumno> _alumnos;
    public AlumnoService(IMongoDatabase database) {
        _alumnos = database.GetCollection<Alumno>("Alumnos");
    }
    public async Task<List<Alumno>> GetAll() => await _alumnos.Find(_ => true).ToListAsync();
}
```

Por otro lado, Redis puede usarse tanto como base de datos en memoria como sistema de caché distribuido, ideal para mejorar el rendimiento de aplicaciones web.

```csharp
services.AddStackExchangeRedisCache(options => {
    options.Configuration = "localhost:6379";
    options.InstanceName = "SampleInstance";
});

// Uso de Redis Cache
public class AlumnoService {
    private readonly IDistributedCache _cache;
    public AlumnoService(IDistributedCache cache) {
        _cache = cache;
    }

    public async Task<Alumno> GetAlumnoAsync(int id) {
        var cachedAlumno = await _cache.GetStringAsync($"alumno_{id}");
        if (cachedAlumno != null) {
            return JsonSerializer.Deserialize<Alumno>(cachedAlumno);
        }
        // Lógica para obtener el alumno de la base de datos
        var alumno = await ObtenerAlumnoDeBD(id);
        await _cache.SetStringAsync($"alumno_{id}", JsonSerializer.Serialize(alumno));
        return alumno;
    }
}
```

## 17. El adiós a la "Ceguera de Plantillas": Razor y Blazor

Este es el punto donde Java (Spring Boot) pierde por goleada.

¿Por qué? Porque en Java los motores de plantillas son "ciegos". No tienen ni idea de lo que pasa en el backend. Si cambias una propiedad en el modelo, el HTML sigue igual. Tienes que hacer todo a mano, y si quieres reactividad, te toca JavaScript. Por otro lado, ¿Cuál es el motor de plantillas ideal para Java y Spring Boot? Thymeleaf, Pebble, FreeMarker... todos ellos con sus pros y contras, pero ninguno perfecto. y además, ninguno con tipado fuerte y oficial dentro del Framework.

* **Razor:** Los motores de plantillas de Java son "ciegos". En Razor, si cambias una propiedad en el modelo, **el HTML no compila**. Tienes tipado fuerte en la vista. Si tienes un modelo `Alumno` con una propiedad `Nombre`, y en la vista intentas acceder a `NombreCompleto`, el compilador te avisará de que esa propiedad no existe. Esto evita errores en tiempo de ejecución y mejora la calidad del código. Es el motor de plantillas oficial de ASP.NET Core y está profundamente integrado con el framework. 

```razor
// Vista Razor con tipado fuerte
// Importamos el modelo
@model Alumno

<h1>Hola, @Model.Nombre!</h1>
<p>Edad: @Model.Edad</p>
@{
    var mayorDeEdad = Model.Edad >= 18 ? "Sí" : "No";
}
<p>Mayor de edad: @mayorDeEdad</p>
```

* **Blazor Server:** Permite crear interfaces interactivas y reactivas usando **C# en el cliente**. El estado vive en el servidor y se comunica vía SignalR (Websocket). No confundir con Blazor en WebAssembly (solo cliente). El alumno puede crear una SPA sin haber tocado una sola línea de JavaScript si aún no está preparado para ello. Con ello a sus páginas web dinámicas les añade reactividad y capacidad de respuesta en tiempo real. De hecho su sintaxis es muy similar a Razor, por lo que el aprendizaje es progresivo dentro del mismo ecosistema. De hecho, podríamos acceder a los servicios del backend que quedan comunicados via SignalR.

**Ejemplo de Blazor (Reactividad pura):**

```cshtml
@page "/counter"
@inject IServicioContadores Servicio // Inyección del servicio de BD

<p>Contador: @count</p>

<button @onclick="Incrementar">Incrementar</button>
<button @onclick="Salvar">Salvar en BD</button>

@code {
    private int count = 0;

    private void Incrementar() => count++;

    private async Task Salvar() {
        await Servicio.GuardarValor(count); // Acceso directo al backend C#
    }
}

```

---

## 18. Más allá de la Web: Análisis de Datos con DataFrames

Incluso para el análisis de datos, .NET ha dado un paso al frente con `Microsoft.Data.Analysis`. Podemos enseñar fundamentos de procesamiento masivo de datos demandados en el lado del servidor sin salir del ecosistema .NET. Al igual que en Kotlin, son DataFrames tipados y optimizados e incluidos en el ecosistema oficial.
```csharp
var df = DataFrame.LoadCsv("datos.csv");
var filtrado = df.Filter(df["Nota"].GreaterThan(5));
Console.WriteLine(filtrado.Description());

```


## 19. Fundamentos o muerte: El rol del programador en la era de la IA

Hoy en día, la sintaxis ha pasado a ser una *commodity*. Es barata, casi gratuita. Si un alumno quiere un bucle que recorra un array y filtre los pares, la IA se lo da en segundos (si sabes escribir el prompt adecuado). Como profesor, soy plenamente consciente de que mis alumnos usan estas herramientas, y es precisamente por eso que **la exigencia en los fundamentos debe ser más feroz que nunca.**

### El espejismo de la productividad

El gran peligro de la IA en el aula es el "programador Frankenstein": aquel que pega trozos de código que funcionan por puro azar, pero que no entiende la arquitectura que los sostiene. Sin una base sólida, el alumno es un rehén de la IA. Si no conoces los fundamentos, **¿cómo vas a auditar lo que la máquina te entrega?** ¿Cómo vas a saber si ese código es eficiente, seguro o si está introduciendo una deuda técnica inasumible? Esto siemprelo hemos defendido incluso antes de este "boom" de la IA, pero ahora es más crítico que nunca saber el porqué detrás del qué.

Si no sabes qué es una **Inyección de Dependencias**, no sabrás por qué la IA te está sugiriendo un constructor con cinco interfaces. Si no entiendes el **Contexto de Asincronía**, no sabrás por qué tu aplicación se bloquea a pesar de que el código "parece" correcto o cuando es mejor ser asíncrono frente a reactivo o las ventajas de algunos patrones de diseño. Si no sabes qué es un **ORM** y cómo funciona, no entenderás las implicaciones de usar Entity Framework Core frente a ADO.NET puro. Y así con todo.

### .NET como laboratorio pedagógico

He elegido .NET y C# no por capricho, sino porque es un ecosistema "total". Toca todos los palos que un analista-programador debe dominar para sobrevivir al cambio tecnológico constante y que lo tenía con Kotlin, pero con un enfoque más industrial y pragmático:

* **Gestión de memoria y tipado:** Desde punteros y memoria no administrada hasta el recolector de basura.
* **Multiparadigma real:** Te obliga a entender desde la Programación Orientada a Objetos más pura hasta el funcionalismo moderno.
* **Asincronía y Reactividad:** Modelos claros y robustos para entender la concurrencia y el rendimiento.
* **Acceso a datos:** Desde ADO.NET hasta Entity Framework Core, cubriendo SQL y NoSQL.
* **Testing y Calidad:** Herramientas integradas para asegurar que el código es fiable y mantenible.
* **Desarrollo Web completo:** Desde Razor y Blazor hasta APIs RESTful, GraphQL, WebSockets con ASP.NET Core.
* **Arquitectura:** Te sumerge en patrones de diseño, middleware, seguridad y servicios desde el minuto uno.

### El lenguaje como medio, el fundamento como fin

La IA nos permite algo maravilloso: **la capacidad de migrar.** Si un alumno sale de mis clases con una base sólida en C#, mañana podrá usar la IA para saltar a Java, Kotlin, TypeScript, C++, Rust, Go o Swift en una semana. ¿Por qué? Porque ya conoce los conceptos subyacentes. La IA le traducirá la sintaxis, pero el alumno pondrá el criterio, la estructura y el juicio crítico. Eso es parte de lo que intento enseñar y fomento en las partes de autoaprendizaje y proyectos.

Mi objetivo no es formar "picacodigos" de C# (tampoco lo era antes con Kotlin) Mi objetivo es formar un perfil de **analistas/programadores** que usen C# como el laboratorio perfecto para entender cómo se construye software profesional. En un mundo lleno de ruido generado por código automatizado, el valor diferencial del humano es su capacidad de comprender los pilares. Si sabes cómo funciona el motor, no importa qué coche te den mañana: sabrás conducirlo. Recuerda, la tecnología cambia, pero los fundamentos permanecen.


---

## 20. Conclusión: Ética docente frente al caos legislativo y la incertidumbre empresarial

La FP moderna en España se ha convertido en un campo de batalla donde el docente es, a menudo, el último bastión de la cordura. Nos enfrentamos a calendarios imposibles y a **leyes diseñadas en despachos por gente que hace décadas que no pisa un aula**, o que directamente nunca ha tenido que gestionar un grupo de 30 alumnos con ritmos de aprendizaje dispares y sin ordenadores haciendo turnos para usarlos.

### La falacia de la "Formación en Empresa"

La nueva ley nos vende la "Dualidad" como la panacea, pero la realidad a pie de calle es mucho más cruda. Existe una **incertidumbre total sobre qué formación recibirá el alumno en la empresa**. Primero, ¿irán todos y en qué turnos? Por otro lado, mientras un alumno tiene la suerte de entrar en un equipo de desarrollo sólido que le enseña conceptos y fundamentos guiados, otro acaba en una empresa donde "hacer programación" consiste en maquetar tablas en HTML o cambiar colores en un CSS, sin tocar una sola línea de lógica de negocio, arquitectura o bases de datos. Otros, solo ven SQL y nada de código y otros ni eso.

En segundo es más de lo mismo, pero siempre tiene el objetivo de tener alumnos productivos. Reducir el proceso de aprendizaje para tener alumnos que produzcan cual trabajadores. Es un error saltarse algunas etapas del aprendizaje. por suerte eso no pasa en este ciclo, y nuestros alumnos están bien valorados en las empresas por la formación que reciben en el aula en todos los módulos de DAW.

Como docente, **no puedo permitir que el azar decida la calidad profesional de mis alumnos**. No puedo garantizar que la empresa los forme (y en qué tecnología lo haga o en qué profundicen más), porque muchas carecen de la capacidad, el tiempo o la estructura para hacerlo (de manera efectiva a nivel formativo). Por eso, mi responsabilidad es "mover ficha" en el aula. He elegido **.NET y C#** como mi "muro de contención": un ecosistema tan completo que me permite asegurar que, independientemente de si la empresa les enseña o no, ellos saldrán con un mínimo de fundamentos sólidos de la manera más unificada (integrados en el mismo ecosistema), pragmática y alineada con el mercado laboral actual.

### Un compromiso ético: No somos una fábrica de títulos

Podría limitarme a seguir el currículo, poner parches en varios lenguajes o entornos, hacer la vista gorda con la IA y expedir títulos que, en el fondo, serían papel mojado. Pero **mi ética profesional me lo impide**. No quiero ser parte de una maquinaria que regala diplomas sin sentido; quiero asegurar que cuando un alumno mío sale al mercado laboral, lo hace con garantías reales de competencia, de capacidad de adaptación y autoaprendizaje.

El cambio a **Full Stack C#** es, en esencia, una decisión ética y práctica en el aula. Es un reto reescribir apuntes, prácticas y proyectos, pero es un "sacrificio" (hecho con mucho gusto) necesario para garantizar que mis alumnos no solo sobrevivan, sino que prosperen en un entorno profesional cada vez más exigente y automatizado. Les ofrezco:

* Un **bisturí pedagógico** para entender los fundamentos de la programación y el desarrollo de software.
* Un **mapa completo del ecosistema profesional** que les permitirá adaptarse a cualquier entorno tecnológico.
* Un **seguro de empleabilidad** en un mercado laboral que valora la experiencia en .NET y C#, siendo uno de los pilares tecnológicos más demandados y seguros.

### Volver a casa con una mirada nueva

No os voy a engañar: este cambio lo he hecho con una sonrisa. Yo venía de .NET y C# (en proyectos gordos e importantes),y volver a este ecosistema me hace sentir "en casa". Pero no vuelvo igual; vuelvo con la experiencia de haber explorado otros mundos de una manera bastante profunda y con la capacidad de importar lo mejor de ellos para aplicarlo en mi docencia.

¿Qué pasará con Kotlin? Seguiré usándolo en proyectos personales y de investigación. Sigo colaborando con JetBrains en iniciativas educativas y asesorando a otros profesionales en distintos cursos y actividades formativas por todo el mundo.

Deseo que este cambio sirva para que, tanto alumnos como otros docentes, entendáis que la programación no va de subirse al carro del último lenguaje "de moda". Va de **fundamentos sólidos, de criterio técnico y de respeto por la profesión**. Hoy por hoy, para mí, no existe mejor alternativa que .NET y C# para lograr este objetivo en el complejo contexto de DAW. ¿Mañana? Quién sabe. La tecnología evoluciona, y nosotros, como docentes, debemos evolucionar con ella, siempre con la mirada puesta en lo que realmente importa: **la formación integral y crítica de nuestros alumnos.** ¿y tú, qué opinas?

>**No formamos gente que pica código; formamos a los profesionales que diseñarán el software del mañana. Y eso, pese a quien pese, se decide en el aula.**



