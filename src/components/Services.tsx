
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Code, Database, LayoutGrid, Server } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: <Server className="h-10 w-10 text-laravel" />,
      title: t('services.laravel.title'),
      description: t('services.laravel.description'),
    },
    {
      icon: <Code className="h-10 w-10 text-laravel" />,
      title: t('services.api.title'),
      description: t('services.api.description'),
    },
    {
      icon: <Database className="h-10 w-10 text-laravel" />,
      title: t('services.db.title'),
      description: t('services.db.description'),
    },
    {
      icon: <LayoutGrid className="h-10 w-10 text-laravel" />,
      title: t('services.architecture.title'),
      description: t('services.architecture.description'),
    },
  ];

  return (
    <section id="services" className="py-20">
      <div className="section-container">
        <div className="space-y-4 text-center">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle mx-auto">{t('services.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center card-hover animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-4 rounded-full bg-laravel/10 mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
