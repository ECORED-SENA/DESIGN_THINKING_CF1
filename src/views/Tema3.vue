<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Fase de empatía

    p.mb-3 La fase inicial del Design Thinking busca, a través de diferentes herramientas, entender las necesidades reales en el contexto del usuario para lograr generar soluciones pertinentes y eficientes para el problema planteado.

    .row.justify-content-center.align-items-center.p-5.mb-5

      .col-12
        img(src='@/assets/curso/images/tema3/img_1.svg' alt="", style="width:800px; display:block; margin:auto;")

    p.mb-5 Según la Real Academia Española, se entiende como empatía la capacidad de identificarse con alguien y compartir sus sentimientos; para el Design Thinking es la primera fase de la metodología. Sin embargo, antes de comenzar la fase de empatizar, es necesario saber cuál es el reto o situación que se quiere intervenir con las herramientas que presenta la metodología y, posteriormente, comenzar con el proceso de empatizar, donde se busca entender por qué las personas hacen lo que hacen o piensan lo que piensan. Es una fase de pensamientos expansivos y divergentes, donde se debe ubicar en una postura de aprendiz/observador, practicar la capacidad de asombro y dejarse sorprender por lo conocido. 
    
    .cajon.color-custom-1.p-4.mb-3
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

    p.mb-3 Existen diferentes herramientas y técnicas para comenzar a empatizar dentro de un proceso de Design Thinking, donde su objetivo principal es sumergir al interesado en información proveniente de diferentes fuentes para entender la realidad del problema identificado en ojos del usuario seleccionado de la manera más genuina posible. Lo anterior con el propósito de consolidar datos verídicos que permitan una toma de decisiones acertada y minimicen la incertidumbre generada en este tipo de procesos.

    p.mb-5 Existe diversidad de herramientas para comenzar con un proceso de empatía dentro de la metodología Design Thinking, a continuación se profundizará en las más usadas:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Mapa de empatía" :icono="require('@/assets/curso/images/tema3/ico_1.svg')")
        .row.justify-content-center.align-items-center.mt-5.mb-5
          h5.mb-5 Mapa de empatía
            br
            br
            .col-12
              .cajon.color-custom-1.p-4.mb-3
                .col-12
                  p Es una herramienta que permite describir al usuario con el que queremos trabajar en nuestro proyecto a través de un lienzo dividido en seis partes, las cuales incluyen diferentes preguntas con el objetivo de visualizar las necesidades del consumidor al ponerse en su lugar e identificar los diferentes elementos que generan respuestas emocionales en él.
            
            p.mb-3 Para realizar el mapa de empatía debemos seleccionar cuál es el grupo de usuarios que queremos impactar con nuestro proyecto y reconocer sus características más importantes, luego de esto es importante responder las siguientes preguntas: 
            .jumbotrom 
             ImagenInfografica.color-secundario.mb-5
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/images/tema3/img_5_1.svg',  alt="", style="width:300px; display:block; margin:auto;")
                    

                .tarjeta.color-acento-botones.p-3(x="50%" y="8%")
                  .h5.mb-2 ¿Qué piensa y siente?
                  p Lo que realmente importa Principales preocupaciones Inquietudes y aspiraciones

                .tarjeta.color-acento-botones.p-3(x="50%" y="50%")
                  .h5.mb-2 titulo
                  p Lorem ipsum dolor ddasdasd asdasd asdasd a asd sd asdasd sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus

                .tarjeta.color-acento-botones.p-3(x="70%" y="70%")
                  .h5.mb-2 titulo
                  p Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vestibulum tortor at blandit congue. Pellentesque vel felis posuere, molestie metus
            .col-md-6
              figure
                img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
                figcaption Leyenda de la imagen

      .py-4.py-md-5(titulo="Don’t lie to yourself" :icono="require('@/assets/curso/images/tema3/ico_2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 2
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
      .py-4.py-md-5(titulo="Don’t quit" :icono="require('@/assets/curso/images/tema3/ico_3.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 3
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen

      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/curso/images/tema3/ico_4.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 4
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
      
      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/curso/images/tema3/ico_5.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Celebrate your failures 5
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
        
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
      
      .py-4.py-md-5(titulo="The splendor of the mystery" :icono="require('@/assets/componentes/ej-04.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
          .col-md-6
            h4 Celebrate your failures 6
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.




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
