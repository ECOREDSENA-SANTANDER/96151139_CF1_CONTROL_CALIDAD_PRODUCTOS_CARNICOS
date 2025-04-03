<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El control de la calidad en la industria cárnica comprende diversos aspectos fundamentales como el estudio de las generalidades de la carne y sus derivados. La cadena productiva inicia con la cría y levante tanto de ganado vacuno, ovino, caprino y porcino como de aves de corral, diferenciados cada uno en su composición y características sensoriales. El proceso continúa con el sacrificio, corte, procesamiento y conserva de estos para la producción de carnes, subproductos y de productos cárnicos derivados. La transformación de la carne en productos cárnicos derivados implica procesos de mezcla, acondicionamiento, cocción, escaldado y maduración, entre otros. El uso de ingredientes no cárnicos y de aditivos permitidos es importante para mantener y conservar las propiedades nutricionales y organolépticas de los productos cárnicos además de aumentar su vida útil. La industria cárnica y los procesos de elaboración, conservación y transporte de derivados de la carne están regulados normativamente en el país a través de decretos, resoluciones y Normas Técnicas Colombianas, que establecen los requisitos técnicos y sanitarios que deben cumplir los productores. Las Buenas Prácticas de Manufactura son un componente clave para garantizar la inocuidad y la calidad de la carne y sus derivados en toda la cadena de producción. 
    

    .row.justify-content-center
      .col-lg-12.mb-5.bgs.p-4
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Mapa conceptual en el que se presenta la síntesis del componente. Se exponen 4 secciones relacionadas con: generalidades de la carne, productos cárnicos, normatividad en la formulación de productos cárnicos y buenas prácticas de manufactura. Además de la clasificación de las carnes según el origen, la composición, los atributos sensoriales, los tipos de productos cárnicos y los ingredientes usados en su formulación.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
