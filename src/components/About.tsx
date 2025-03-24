
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CheckCircle2, Code2, Database, FileCode, GitBranch, Server } from 'lucide-react';

const About: React.FC = () => {
  const { t } = useLanguage();

  const experiences = [
    { value: '5+', label: t('about.experience') },
    { value: '30+', label: t('about.projects') },
    { value: '15+', label: t('about.clients') },
  ];

  const skills = [
    { 
      category: t('skills.backend'), 
      items: ['Laravel', 'PHP', 'MVC Architecture', 'OOP'], 
      icon: <Server className="h-5 w-5 text-laravel" />
    },
    { 
      category: t('skills.database'), 
      items: ['MySQL', 'PostgreSQL', 'Redis', 'Database Design'], 
      icon: <Database className="h-5 w-5 text-laravel" />
    },
    { 
      category: t('skills.api'), 
      items: ['RESTful APIs', 'API Authentication', 'JSON'], 
      icon: <Code2 className="h-5 w-5 text-laravel" />
    },
    { 
      category: t('skills.methodologies'), 
      items: ['Agile', 'Scrum', 'Git Flow', 'CI/CD'], 
      icon: <GitBranch className="h-5 w-5 text-laravel" />
    },
    { 
      category: t('skills.tools'), 
      items: ['Git', 'GitHub', 'Docker', 'Jira'], 
      icon: <FileCode className="h-5 w-5 text-laravel" />
    },
  ];

  return (
    <section id="about" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="space-y-4 text-center">
          <h2 className="section-title">{t('about.title')}</h2>
          <p className="section-subtitle mx-auto">{t('about.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div className="space-y-8 animate-fade-in">
            <p className="text-lg leading-relaxed">
              {t('about.bio')}
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-8">
              {experiences.map((item, index) => (
                <div key={index} className="glass p-6 rounded-2xl text-center card-hover">
                  <h3 className="text-3xl font-bold text-laravel">{item.value}</h3>
                  <p className="text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="space-y-6 animate-fade-in animate-delay-200">
            <h3 className="text-2xl font-bold mb-6">{t('skills.title')}</h3>
            
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index} className="glass p-5 rounded-xl card-hover">
                  <div className="flex items-center space-x-3 mb-3">
                    {skill.icon}
                    <h4 className="font-medium">{skill.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 ml-8">
                    {skill.items.map((item, i) => (
                      <div key={i} className="flex items-center space-x-1.5">
                        <CheckCircle2 className="h-3.5 w-3.5 text-laravel" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
