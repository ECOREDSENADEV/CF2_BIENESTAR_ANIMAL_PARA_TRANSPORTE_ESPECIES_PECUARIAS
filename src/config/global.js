export default {
  global: {
    Name:
      'Aplicación de buenas prácticas de bienestar animal en especies de producción',
    Description:
      'El transporte de animales vivos es crucial para la cadena pecuaria. Un manejo deficiente causa estrés, lesiones, pérdidas económicas y sanciones. Para mitigar esto, el SENA ofrece un curso virtual sobre bienestar animal en el transporte de especies pecuarias. El programa capacita a técnicos, productores y transportadores en buenas prácticas, bioseguridad y normatividad, asegurando la ética y sostenibilidad.',
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
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
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
        titulo: 'Transporte según especie pecuaria',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Bovinos: clasificación, densidad y requerimientos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Porcinos: temperatura, ruido y sensibilidad al estrés',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Aves: jaulas, densidad y control térmico en el transporte',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Equinos: densidad, estabilidad y comportamiento en el transporte',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Ovinos y caprinos: densidad, estabilidad y comportamiento en el transporte',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tipos de transporte de animales vivos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Transporte terrestre',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Transporte fluvial',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Transporte aéreo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Condiciones especiales para la carga',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo de la especie en el transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación, monitoreo y mitigación de riesgos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Indicadores clínicos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Indicadores conductuales',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Listas de chequeo y formatos oficiales',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Evaluación de riesgos: fases y medidas',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Requisitos técnicos de las unidades de transporte',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Actividades asociadas al transporte',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo: 'Proceso completo de embarque y desembarque',
            hash: 't_4_7',
          },
          {
            numero: '4.8',
            titulo: 'Disposiciones finales ante emergencias',
            hash: 't_4_8',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Monitoreo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Procedimientos antes del viaje',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Procedimientos durante el viaje',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Procedimientos después del viaje',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Contingencia',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Acciones correctivas',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Competencia del personal responsable',
            hash: 't_5_6',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Casos prácticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Análisis de casos',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Toma de decisiones',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Mejora continua',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Procedimientos durante el viaje',
            hash: 't_6_4',
          },
        ],
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
        download: 'downloads/dist.pdf',
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
      tema: '',
      referencia: '',
      tipo: 'Sitio web',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
