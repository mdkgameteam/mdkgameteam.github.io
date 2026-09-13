export interface TranslationSchema {
  nav: {
    projects: string;
    about: string;
    contact: string;
    launcher: string;
    langSwitch: string;
    langLabel: string;
  };
  hero: {
    badge: string;
    title: string;
    tagline: string;
    description: string;
    exploreBtn: string;
    downloadBtn: string;
  };
  about: {
    titlePrefix: string;
    teamName: string;
    p1: string;
    p2: string;
    readMore: string;
  };
  aboutLong: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    historyTitle: string;
    historyP1: string;
    historyP2: string;
  };
  projects: {
    title: string;
    subtitle: string;
    description: string;
    otherTitle: string;
    loading: string;
    close: string;
  };
  contact: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    sendBtn: string;
    sendingBtn: string;
    successMsg: string;
    errorMsg: string;
    modalSuccessTitle: string;
    modalSuccessText: string;
    modalErrorTitle: string;
    modalErrorText: string;
  };
  launcher: {
    title: string;
    description1: string;
    disclaimer: string;
    download: string;
    recommendedBadge: string;
    mobileWarningTitle: string;
    mobileWarningText: string;
    safeLinks: string;
    termsBtn: string;
    securityBtn: string;
    viewAllBtn: string;
    version: string;
  };
  footer: {
    tagline: string;
    community: string;
    communityDiscord: string;
    team: string;
    contact: string;
    about: string;
    docs: string;
    terms: string;
    security: string;
    rights: string;
  };
  terms: {
    title: string;
    intro: string;
    s1Title: string;
    s1Text: string;
    s2Title: string;
    s2Text: string;
    s2Event: string;
    s2Series: string;
    s2Tournament: string;
    s3Title: string;
    s3Text: string;
    s3Forge: string;
    s3Mojang: string;
    s3Perf: string;
    s4Title: string;
    s4Text: string;
    s5Title: string;
    s5Text: string;
    s6Title: string;
    s6Text: string;
  };
  security: {
    title: string;
    p1: string;
    h2: string;
    p2: string;
    p3: string;
  };
}

