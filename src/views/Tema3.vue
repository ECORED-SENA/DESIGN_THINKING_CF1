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
