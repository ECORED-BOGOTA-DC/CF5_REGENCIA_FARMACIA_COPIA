export default {
  global: {
    componenteFormativo: 'Sistema de emergencias médicas colombianas',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia de asistencia como primer respondiente, la cual busca que los aprendices reconozcan y apliquen la normativa del sistema de emergencias médicas en Colombia, durante la atención responsable y oportuna como primer respondiente, ante situaciones de enfermedad súbita o lesiones en clientes o usuarios al servicio farmacéutico/ droguería.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        titulo: 'Normatividad legal vigente para el primer respondiente',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Primer respondiente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Código Penal Colombiano',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Número único para emergencias',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo:
              'Principios básicos de la actuación del primer respondiente',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de emergencias médicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '¿Qué es el SEM?',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de escenarios',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Riesgo y peligro',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Asegurar el área',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Valoración del entorno',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Accidentes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Botiquín',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
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
        'American Heart Association. (2020). Aspectos destacados de las Guías de la AMERICAN HEART ASSOCIATION del 2020 para RCP Y ACE.',
      link:
        'https://cpr.heart.org/-/media/cpr-files/cpr-guidelines-files/highlights/hghlghts_2020eccguidelines_spanish.pdf',
    },
    {
      referencia:
        'Ayuso, F. (s.f.). “La hora de Oro: Prioridades de los servicios asistenciales”.',
      link:
        'https://docplayer.es/22109487-La-hora-de-oro-prioridades-de-los-servicios-asistenciales.html',
    },
    {
      referencia:
        'Corte Constitucional. (s.f.). Constitución Política de Colombia.',
      link:
        'https://www.corteconstitucional.gov.co/inicio/Constitucion%20politica%20de%20Colombia%20-%202015.pdf',
    },
    {
      referencia: 'Encolombia.com. (s.f.). Atención Médica Prehospitalaria.',
      link: 'https://encolombia.com/medicina/guiasmed/guia-hospitalaria/',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). Resolución Número 000926 de 2017.',
      link:
        'https://saludtolima-my.sharepoint.com/personal/info_saludtolima_gov_co/Documents/Public/Resoluciones/Resolucion%20No.926%20de%202017.pdf?originalPath=aHR0cHM6Ly9zYWx1ZHRvbGltYS1teS5zaGFyZXBvaW50LmNvbS86YjovZy9wZXJzb25hbC9pbmZvX3NhbHVkdG9saW1hX2dvdl9jby9FVHYwc1dNOG03SktzTXJleThHZGxZMEI4TmhWT0NZcV9kRWZMNjJudlZ2aTdBP3J0aW1lPXVJTENnNmxEMlVn',
    },
    {
      referencia:
        'Prehospital Trauma Life Support - Edición en español PHTLS. 9 edición.',
    },
    {
      referencia:
        'Secretaría Senado. (2000). Ley 599 de 2000. Capitulo VII y Titulo II Capitulo Único Art. 152.',
      link:
        'http://www.secretariasenado.gov.co/senado/basedoc/ley_0599_2000.html',
    },
  ],
  glosario: [
    {
      termino: 'Accidente',
      significado:
        'se define como un suceso imprevisto que perturba la marcha normal o prevista de las cosas, particularmente el que causa daños a una persona o cosa. ',
    },
    {
      termino: 'Asonada',
      significado:
        'tumulto, motín o disturbio que se distingue de la manifestación por su carácter violento y la perturbación del orden público, con el objetivo de conseguir algún fin, por lo común político.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'conjunto de principios, normas, protocolos, tecnologías y prácticas que se implementan para evitar el riesgo para la salud y el medio ambiente, que proviene de la exposición a agentes biológicos causantes de enfermedades infecciosas, tóxicas o alérgicas.',
    },
    {
      termino: 'Cadena de custodia',
      significado:
        'conjunto de procedimientos encaminados a asegurar y demostrar la autenticidad de los elementos materiales probatorios y evidencia física.',
    },
    {
      termino: 'CRUE',
      significado: 'Centro Regulador de Urgencias y Emergencias.',
    },
    {
      termino: 'Emergencia',
      significado:
        'situación en la que se requieren acciones y decisiones médicas inmediatas. Dada la complejidad de la situación o afección, esta pone en riesgo la vida de los involucrados. Cuando nos referimos a emergencias médicas, no hay suficiente tiempo y por eso los socorristas o encargados de la situación deben de tratar al paciente en el lugar que se encuentre, con la intención de sacarlo del peligro en el que se encuentra.',
    },
    {
      termino: 'Estampida humana por pánico',
      significado:
        'es un caso particular en el que una muchedumbre se precipita hacia una misma dirección para huir de un peligro real o supuesto.',
    },
    {
      termino: 'Lesión',
      significado:
        'perturbación o daño que se origina en alguna parte del cuerpo, causada por un golpe, una enfermedad, etc.',
    },
    {
      termino: 'NUSE',
      significado: 'Número Único de Seguridad y Emergencias.',
    },
    {
      termino: 'Primer auxilio',
      significado:
        'atención inmediata que se le aporta a una persona enferma, lesionada o accidentada en el lugar de los sucesos, antes de ser trasladada a un centro asistencial u hospitalario.',
    },
    {
      termino: 'Primer respondiente',
      significado:
        'la primera persona que decide proporcionar los primeros auxilios a la persona que presenta una alteración en su estado de salud o en su integridad física, Puede o no, ser un profesional de la salud.',
    },
    {
      termino: 'SEM',
      significado:
        'Sistema de Emergencias Médicas. Modelo general integrado de coordinación no asistencial y operadores asistenciales, con el propósito de responder de manera oportuna a las víctimas de enfermedad, paros cardiorrespiratorios, accidentes de tránsito o traumatismos que requieran atención médica de urgencias, en lugares públicos y privados.',
    },
    {
      termino: 'Traumatismo',
      significado:
        'lesión de los órganos o tejidos por acciones mecánicas externas.',
    },
    {
      termino: 'Urgencia',
      significado:
        'situación en donde se requiere asistencia médica en un lapso reducido de tiempo, pero este no implica riesgo en la vida de los involucrados, ni genera peligro en la evolución de su afección.',
    },
  ],
  complementario: [
    {
      texto:
        'BIC., (2015). “2 minutos para entender el desarrollo sostenible – Spanish”',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      texto:
        'Arnold, M. y Osorio, F., (1998). Introducción a los conceptos básicos de la Teoría general de sistemas. Cinta moebio 3: 40-49',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto:
        'Balboa, C. y Dominguez, M. (2014). Economía circular como marco para el ecodiseño: el modelo ECO-3. Informador Técnico (Colombia) Volumen 78, No. 1. Pág. 52-90.',
      tipo: 'Artículo científico',
      link: 'https://www.google.com/',
    },
    {
      texto: 'Economía de Rosquilla. (s.f.).',
      tipo: 'Página web',
      descarga: '/downloads/prueba.pdf',
    },
    {
      texto: '2 minutos para entender el desarrollo sostenible – Spanish',
      tipo: 'Video',
      link: 'https://www.google.com/',
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
        nombre: 'Emilia Sarmiento Mora',
        cargo: 'Profesional Experta Temática',
        centro: 'Regional Antioquia Centro de Servicios de Salud',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Diseñadora Instruccional – Revisora Metodológica y Pedagógica',
        centro:
          'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica',
      },
      {
        nombre: 'Sandra Patricia Hoyos Sepúlveda',
        cargo: 'Revisión y corrección de estilo',
        centro:
          'Regional Distrito Capital Centro para la Industria de la Comunicación Gráfica',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Antonio Vecino Valero',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo Front-End',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Víctor Raúl Cárdenas Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
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
