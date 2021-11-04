<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Conceptos de innovación
    .row.justify-content-center.align-items-center
      .col-12
        p.mb-5 Las metodologías de innovación son conjuntos de herramientas o formas de actuar que tienen como propósito principal promover no solo la interacción entre las diferentes áreas de la organización, sino también de involucrar a los colaboradores en la identificación y solución de problemas reales que, como consecuencia, impactan la motivación y el sentido de pertenencia de los mismos. 
        
        .col-lg-12.mx-auto.mb-5
          .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
            .bloque-texto-g__img(
              :style="{'background-image': `url(${require('@/assets/curso/images/tema1/img_1.png')})`}"
            )
            .bloque-texto-g__texto.p-4
              b(style="color: #214BE5;") Metodologías de innovación #[br]
              p.mb-0 Promueve también el trabajo en redes que, de manera simultánea, invita a las personas a agregar valor desde sus puestos de trabajo. 
    
        p.mb-5 Estas metodologías se dividen en etapas o fases que se componen de un grupo de actividades y herramientas que las personas pueden utilizar para cada momento específico del proceso, sin este ser completamente lineal. En la siguiente figura se puede observar cómo se conectan entre ellas y en qué momento se aplican según el nivel de madurez o necesidad particular de la organización. 
    .row.justify-content-center.align-items-center.mb-3
      .col-10
        p.BorTit <b>Figura 1</b> <br> <i>Fases de las metodologías innovadoras</i>
        
    .row.justify-content-center.align-items-center
      .col-10
        .jumbotron.mb-2.p-4
          .col-auto
            img(src='@/assets/curso/images/tema1/img_2.svg' alt="", style="width:1000px; display:block; margin:auto 0;")
        figcaption.mb-5 Nota. Adaptada y traducida de Futurizable (2017).


    .row.justify-content-center.align-items-center.mb-4
      .col-12.col-lg-6
        .cajon.color-primario.p-4.mb-4
          p Tratar de disminuir el grado de incertidumbre con el que trabajan las organizaciones, especialmente al momento de pensar en lanzar nuevos productos o servicios al mercado, es uno de los principales retos que hoy en día se teme afrontar. Así, la idea de repensar los negocios trae consigo cierta resistencia al cambio, debido a que el ser humano piensa en el presente y actúa basado en lo que ha funcionado en el pasado. Sin embargo, las dinámicas del mercado han obligado a las empresas a cambiar los paradigmas y el status quo con el que venían trabajando. 
        b(style="color: #214BE5;")  Concepto de innovación 
        p.mb-3 La innovación es un término que, desde hace algunas décadas, ha permeado el lenguaje organizacional, sin embargo es posible que se tenga una percepción errada del  mismo. Existe un imaginario común al denominar creativo o innovador a productos, personas o servicios que son fuera de lo común, con “ideas locas”, pero que en definitiva pueden referirse a su parte estética o exterior sin tener en cuenta el impacto o beneficio que estos tengan en la sociedad. Es allí donde radica realmente la condición inicial de innovar.
      .col-8.col-md-8.col-lg-6
        img(src="@/assets/curso/images/tema1/img_7.svg" alt="", style="width:450px; display:block; margin: 0 auto;")
    
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-md-8.col-lg-6
        img(src="@/assets/curso/images/tema1/img_4.png" alt="", style="width:450px; display:block; margin: 0 auto;")
      .col-12.col-lg-6
        .cajon.color-custom-3.p-4.mb-4
          b-none Según el <i>Manual de Oslo</i> (OCDE, 2005), 
          b(style="color: #214BE5;") la innovación 
          b-none  se entiende como la concepción e implementación de cambios significativos en el producto, proceso, marketing u organización de la empresa con el propósito de mejorar los resultados y tener la aceptación del mercado.  
        
        p.mb-3 Al hablar de innovación se hace referencia a un proceso dinámico, en el cual se gestionan la incertidumbre y el cambio como una constante en cada uno de los procesos, además del movimiento requerido para que los resultados obtenidos sean sostenibles en el tiempo y generen valor.

    .row.justify-content-center.align-items-center
          .col-10 
            p.BorTit  <b>Figura 2</b>  <br> <i>Seis tipos de innovación</i>
              .row.justify-content-center.align-items-center.p-5
                .col-12.col-lg-10
                  img(src='@/assets/curso/images/tema1/img_5.svg' alt="", style="width:890px; display:block; margin: auto; 0")

    .row.fondo-5.p-4
      .col-lg-12.margen-image
       
       
          
        .row.justify-content-center.align-items-center.mb-4.mt-5
          .col-lg-8.mb-4.mb-lg-0
            p.mb-3 Tal como se vio antes, existen múltiples metodologías para implementar la innovación dentro de las organizaciones; a continuación, se enuncian las más conocidas:
            .row.justify-content-center.align-items-center 
              .col-6 
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Lean StartUp.
                  li 
                    i.fas.fa-angle-right
                    | Agile.
                  li 
                    i.fas.fa-angle-right
                    | Design Sprint.
                  li    
                    i.fas.fa-angle-right
                    | SCRUM.
                  li 
                    i.fas.fa-angle-right
                    | Kanban.
              .col-6 
                ul.lista-ul
                  li 
                    i.fas.fa-angle-right
                    | Kaizen.
                  li 
                    i.fas.fa-angle-right
                    | Jobs to be done JTBD.
                  li 
                    i.fas.fa-angle-right
                    |  OKR.
                  li    
                    i.fas.fa-angle-right
                    | Teoría U.
                  li 
                    i.fas.fa-angle-right
                    | Forth Innovation Method.
            p.mb-0
              b-none Cada una de estas metodologías proveen herramientas para gestionar procesos de innovación, aportan agilidad y ritmo a los procesos reduciendo el tiempo de desarrollo dando la oportunidad de mantenerse competitivas a las empresas que trabajan con ellas; para comenzar, es importante tener muy clara la necesidad que tiene la organización de innovar y cómo esta se alinea con los objetivos estratégicos de la misma; también es importante determinar el tipo de organización a la cual se pertenece o se quiere impactar. 
              b(style="color: #214BE5;") La metodología de Design Thinking es comúnmente utilizada para iniciar procesos de innovación difusos donde el usuario es la principal fuente de información para solucionar problemas reales.

          .col-lg-4.mb-4.mb-lg-0
            img(src="@/assets/curso/images/tema1/img_6.svg" alt="", )












    
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
