export default {
  global: {
    componenteFormativo: 'Conceptos de Innovación y caracterización de usuario',
    descripcionCurso:
      'Existen diferentes tipos de metodologías de innovación, por tanto entender la definición de innovación y su relación con el <i>design thinking</i> es primordial para comenzar el proceso formativo, además de contextualizar sobre la importancia del desarrollo de la empatía como habilidad blanda fundamental para abordar estos procesos que se centran netamente en las necesidades de los usuarios.',
    imagenBannerPrincipal: require('@/assets/curso/images/header/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/images/header/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos de innovación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Design Thinking</i>',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Fase de empatía',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Design Thinking 24/7. (2018). Qué es “DESIGN THINKING - PENSAMIENTO DE DISEÑO” Temp 3 Ep 1. [Video]. YouTube ',
      link: 'https://www.youtube.com/watch?v=ed6GJWMA61s',
    },
    {
      referencia:
        'Drucker, P. F. (2006). Innovation and Entrepreneurship. Harper Business.',
      link: '',
    },
    {
      referencia:
        'Futurizable.com. (2017). Metodologías innovadoras para crear la empresa del futuro. ',
      link: 'https://futurizable.com/metodologias-innovacion/',
    },
    {
      referencia: 'Leanventures.se. (2016). 9 types of innovation ',
      link:
        'https://leanventures.se/wp-content/uploads/2016/03/9-types-of-innovation.png',
    },
    {
      referencia:
        'Lewrick, M., Link, P., & Leifer, L. (2020). The design thinking toolbox (1.a ed.). John Wiley & Sons, Inc. ',
      link: 'https://www.dt-toolbook.com/',
    },
    {
      referencia:
        'OCDE. (2005), Medición de las actividades científicas y tecnológicas. Directrices propuestas para recabar e interpretar datos de la innovación tecnológica: Manual de Oslo. OCDE.',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Arquetipo',
      significado:
        'Modelo original que sirve como pauta para imitarlo, reproducirlo o copiarlo, o prototipo ideal que se usa como ejemplo de perfección de algo.',
    },
    {
      termino: 'Design Thinking',
      significado:
        'Metodología ágil utilizada para generar metodologías innovadoras.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad de identificarse con alguien y compartir sus sentimientos.',
    },
    {
      termino: 'Lienzo',
      significado: 'tela preparada para pintar sobre ella.',
    },
  ],
  complementario: [
    {
      texto:
        'Design Thinking España. (2020). Metodología Design Thinking. Ejemplos. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=_ul3wfKss58&t=314s',
    },
    {
      texto:
        'Bedolla, K. (2017). Entrevista semiestructurada.  [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IWLZwLN96O8',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora Metodológica y Pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Cristina Zuluaga Penagos',
        cargo: 'Experta Temática',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Luz Aída Quintero Velásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Natalia Gómez Rodríguez',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro Tecnológico del Mobiliario - Regional Antioquia',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Oscar Marquez Sanabria',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Adolfo Marún Suárez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yenny Patricia Ulloa Villamizar',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Alvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
