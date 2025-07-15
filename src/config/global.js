export default {
  global: {
    Name: 'Generalidades de la carne y sus derivados',
    Description:
      'En este componente se presentan las generalidades de la carne, la clasificación según su origen, la composición química y las características sensoriales propias del producto. Además, se identifican las clases de productos cárnicos procesados, los ingredientes que intervienen en su formulación y los procesos de elaboración, aplicando los criterios de calidad e inocuidad establecidos en la normatividad colombiana vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de la carne',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de la carne según el origen',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Composición química de la carne',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características sensoriales de la carne',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Productos cárnicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de los productos cárnicos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Ingredientes usados en la elaboración de productos cárnicos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Normatividad en la formulación de productos cárnicos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Buenas Prácticas de Manufactura (BPM)',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF1_96151139_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos cárnicos',
      referencia:
        'Jurado - Gámez, H. & Insuasty – Santacruz, E. (2021). Procedimientos de tecnología de carnes. Editorial Universidad de Nariño. Colombia. ',
      tipo: 'PDF',
      link: 'https://sired.udenar.edu.co/7320/1/libro%20carnes%20digital.pdf',
    },
    {
      tema: 'Ingredientes usados en la elaboración de productos cárnicos',
      referencia:
        'Freixanet, L. (s.f.). Aditivos e ingredientes en la fabricación de productos cárnicos cocidos de músculo entero. Metalquimia, 28-41.',
      tipo: 'PDF',
      link:
        'https://www.metalquimia.com/download/docs/55393/aditivos-e-ingredientes-en-la-fabricacion-de-productos-carnicos.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aditivo alimentario',
      significado:
        'Sustancia que normalmente no se consume como alimento y no se usa normalmente como ingrediente característico del alimento, tengo o no valor nutritivo, y cuya adición intencional al alimento con un fin tecnológico (incluso organoléptico) en la fabricación, elaboración, preparación, tratamiento, envasado, empaque, transporte o conservación de ese alimento, resulta o es de prever que resulte (directamente o indirectamente) en que él o sus derivados pasen a ser un componente de tales alimentos o afecten las características de estos.',
    },
    {
      termino: 'Animal de abasto',
      significado:
        'Bovinos, ovinos, porcinos, caprinos, aves de corral y otras especias que la autoridad sanitaria competente declare que son utilizables y aptas para el consumo humano.',
    },
    {
      termino: 'Aminoácido',
      significado:
        'Sustancia química orgánica en cuya composición molecular entran un grupo amino y otro carboxilo.',
    },
    {
      termino: 'Buenas Prácticas de Manufactura (BPM)',
      significado:
        'Conjunto de normas y procedimientos que se deben seguir para garantizar la calidad e inocuidad de los alimentos.',
    },
    {
      termino: 'Carne',
      significado:
        'Parte muscular esquelética de los animales de abasto, incluyendo tejido conectivo y adiposo que haya sido declarada apta para el consumo humano por la inspección oficial antes y después del beneficio. Además, se considera carne el diafragma y los músculos maceteros de cerdo, no así, los demás subproductos de origen animal.',
    },
    {
      termino: 'Curado',
      significado:
        'proceso de estabilización del color de la carne mediante la adición de nitrito de sodio y agentes coadyuvantes (cloruro de sodio, azúcares, ácido ascórbico, entre otros).',
    },
    {
      termino: 'Embutido',
      significado:
        'producto cárnico procesado, crudo o cocido, que ha sido introducido a presión en tripas naturales o artificiales aprobadas para tal fin, aunque en el momento del expendio o consumo carezca de la envoltura empleada.  ',
    },
    {
      termino: 'Especia',
      significado:
        'producto constituido por ciertas plantas o partes de ellas que por tener sustancias saborizantes o aromatizantes se emplean para aderezar, aliñar o modificar el aroma y sabor de los alimentos.  ',
    },
    {
      termino: 'Grasa',
      significado: 'tejido adiposo comestible de los animales de abasto. ',
    },
    {
      termino: 'Maduración',
      significado:
        'conjunto de procesos bioquímicos y físicos, que tienen lugar en la fabricación de algunos productos cárnicos crudos en los cuales se controla la temperatura, humedad y ventilación, desarrollando el aroma, sabor, consistencia y conservación características de estos productos.  ',
    },
    {
      termino: 'Producto cárnico',
      significado:
        'aquel elaborado a base de carne, grasa, vísceras u otros subproductos de origen animal comestibles, provenientes de animales de abasto, con adición o no de sustancias permitidas o especias o ambas, sometido a procesos tecnológicos adecuados. ',
    },
    {
      termino: 'Proteína',
      significado:
        'sustancia constitutiva de la materia viva, formada por una o varias cadenas de aminoácidos.  ',
    },
    {
      termino: 'Subproducto de origen animal',
      significado:
        'partes del animal de abasto que no constituyen parte de la canal y que no están comprendidas en la definición de carne. Estos subproductos de origen animal pueden ser: comestibles (vísceras, albúmina de la sangre, plasma, hemoglobina, cartílago, cuero o piel, manos, patas y cartílago de orejas de porcino aprobados por la autoridad competente) y no comestibles (hueso, pelo, pumas, oído, cerebro, coágulos de sangre, glándulas linfáticas, cascos, cuernos, ojos, genitales y la ubre proveniente de hembras lactantes).',
    },
  ],
  referencias: [
    {
      referencia:
        'Chabraszewski, J. (s.f). Raw beef and vegetables on white background. Recuperado de Adobe Stock:',
      link:
        'https://stock.adobe.com/co/images/raw-beef-and-vegetables-on-white-background/49965398?as_campaign=ftmigration2&as_channel=dpcft&as_campclass=brand&as_source=ft_web&as_camptype=acquisition&as_audience=users&as_content=closure_asset-detail-page',
    },
    {
      referencia:
        'Jurado – Gámez, H & Insuasty – Santacruz, E. (2021). Procedimientos de tecnología de carnes. Editorial Universidad de Nariño.',
      link: '',
    },
    {
      referencia:
        'LabXchage. (20 de enero de 2020). Proteínas. LabXchange. Recuperado el 10 de marzo de 2025 de',
      link:
        'https://www.labxchange.org/library/items/lb:LabXchange:95ebc6fd:html:1',
    },
    {
      referencia:
        'Lizcano, F. & Valenzuela, C. (2020). Impacto del cosumo de carne magra de cerdo sobre el riesgo cardiovascular. Revista Colombiana de Cardiología, 24 (4), 337-343',
      link: 'https://doi.org/10.1016/j.rccar.2020.01.011',
    },
    {
      referencia:
        'Martínez, M. (1999). Manual de clasificación de servicio de clasificación de ganados y carnes. México, Monterrey: Sagarpa.',
      link: '',
    },
    {
      referencia:
        'Ramírez, R. (2006). Tecnología de cárnicos. Bogotá, Colombia: Universidad Nacional Abierta a Distancia.',
      link: '',
    },
    {
      referencia:
        'Samorodskaia, N. (s.f). Raw chicken meat isolated on white background. Recuperado de Adobe Stock:',
      link:
        'https://stock.adobe.com/co/contributor/206877750/natalia-samorodskaia?load_type=author&prev_url=detail&asset_id=581807506',
    },
    {
      referencia:
        'Wirth, F. (1992). Tecnología de los embutidos escaldados. Zaragoza, España: Editorial Acribia.',
      link: '',
    },
    {
      referencia:
        'Valero – Gaspar, T., Del Pozo de la Calle, S., Ruiz – Moreno, E., Ávila – Tores., J.M., Varela – Moreiras, G. (2001). Guía nutricional de la carne. Fundación Española de la Nutrición y Fedecarne. Madrid, España.',
      link: '',
    },
    {
      referencia:
        'Velasco, V., Vera, V., Bórquez, F., Williams, P., Faúndez, M., Alarcon – Enos, J. (2019). Composición de carne de cerdo en un sistema de producción natural. Chilean Journal of Agricultural & Animal Sciences, 35 (3), 261-266.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ángela Viviana Páez Perilla',
          cargo: 'Experta temática ',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Paola Andrea Bobadilla Gutiérrez ',
          cargo: 'Guionista – Línea de producción',
          centro: 'Centro Agroindustrial – Regional Quindío',
        },
        {
          nombre: 'Erika Daniela Manrique Rueda',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Diseñadora de contenidos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Johann Sebastián Terán Carvajal',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette González Quintero',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Andrea Ardila Chaparro',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
