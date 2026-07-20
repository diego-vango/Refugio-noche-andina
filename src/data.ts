import { Cabin, Activity, Constellation, Testimonial, FAQItem } from './types';

export const CABINS: Cabin[] = [
  {
    id: 'cruz-del-sur',
    name: 'Casa Rural "Cruz del Sur"',
    description: 'Bautizada en honor a la constelación más emblemática del hemisferio sur, esta acogedora cabaña rústica destaca por su maravillosa terraza de madera con barandillas artesanales, rodeada de perfumadas lavandas silvestres y arbustos nativos.',
    capacity: '2 a 3 personas',
    beds: '1 Cama Matrimonial + 1 Sofá Cama',
    pricePerNight: 75000,
    mainImage: '/src/assets/images/cruz_del_sur_cabin_1784501640234.jpg',
    airbnbLink: 'https://www.airbnb.cl',
    bookingLink: 'https://www.booking.com',
    secondaryDescription: 'Ubicada estratégicamente en Vicuña para capturar las vistas más imponentes del Valle del Elqui, es el refugio ideal para parejas o pequeñas familias que buscan tranquilidad, meditación y una conexión mágica con el cielo estrellado de Elqui.',
    features: [
      'Terraza/Balcón con vista panorámica a la cordillera',
      'Jardines de lavanda y flora nativa',
      'Cama matrimonial premium',
      'Cocina completa equipada con vajilla y utensilios',
      'Zona exterior para asados (parrilla)',
      'Iluminación nocturna de bajo impacto (astroturismo-friendly)',
      'Estacionamiento privado gratuito'
    ],
    highlights: [
      'Vista despejada de estrellas desde el balcón',
      'Ubicación privilegiada y privada',
      'Termo solar para agua caliente'
    ],
    specs: [
      { label: 'Superficie', value: '45 m²' },
      { label: 'Capacidad', value: 'Hasta 3 personas' },
      { label: 'Camas', value: '1 Doble + 1 Sofá-cama' },
      { label: 'Baños', value: '1 Baño privado' },
      { label: 'Ubicación', value: 'Vicuña, Valle del Elqui' }
    ]
  },
  {
    id: 'los-pimientos',
    name: 'Casa Rural "Los Pimientos"',
    description: 'La opción perfecta para familias numerosas o grupos que buscan flexibilidad. Cuenta con un gran loft de concepto abierto con una cocina tipo americana integrada, amplios sillones de mimbre y un patio empedrado protegido por una hermosa pérgola de madera y caña.',
    capacity: 'Hasta 7 personas',
    beds: '1 Matrimonial + 1 Simple + 4 Literas (camarotes)',
    pricePerNight: 85000,
    mainImage: '/src/assets/images/los_pimientos_cabin_1784501649919.jpg',
    airbnbLink: 'https://www.airbnb.cl',
    bookingLink: 'https://www.booking.com',
    secondaryDescription: 'La propiedad cuenta con dos estructuras independientes en el mismo sitio: el gran loft principal con espacio abierto (cama matrimonial, cama de una plaza, baño y cocina) y una segunda casa separada que cuenta con su propio baño completo y dos cómodos camarotes (literas).',
    features: [
      'Espacio principal tipo loft (sin divisiones interiores)',
      'Cocina americana totalmente equipada',
      'Pérgola exterior de cañas y vigas rústicas',
      'Sillones de mimbre tradicionales',
      'Segunda cabaña independiente para niños/invitados',
      '2 Baños completos en total',
      'Espacioso patio con fogón para las noches de Elqui'
    ],
    highlights: [
      'Ideal para familias grandes o grupos amigos',
      'Pérgola de sombra ideal para la tarde',
      'Dos cabañas en un mismo terreno cerrado'
    ],
    specs: [
      { label: 'Superficie', value: '60 m² + Patio' },
      { label: 'Capacidad', value: '4 a 7 personas' },
      { label: 'Camas', value: '1 Doble + 1 Simple + 4 literas' },
      { label: 'Baños', value: '2 Baños completos' },
      { label: 'Sombra', value: 'Pérgola tradicional de cañas' }
    ]
  }
];

