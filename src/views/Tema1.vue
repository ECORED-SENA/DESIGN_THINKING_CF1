<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos de innovación
    .row.justify-content-center.align-items-center
      .col-10 
        p.mb-5 Las metodologías de innovación son conjuntos de herramientas o formas de actuar que tienen como propósito principal promover no solo la interacción entre las diferentes áreas de la organización, sino también de involucrar a los colaboradores en la identificación y solución de problemas reales que, como consecuencia, impactan la motivación y el sentido de pertenencia de los mismos. 
        .row.fondo-4.mb-5 
          .col-lg-12.d-none.d-lg-block
            .bloque-texto-g.color-custom.p-3.p-sm-4.p-md-5.mb-5
              
              .bloque-texto-g__img.p-5(style="left: 500px;")(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
              )
              .bloque-texto-g__texto.p-5(style="right: 310px; border-radius: 20px")
                h5 Metodologías de innovación #[br]
                p.mb-0  Promueve también el trabajo en redes que, de manera simultánea, invita a las personas a agregar valor desde sus puestos de trabajo. 
    
        .bloque-texto-g.color-custom.p-3.p-sm-4.p-md-5.mb-5.d-block.d-lg-none
          
          .bloque-texto-g__img.p-5(:style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
          )
          .bloque-texto-g__texto.p-5(style="border-radius: 20px")
            h5 Metodologías de innovación #[br]
            p.mb-0 Promueve también el trabajo en redes que, de manera simultánea, invita a las personas a agregar valor desde sus puestos de trabajo. 
        p.mb-5 Estas metodologías se dividen en etapas o fases que se componen de un grupo de actividades y herramientas que las personas pueden utilizar para cada momento específico del proceso, sin este ser completamente lineal. En la siguiente figura se puede observar cómo se conectan entre ellas y en qué momento se aplican según el nivel de madurez o necesidad particular de la organización. 
    .row.justify-content-center.align-items-center.mb-3
      .col-10 
        p.BorTit <b>Figura 1</b> <br> <i>Fases de las metodologías innovadoras</i>

        .jumbotron.mb-2.p-4
          .row.justify-content-center.align-items-center
            .col-10
              img(src='@/assets/curso/images/tema1/img_2.svg' alt="", style="width:800px; display:block; margin:auto 0;")
        figcaption.mb-5 Nota. Adaptada y traducida de Futurizable (2017).
        .row.justify-content-center.align-items-center
          .col-10
            p.mb-5 Tratar de disminuir el grado de incertidumbre con el que trabajan las organizaciones, especialmente al momento de pensar en lanzar nuevos productos o servicios al mercado, es uno de los principales retos que hoy en día se teme afrontar. Así, la idea de repensar los negocios trae consigo cierta resistencia al cambio, debido a que el ser humano piensa en el presente y actúa basado en lo que ha funcionado en el pasado. Sin embargo, las dinámicas del mercado han obligado a las empresas a cambiar los paradigmas y el status quo con el que venían trabajando. 
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10 
        .jumbotron.mb-5
          .row.justify-content-center.align-items-center.p-5.mb-5
            .col-10
              img(src='@/assets/curso/images/tema1/img_3.svg' alt="", style="width:600px; display:block; margin: auto;")
        h5 Concepto de innovación 
        
        p.mb-0 La innovación es un término que, desde hace algunas décadas, ha permeado el lenguaje organizacional, sin embargo es posible que se tenga una percepción errada del  mismo. Existe un imaginario común al denominar creativo o innovador a productos, personas o servicios que son fuera de lo común, con “ideas locas”, pero que en definitiva pueden referirse a su parte estética o exterior sin tener en cuenta el impacto o beneficio que estos tengan en la sociedad. Es allí donde radica realmente la condición inicial de innovar.   
    
    .row.justify-content-center.align-items-center.p-5.mb-5
      .col-10 
        .col-lg-12.d-none.d-lg-block   
          .row.justify-content-right.fondo-2.p-3.mb-5
            .col-lg-6
              p 
            .col-lg-6.mb-3.mb-lg-0
              p Según el Manual de Oslo (OCDE, 2005), la innovación se entiende como la concepción e implementación de cambios significativos en el producto, proceso, marketing u organización de la empresa con el propósito de mejorar los resultados y tener la aceptación del mercado.
          .row.d-none.d-lg-block.mb-5
            .col-lg-6.mb-3.mb-lg-0.d-none.d-lg-block
              img(src="@/assets/curso/images/tema1/img_4.png" alt="AvatarTop", style="width:570px; display:block; margin: -17rem -4rem;")
      .row.mb-5
        .col-lg-11.d-block.d-lg-none
          .tarjeta-avatar
            img(src="@/assets/curso/images/tema1/img_4.png" alt='AvatarTop')
            .tarjeta.fondo-2
              .p-4
                p Según el Manual de Oslo (OCDE, 2005), la innovación se entiende como la concepción e implementación de cambios significativos en el producto, proceso, marketing u organización de la empresa con el propósito de mejorar los resultados y tener la aceptación del mercado.
    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10 
        br
        p.mb-5.mt-5 Al hablar de innovación se hace referencia a un proceso dinámico, en el cual se gestionan la incertidumbre y el cambio como una constante en cada uno de los procesos, además del movimiento requerido para que los resultados obtenidos sean sostenibles en el tiempo y generen valor.

    .row.justify-content-center.align-items-center.mt-5.mb-5
      .col-10 
        p.BorTit.mb-5 <b>Figura 2</b>  Seis tipos de innovación

        .jumbotron.p-5
          .row.justify-content-center.align-items-center.p-5.mb-5
            .col-12
              img(src='@/assets/curso/images/tema1/img_5.svg' alt="", style="width:800px; display:block; margin:auto;")
        figcaption.mb-5 Nota. Adaptada de leanventures.se (2016). 

        p.mb-5 Tal como se vio antes, existen múltiples metodologías para implementar la innovación dentro de las organizaciones; a continuación, se enuncian las más conocidas:
        
        .row.justify-content-center.align-items-center.mb-3
          .col-10
            .cajon.color-primario
              .row.p-4
                  .col-lg-3.mb-3.mb-lg-0
                    .row
                      ul.lista-ul
                        li 
                          i.lista-ul__vineta
                            | Lean StartUp.
                        li 
                          i.lista-ul__vineta
                            | Agile.
                        li 
                          i.lista-ul__vineta
                            | Design Sprint.
                        li    
                          i.lista-ul__vineta
                            | SCRUM.
                        li 
                          i.lista-ul__vineta
                            | Kanban.
              
                  .col-lg-3.mb-3.mb-lg-0
                    .row
                      ul.lista-ul
                        li 
                          i.lista-ul__vineta
                            | Kaizen.
                        li 
                          i.lista-ul__vineta
                            | Jobs to be done JTBD.
                        li 
                          i.lista-ul__vineta
                            |  OKR.
                        li    
                          i.lista-ul__vineta
                            | Teoría U.
                        li 
                          i.lista-ul__vineta
                            | Forth Innovation Method.
                  .col-lg-6.mb-3.mb-lg-0.d-none.d-lg-block
                    img(src="@/assets/curso/images/tema1/img_6.svg" alt='AvatarTop', style="width:350px; display:block; margin:-60px 5.5rem;")

        .row.mb-5
          .col-lg-11.d-block.d-lg-none
            .tarjeta-avatar
              img(src="@/assets/curso/images/tema1/img_6.svg" alt='AvatarTop')
              .tarjeta
                .p-4
                  .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                          | Lean StartUp.
                      li 
                        i.lista-ul__vineta
                          | Agile.
                      li 
                        i.lista-ul__vineta
                          | Design Sprint.
                      li    
                        i.lista-ul__vineta
                        | SCRUM.
                      li 
                        i.lista-ul__vineta
                        | Kanban.
                  .col-lg-4.mb-3.mb-lg-0.d-none.d-lg-block
                    ul.lista-ul
                      li 
                        i.lista-ul__vineta
                          | Kaizen.
                      li 
                        i.lista-ul__vineta
                          | Jobs to be done JTBD.
                      li 
                        i.lista-ul__vineta
                          |  OKR.
                      li    
                        i.lista-ul__vineta
                          | Teoría U.
                      li 
                        i.lista-ul__vineta
                          | Forth Innovation Method.

        p.mb-3 Cada una de estas metodologías proveen herramientas para gestionar procesos de innovación, aportan agilidad y ritmo a los procesos reduciendo el tiempo de desarrollo dando la oportunidad de mantenerse competitivas a las empresas que trabajan con ellas; para comenzar, es importante tener muy clara la necesidad que tiene la organización de innovar y cómo esta se alinea con los objetivos estratégicos de la misma; también es importante determinar el tipo de organización a la cual se pertenece o se quiere impactar. La metodología de <i>Design Thinking</i> es comúnmente utilizada para iniciar procesos de innovación difusos donde el usuario es la principal fuente de información para solucionar problemas reales.














    
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