export const translations: Record<'es' | 'en', TranslationSchema> = {
  es: {
    nav: {
      projects: 'Proyectos',
      about: 'Acerca',
      contact: 'Contacto',
      launcher: 'MDK Launcher',
      langSwitch: 'EN',
      langLabel: 'English',
    },
    hero: {
      badge: '✨ Bienvenido a MDK GAME TEAM',
      title: 'MDK GAME TEAM',
      tagline: '#MDKForce',
      description: 'Creando contenido único y de calidad para Minecraft',
      exploreBtn: 'Explorar Proyectos',
      downloadBtn: 'Descargar Launcher',
    },
    about: {
      titlePrefix: 'Conoce a:',
      teamName: 'MDK Game Team',
      p1: 'Nos complace darles la bienvenida al equipo de MDK, un grupo apasionado dedicado al desarrollo de contenido en Minecraft para creadores y la comunidad. 🌟',
      p2: 'Con una amplia experiencia en la configuración de plugins, mods y cinemáticas, nos enorgullece ofrecer un contenido único y de calidad.',
      readMore: 'Ver más',
    },
    aboutLong: {
      title: 'Acerca de MDK Game Team',
      p1: '¡Hola a todos! Nos complace darles la bienvenida al equipo de MDK, un grupo apasionado dedicado al desarrollo de contenido en Minecraft para creadores y la comunidad.',
      p2: 'Con una amplia experiencia en la configuración de plugins, mods y cinemáticas, nos enorgullece ofrecer un contenido único y de calidad.',
      p3: '¿Deseas explorar más sobre nuestros emocionantes proyectos? En esta página, encontrarás información detallada sobre nuestro trabajo y descubrirás todo lo que tenemos para ofrecerte.',
      historyTitle: 'Historia',
      historyP1: 'MDK Game Team fue fundado por "DexQuinto" y "Maicar" en 2022, creando su primer evento/proyecto llamado "DeathSafio" un evento basado completamente en "DEDSAFIO" de Eufonia Studios, poco a poco fueron siendo conocidos por la comunidad.',
      historyP2: 'Actualmente MDK sigue desarrollando eventos para su comunidad y creadores de contenido, mejorando su calidad de trabajo a través de los días y eventos desarrollados.',
    },
    projects: {
      title: 'Proyectos Destacados',
      subtitle: 'Estos son todas las creaciones de MDK',
      description: 'MDK se ha propuesto mejorar cada evento que desarrolla, con la finalidad de ofrecer a los jugadores una experiencia superior a lo largo del proyecto, mejorando la gestión de servidores, un launcher personalizado, nuevas mecánicas y funciones únicas.',
      otherTitle: 'Otros Proyectos',
      loading: 'Cargando proyectos...',
      close: 'Cerrar',
    },
    contact: {
      title: 'Contáctanos',
      description: '¿Tienes alguna pregunta o quieres colaborar con nosotros? Envíanos un mensaje y te responderemos lo antes posible.',
      nameLabel: 'Nombre *',
      namePlaceholder: 'Tu nombre',
      emailLabel: 'Email *',
      emailPlaceholder: 'tu@email.com',
      messageLabel: 'Mensaje *',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      sendBtn: 'Enviar Mensaje',
      sendingBtn: 'Enviando...',
      successMsg: 'Mensaje enviado. ¡Gracias!',
      errorMsg: 'Error al enviar el mensaje',
      modalSuccessTitle: '¡Enviado!',
      modalSuccessText: 'Su mensaje ha sido enviado con éxito.',
      modalErrorTitle: 'Error',
      modalErrorText: 'Hubo un error al enviar el mensaje.',
    },
    launcher: {
      title: 'Descargar MDK Launcher',
      description1: 'Presentamos el launcher de MDK, con el cual permitirá facilitar el acceso a nuestros servidores en Minecraft. La mayoría de los eventos serán manejados y ejecutados desde el Launcher de MDK.',
      disclaimer: 'ℹ️ El launcher puede contener algunas mejoras en progreso. Si encuentra alguno, repórtelo con el staff de MDK.',
      download: 'Descargar',
      recommendedBadge: '⭐ Recomendado para tu equipo',
      mobileWarningTitle: 'Dispositivo móvil detectado',
      mobileWarningText: 'Estás navegando desde un dispositivo móvil ({os}). MDK Launcher está diseñado para computadoras (Windows, Mac y Linux). ¡Abre este enlace en tu PC para descargarlo!',
      safeLinks: 'Los enlaces usados son seguros ✓',
      termsBtn: 'Términos y Condiciones',
      securityBtn: 'Seguridad del Launcher',
      viewAllBtn: 'Ver todas las descargas',
      version: 'Versión',
    },
    footer: {
      tagline: 'Creando experiencias únicas en Minecraft desde 2022',
      community: 'Comunidad',
      communityDiscord: 'Discord de la comunidad',
      team: 'Equipo',
      contact: 'Contacto',
      about: 'Acerca de',
      docs: 'Docs',
      terms: 'Términos y Condiciones',
      security: 'Seguridad del Launcher',
      rights: 'MDK Game Team - {year} © Todos los derechos reservados',
    },
    terms: {
      title: 'Términos y condiciones de MDK Game Team',
      intro: 'Al acceder y utilizar nuestros servicios, incluidas nuestras aplicaciones de desarrollo en Minecraft, aceptas cumplir con los siguientes términos y condiciones. Si no estás de acuerdo con estos términos, por favor, no utilices nuestros servicios.',
      s1Title: '1. Aceptación de Términos y Condiciones',
      s1Text: 'Al usar los servicios de MDK Game Team, aceptas cumplir con nuestros Términos y Condiciones. Estos términos establecen las reglas y directrices que rigen tu participación en nuestro equipo y el uso de nuestras plataformas. Al aceptar, reconoces que has leído, comprendido y estás de acuerdo con los siguientes puntos:',
      s2Title: '2. Servicios Principales',
      s2Text: 'MDK Game Team desarrolla varios tipos de actividades como:',
      s2Event: 'Evento: Actividad cuya duración es de días o semanas',
      s2Series: 'Serie: Proyectos cuya duración es de semanas incluso meses',
      s2Tournament: 'Torneo: Eventos Competitivos donde su duración suele ser de 1 semana',
      s3Title: '3. Servicios de terceros',
      s3Text: 'MDK Game Team utiliza algunos servicios de terceros para la realización de eventos:',
      s3Forge: 'Forge / Fabric: Un sistema de carga de mods para Minecraft.',
      s3Mojang: 'Minecraft de Mojang: El videojuego en sí, desarrollado y mantenido por Microsoft y Mojang.',
      s3Perf: 'Embeddium / Rubidium / Sodium: Sistema de optimización para el juego',
      s4Title: '4. Uso Responsable',
      s4Text: 'Los usuarios deben utilizar la aplicación de manera legal y ética, evitando cualquier actividad que cause daño a otros, sobrecargue el sistema, o infrinja la privacidad, con la posibilidad de suspensión del acceso en caso de violaciones.',
      s5Title: '5. Modificaciones de los términos',
      s5Text: 'En MDK Game Team se reserva el derecho de modificar estos términos y condiciones en cualquier momento, notificando a los participantes sobre los cambios.',
      s6Title: '6. Confidencialidad',
      s6Text: 'Los detalles sobre los eventos, incluidas las estrategias y los resultados, deben ser tratados con confidencialidad y no compartidos sin autorización.',
    },
    security: {
      title: 'Seguridad del Launcher',
      p1: 'En MDK Game Team, la seguridad es primordial. Nos aseguramos de que todos nuestros enlaces de descarga sean seguros, sin contenido malicioso. Nuestro propósito es distribuir nuestro contenido para un uso confiable en tu computadora. Puedes verificarlo con algún antivirus y comprobar que no hay amenazas presentes.',
      h2: 'Verificación de URL de MDK',
      p2: 'Antes de ofrecer nuestros enlaces al público, realizamos una verificación exhaustiva con antivirus para garantizar la seguridad de cada URL. Nuestro equipo siempre está consciente de las normas de seguridad y se esfuerza por mantener un entorno seguro para nuestros usuarios.',
      p3: '¡En MDK Game Team, la integridad y protección de nuestros usuarios es nuestra prioridad! Puedes explorar y disfrutar de nuestro contenido con total confianza en su seguridad. Agradecemos tu confianza en nosotros y seguiremos trabajando arduamente para brindarte el mejor contenido de manera segura y confiable.',
    }
  },
  en: {
    nav: {
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
      launcher: 'MDK Launcher',
      langSwitch: 'ES',
      langLabel: 'Español',
    },
    hero: {
      badge: '✨ Welcome to MDK GAME TEAM',
      title: 'MDK GAME TEAM',
      tagline: '#MDKForce',
      description: 'Creating unique and high-quality Minecraft content',
      exploreBtn: 'Explore Projects',
      downloadBtn: 'Download Launcher',
    },
    about: {
      titlePrefix: 'Meet:',
      teamName: 'MDK Game Team',
      p1: 'We are pleased to welcome you to the MDK team, a passionate group dedicated to developing Minecraft content for creators and the community. 🌟',
      p2: 'With extensive experience configuring plugins, mods, and cinematics, we take pride in offering unique and quality content.',
      readMore: 'Read more',
    },
    aboutLong: {
      title: 'About MDK Game Team',
      p1: 'Hello everyone! We are pleased to welcome you to the MDK team, a passionate group dedicated to developing Minecraft content for creators and the community.',
      p2: 'With extensive experience configuring plugins, mods, and cinematics, we take pride in offering unique and quality content.',
      p3: 'Want to explore more of our exciting projects? On this page, you will find detailed information about our work and discover everything we have to offer.',
      historyTitle: 'History',
      historyP1: 'MDK Game Team was founded by "DexQuinto" and "Maicar" in 2022, creating their first event/project called "DeathSafio", an event inspired by Eufonia Studios\' "DEDSAFIO", steadily gaining recognition throughout the community.',
      historyP2: 'Today, MDK continues developing events for its community and content creators, enhancing its craft and quality with each passing day and event.',
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'All creations crafted by MDK',
      description: 'MDK is committed to continuous improvement across every event we develop, offering players an unmatched experience with dedicated server infrastructure, a custom launcher, innovative mechanics, and unique features across all projects.',
      otherTitle: 'Other Projects',
      loading: 'Loading projects...',
      close: 'Close',
    },
    contact: {
      title: 'Contact Us',
      description: 'Have a question or want to collaborate with us? Send us a message and we will get back to you as soon as possible.',
      nameLabel: 'Name *',
      namePlaceholder: 'Your name',
      emailLabel: 'Email *',
      emailPlaceholder: 'your@email.com',
      messageLabel: 'Message *',
      messagePlaceholder: 'Write your message here...',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      successMsg: 'Message sent. Thank you!',
      errorMsg: 'Error sending message',
      modalSuccessTitle: 'Sent!',
      modalSuccessText: 'Your message has been sent successfully.',
      modalErrorTitle: 'Error',
      modalErrorText: 'There was an error sending the message.',
    },
    launcher: {
      title: 'Download MDK Launcher',
      description1: 'Introducing MDK Launcher, designed to make accessing our Minecraft servers seamless. Most events will be managed and launched directly through MDK Launcher.',
      disclaimer: 'ℹ️ The launcher may contain ongoing improvements. If you encounter any bugs, please report them to the MDK staff.',
      download: 'Download',
      recommendedBadge: '⭐ Recommended for your PC',
      mobileWarningTitle: 'Mobile device detected',
      mobileWarningText: 'You are currently visiting from a mobile device ({os}). MDK Launcher is designed for desktop computers (Windows, Mac, and Linux). Open this link on your PC to download!',
      safeLinks: 'Download links are safe and verified ✓',
      termsBtn: 'Terms & Conditions',
      securityBtn: 'Launcher Security',
      viewAllBtn: 'View all downloads',
      version: 'Version',
    },
    footer: {
      tagline: 'Creating unique Minecraft experiences since 2022',
      community: 'Community',
      communityDiscord: 'Community Discord',
      team: 'Team',
      contact: 'Contact',
      about: 'About',
      docs: 'Docs',
      terms: 'Terms & Conditions',
      security: 'Launcher Security',
      rights: 'MDK Game Team - {year} © All rights reserved',
    },
    terms: {
      title: 'MDK Game Team Terms & Conditions',
      intro: 'By accessing and using our services, including our Minecraft development applications, you agree to comply with the following terms and conditions. If you do not agree with these terms, please do not use our services.',
      s1Title: '1. Acceptance of Terms & Conditions',
      s1Text: 'By using MDK Game Team services, you agree to comply with our Terms and Conditions. These terms establish the rules and guidelines governing your participation in our team and platform usage. By accepting, you acknowledge having read, understood, and agreed to the following:',
      s2Title: '2. Core Services',
      s2Text: 'MDK Game Team produces several categories of gaming activities:',
      s2Event: 'Event: An activity lasting several days or weeks',
      s2Series: 'Series: Projects spanning several weeks or months',
      s2Tournament: 'Tournament: Competitive events usually running for 1 week',
      s3Title: '3. Third-Party Services',
      s3Text: 'MDK Game Team utilizes third-party tools and services for event execution:',
      s3Forge: 'Forge / Fabric: Mod loaders for Minecraft.',
      s3Mojang: 'Minecraft by Mojang: The underlying video game developed and maintained by Microsoft and Mojang.',
      s3Perf: 'Embeddium / Rubidium / Sodium: In-game optimization and graphics engines',
      s4Title: '4. Responsible Use',
      s4Text: 'Users must use the application lawfully and ethically, avoiding any behavior that harms others, overloads systems, or infringes privacy, subject to access suspension upon violations.',
      s5Title: '5. Policy Modifications',
      s5Text: 'MDK Game Team reserves the right to modify these terms and conditions at any time, notifying participants of changes.',
      s6Title: '6. Confidentiality',
      s6Text: 'Event details, participant strategies, and results must be treated confidentially and not shared without prior authorization.',
    },
    security: {
      title: 'Launcher Security',
      p1: 'At MDK Game Team, security is paramount. We ensure that all download links are safe and free from malicious software. Our purpose is to distribute reliable and verified software for your PC. You can verify it with any antivirus to confirm no threats exist.',
      h2: 'MDK URL & File Verification',
      p2: 'Before providing our download links to the public, we conduct comprehensive antivirus scans to guarantee the security of every installer URL. Our team is committed to cybersecurity standards and works to maintain a secure environment for all users.',
      p3: 'At MDK Game Team, user integrity and protection is our highest priority! You can explore and enjoy our content with complete confidence in its safety. We appreciate your trust and will continue working hard to deliver the best content safely and reliably.',
    }
  }
};
