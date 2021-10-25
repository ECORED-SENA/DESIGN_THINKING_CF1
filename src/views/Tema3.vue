<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Fase de empatía

    p.mb-3 La fase inicial del <i>Design Thinking</i> busca, a través de diferentes herramientas, entender las necesidades reales en el contexto del usuario para lograr generar soluciones pertinentes y eficientes para el problema planteado.

    .row.justify-content-center.align-items-center.p-5
      .col-12.mb-5
        img(src='@/assets/curso/images/tema3/img_1.svg' alt="", style="width:800px; display:block; margin:auto;")

      p Según la Real Academia Española, se entiende como empatía la capacidad de identificarse con alguien y compartir sus sentimientos; para el <i>Design Thinking</i> es la primera fase de la metodología. Sin embargo, antes de comenzar la fase de empatizar, es necesario saber cuál es el reto o situación que se quiere intervenir con las herramientas que presenta la metodología y, posteriormente, comenzar con el proceso de empatizar, donde se busca entender por qué las personas hacen lo que hacen o piensan lo que piensan. Es una fase de pensamientos expansivos y divergentes, donde se debe ubicar en una postura de aprendiz/observador, practicar la capacidad de asombro y dejarse sorprender por lo conocido. 
      
    .cajon.color-custom-1.p-4.mb-5
      .row.justify-content-center.mb-3  
        .col-10
          p Empatizar requiere habilidades como la escucha activa, recolección de información e interés genuino por el usuario; así como escuchar, observar y preguntar con el propósito de entender, desde los zapatos del usuario, su visión del mundo, sin que lo anterior incite a emitir juicios de valor.

    p.mb-5 La posición como investigadores debe ser neutral, lo cual permitirá obtener gran cantidad de información que, posteriormente, se podrá filtrar y analizar. Así, la empatía es el entendimiento del comportamiento del usuario en relación con una problemática real, debe ser un entendimiento profundo y no puede ser superficial, porque es la base y guía para obtener buenos resultados con el proceso.

    h5 Proceso de empatía

    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-8
        .cajon-b.color-primario.p-3.mb-3
          p.mb-0 Para comenzar el proceso de empatizar, se debe tener claramente identificado el problema y quiénes son los posibles usuarios implicados en el mismo. A partir de esto se puede comenzar a aplicar las diferentes herramientas que se conocen como lienzos, sobre los cuales reposa información para fomentar la participación activa de las personas que van a intentar resolver el problema. 
      .col-auto
          img(src='@/assets/curso/images/tema3/img_3.svg' alt="", style="width:300px; display:block; margin:auto;")
    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-auto
          img(src='@/assets/curso/images/tema3/img_4.svg' alt="", style="width:300px; display:block; margin:auto;")
      .col-8
        .cajon-b.color-primario-2.p-3.mb-3
          p.mb-0 Se recomienda que todo el proceso se realice con el usuario implicado, sin embargo, cuando no se tiene acceso directo a él, los equipos de trabajo de las organizaciones pueden tratar de construir perfiles ficticios bajo los cuales trabajar, teniendo en cuenta los parámetros recolectados reales. Es de recordar que cada una de las personas que conforman la organización ha recolectado experiencias y problemáticas del cliente que nutrirán el proceso desde diferentes perspectivas.  
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-8
        .cajon-b.color-primario-1.p-3.mb-3
          p.mb-0 Es importante aclarar que este proceso puede tener diferentes objetivos según la necesidad de la organización, debido a que puede ser aplicado tanto para fines comerciales como para solucionar problemas internos de la misma. 
      .col-auto
          img(src='@/assets/curso/images/tema3/img_2.svg' alt="", style="width:300px; display:block; margin:auto;")
    .jumbotron-6.borde.p-4.mb-5
      p Entender lo que las personas sienten, escuchan, cómo se comportan, lo que dicen y hacen, qué los motiva y qué los frustra es un buen punto de partida.   

    h5 Herramientas

    p.mb-3 Existen diferentes herramientas y técnicas para comenzar a empatizar dentro de un proceso de <i>Design Thinking</i>, donde su objetivo principal es sumergir al interesado en información proveniente de diferentes fuentes para entender la realidad del problema identificado en ojos del usuario seleccionado de la manera más genuina posible. Lo anterior con el propósito de consolidar datos verídicos que permitan una toma de decisiones acertada y minimicen la incertidumbre generada en este tipo de procesos.

    p.mb-5 Existe diversidad de herramientas para comenzar con un proceso de empatía dentro de la metodología <i>Design Thinking</i>, a continuación se profundizará en las más usadas:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5.p-4.elemento-color(titulo="Mapa de empatía" :icono="require('@/assets/curso/images/tema3/ico_1.svg')")
        .row.justify-content-center.align-items-center.mt-5.mb-5
          h5.mb-5 Mapa de empatía
            br
            br
            .col-12
              .cajon.color-custom-1.p-4.mb-3
                .col-12
                  p Es una herramienta que permite describir al usuario con el que queremos trabajar en nuestro proyecto a través de un lienzo dividido en seis partes, las cuales incluyen diferentes preguntas con el objetivo de visualizar las necesidades del consumidor al ponerse en su lugar e identificar los diferentes elementos que generan respuestas emocionales en él.
            
            p.mb-5 Para realizar el mapa de empatía debemos seleccionar cuál es el grupo de usuarios que queremos impactar con nuestro proyecto y reconocer sus características más importantes, luego de esto es importante responder las siguientes preguntas: 
              br
              br
              ImagenInfografica.color-secundario.mb-3
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/images/tema3/img_5.svg',  alt="", style="width:900px; display:block; margin:auto;")
                    

                .tarjeta.color-infografica.p-3(x="50%" y="24%")
                  .row.justify-content-center.mb-3  
                    .col-8
                      h5.mb-2 ¿Qué piensa y siente?
                      p Conocer cuáles son las principales inquietudes y aspiraciones del usuario a corto, mediano y largo plazo.
                .tarjeta.color-infografica.p-3(x="65%" y="38%")
                  .row.justify-content-center.mb-3  
                    .col-8
                      h5.mb-2 ¿Qué ve?
                      p Describir el entorno social de la persona, cómo es y qué imágenes o situaciones se presentan dentro de su cotidianidad.
                .tarjeta.color-infografica.p-3(x="65%" y="62%")
                  .row.justify-content-center.mb-3  
                    .col-8
                      h5.mb-2 Resultados
                      p iEste mapa de empatía permite conocer en profundidad al usuario, recogiendo sus características principales para tomar decisiones que permitan generar mpacto y valor en las soluciones ofrecidas.
                .tarjeta.color-infografica.p-3(x="51%" y="75%")
                  .row.justify-content-center.mb-3  
                    .col-8
                      h5.mb-2 ¿Qué dice y hace?
                      p  Detallar el discurso de la persona, cómo es su comportamiento y sus prácticas diarias, entender si hay coherencia entre estas dos prácticas para conocer al usuario desde su comportamiento.
                .tarjeta.color-infografica.p-3(x="36%" y="62%")
                  .row.justify-content-center.mb-3      
                    .col-8
                      h5.mb-2 Esfuerzos
                      p Luego de responder estas preguntas iniciales, se concluye el mapa de empatía con dos preguntas más: 
                      p ¿CUÁLES SON SUS DOLORES? 
                      p ¿CUÁLES SON SUS NECESIDADES? 

                .tarjeta.color-infografica.p-3(x="36%" y="37%")
                  .row.justify-content-center.mb-3  
                    .col-8
                      h5.mb-2 ¿Qué oye?
                      p Describir los estímulos que escucha el usuario, abarcando su estilo musical, el tipo de noticias, información de familiares, amigos y líderes de opinión que sigue.
        
            p.mb-3 Para conocer más sobre la entrevista semiestructurada como herramienta para empatizar, se invita a observar el video que se encuentra en el material complementario.

      .py-4.py-md-5.p-4.elemento-color(titulo="Mapa de travesía del usuario" :icono="require('@/assets/curso/images/tema3/ico_2.svg')")
        .row.justify-content-center.align-items-center.mt-5.mb-5
          h5.mb-5 Mapa de travesía del usuario
            br
            br
            .col-12
              .cajon.color-custom.p-4.mb-5
                .col-12
                  p Esta herramienta es muy utilizada para el diseño de servicios ya que permite tener una visión gráfica sobre el proceso que atraviesa un usuario al acceder a un producto o servicio. 
              .cajon.color-custom-1.p-4.mb-3
                .col-12
                  p En él se rastrean y describen las experiencias del cliente a través de los puntos de contacto que ofrecen los servicios y, así, comprender  las emociones que surgen en los clientes y entender su interacción con nuestro producto o servicio. 
        
          h5.text-center Mapa de travesía del usuario

        .row.justify-content-center.align-items-center.p-5.mb-5
          .col-12
            img(src='@/assets/curso/images/tema3/img_6.svg' alt="", style="width:800px; display:block; margin:auto;")
              
        .cajon.color-custom-2.p-4.mb-3
          .col-12
            p Al aplicar esta herramienta podremos identificar oportunidades de mejora o también podrán surgir nuevas ideas de productos o servicios para suplir necesidades que aún no han sido satisfechas para el usuario. 

      .py-4.py-md-5.p-4.elemento-color(titulo="Un día en la vida de…" :icono="require('@/assets/curso/images/tema3/ico_3.svg')")
        .jumbotron-7.p-4
          .row.mb-5
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema3/img_7.svg',alt="", style="width:330px; display:block; margin:auto;")
            .col-md-6.mb-4.mb-md-0
              .jumbotron-1.p-5
                p Esta técnica hace parte de una serie de métodos de investigación que buscan entender mejor las actividades que realiza el usuario, los problemas a los cuales se enfrenta y los productos o artefactos con los que interactúa durante un periodo de tiempo previamente determinado. Se utiliza para identificar los niveles emocionales de las interacciones del usuario y determinar en qué puntos del proceso se puede intervenir desde el diseño de soluciones.
          .row
            .col-md-6.mb-4.mb-md-0
              .jumbotron-2.p-5
                p Al utilizar esta técnica es importante registrar la mayor cantidad de información posible y puede ser mezclada con otras herramientas como entrevistas semidirigidas a los usuarios en observación. Existen diversas formas de enfocar las preguntas de acuerdo con la cronología y las situaciones (en el trabajo, en casa). Estas situaciones funcionan como escenarios en los que el actor principal es el entrevistado. Son cuatro: actividades y ocupaciones, lugares, gente alrededor y preocupaciones.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema3/img_8.svg',alt="", style="width:380px; display:block; margin:auto;")


      .py-4.py-md-5.p-4.elemento-color(titulo="Entrevistas semiestructuradas" :icono="require('@/assets/curso/images/tema3/ico_4.svg')")
     
        .row.justify-content-center.align-items-center.mb-5
          .col-md-12
            h5.mb-5 Entrevistas semiestructuradas
              br
              br
              img(src='@/assets/curso/images/tema3/img_9.svg',alt="", style="width:880px; display:block; margin:auto;")
          .jumbotron-7.p-4.mb-5
              p.mb-3 Es una técnica de investigación cualitativa que se utiliza para recolectar información de usuarios que permite entender con mayor grado de detalle, percepciones, motivaciones, y frustraciones alrededor de una situación en particular. En este tipo de entrevista es importante tener claros los objetivos de la misma para guiar la conversación y enfocar la atención en los temas principales, además de profundizar y descubrir aspectos relevantes.
          .jumbotron-7.p-4.mb-5 
              p.mb-5 Para esto se debe diseñar el instrumento de recolección de información que contenga preguntas abiertas y que sirva como guía más no como guion y, además, propiciar un ambiente de confianza que permitan al entrevistado expresarse libremente. 

          .row.justify-content-center.align-items-center.mb-5
            .col-12.col-md-8.col-lg-6.col-xl-6
                .jumbotron-8.p-5
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Enfocarse en la necesidad, no en la solución.
                    li 
                      i.fas.fa-angle-right
                      | Tener cuidado con el sesgo de confirmación.
                    li 
                      i.fas.fa-angle-right
                      | El entrevistado no está para validar lo que piensa el entrevistador. El entrevistador está ahí para descubrir una necesidad.
                    li 
                      i.fas.fa-angle-right
                      | Hacer la entrevista en persona y una persona a la vez. Esto te permitirá captar señales de gestos y expresiones faciales. 
                    li 
                      i.fas.fa-angle-right
                      | Hacer preguntas abiertas, que parezca una conversación, esto permite lograr más profundidad en los temas clave y tener nuevos hallazgos. 
                    li 
                      i.fas.fa-angle-right
                      | Propiciar espacios para que los usuarios cuenten una historia.
                    li 
                      i.fas.fa-angle-right
                      | Procura escuchar más de lo que hablas.
                    li 
                      i.fas.fa-angle-right
                      | Seguir su instinto y profundizar preguntando varias veces (¿por qué?).
                    li 
                      i.fas.fa-angle-right
                      | Entender las necesidades del usuario.
            .col-12.col-md-8.col-lg-6.col-xl-6
                .jumbotron-9.p-5
                  ul.lista-ul
                    li 
                      i.fas.fa-angle-right
                      | Sentir que se sabe todas las respuestas.          
                    li 
                      i.fas.fa-angle-right
                      | Esperar que el usuario tenga todas las respuestas y soluciones.
                    li 
                      i.fas.fa-angle-right
                      | Los usuarios identifican sus motivaciones, necesidades o frustraciones. 
                    li 
                      i.fas.fa-angle-right
                      | No es un momento para vender, sino para aprender, se recomienda no mencionar las ideas de cómo resolver el problema. 
                    li 
                      i.fas.fa-angle-right
                      | Para tener perspectivas realistas se recomienda no incluir personas conocidas (amigos/familiares) dentro de la muestra de entrevistados. 

        
      
      .py-4.py-md-5.p-4.elemento-color(titulo="Creación del arquetipo" :icono="require('@/assets/curso/images/tema3/ico_5.svg')")
        .row.justify-content-center.align-items-center.mb-5
          .col-md-12
            h5.mb-5.p-3 Creación del arquetipo
              br
              br
              img(src='@/assets/curso/images/tema3/img_10.svg',alt="", style="width:680px; display:block; margin:auto;")

            .jumbotron-7.p-5.mb-5
              P.mb-3 Se conoce como arquetipo a personajes ficticios que se crean con la información de usuarios reales y que permite identificar diferentes elementos del usuario al que se quiere impactar con la solución que se tiene en mente. Estos elementos son: motivaciones, expectativas y metas, su identificación genera claridad en los beneficios y puntos a mejorar de la solución. 

              p.mb-5 Para crearlos se debe partir de la recolección de información desde lo general a lo particular con el objetivo de definir la esencia y los patrones de conducta del grupo de usuarios que queremos impactar. 
          .jumbotron.mb-3
            .row.justify-content-center.align-items-center.mb-5
              .col-lg-12.mb-3.mb-lg-0
                .jumbotron-5.p-3.borde-1.mb-5
                  h5.text-center <i>Proceso de creación del arquetipo “de lo general a lo particular”</i>

              .col-md-10.mb-5
                figure
                  img(src='@/assets/curso/images/tema3/img_11.svg', alt="", style="width:580px; display:block; margin:auto;")
              
              .jumbotron-7.p-5.mb-3
                P Esta técnica ayuda a los equipos de trabajo a tener una visión de conjunto sobre a quién se están dirigiendo y adecuar el diseño u oferta a los objetivos, motivaciones y comportamiento de los clientes.

              .jumbotron-7.p-5.mb-3
                P Los arquetipos son construidos después de una observación exhaustiva de los clientes del servicio y/o producto, en los que se incluye tanto a los actuales cómo a los potenciales.

              .jumbotron-7.p-5.mb-3
                P Es una técnica mixta de diseño e investigación utilizada para guiar decisiones en diferentes fases del proyecto; por lo anterior, es importante recalcar que dichos perfiles se basan única y exclusivamente en los resultados de una investigación.  

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