export const ACTIVITIES: Activity[] = [
  {
    id: 'astroturismo',
    title: 'Astroturismo & Observación',
    description: 'El Valle del Elqui cuenta con los cielos más limpios del planeta. Te orientamos para disfrutar de observaciones nocturnas o reservar visitas a observatorios de la zona.',
    iconName: 'Sparkles',
    category: 'Noche'
  },
  {
    id: 'trekking',
    title: 'Trekking Cordillerano',
    description: 'Senderos únicos entre cerros áridos y quebradas fértiles. Descubre la mística de los antiguos caminos diaguitas y las asombrosas vistas panorámicas.',
    iconName: 'Compass',
    category: 'Aventura'
  },
  {
    id: 'cicletadas',
    title: 'Cicletadas en el Valle',
    description: 'Recorre los tranquilos pueblos del valle, sus viñedos y plantaciones de papayas en bicicleta, disfrutando del aire puro y la tranquilidad del camino.',
    iconName: 'Bike',
    category: 'Deporte'
  },
  {
    id: 'poesia',
    title: 'Poesía & Ruta Mistraliana',
    description: 'Conéctate con la tierra natal de nuestra Premio Nobel, Gabriela Mistral. Visita su escuela y casa en Montegrande y revive su legado bajo la higuera.',
    iconName: 'BookOpen',
    category: 'Cultura'
  },
  {
    id: 'yoga',
    title: 'Yoga & Meditación',
    description: 'La energía del Valle del Elqui es ideal para el bienestar. Ofrecemos rincones silenciosos e instructores locales para sesiones de yoga y cuencos al amanecer.',
    iconName: 'Flame',
    category: 'Bienestar'
  },
  {
    id: 'tours',
    title: 'Tours Guiados Personalizados',
    description: 'Te ayudamos a coordinar visitas locales a destilerías de pisco artesanal, viñas orgánicas y reservas de naturaleza en los alrededores de Vicuña.',
    iconName: 'MapPin',
    category: 'Guiado'
  }
];

export const CONSTELLATIONS: Constellation[] = [
  {
    id: 'cruz-sur',
    name: 'Crux',
    spanishName: 'La Cruz del Sur',
    description: 'La constelación más famosa de nuestros cielos. Cuatro estrellas brillantes que forman una cruz y que permiten ubicar el polo sur celeste apuntando en línea recta.',
    stars: ['Acrux', 'Mimosa', 'Gacrux', 'Imai'],
    cx: 40,
    cy: 65,
    funFact: 'Es visible durante todo el año en Chile y fue un pilar de navegación para pueblos originarios y marinos.'
  },
  {
    id: 'orion',
    name: 'Orion',
    spanishName: 'Orión (Las Tres Marías)',
    description: 'El gran cazador celeste. En su centro destaca el cinturón de Orión, conocido en Chile como "Las Tres Marías" o "Tres Chepas".',
    stars: ['Betelgeuse', 'Rigel', 'Bellatrix', 'Alnilam', 'Alnitak', 'Mintaka'],
    cx: 25,
    cy: 30,
    funFact: 'Justo debajo del cinturón se encuentra la Gran Nebulosa de Orión, una cuna de estrellas visible a simple vista en noches despejadas.'
  },
  {
    id: 'escorpio',
    name: 'Scorpius',
    spanishName: 'Escorpio',
    description: 'Una de las constelaciones más imponentes y fáciles de identificar, con su forma de gancho o cola de escorpión brillando en el cenit durante el invierno.',
    stars: ['Antares', 'Shaula', 'Sargas', 'Graffias'],
    cx: 75,
    cy: 40,
    funFact: 'Su estrella principal, Antares, es una supergigante roja tan masiva que si estuviera en el centro de nuestro sistema solar, tragaría hasta Marte.'
  },
  {
    id: 'centauro',
    name: 'Centaurus',
    spanishName: 'El Centauro',
    description: 'Flanqueando a la Cruz del Sur se encuentran Alfa y Beta Centauri, los "punteros" que ayudan a localizar la Cruz en el cielo estrellado.',
    stars: ['Rigil Kentaurus', 'Hadar', 'Menkent'],
    cx: 55,
    cy: 70,
    funFact: 'Alfa Centauri (Rigil Kentaurus) es en realidad un sistema triple y el vecino estelar más cercano a la Tierra, a solo 4.3 años luz.'
  }
];

