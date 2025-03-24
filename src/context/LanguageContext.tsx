
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'es';

type Translations = {
  [key in Language]: {
    [key: string]: string;
  };
};

const translations: Translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Laravel Backend Developer',
    'hero.subtitle': 'Building robust web applications and APIs',
    'hero.cta': 'Contact Me',
    'hero.secondary': 'View Portfolio',
    
    // About
    'about.title': 'About Me',
    'about.subtitle': 'Passionate backend developer specialized in Laravel with experience in modern software development methodologies',
    'about.bio': 'I am a backend developer with extensive experience in building robust web applications using Laravel. My expertise includes RESTful API development, database design, and application architecture. I\'m passionate about creating efficient, scalable, and maintainable code.',
    'about.experience': 'Years of Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Satisfied Clients',
    
    // Skills
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database Design',
    'skills.api': 'RESTful APIs',
    'skills.methodologies': 'Development Methodologies',
    'skills.tools': 'Development Tools',
    
    // Services
    'services.title': 'My Services',
    'services.subtitle': 'Specialized backend development services using Laravel and modern web technologies',
    'services.laravel.title': 'Laravel Development',
    'services.laravel.description': 'Custom web applications built with Laravel, focusing on clean architecture and maintainable code.',
    'services.api.title': 'API Development',
    'services.api.description': 'Designing and developing RESTful APIs with proper documentation, security, and performance.',
    'services.db.title': 'Database Design',
    'services.db.description': 'Optimized database schema design, migrations, and query performance tuning for your applications.',
    'services.architecture.title': 'Application Architecture',
    'services.architecture.description': 'Planning scalable and maintainable application architectures for complex projects.',
    
    // Portfolio
    'portfolio.title': 'My Portfolio',
    'portfolio.subtitle': 'A selection of projects showcasing my skills and experience',
    'portfolio.viewproject': 'View Project',
    'portfolio.technologies': 'Technologies:',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact me for consultation or collaboration',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.success': 'Message sent successfully!',
    'contact.error': 'Error sending message. Please try again.',
    
    // Footer
    'footer.rights': 'All rights reserved.',
  },
  es: {
    // Navbar
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.contact': 'Contacto',
    
    // Hero
    'hero.title': 'Desarrollador Backend Laravel',
    'hero.subtitle': 'Creando aplicaciones web y APIs robustas',
    'hero.cta': 'Contáctame',
    'hero.secondary': 'Ver Portafolio',
    
    // About
    'about.title': 'Sobre Mí',
    'about.subtitle': 'Desarrollador backend apasionado especializado en Laravel con experiencia en metodologías modernas de desarrollo de software',
    'about.bio': 'Soy un desarrollador backend con amplia experiencia en la creación de aplicaciones web robustas utilizando Laravel. Mi experiencia incluye desarrollo de API RESTful, diseño de bases de datos y arquitectura de aplicaciones. Me apasiona crear código eficiente, escalable y mantenible.',
    'about.experience': 'Años de Experiencia',
    'about.projects': 'Proyectos Completados',
    'about.clients': 'Clientes Satisfechos',
    
    // Skills
    'skills.title': 'Habilidades Técnicas',
    'skills.backend': 'Desarrollo Backend',
    'skills.database': 'Diseño de Bases de Datos',
    'skills.api': 'APIs RESTful',
    'skills.methodologies': 'Metodologías de Desarrollo',
    'skills.tools': 'Herramientas de Desarrollo',
    
    // Services
    'services.title': 'Mis Servicios',
    'services.subtitle': 'Servicios especializados de desarrollo backend utilizando Laravel y tecnologías web modernas',
    'services.laravel.title': 'Desarrollo Laravel',
    'services.laravel.description': 'Aplicaciones web personalizadas construidas con Laravel, enfocándose en una arquitectura limpia y código mantenible.',
    'services.api.title': 'Desarrollo de APIs',
    'services.api.description': 'Diseño y desarrollo de APIs RESTful con documentación adecuada, seguridad y rendimiento.',
    'services.db.title': 'Diseño de Bases de Datos',
    'services.db.description': 'Diseño optimizado de esquemas de bases de datos, migraciones y ajuste de rendimiento de consultas para sus aplicaciones.',
    'services.architecture.title': 'Arquitectura de Aplicaciones',
    'services.architecture.description': 'Planificación de arquitecturas de aplicaciones escalables y mantenibles para proyectos complejos.',
    
    // Portfolio
    'portfolio.title': 'Mi Portafolio',
    'portfolio.subtitle': 'Una selección de proyectos que muestran mis habilidades y experiencia',
    'portfolio.viewproject': 'Ver Proyecto',
    'portfolio.technologies': 'Tecnologías:',
    
    // Contact
    'contact.title': 'Ponte en Contacto',
    'contact.subtitle': '¿Listo para comenzar tu proyecto? Contáctame para consulta o colaboración',
    'contact.name': 'Tu Nombre',
    'contact.email': 'Tu Email',
    'contact.message': 'Tu Mensaje',
    'contact.send': 'Enviar Mensaje',
    'contact.success': '¡Mensaje enviado con éxito!',
    'contact.error': 'Error al enviar el mensaje. Por favor, inténtalo de nuevo.',
    
    // Footer
    'footer.rights': 'Todos los derechos reservados.',
  }
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
