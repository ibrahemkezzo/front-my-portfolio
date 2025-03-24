
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-laravel">&lt;</span>
                Dev
                <span className="text-laravel">/&gt;</span>
              </span>
            </div>
            <p className="text-sm text-primary-foreground/80 max-w-xs">
              Laravel backend developer specialized in creating robust, scalable web applications and RESTful APIs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-sm text-primary-foreground/80 hover:text-laravel transition-colors">
                  {t('nav.home')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-primary-foreground/80 hover:text-laravel transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-primary-foreground/80 hover:text-laravel transition-colors">
                  {t('nav.services')}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-primary-foreground/80 hover:text-laravel transition-colors">
                  {t('nav.portfolio')}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-primary-foreground/80 hover:text-laravel transition-colors">
                  {t('nav.contact')}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <address className="not-italic">
              <div className="space-y-3 text-sm text-primary-foreground/80">
                <p>123 Developer Street</p>
                <p>Coding City, 12345</p>
                <p>contact@example.com</p>
                <p>+1 (123) 456-7890</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-sm text-primary-foreground/60">
            &copy; {currentYear} Laravel Developer. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
