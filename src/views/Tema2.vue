<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 2
      h1 Design Thinking

    .row.justify-content-center.align-items-center.p-5.mb-5.img_bomb.d-none.d-lg-block
      .col-12
        img(src='@/assets/curso/images/tema2/img_1.svg' alt="", style="width:500px; display:block; margin:auto;")
    .row.justify-content-center.align-items-center.p-5.mb-5.d-block.d-lg-none
      .col-12
        img(src='@/assets/curso/images/tema2/img_1.svg' alt="", style="width:500px; display:block; margin:auto;")
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10.mb-3.mb-lg-0
        .jumbotron-1.p-5
          p Es una metodología que promueve la creatividad y generación de ideas de alto valor para el usuario, su objetivo principal es centrarse en la detección de necesidades reales del entorno para obtener soluciones de valor.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-3.mb-lg-0
        .jumbotron-2.p-4
          p.mb-2 Puede aplicarse en cualquier sector como herramienta que aborda de manera diferente los problemas o necesidades ubicando como eje central al ser humano.
      .col-lg-5.mb-3.mb-lg-0
        .jumbotron-2.p-3
          p.mb-0 Propone articular tres ejes clave en el desarrollo de los proyectos de innovación, estos son: la tecnología, el modelo de negocio y el ser humano; y puede ser utilizada para la creación o mejora de nuevos productos o servicios.

    p.mb-3 Esta metodología está compuesta por una serie de herramientas que tienen dos características especiales, a saber:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-5.mb-lg-0
        hr.mt-4.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/images/tema2/ico_15.svg' alt="", style="width:60px; display:block; margin:auto 0;")    
          .col
            h5 El diseño 
            p.mb-2 El diseño centrado en el usuario que, aunque puede parecer obvio, es una de las principales causas por la cual las empresas no logran conectar con su consumidor, por ejemplo; cuando se llega a una página web, ¿la empresa habla directamente al consumidor y le cuenta cómo puede solucionar su problema? O, por el contrario, tiene una lista de los productos que ofrece para que el usuario se acomode a ellos; así que cuando se  trabaja con Design Thinking,  se busca llegar a un nivel más profundo de comprensión del contexto y del consumidor. 
        hr.mt-4.mb-4
        .row.justify-content-center.align-items-center
          .col-auto
            figure
              img(src='@/assets/curso/images/tema2/ico_16.svg' alt="", style="width:60px; display:block; margin:auto 0;")  
          .col
            h5 El prototipado 
            p El prototipado es una de las últimas fases de esta metodología que permite verificar, rápidamente, si la idea con la que se está trabajando es viable o requiere cambios.
        hr.mt-4.mb-4

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3.mb-lg-0
        .jumbotron-3.p-3
          h5.text-white.text-center Conozcamos los atributos del Design Thinking.
    
    .row.justify-content-center.mb-3
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.p-2.d-flex(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_1.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_1.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                .col-12
                  p.p-2.text-center Cuando se está trabajando en un problema, aceptar que las cosas pueden ser poco claras o mal definidas y que las respuestas no pueden ser obvias o conocidas.
            .tarjeta-flip__contenido.p-5.p-xl-5
              p.text-white.text-center El <i>Design Thinking</i> con frecuencia se utiliza para enfrentar “problemas perversos”, es decir, aquellos que no tienen una solución fija, que son complejos y llenos de incertidumbre.

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.p-1.d-flex(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_2.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_2.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                  br
                .col-12
                  p.p-3.text-center En casi todas las etapas del proceso se trabaja junto con colegas y expertos de distintas disciplinas.

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center Para resolver problemas complejos y difíciles se requiere un acercamiento multidisciplinar, en los que la combinación de sabiduría de distintas áreas se usa con el propósito de entender en profundidad el problema. 

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-secundario.p-2.d-flex(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_3.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_3.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                .col-12
                  p.text-center Construir sobre las ideas de otros durante la ideación en lugar de discutir en contra de una idea, se construye a partir de ella sugiriendo cambios o retoques.

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center Las críticas constructivas son muy importantes, son un acercamiento que se enfoca en construir soluciones e involucra la ideación para construir sobre las ideas de otros.  
    .row.justify-content-center.mb-3
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_4.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_4.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                .col-12
                  p.p-2.text-center Motiva naturalmente a hacer preguntas, aun cuando ya sepa la respuesta. Ser curioso también implica tener una mente fresca de principiante.

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center  El comienzo del proceso de <i>Design Thinking</i> siempre involucra un entendimiento profundo del problema. Esto requiere de mucha curiosidad para ir más a fondo. Los insights provienen de sondeos profundos.
    
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_5.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_5.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                .col-12
                  br
                  br
                  p.p-2.text-center Tener la capacidad de entender las cosas desde la perspectiva del usuario.
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center   El <i>Design Thinking</i> es un enfoque centrado en el usuario para la resolución de problemas. Comienza con un profundo entendimiento de la perspectiva del usuario así como sus emociones y comportamientos.
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_6.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_6.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                .col-12
                  p.p-3.text-center Ser capaz de ver el panorama general y ver una situación o problema desde múltiples ángulos o perspectivas.

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center  Los problemas complejos requieren perspectivas holísticas. Por lo tanto, se considera toda la cadena de valor y canales de distribución. Cada pequeña parte suma para definir la experiencia de la solución.
    .row.justify-content-center.mb-5   
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_7.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_7.svg' alt="", style="width:70px; display:block; margin:auto 0;") 
                  br
                .col-12
                  p.p-3.text-center Es un ciclo con bucles de retroalimentación donde se usa nueva información para mejorar las ideas a través de todo el proceso.

            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center  Las fases del <i>Design Thinking</i> no son lineales, sino que son modelos de pensamiento que pueden ser usados en un proyecto.

      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_8.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_8.svg' alt="", style="width:70px; display:block; margin:auto 0;")
                  br
                  br
                  br  
                  br
                .col-12
                  p.p-4.text-center Ser capaz de discutir ideas sin tener juicios sobre ellas. 
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center  En las fases de ideación de un proyecto de <i>Design Thinking</i> es esencial no permitir que las discusiones se conviertan en discusiones personales. Ninguna idea debe ser descartada, porque incluso las ideas que parezcan no factibles pueden inspirar más ideas y podrían llevar a una solución. 
      .col-sm-6.col-xl-3
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img
              .row.justify-content-center.mb-3.p-5.color-flip
                .col-12.p-4
                  img.imagenes(src='@/assets/curso/images/tema2/ico_t_9.svg' alt="", style="width:800px; display:block; margin:auto 0;") 
                .col-auto 
                  img(src='@/assets/curso/images/tema2/ico_9.svg' alt="", style="width:70px; display:block; margin:auto 0;")  
                  br
                  br
                  br
                .col-12
                  p.p-4.text-center Abrazar ideas locas, no saltar a conclusiones y adoptar un enfoque experimental.
            .tarjeta-flip__contenido.p-4.p-xl-5
              p.text-white.text-center Las ideas locas en el <i>Design Thinking</i> no son un tabú, por el contrario, son incentivadas en las sesiones de ideación. El <i>Design Thinking</i> es sobre explorar lo aparentemente obvio para obtener conocimiento que se encuentran enterrados y probar ideas para ver si funcionan.
    .cajon.color-custom.p-4.mb-5
      .row.justify-content-center.mb-3  
        .col-6 
          p Para conocer algunos ejemplos, se invita a ver el video <b>Metodología Design Thinking – Ejemplos</b>, que se encuentra en el material complementario.
        .col-6
          a.anexo.mb-4.mb-lg-0(href="https://en.wikipedia.org/wiki/Main_Page" target="_blank")
            .anexo__icono
              img(src="@/assets/template/icono-link.svg")
            .anexo__texto
              p Metodología Design Thinking – Ejemplos.

    p.mb-3 En las últimas décadas se ha venido escribiendo mucho acerca del Design Thinking, concepto que ya es ampliamente conocido y utilizado en el ámbito empresarial.

    LineaTiempoA.color-primario.mb-5(:datos="datosLineaTiempoA")

    p.mb-5 De acuerdo con la universidad de Stanford, la metodología Design Thinking cuenta con cinco fases que se describen a continuación:

    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src='@/assets/curso/images/tema2/ico_10.svg' alt="", style="width:120px; display:block; margin:auto;0")
      .col-8
        .jumbotron-4.p-4
          h5 Empatía 
          p Es la fase inicial, donde se busca entender al usuario y sus necesidades reales.
    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src='@/assets/curso/images/tema2/ico_11.svg' alt="", style="width:120px; display:block; margin:auto;0")
      .col-8
        .jumbotron-4.p-4
          h5 Definición
          p En esta segunda fase se pretende resumir la información encontrada en la fase anterior para seleccionar el reto a abordar.
    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src='@/assets/curso/images/tema2/ico_12.svg' alt="", style="width:120px; display:block; margin:auto;0")
      .col-8
        .jumbotron-4.p-4
          h5 Ideación
          p El objetivo principal aquí es realizar procesos de divergencia y convergencia para seleccionar la idea final del proceso.
    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src='@/assets/curso/images/tema2/ico_13.svg' alt="", style="width:120px; display:block; margin:auto;0")
      .col-8
        .jumbotron-4.p-4
          h5 Prototipado
          p Esta consiste en realizar modelos de validación de baja y media fidelidad a través de técnicas rápidas de visualización.
    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        img(src='@/assets/curso/images/tema2/ico_14.svg' alt="", style="width:120px; display:block; margin:auto;0")
      .col-8
        .jumbotron-4.p-4
          h5 Validación
          p La última fase de esta metodología consiste en realizar pruebas rápidas de validación con el usuario final para conocer su relación con la solución creada, obtener retroalimentación y las conclusiones del proceso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10.mb-3.mb-lg-0
        .jumbotron-5.p-3.borde-1
          h5.text-center Además, la gestión de la innovación puede dividirse en cuatro etapas:

    .row.justify-content-center.align-items-center.mb-5
      .col-auto
        img(src='@/assets/curso/images/tema2/tj_1.svg' alt="", style="width:200px; display:block; margin:auto;0")
      .col-auto
        img(src='@/assets/curso/images/tema2/tj_2.svg' alt="", style="width:200px; display:block; margin:auto;0")
      .col-auto
        img(src='@/assets/curso/images/tema2/tj_3.svg' alt="", style="width:200px; display:block; margin:auto;0")
      .col-auto
        img(src='@/assets/curso/images/tema2/tj_4.svg' alt="", style="width:200px; display:block; margin:auto;0")

    .row.justify-content-center.align-items-center.mb-3
      .col-auto
        img(src='@/assets/curso/images/tema2/img_2.svg' alt="", style="width:880px; display:block; margin:auto;0")
        figcaption Nota. Modelo de Proceso de Innovación and the Fuzzy Front End 



















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
          'El concepto de <i> Design Thinking </i> fue creado por Herbert Simon, Premio Nobel de Economía, quien escribió el libro Ciencia humana; el término “pensamiento de diseño” se acuñó por primera vez en este libro.',
      },
      {
        ano: '1970',
        titulo: '',
        texto:
          'A partir de esta década, comenzó a desarrollarse teóricamente esta metodología en la Universidad de Stanford en California (EE. UU.). ',
      },
      {
        ano: '2008',
        titulo: '',
        texto:
          'La metodología que conocemos hoy es el resultado del trabajo de Tim Brown, cuando escribió un tratado en Harvard Business Review en el que desarrolló una metodología iniciada por Herbert Simons, llamada Design Thinking "Contemplation", este artículo marca el inicio del uso del Design Thinking como una gran técnica de innovación.',
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
