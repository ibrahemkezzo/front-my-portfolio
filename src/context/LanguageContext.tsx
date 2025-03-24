
import React, { createContext, useState, useContext, ReactNode } from 'react';

type Language = 'en' | 'ar';

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
    
    // Theme
    'theme.dark': 'Dark Mode',
    'theme.light': 'Light Mode',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.services': 'خدماتي',
    'nav.portfolio': 'أعمالي',
    'nav.contact': 'اتصل بي',
    
    // Hero
    'hero.title': 'مطور لارافيل الخلفي',
    'hero.subtitle': 'بناء تطبيقات الويب و واجهات API قوية',
    'hero.cta': 'اتصل بي',
    'hero.secondary': 'مشاهدة الأعمال',
    
    // About
    'about.title': 'من أنا',
    'about.subtitle': 'مطور خلفي متخصص في لارافيل مع خبرة في منهجيات تطوير البرمجيات الحديثة',
    'about.bio': 'أنا مطور خلفي ذو خبرة واسعة في بناء تطبيقات ويب قوية باستخدام لارافيل. تشمل خبرتي تطوير واجهات API، تصميم قواعد البيانات، وهندسة التطبيقات. أنا شغوف بإنشاء كود فعال وقابل للتطوير والصيانة.',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'المشاريع المنجزة',
    'about.clients': 'العملاء الراضين',
    
    // Skills
    'skills.title': 'المهارات التقنية',
    'skills.backend': 'تطوير البرمجيات الخلفية',
    'skills.database': 'تصميم قواعد البيانات',
    'skills.api': 'واجهات API',
    'skills.methodologies': 'منهجيات التطوير',
    'skills.tools': 'أدوات التطوير',
    
    // Services
    'services.title': 'خدماتي',
    'services.subtitle': 'خدمات تطوير خلفية متخصصة باستخدام لارافيل وتقنيات الويب الحديثة',
    'services.laravel.title': 'تطوير لارافيل',
    'services.laravel.description': 'تطبيقات ويب مخصصة مبنية باستخدام لارافيل، مع التركيز على هندسة نظيفة وكود قابل للصيانة.',
    'services.api.title': 'تطوير واجهات API',
    'services.api.description': 'تصميم وتطوير واجهات API مع توثيق مناسب، أمان، وأداء عالي.',
    'services.db.title': 'تصميم قواعد البيانات',
    'services.db.description': 'تصميم محسن لهيكل قواعد البيانات، وتحسين أداء الاستعلامات لتطبيقاتك.',
    'services.architecture.title': 'هندسة التطبيقات',
    'services.architecture.description': 'تخطيط هندسة تطبيقات قابلة للتوسع والصيانة للمشاريع المعقدة.',
    
    // Portfolio
    'portfolio.title': 'أعمالي',
    'portfolio.subtitle': 'مجموعة من المشاريع التي توضح مهاراتي وخبرتي',
    'portfolio.viewproject': 'عرض المشروع',
    'portfolio.technologies': 'التقنيات:',
    
    // Contact
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'مستعد لبدء مشروعك؟ اتصل بي للاستشارة أو التعاون',
    'contact.name': 'اسمك',
    'contact.email': 'بريدك الإلكتروني',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.success': 'تم إرسال الرسالة بنجاح!',
    'contact.error': 'خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',
    
    // Footer
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // Theme
    'theme.dark': 'الوضع الداكن',
    'theme.light': 'الوضع الفاتح',
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
