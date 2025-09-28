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
      tema: 'Transporte según especie pecuaria',
      referencia:
        'MinTransporte (s.f.). Manual de Procedimientos para el Transporte, Manejo y Movilización de Animales en Pie. Bogotá, Colombia.',
      tipo: 'Manual técnico',
      link:
        'https://web.mintransporte.gov.co/jspui/bitstream/001/10558/1/ABC%20Transporte%20animales.pdf ',
    },
    {
      tema: 'Transporte según especie pecuaria',
      referencia:
        'Organización Mundial de Sanidad Animal - OMSA/WOAH. (2011). Código Sanitario para los Animales Terrestres. París: WOAH.',
      tipo: 'Estándar internacional',
      link:
        'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_titre_1.7.htm ',
    },
    {
      tema: 'Bovinos: clasificación, densidad y requerimientos',
      referencia:
        'FEDEGÁN. (2023). Cap 83 - Condiciones de Bienestar Animal en el transporte y el sacrificio. [Archivo de video] Youtube.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8I0b-31DMYM&ab_channel=FEDEGAN ',
    },
    {
      tema: 'Aves: jaulas, densidad y control térmico en el transporte',
      referencia:
        'ICA. (2024). Metodología para evaluar bienestar Animal en aves de corral y de Traspatio. Bogotá, Colombia.',
      tipo: 'Guía técnica sectorial',
      link:
        'https://www.ica.gov.co/getattachment/Areas/Pecuaria/Servicios/Inocuidad-en-las-Cadenas-Agroalimentarias/Bienestar-Animal/Metodologia-EBA-Aves-de-Corral_30JL.pdf.aspx?lang=es-CO ',
    },
  ],
  glosario: [
    {
      termino: 'Animal en pie',
      significado:
        'es un individuo vivo de cualquier especie animal. Se excluyen de esta definición las especies animales procedentes de la pesca y la acuicultura.',
    },
    {
      termino: 'Cargue',
      significado:
        'corresponde al proceso de ingreso de animales en la unidad de transporte.',
    },
    {
      termino: 'Conductor, maquinista, tripulante',
      significado:
        'persona habilitada y capacitada técnicamente para operar un equipo de transporte.',
    },
    {
      termino: 'Densidad de carga',
      significado:
        'cantidad de kilogramos de animales por área en la unidad de transporte.',
    },
    {
      termino: 'Descargue',
      significado:
        'corresponde al proceso de egreso de animales de la unidad de transporte.',
    },
    {
      termino: 'Desinfección',
      significado:
        'destrucción de microorganismos mediante el empleo de productos químicos o medios físicos.',
    },
    {
      termino: 'Destinatarios',
      significado:
        'toda persona natural o jurídica que reciba los animales transportados.',
    },
    {
      termino: 'Equipo de transporte',
      significado:
        'todo vehículo (aeronave, embarcación, tren o vehículo automotor) que permite el transporte de personas, animales o cosas, de un lugar a otro.',
    },
    {
      termino: 'Guacal',
      significado:
        'cesta o jaula que se emplea para contener animales durante su transporte.',
    },
    {
      termino: 'Limpieza',
      significado:
        'proceso de eliminación de residuos o de materias extrañas e indeseables.',
    },
    {
      termino: 'Modo de transporte',
      significado:
        'subsistema de transporte que incluye un medio físico, vías, instalaciones para terminales, equipos de transporte y operaciones para el traslado de los animales.',
    },
    {
      termino: 'Posición de estación de equilibrio estático',
      significado:
        'posición en la cual el animal se encuentra en pie sobre la cara plantar de las extremidades sin desplazarse y se produce cuando éste está en reposo (tratándose de equinos) o en estado de inmovilidad relativa.',
    },
    {
      termino: 'Posición de reposo',
      significado:
        'posición en la cual el animal descansa normalmente, según especie, la cual podrá ser para bovinos: echados o en decúbito external, para équidos: de pie y para porcinos: echados o acostados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2016). Ley 1774 de 2016: Por medio de la cual se modifica el Código Civil, el Código Penal y el Código de Procedimiento Penal en relación con el maltrato animal. Diario Oficial, 49.774.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2007). Decreto 1500 de 2007: Por el cual se establece el Sistema Oficial de Inspección, Vigilancia y Control de la carne, productos cárnicos comestibles y derivados cárnicos destinados para el consumo humano. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2019). Manual de procedimientos para el transporte y movilización de animales en pie. Instituto Colombiano Agropecuario y Ministerio de Transporte.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (2020). Resolución 136 de 2020: Por la cual se establecen los requisitos de bienestar animal para el transporte de especies pecuarias en Colombia. Instituto Colombiano Agropecuario.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario - ICA. (s. f.). Guía Sanitaria de Movilización Interna - GSMI. Bogotá, Colombia.',
      link: '',
    },
    {
      referencia:
        'International Air Transport Association - IATA. (2023). Live Animals Regulations (LAR). Montreal, Canadá.',
      link: '',
    },
    {
      referencia:
        'Fédération Equestre Internationale - FEI. (2023). Regulations and Veterinary Guidelines for International Horse Transport. Lausanne, Suiza.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 240 de 2013: Por la cual se establecen los requisitos sanitarios para el funcionamiento de las plantas de beneficio animal de las especies bovina, bufalina y porcina, plantas de desposte, almacenamiento, comercialización, expendio, transporte, importación o exportación de carne y productos cárnicos comestibles [Resolución]. Diario Oficial No. 48 699. Bogotá, Colombia. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 241 de 2013: Por la cual se establecen los requisitos sanitarios que deben cumplir las plantas especiales de beneficio de aves de corral [Resolución]. Bogotá, Colombia. ',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2013). Resolución 242 de 2013: Por la cual se establecen los requisitos sanitarios para el funcionamiento de las plantas de beneficio de aves de corral, desprese, almacenamiento, comercialización, expendio, transporte, importación o exportación de carne y productos cárnicos comestibles [Resolución]. Diario Oficial No. 48 699. Bogotá, Colombia',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal - OMSA/WOAH. (2011). Código sanitario para los animales terrestres. Capítulo 7.3: Transporte de animales por vía terrestre. WOAH. ',
      link: '',
    },
    {
      referencia:
        'World Organisation for Animal Health (WOAH). (2023). Terrestrial Animal Health Code (2023 ed.). Paris: WOAH.  ',
      link:
        'https://www.woah.org/en/what-we-do/standards/codes-and-manuals/previous-editions-of-the-terrestrial-code/',
    },
    {
      referencia:
        'World Health Organization (WHO), & Food and Agriculture Organization of the United Nations (FAO). (2022). Animal welfare in food production systems (FAO/WHO Technical Report). FAO & WHO.',
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
