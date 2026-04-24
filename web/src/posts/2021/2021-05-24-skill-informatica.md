---
title: Construyendo una skill de Alexa
description: Ejemplo de una Skill para el Departamento de Informática
date: 2021-05-24
category:
  - Proyectos
tag:
   - Tecnologías
   - Alexa
   - JavaScript
   - Node.js
icon: fa-brands fa-alexa
cover: https://m.media-amazon.com/images/G/01/DeveloperBlogs/AlexaBlogs/default/ACK_blog._CB483519732_.png
comment: true
sidebar: false
footer: true
---

La [Skill del Departamento de Informática](https://www.amazon.es/JLGS-Inform%C3%A1tica-Virgen-de-Gracia/dp/B088JPBLS9/ref=sr_1_8?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&dchild=1&keywords=informatica+skill&qid=1621671069&sr=8-8) representa un proyecto de innovación docente con fines didácticos con el objetivo de cómo diseñar un asistente de voz para conocer los ciclos existentes de la familia de informática. Te comento en esta entrada las bases del desarrollo de una *skill*.


<!-- more -->

## La Skill

Esta entrada voy a comenzar al revés 😉, te muestro el resultado y luego te iré comentando pasos o ideas para desarrollar una *skill*. 

Como he dicho, esta *skill* es un ejemplo didáctico y no es la mejor solución técnica al 100% por varios motivos, pero sí es muy útil para su uso docente y sobre todo para conocer el proceso de creación de una *Skill* de Amazon Alexa. Para ello sería interesante haber usado bases de datos o servicios web para hacer búsquedas más potentes y no ficheros, sobre todo para los datos locales. Pero se muestra el uso y consumo de servicios web en otras partes de su funcionalidad. Lo importante es conocer el proceso de desarrollo y diseño de interacción de voz (*front-end*) y el procesamiento de intenciones y eventos (*back-end*), y se propondrá como ampliación otras tecnologías como las indicadas en un futuro.

Esta *skill* representa un proyecto de innovación docente con fines didácticos con el objetivo de cómo diseñar un asistente de voz para conocer los ciclos existentes de la familia de informática, conocer los módulos, obtener información detallada de los mismos, saber cómo contactar, conocer las noticias del centro y del departamento, recordar tareas a realizar o cosas curiosas relacionadas con el desarrollo de *software*.

La *skill* se ha desarrollado dentro de los programas de formación de Desarrollo de Aplicaciones Multiplataforma (DAM), Desarrollo de Aplicaciones Web (DAW), Administración de Sistemas Informáticos y Redes (ASIR) y Sistemas Microinformáticos en Red (SMR), ciclos de formación profesional que se pueden estudiar en nuestro centro.

::: tip Tecnologías
* [Alexa Developer Doc](https://developer.amazon.com/es/documentation/)
* [Alexa Skill Kit](https://developer.amazon.com/es-ES/docs/alexa/ask-overviews/build-skills-with-the-alexa-skills-kit.html)
* [Alexa Voice Service](https://developer.amazon.com/es-ES/docs/alexa/alexa-voice-service/get-started-with-alexa-voice-service.html)
* Node.js: en el *Backend*.
* Lambda Function. Como parte del AWS *Serverless*.
:::

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://informaticacifpvg.netlify.app/assets/img/proyectos/departamento_skill.jpg" alt="Logo"></p>



## Desarrollando para Alexa

Antes de nada, quiero presentarte el [tutorial](https://github.com/joseluisgs/alexa-skill-tutorial) que hicimos en el grupo de trabajo del [Dpto. de Informática de Virgen de Gracia](https://informaticacifpvg.netlify.app/proyectos/departamento_skill_alexa/), donde se muestran los pasos para hacer una *skill* de manera más detallada y que resumo en esta entrada de la web.

::: tip ¿Cómo hacer una skill?
- [Tutorial disponible en repositorio 💻](https://github.com/joseluisgs/alexa-skill-tutorial)
:::


### ¿Qué es una Skill de Alexa?
Alexa es el servicio de voz ubicado en la nube de Amazon disponible en los dispositivos de Amazon y dispositivos de terceros con Alexa integrada. Además, cuenta con funcionalidades, o lo que Amazon llama «Skills», que permiten a los consumidores crear una experiencia más personalizada.

### ¿Qué es el Alexa Skills Kit?
El Alexa Skills Kit (ASK) es un conjunto de herramientas, documentación, muestras de código y API en *self-service* con el que puedes añadir *Skills* a Alexa de forma rápida y sencilla. El ASK permite a diseñadores, desarrolladores y marcas crear *Skills* atractivas y llegar a los consumidores. Con este kit, puedes aprovechar el conocimiento y la innovación de Amazon en el sector del diseño de voz.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://www.thurrott.com/wp-content/uploads/sites/2/2020/07/amazon-conversations.jpg" alt="Logo"></p>

### Pasos para crear tu skill
Primero se crea una nueva *Skill* de Alexa en la consola de desarrollo de Amazon y se configura el modelo de interacción para la interfaz de voz. Basándose en este modelo de interacción, se crea una función Lambda AWS (su *back-end*, por ejemplo en Node.js) que incluye la lógica del programa de tu *Skill*, la cual se ejecuta en la plataforma de computación en la nube AWS de Amazon. Para ello debemos crear el modelo interactivo de voz, probarlo y finalmente publicarlo.

### Arquitectura de una Skill
Una *Skill* se basa en el siguiente funcionamiento:
* Esta *skill* se lanzará a través de la palabra de inicio (Alexa) seguida de *invocation name* (*nombre de invocación*, *skill*) que a su vez tendrá una serie de frases de declaración de intenciones (*intent*).
* Un *intent* está compuesto por dos partes: los *utterances* (sentencias) que van a servir para invocarlo y los *slots*
(argumentos), opcionales, que puede tener.
* Por lo tanto tendremos un ejemplo: *Alexa, abre informática y dime los módulos de 2.º DAM*.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://blogs.encamina.com/piensa-en-software-desarrolla-en-colores/wp-content/uploads/sites/21/2019/01/alexa-architecture.jpg" alt="Logo"></p>

### Interaction Model: Invocación
El **interaction model del skill** consta de, al menos, dos partes: el nombre de invocación de tu *skill* y el conjunto de *intent* (acciones) que deben corresponder con las peticiones de los clientes. Es el *Front-end* de
nuestra aplicación.
* Nombre de invocación: el nombre de invocación será lo que el usuario use para comenzar a interactuar
con tu *skill* y debe cumplir una serie de requisitos.
* Creo que es bastante importante la elección que se hace porque el usuario podrá invocar el *skill* y ejecutar
un *intent* de una sola vez, *one-shot invocation*. Por ejemplo, "Alexa, abre informática virgen de gracia y dime
los módulos de segundo DAM" y tiene que tener sentido. El usuario también podría conseguir el mismo
resultado con: "Alexa, abrir informática virgen de gracia DAM”.
* A mí me gusta bastante la forma de usarlo de *one-shot invocation* y me he querido centrar en eso al diseñar
el modelo.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/alexa-skills-programmieren-EN-7.png" alt="Logo"></p>

### Interaction Model: Intents
Un **intent** está compuesto por dos partes: los *utterances* (sentencias) que van a servir para invocarlo y los
*slots* (argumentos), opcionales, que puede tener. Un par de cosas sobre los *utterances*:
* Dentro de un mismo *intent* no puedes tener dos *utterances* repetidos, pero sí el mismo con distintos *slots*.
* Los *utterances* los usa Alexa para inferir qué *intent* corresponde a lo que quiere hacer el usuario.
* Es importante que fijes el orden porque irá resolviendo según cómo los diseñes.


**Intents obligatorios**
Al crear un *skill* nuevo hay algunos *intents* obligatorios, predefinidos ya por Alexa, que tienes que tener cubiertos y
te los indica la consola debajo de "Built-in intents". Verás que son básicos, sin *slots*. Se pueden extender:
* `NavigateHome`, que se usa para *skill* multimodal, los que tienen pantalla, y equivale a un *exit*.
* `Cancel`, se usaría para cancelar alguna interacción en proceso.
* `Stop`, para dejar de usar el *skill*.
* `Help`, se invocaría por el usuario para pedir ayuda a nuestro *skill*.
* Para cada uno de estos tendrás que elegir *utterances* que vayan a invocarlo.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://res.cloudinary.com/hy4kyit2a/f_auto,fl_lossy,q_70/learn/modules/alexa-development-basics/how-to-design-voice-user-interface/images/1a5b4adf061c45f5e8b6172b6a481523_cj-8-udtea-300410-s-8-t-04-lhtyws.png" alt="Logo"></p>

### Interaction Model: Build model
Tenemos que pulsar el botón de "Build Model" y lo generará. El modelo que se genera no es
más que un JSON con toda la información que hemos ido construyendo con la consola. Este JSON se puede
ver una vez generado y modificar en vez de usar los *inputs* de *utterance* y todo eso que vimos antes.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/alexa-skills-programmieren-EN-20.png" alt="Logo"></p>

### Code
Es la pestaña donde programamos la funcionalidad, *Back-end*. Se implementan dentro de un AWS Lambda. Con la ventaja de que te lo
interconecta todo automáticamente si usas Node.js o Python. Si quieres Java, lo tendrás que hacer de manera manual.
Importante:
* `const Alexa = require('ask-sdk-core')` -> librería a usar.
* Tantos `RequestHandler` como necesitemos para manejar los *intents* que vengan del *skill*. El mismo `RequestHandler` puede manejar más de un *intent*.

El método `canHandle` se usa para chequear si el *handler* puede manejar la petición que llega. Aquí la lógica básica que se suele hacer es mirar el
nombre del *intent* de la *request*.
El método `handle` es el encargado de recibir el *input* y construir la respuesta para el usuario a partir de su *request*. Es el método donde irá el código más interesante del *handler*. En el caso del ejemplo me gustaría destacar tres cosas:
* `speak`, le estamos dando a la respuesta el texto que Alexa dirá de voz al usuario.
* `simpleCard`, aquí construimos una salida para Alexa que será útil para dispositivos con pantalla, como la *app* del móvil.
* `shouldEndSession`, con esto le indicamos a Alexa que, una vez manejada la *request*, no esperamos otra interacción con el usuario y cerramos la sesión, es decir, el *skill*.

Si queremos elaborar una respuesta de dos tipos: texto que dirá Alexa con voz y, además, información para construir una "tarjeta" que mostrará Alexa
en pantalla. Por último, con la opción de finalizar la sesión indicamos que no esperamos una interacción posterior. Sería un *handler* orientado a una
petición concreta y sin diálogo.

En el caso de que nuestro *handler* quiera indicar a Alexa que esperamos seguir interactuando con el usuario, tenemos que construir la respuesta
con `reprompt`.
`exports.handler = Alexa.SkillBuilders.custom()` -> ojo, el orden de los *handlers* importa a la hora de decidir cuál usará para manejar la petición del
usuario. Irá validando los *handlers* en el orden que los hemos registrado y usará el primero que retorne `true` en la validación del método `canHandle`. Son los *endpoints* de nuestra *skill*.

``` js
const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    // add the async keyword to this function so we can make async requests to the ISP API
    async handle(handlerInput) {
        // add these two lines
        const locale = handlerInput.requestEnvelope.request.locale;
        const ms = handlerInput.serviceClientFactory.getMonetizationServiceClient();

        try {
            const inSkillProductsList = await ms.getInSkillProducts(locale);
            console.log(inSkillProductsList);
        } catch (err) {
            console.log('ERROR', err);
        }
        
        const speakOutput = 'Welcome, you can say Hello or Help. Which would you like to try?';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};
```

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="http://alexaskillstutorials.com/wp-content/uploads/2020/01/make-money-alexa-skill-save-deploy-code-1024x437.png" alt="Logo"></p>

### Test
Nos vamos a la pestaña de *Test*, marcamos que estamos en *Development* y probamos a decir "open Hello World" o el *Invocation Name* que tiene de lanzamiento, o escribiéndolo en el cuadro de diálogo. De esta manera podremos probar nuestros *intents*, nuestros modelos interactivos y la respuesta del *back-end* a nuestras peticiones.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://www.ionos.es/digitalguide/fileadmin/DigitalGuide/Screenshots_2019/alexa-skills-programmieren-EN-30.png" alt="Logo"></p>

### Internacionalización
Copiamos nuestro JSON de interfaz (en inglés o español) y nos cambiamos a la pestaña de lenguaje en
español y lo pegamos.
* Traducimos nuestras frases. Le damos a construir y probamos. ¡Las respuestas siguen en inglés!
* Hemos localizado el *Front-end*, pero no el *Back-end*. Ahora debes abrir el fichero `index.js` y traducir cada
frase, si quieres. Esto es para que utilices plantillas si no puedes usarlo todo en español desde el comienzo.

### Publicación
Si has probado tu nueva *Skill* de Alexa y la has encontrado satisfactoria, puedes ponerla a disposición de otros usuarios a través de la *Alexa Skills Store*. Debes proporcionar toda la información necesaria para su publicación.

Para ello, ve a la sección "*Distribution*" (publicación) haciendo clic en el botón del mismo nombre situado en el menú de navegación de la consola de desarrollo de Alexa. Rellena todos los campos obligatorios bajo "*Skill Preview*" (vista previa de habilidades), "*Privacy & Compliance*" (privacidad y cumplimiento) y "*Availability*" (disponibilidad).

En "*Skill preview*", introduce toda la información que debe mostrarse en la vista previa a los usuarios en el país de destino deseado.

### Certificación
Una vez que hayas ingresado toda la información requerida para la publicación, puedes entregar tu *Skill* para su validación. Una vez que la *Skill* de Alexa que has programado complete con éxito el test funcional, estará lista para el paso final de la publicación, la "*Submission*" (enviar). Haz clic en "*Submit for Review*" (enviar para revisión) para certificar tu *Skill*.
Una vez que Amazon ha completado la revisión, recibirás un correo electrónico en la cuenta asociada a tu cuenta de desarrollador de Amazon. Existen básicamente dos escenarios posibles: 

* Tu *Skill* se ha certificado con éxito: en este caso, se te comunicará por correo electrónico cuándo se espera que tu *Skill* se publique en la *Alexa Skills Store*.
* Tu *Skill* no ha sido certificada: en este caso, Amazon ha identificado problemas durante el proceso de certificación. El correo electrónico incluirá un informe detallado de los cambios que se requieren para su certificación. Una vez que hayas hecho los ajustes necesarios, puedes volver a presentar tu *Skill* en cualquier momento.


Puedes ver el estado actual de todas las *Skills* de Alexa que has creado en la vista general de *Skills* de la *Alexa Developer Console*. 
* "*In development*": tu *skill* está en desarrollo.
* "*Certification*": tu *skill* está en el proceso de certificación.
* "*Live*": tu *skill* está disponible para los usuarios a través de la *Alexa Skills Store*.

<p style="text-align:center;"><img loading="lazy" style="border-radius: 0.25rem;" src="https://cdn.outsource2india.com/software/images/alexa-skill-development-services.jpg" alt="Logo"></p>

::: tip ¿Cómo hacer una skill?
- [Tutorial disponible en repositorio 💻](https://github.com/joseluisgs/alexa-skill-tutorial)
:::
