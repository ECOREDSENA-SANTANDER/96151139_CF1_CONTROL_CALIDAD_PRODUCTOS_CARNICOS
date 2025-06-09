<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.bgc-1.align-items-center.p-2.p-md-3
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center
          
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-9.col-12(data-aos="fade-right")
              p La carne ha formado parte de la dieta del ser humano desde la prehistoria y la aparición de la caza hasta nuestros días con la cría de animales domésticos exclusivos para el consumo. La carne de origen animal constituye para muchas culturas la principal fuente de proteínas, ya que dentro de su composición se encuentran aminoácidos esenciales que el hombre necesita para su nutrición y desarrollo diario. Sin embargo, la naturaleza perecedera de este alimento creó la necesidad de establecer métodos de procesamiento que permitieran conservar tanto la calidad nutricional como la calidad organoléptica de la carne y alargar su vida útil. Por otro lado, el relativo aumento del costo de la carne y la constante búsqueda de la satisfacción de la demanda, dieron lugar al desarrollo de productos cárnicos elaborados por procesos como la cocción, el escaldado, el ahumado y la maduración. Hoy en día, los cárnicos pertenecen a una industria consolidada que buscar mejorar sus procesos y aumentar la calidad de sus productos.
            .col-lg-3.d-none.d-lg-block(data-aos="fade-left")
              img(src='@/assets/curso/temas/intro/1.svg', alt='')

          .row.justify-content-center.align-items-center(data-aos="fade-down")
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/axphnIkTYY8?si=bMVY0njrdCDuTeKi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption #[b Video.] Generalidades de la carne y sus derivados - introducción


</template>

<script>
export default {
  name: 'Introduccion',
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

<style lang="sass"></style>
