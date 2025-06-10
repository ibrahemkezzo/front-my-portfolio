
// Translation system for multi-language support
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.contact': 'Contact',
    'hero.title': 'Backend Developer',
    'hero.subtitle': 'Specialized in Laravel development, creating robust and scalable web applications with clean, maintainable code.',
    'hero.cta': 'Get In Touch',
    'hero.secondary': 'View Work',
    'about.title': 'About Me',
    'about.subtitle': 'Learn more about my background and expertise',
    'about.bio': "I'm a passionate Laravel backend developer with 5+ years of experience building robust, scalable web applications. I specialize in creating clean, maintainable code and designing efficient database architectures.",
    'about.experience': 'Years Experience',
    'about.projects': 'Projects Completed',
    'about.clients': 'Happy Clients',
    'skills.title': 'Technical Skills',
    'skills.backend': 'Backend Development',
    'skills.database': 'Database',
    'skills.api': 'API Development',
    'skills.tools': 'Tools & Methodologies',
    'services.title': 'Services',
    'services.subtitle': 'What I can help you with',
    'services.laravel.title': 'Laravel Development',
    'services.laravel.description': 'Building robust web applications using Laravel framework with best practices and clean architecture.',
    'services.api.title': 'API Development',
    'services.api.description': 'Creating RESTful APIs with proper authentication, documentation, and testing.',
    'services.db.title': 'Database Design',
    'services.db.description': 'Designing efficient database schemas and optimizing queries for better performance.',
    'services.architecture.title': 'System Architecture',
    'services.architecture.description': 'Planning and implementing scalable system architectures for enterprise applications.',
    'portfolio.title': 'Portfolio',
    'portfolio.subtitle': 'Some of my recent work',
    'portfolio.technologies': 'Technologies:',
    'portfolio.viewproject': 'View Project',
    'contact.title': 'Get In Touch',
    'contact.subtitle': "Let's discuss your next project",
    'contact.info.title': 'Contact Information',
    'contact.info.text': 'Ready to start your next Laravel project? Let\'s connect and discuss how I can help bring your ideas to life.',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'footer.rights': 'All rights reserved.',
    'theme.light': 'Light',
    'theme.dark': 'Dark'
  },
  ar: {
    'nav.home': 'الرئيسية',
    'nav.about': 'من أنا',
    'nav.services': 'الخدمات',
    'nav.portfolio': 'الأعمال',
    'nav.contact': 'تواصل',
    'hero.title': 'مطور خلفي',
    'hero.subtitle': 'متخصص في تطوير Laravel، أقوم بإنشاء تطبيقات ويب قوية وقابلة للتطوير بكود نظيف وقابل للصيانة.',
    'hero.cta': 'تواصل معي',
    'hero.secondary': 'عرض الأعمال',
    'about.title': 'من أنا',
    'about.subtitle': 'تعرف على خلفيتي وخبرتي',
    'about.bio': 'أنا مطور Laravel شغوف مع أكثر من 5 سنوات من الخبرة في بناء تطبيقات ويب قوية وقابلة للتطوير. أتخصص في إنشاء كود نظيف وقابل للصيانة وتصميم هياكل قواعد بيانات فعالة.',
    'about.experience': 'سنوات الخبرة',
    'about.projects': 'المشاريع المكتملة',
    'about.clients': 'العملاء السعداء',
    'skills.title': 'المهارات التقنية',
    'skills.backend': 'تطوير الخلفية',
    'skills.database': 'قاعدة البيانات',
    'skills.api': 'تطوير API',
    'skills.tools': 'الأدوات والمنهجيات',
    'services.title': 'الخدمات',
    'services.subtitle': 'ما يمكنني مساعدتك فيه',
    'services.laravel.title': 'تطوير Laravel',
    'services.laravel.description': 'بناء تطبيقات ويب قوية باستخدام إطار Laravel مع أفضل الممارسات والهندسة النظيفة.',
    'services.api.title': 'تطوير API',
    'services.api.description': 'إنشاء APIs RESTful مع المصادقة المناسبة والتوثيق والاختبار.',
    'services.db.title': 'تصميم قاعدة البيانات',
    'services.db.description': 'تصميم مخططات قواعد بيانات فعالة وتحسين الاستعلامات لأداء أفضل.',
    'services.architecture.title': 'هندسة النظام',
    'services.architecture.description': 'تخطيط وتنفيذ هياكل أنظمة قابلة للتطوير لتطبيقات المؤسسات.',
    'portfolio.title': 'معرض الأعمال',
    'portfolio.subtitle': 'بعض من أعمالي الحديثة',
    'portfolio.technologies': 'التقنيات:',
    'portfolio.viewproject': 'عرض المشروع',
    'contact.title': 'تواصل معي',
    'contact.subtitle': 'دعنا نناقش مشروعك القادم',
    'contact.info.title': 'معلومات التواصل',
    'contact.info.text': 'مستعد لبدء مشروع Laravel القادم؟ دعنا نتواصل ونناقش كيف يمكنني مساعدتك في تحقيق أفكارك.',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.subject': 'الموضوع',
    'contact.form.message': 'الرسالة',
    'contact.form.send': 'إرسال الرسالة',
    'footer.rights': 'جميع الحقوق محفوظة.',
    'theme.light': 'فاتح',
    'theme.dark': 'داكن'
  }
};

// Translation utility functions
function getTranslation(key, language = 'en') {
  return translations[language] && translations[language][key] 
    ? translations[language][key] 
    : translations.en[key] || key;
}

function updatePageTranslations(language = 'en') {
  // Update all elements with data-key attributes
  const elementsToTranslate = document.querySelectorAll('[data-key]');
  
  elementsToTranslate.forEach(element => {
    const key = element.getAttribute('data-key');
    const translation = getTranslation(key, language);
    
    if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
      element.placeholder = translation;
    } else {
      element.textContent = translation;
    }
  });
  
  // Update document direction for RTL languages
  const html = document.documentElement;
  const body = document.body;
  
  if (language === 'ar') {
    html.setAttribute('dir', 'rtl');
    html.setAttribute('lang', 'ar');
    body.style.textAlign = 'right';
  } else {
    html.setAttribute('dir', 'ltr');
    html.setAttribute('lang', 'en');
    body.style.textAlign = 'left';
  }
  
  // Update language toggle button text
  const languageText = document.getElementById('language-text');
  const mobileLanguageText = document.getElementById('mobile-language-text');
  
  if (languageText) {
    languageText.textContent = language === 'en' ? 'عربي' : 'EN';
  }
  
  if (mobileLanguageText) {
    mobileLanguageText.textContent = language === 'en' ? 'عربي' : 'EN';
  }
}

// Make functions available globally
window.getTranslation = getTranslation;
window.updatePageTranslations = updatePageTranslations;
