<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 <i>Design Thinking</i>

    .row.justify-content-center.align-items-center
      .col-lg-8.mb-5.mb-lg-0
        .row.justify-content-center.align-items-center
          .jumbotron-10.mb-3
            .row.align-items-center 
              .col-2.lg-0.mb-0
                figure
                  img(src='@/assets/curso/images/tema2/ico_17.svg' alt="",)    
              .col-9.lg-0.p-1
                p.p-4 Puede aplicarse en cualquier sector como herramienta que aborda de manera diferente los problemas o necesidades ubicando como eje central al ser humano.
          .jumbotron-10
            .row.align-items-center  
              .col-2.lg-0.mb-0
                figure
                  img(src='@/assets/curso/images/tema2/ico_18.svg' alt="",)    
              .col-9.lg-0.p-4
                b-none Propone articular tres ejes clave en el desarrollo de los proyectos de innovación, estos son: 
                b(style="color: #214BE5;") la tecnología, el modelo de negocio y el ser humano; 
                b-none y puede ser utilizada para la creación o mejora de nuevos productos o servicios.
      .col-lg-4.img_bomb.d-none.d-lg-block.mb-5
        figure
          img(src='@/assets/curso/images/tema2/img_1.svg', style='width: 350px').m-auto

    
    p.mb-3 Esta metodología está compuesta por una serie de herramientas que tienen dos características especiales, a saber:

    .row.justify-content-center.align-items-center.mb-4
      .col-8.col-md-8.col-lg-6(data-aos="fade-right")
        img(src="@/assets/curso/images/tema2/img_3.png" alt="", style="width:450px; display:block; margin: 0 auto;")
      .col-12.col-lg-6
        hr.mt-4.mb-4
        .row.justify-content-center
          .col-auto
            figure
              img(src='@/assets/curso/images/tema2/ico_19.svg' alt="", style="width:60px; display:block; margin:auto 0;")    
          .col
            h5 El diseño 
            p.mb-2 El diseño centrado en el usuario que, aunque puede parecer obvio, es una de las principales causas por la cual las empresas no logran conectar con su consumidor, por ejemplo; cuando se llega a una página <i>web</i>, ¿la empresa habla directamente al consumidor y le cuenta cómo puede solucionar su problema? O, por el contrario, tiene una lista de los productos que ofrece para que el usuario se acomode a ellos; así que cuando se  trabaja con <i>Design Thinking</i>,  se busca llegar a un nivel más profundo de comprensión del contexto y del consumidor. 
        hr.mt-4.mb-4
        .row.justify-content-center
          .col-auto
            figure
              img(src='@/assets/curso/images/tema2/ico_20.svg' alt="", style="width:60px; display:block; margin:auto 0;")  
          .col
            h5 El prototipado 
            p El prototipado es una de las últimas fases de esta metodología que permite verificar, rápidamente, si la idea con la que se está trabajando es viable o requiere cambios.
        hr.mt-4.mb-4
    .row.mb-4
      .col-lg-4.d-none.d-lg-block(data-aos="fade-right")  
        img(src="@/assets/curso/images/tema2/img_4.svg" alt="", style="width:300px; display:block; margin: 0 auto;")
      .col-lg-8
        p Conozcamos los atributos del <i>Design Thinking.</i>
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row.justify-content-center.align-items-center(titulo="Ambiguo")
            .col-md-6.mb-4.mb-md-0.p-4
              p Cuando se está trabajando en un problema, aceptar que las cosas pueden ser poco claras o mal definidas y que las respuestas no pueden ser obvias o conocidas.

              p El <i>Design Thinking </i>con frecuencia se utiliza para enfrentar “problemas perversos”, es decir, aquellos que no tienen una solución fija, que son complejos y llenos de incertidumbre..
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_1.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Colaborativo")
            .col-md-6.mb-4.mb-md-0.p-4
              p En casi todas las etapas del proceso se trabaja junto con colegas y expertos de distintas disciplinas.

              p Para resolver problemas complejos y difíciles se requiere un acercamiento multidisciplinar, en los que la combinación de sabiduría de distintas áreas se usa con el propósito de entender en profundidad el problema. 
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Constructivo")
            .col-md-6.mb-4.mb-md-0.p-4
              p Construir sobre las ideas de otros durante la ideación en lugar de discutir en contra de una idea, se construye a partir de ella sugiriendo cambios o retoques.

              p Las críticas constructivas son muy importantes, son un acercamiento que se enfoca en construir soluciones e involucra la ideación para construir sobre las ideas de otros.  
            
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_3.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Curioso")
            .col-md-6.mb-4.mb-md-0.p-4
              p Motiva naturalmente a hacer preguntas, aun cuando ya sepa la respuesta. Ser curioso también implica tener una mente fresca de principiante.

              p El comienzo del proceso de <i>Design Thinking</i> siempre involucra un entendimiento profundo del problema. Esto requiere de mucha curiosidad para ir más a fondo. Los <i>insights</i> provienen de sondeos profundos.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_4.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Empático")
            .col-md-6.mb-4.mb-md-0.p-4
              p Tener la capacidad de entender las cosas desde la perspectiva del usuario.

              p El <i>Design Thinking</i> es un enfoque centrado en el usuario para la resolución de problemas. Comienza con un profundo entendimiento de la perspectiva del usuario así como sus emociones y comportamientos. 
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_5.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Holístico")
            .col-md-6.mb-4.mb-md-0.p-4
              p Ser capaz de ver el panorama general y ver una situación o problema desde múltiples ángulos o perspectivas.

              p Los problemas complejos requieren perspectivas holísticas. Por lo tanto, se considera toda la cadena de valor y canales de distribución. Cada pequeña parte suma para definir la experiencia de la solución.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_6.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Iterativo")
            .col-md-6.mb-4.mb-md-0.p-4
              p Es un ciclo con bucles de retroalimentación donde se usa nueva información para mejorar las ideas a través de todo el proceso.

              p Las fases del <i>Design Thinking</i> no son lineales, sino que son modelos de pensamiento que pueden ser usados en un proyecto.
              .col-md-6
                figure
                  img(src='@/assets/curso/images/tema2/ico_7.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="No juzga")
            .col-md-6.mb-4.mb-md-0.p-4
              p Ser capaz de discutir ideas sin tener juicios sobre ellas. 

              p En las fases de ideación de un proyecto de <i>Design Thinking</i> es esencial no permitir que las discusiones se conviertan en discusiones personales. Ninguna idea debe ser descartada, porque incluso las ideas que parezcan no factibles pueden inspirar más ideas y podrían llevar a una solución. 
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_8.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto
          .row.justify-content-center.align-items-center(titulo="Mente abierta")
            .col-md-6.mb-4.mb-md-0.p-4
              p Abrazar ideas locas, no saltar a conclusiones y adoptar un enfoque experimental.

              p Las ideas locas en el <i> Design Thinking </i> no son un tabú, por el contrario, son incentivadas en las sesiones de ideación. <i> El Design Thinking </i> es sobre explorar lo aparentemente obvio para obtener conocimiento que se encuentran enterrados y probar ideas para ver si funcionan.
            .col-md-6
              figure
                img(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:200px; display:block; margin:auto 0;").m-auto

    .tarjeta.color-primario.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/images/tema2/ico_21.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-white Conocer algunos ejemplos, se invita a ver el video <b>Metodología <i>Design Thinking</i> – Ejemplos</b>, que se encuentra en el material complementario.
            .col-sm-auto
              a.boton.color-acento-contenido(href="https://www.youtube.com/watch?v=_ul3wfKss58&t=314s" target="_blank")
                span Ver
                i.fas.fa-file-download

    p.mb-5 En las últimas décadas se ha venido escribiendo mucho acerca del <i>Design Thinking </i>, concepto que ya es ampliamente conocido y utilizado en el ámbito empresarial.

    LineaTiempoA.color-primario.my-5(:datos="datosLineaTiempoA")
    
    .row.align-items-center
      .col-lg-4.mb-3.mb-lg-0(data-aos="fade-right") 
        figure
          img(src="@/assets/curso/images/tema2/img_5.png" alt="", style="width:300px; display:block; margin: 0 auto;")
      .col-lg-8
        p De acuerdo con la universidad de <i>Stanford</i>, la metodología <i>Design Thinking </i>cuenta con cinco fases que se describen a continuación:

        #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel')
          .carousel-indicators
            button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
            button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          .carousel-inner
            .carousel-item.active
              .col-lg-9.col-md-8.mx-auto
                .row.align-items-center.justify-content-center
                  .col-lg-2.col-md-3
                    figure
                      img(src='@/assets/curso/images/tema2/f_2.svg' alt="", style="width:120px; display:block; margin:auto;0")
                  .col-7.col-lg-8
                    h5 Empatía 
                    p Es la fase inicial, donde se busca entender al usuario y sus necesidades reales.
            .carousel-item
              .col-lg-9.col-md-8.mx-auto
                .row.align-items-center.justify-content-center
                  .col-lg-2.col-md-3
                    figure
                      img(src='@/assets/curso/images/tema2/f_1.svg' alt="", style="width:120px; display:block; margin:auto;0")
                  .col-7.col-lg-8
                    h5 Definición
                    p En esta segunda fase se pretende resumir la información encontrada en la fase anterior para seleccionar el reto a abordar.
            .carousel-item
              .col-lg-9.col-md-8.mx-auto
                .row.align-items-center.justify-content-center
                  .col-lg-2.col-md-3
                    figure
                      img(src='@/assets/curso/images/tema2/f_3.svg' alt="", style="width:120px; display:block; margin:auto;0")
                  .col-7.col-lg-8
                    h5 Ideación
                    p El objetivo principal aquí es realizar procesos de divergencia y convergencia para seleccionar la idea final del proceso.
            .carousel-item
              .col-lg-9.col-md-8.mx-auto
                .row.align-items-center.justify-content-center
                  .col-lg-2.col-md-3
                    figure
                      img(src='@/assets/curso/images/tema2/f_4.svg' alt="", style="width:120px; display:block; margin:auto;0")
                  .col-7.col-lg-8
                    h5 Prototipado
                    p Esta consiste en realizar modelos de validación de baja y media fidelidad a través de técnicas rápidas de visualización.
            .carousel-item
              .col-lg-9.col-md-8.mx-auto
                .row.align-items-center.justify-content-center
                  .col-lg-2.col-md-3
                    figure
                      img(src='@/assets/curso/images/tema2/f_5.svg' alt="", style="width:120px; display:block; margin:auto;0")
                  .col-7.col-lg-8
                    h5 Validación
                    p La última fase de esta metodología consiste en realizar pruebas rápidas de validación con el usuario final para conocer su relación con la solución creada, obtener retroalimentación y las conclusiones del proceso.
          button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
            span.carousel-control-prev-icon(aria-hidden='true')
            span.visually-hidden Previous
          button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
            span.carousel-control-next-icon(aria-hidden='true')
            span.visually-hidden Next

      .row.justify-content-center.align-items-center.my-5
        .col-lg-10.mb-3.mb-lg-0
          .jumbotron-5.p-3.borde-1
            h5.text-center.text-white Además, la gestión de la innovación puede dividirse en cuatro etapas:

      .row.justify-content-center.align-items-center.mb-5
          .col-auto(data-aos="fade-left")
            img(src='@/assets/curso/images/tema2/tj_1.svg' alt="", style="width:200px; display:block; margin:auto;0")
          .col-auto(data-aos="fade-left")
            img(src='@/assets/curso/images/tema2/tj_2.svg' alt="", style="width:200px; display:block; margin:auto;0")
          .col-auto(data-aos="fade-left")
            img(src='@/assets/curso/images/tema2/tj_3.svg' alt="", style="width:200px; display:block; margin:auto;0")
          .col-auto(data-aos="fade-left")
            img(src='@/assets/curso/images/tema2/tj_4.svg' alt="", style="width:200px; display:block; margin:auto;0")

      .row.justify-content-center.align-items-center.mb-3
        .col-auto.mb-3
          img(src='@/assets/curso/images/tema2/img_2.svg' alt="", style="width:880px; display:block; margin:auto;0")
          figcaption.my-3 Nota. Modelo de Proceso de Innovación and the Fuzzy Front End 



















  </template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosLineaTiempoA: [
      {
        ano: '1969',
        titulo: '',
        texto:
          'El concepto de <i> Design Thinking </i> fue creado por <i> Herbert Simon</i>, premio Nobel de Economía, quien escribió el libro Ciencia humana; el término “pensamiento de diseño” se acuñó por primera vez en este libro.',
      },
      {
        ano: '1970',
        titulo: '',
        texto:
          'A partir de esta década, comenzó a desarrollarse teóricamente esta metodología en la Universidad de <i>Stanford </i> en California (EE. UU.). ',
      },
      {
        ano: '2008',
        titulo: '',
        texto:
          'La metodología que conocemos hoy es el resultado del trabajo de <i>Tim Brown</i>, cuando escribió un tratado en <i>Harvard Business Review </i> en el que desarrolló una metodología iniciada por <i> Herbert Simons </i>, llamada <i>Design Thinking</i> <i>"Contemplation"</i>, este artículo marca el inicio del uso del <i>Design Thinking</i> como una gran técnica de innovación.',
      },
    ],
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
