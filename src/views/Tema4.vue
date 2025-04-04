<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Buenas prácticas de manufactura (BPM)

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p Las buenas prácticas de manufactura (BPM) son los principios básicos y prácticas generales de higiene en la manipulación, preparación, elaboración, envasado, almacenamiento, transporte y distribución de alimentos para el consumo humano, con el objetivo de garantizar que los productos se fabriquen en condiciones sanitarias salubres y se disminuyan los riesgos inherentes a la producción. 
        .row.justify-content-center.align-items-center.mb-4
          .col-md-2.col-3
            img.pe-lg-2(src='@/assets/curso/temas/t4/2.svg', alt='')
          .col-md-10.col-9
            p.mb-0 En Colombia, la solicitud del certificado BPM se realiza ante el instituto nacional de vigilancia de medicamentos y alimentos (INVIMA). El certificado de BPM es un documento que acredita que el establecimiento fabricante cumple con las buenas prácticas vigentes, expedidas por el Ministerio de Salud.
      .col-lg-4.col-md-10(data-aos="fade-left")
        img(src='@/assets/curso/temas/t4/1.png', alt='')

    .bg1.p-md-4.p-3(data-aos="fade-down")
      .row.justify-content-center.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p Para solicitar el certificado de BPM, se debe: 
          ul.lista-ul--color.fa-lista
            li
              i.fas.fa-check-circle
              | Presentar la solicitud en el formato definido por el INVIMA.
            li
              i.fas.fa-check-circle
              | Estar inscrito en el registro único empresarial y social (RUES).
            li
              i.fas.fa-check-circle
              | Presentar el documento de autoevaluación de la guía de inspección.
            li
              i.fas.fa-check-circle
              | Acreditar el pago de la tasa correspondiente.
          .bg2.p-3
            p.mb-0 El INVIMA programará una visita al establecimiento para verificar el cumplimiento de los requisitos. Si el establecimiento cumple con las BPM, el INVIMA expedirá el certificado. 
        .col-lg-6.col-md-10
          img(src='@/assets/curso/temas/t4/3.svg', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