export const REVIEWS: Testimonial[] = [
  {
    id: '1',
    author: 'Camila Espinoza',
    text: 'Increíble lugar. Nos alojamos en Cruz del Sur y despertarse con la vista de los cerros llenos de lavanda y el aire puro no tiene precio. Las noches son un espectáculo; pudimos ver la Vía Láctea desde el balcón con una claridad asombrosa. ¡La atención de sus dueños por WhatsApp fue impecable!',
    rating: 5,
    date: 'Marzo 2026',
    cabinName: 'Cruz del Sur',
    avatarSeed: 'camila',
    platform: 'google'
  },
  {
    id: '2',
    author: 'Rodrigo Valenzuela',
    text: 'Fuimos con toda la familia (somos 6) a Los Pimientos. La distribución es genial, los niños durmieron felices en los camarotes de la segunda casa y nosotros tuvimos total privacidad en el loft. La pérgola con sombra es maravillosa para almorzar afuera. Recomiendo 100% reservar directo con ellos.',
    rating: 5,
    date: 'Enero 2026',
    cabinName: 'Los Pimientos',
    avatarSeed: 'rodrigo',
    platform: 'airbnb'
  },
  {
    id: '3',
    author: 'Mariela & Hans',
    text: 'Buscábamos paz y desconexión y la encontramos aquí. Es un lugar hermoso, sumamente acogedor, las cabañas son frescas de día y cálidas de noche. Hicimos el tour de astroturismo y quedamos maravillados. Reservar por WhatsApp fue rapidísimo y nos ahorramos las comisiones de las plataformas.',
    rating: 5,
    date: 'Junio 2026',
    cabinName: 'Cruz del Sur',
    avatarSeed: 'mariela',
    platform: 'booking'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'q1',
    question: '¿Cómo funciona la reserva directa por WhatsApp?',
    answer: 'Es muy sencillo: seleccionas la cabaña de tu interés y las fechas en nuestro cotizador de arriba. Al hacer clic en "Solicitar Reserva por WhatsApp", se generará un mensaje automático detallando tu estadía. Nos escribes directamente para confirmar disponibilidad, te enviamos los datos de transferencia y ¡listo! Sin comisiones de plataformas externas.',
    category: 'booking'
  },
  {
    id: 'q2',
    question: '¿Dónde están ubicados exactamente y cómo se llega?',
    answer: 'Estamos ubicados en las cercanías de Vicuña, en el corazón del Valle del Elqui, Región de Coquimbo, Chile. Desde La Serena, puedes tomar la Ruta 41 hacia el oriente durante aproximadamente 1 hora. Una vez confirmada tu reserva, te enviamos la ubicación exacta por GPS y un mapa detallado para que llegues sin problemas (apto para todo tipo de vehículos).',
    category: 'location'
  },
  {
    id: 'q3',
    question: '¿Cuáles son las políticas de Check-in y Check-out?',
    answer: 'El Check-in es a partir de las 15:00 horas, lo que nos permite dejar la cabaña sanitizada e impecable para ti. El Check-out es hasta las 11:00 horas. Si necesitas flexibilidad de horario, por favor consúltanos por WhatsApp con anticipación para ver disponibilidad.',
    category: 'booking'
  },
  {
    id: 'q4',
    question: '¿Con qué equipamiento cuentan las cabañas?',
    answer: 'Nuestras cabañas están totalmente equipadas para tu comodidad: cuentan con cocina completa (encimera, refrigerador, vajilla y utensilios), sábanas y toallas de alta calidad, terraza privada con mobiliario de exterior para disfrutar del cielo nocturno, y estacionamiento privado al costado de cada cabaña.',
    category: 'amenities'
  },
  {
    id: 'q5',
    question: '¿Se aceptan mascotas (Pet-Friendly)?',
    answer: '¡Sí! Amamos a los animales y entendemos que son parte de la familia. Aceptamos mascotas educadas bajo previo aviso en la reserva para asegurar que la estadía sea cómoda para todos los huéspedes del refugio. Solicitamos traer sus mantas y camas habituales.',
    category: 'amenities'
  },
  {
    id: 'q6',
    question: '¿Las cabañas tienen Wi-Fi y cobertura móvil?',
    answer: 'Sí, contamos con conexión Wi-Fi satelital en todo el predio para que puedas teletrabajar o compartir tus fotos del valle. La señal de telefonía celular (especialmente Entel y Movistar) es excelente en el sector.',
    category: 'amenities'
  }
];
