<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Normatividad en la elaboración de productos cárnicos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p En Colombia, el Decreto 1500 de 2007 establece el reglamento técnico a través del cual se crea el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos, destinados para el consumo humano y los requisitos sanitarios y de inocuidad que se deben cumplir en su producción primaria, beneficio, desposte, desprese, procesamiento, almacenamiento, transporte, comercialización, expendio, importación o exportación.
        .row.justify-content-center.align-items-center.mb-4
          .col-md-3.col-7
            img(src='@/assets/curso/temas/t3/2.png', alt='')
          .col-md-9
            p.mb-0 El Instituto Colombiano de Normas Técnicas y Certificación, ICONTEC, con la NTC 1325 reaprobada en 2023, establece los requisitos que deben cumplir los productos cárnicos procesados no enlatados en términos de composición, formulación, empaque, rotulado y características fisicoquímicas y microbiológicas, como determinación de materia grasa, determinación de proteína, determinación de nitratos y nitritos, determinación de humedad, recuento total de aerobios mesófilos, recuento de esporas Clostridium, entre otros.  
      .col-lg-4.d-none.d-lg-block(data-aos="fade-left")
        img(src='@/assets/curso/temas/t3/1.png', alt='')

    .bg1.p-md-4.p-3.mb-4(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-2.col-md-4.col-6.mb-3.mb-lg-0
          img(src='@/assets/curso/temas/t3/3.svg', alt='')
        .col-lg-10
          p  La NTC 1325 de 2023 establece, además, una lista de los aditivos y colorantes de uso permitido en productos cárnicos, la función tecnología que cumplen y la cantidad máxima admisible y restricción de uso. 
          .row.justify-content-center.align-items-center
            .col-lg-10.col-9
              p.mb-0 La NTC 5520-4 de 2024 establece los requisitos de calidad para la actividad de venta, manipulación, elaboración, y servicios adicionales en expendios de carnes y productos cárnicos, que permitan satisfacer las expectativas del cliente. Se incluyen los expendios de carnes y productos cárnicos, subproductos de origen animal comestibles y vísceras que sean de pequeño y mediano comercio como, por ejemplo, carnicerías o delicatessen, y secciones de otros formatos comerciales, en concreto, supermercados e hipermercados.
            .col-lg-2.col-md-3.col-3
              img(src='@/assets/curso/temas/t3/4.svg', alt='')

    p La resolución 2606 del 27 de julio de 2009, es una modificación al Decreto 2106 de 1983 que establece los requisitos de que deben tener los aditivos alimentarios en Colombia. Algunos de los requisitos incluyen:

    .row.justify-content-center.mb-4(data-aos="fade-down")
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/tarj1.svg' alt='')
          .tarjeta.color-primario
            .p-4.text-center
              p.mb-0 Utilizar aditivos que no representen ningún riesgo para la salud.
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/tarj2.svg' alt='')
          .tarjeta.color-primario
            .p-4.text-center
              p.mb-0 Cuando se apruebe un aditivo para su uso, se debe tener en cuenta la dosis máxima y mínima. 
      .col-md-6.col-lg.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/t3/tarj3.svg' alt='')
          .tarjeta.color-primario
            .p-4.text-center
              p.mb-0 Cuando se adicione un aditivo a un alimento, este deberá adicionarse en una cantidad igual o inferior a la dosis máxima permitida. 

    .bg3.px-md-4.py-lg-0.p-3.pb-0(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-7.mb-4.mb-lg-0
          p El uso de aditivos se contempla cuando se desea: 
          ul.lista-ul--color.fa-lista.mb-0
            li
              i.fas.fa-check-circle
              | Conservar la calidad de los nutrientes que contiene el alimento.
            li
              i.fas.fa-check-circle
              | Mejorar las propiedades organolépticas y la vida útil del producto. 
            li
              i.fas.fa-check-circle
              | Facilitar los procesos de fabricación actuando como asistente tecnológico, sin cubrir los defectos por el uso de materia primas deficientes y por las malas prácticas de manufactura. 
            li.mb-0
              i.fas.fa-check-circle
              | No presentan un riesgo para la salud humana.
        .col-lg-3.col-md-7.col-10
          img(src='@/assets/curso/temas/t3/5.svg', alt='')

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

<style lang="sass"></style>
