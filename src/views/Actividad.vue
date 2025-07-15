<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Generalidades de la carne y sus derivados',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> evaluar la comprensión de los conceptos fundamentales sobre la carne, la clasificación según su origen, su composición química, los productos cárnicos derivados, procesos de producción y características especiales. Además de la normativa relacionada a la producción de productos cárnicos. ',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'La clasificación general de la carne está dividida en dos grandes grupos: las carnes rojas y las carnes blancas.  ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Las carnes de vacuno corresponden a las variedades de carne provenientes de los bueyes, los corderos y de las ovejas.  ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'La carne de cerdo es considerada uno de los alimentos más completos ya que es fuente de proteínas, ácidos grasos monoinsaturados y vitaminas del complejo B.  ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'La composición química de la carne corresponde en su gran mayoría al agua seguida de las proteínas, las grasas y en menor proporción los carbohidratos, vitaminas y minerales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'El aroma en la carne es un atributo sensorial de baja importancia para los consumidores tratándose de un factor que determina la aceptación o el rechazo del producto.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'El salami, el pepperoni y el jamón serrano son ejemplos de productos cárnicos embutidos cocidos.  ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'El control de calidad que se le realiza a los productos cárnicos incluye pruebas fisicoquímicas, organolépticas y microbiológicas que se realizan en laboratorios especializados.  ',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'Los productos escaldados embutidos son aquellos elaborados con una mezcla de carnes, grasas y/o subproductos, colocados en tripas naturales que se someten a uno o más tratamientos térmicos.  ',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'Dentro de las proteínas de la carne se encuentran la mioglobina y el colágeno, que juntas son las responsables de proporcionar el color rojo característico de la carne.  ',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'De acuerdo con la Norma Técnica Colombiana 1325 de 2023 los nitratos y nitritos o sales de curado pueden ser usados en la elaboración de productos madurados en un mínimo de 200 miligramos por kilogramo de producto.  ',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos generales de la carne y sus derivados. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! posee una buena comprensión sobre las generalidades de la carne y sus derivados. ¡Siga explorando este interesante mundo!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica. ',
    },
  }),
}
</script>
