
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowUpRight, Code, Database, ShoppingCart, Layers } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', label: 'All', icon: <Layers className="h-4 w-4 mr-1" /> },
    { id: 'web', label: 'Web Apps', icon: <Code className="h-4 w-4 mr-1" /> },
    { id: 'api', label: 'APIs', icon: <Database className="h-4 w-4 mr-1" /> },
    { id: 'ecommerce', label: 'E-Commerce', icon: <ShoppingCart className="h-4 w-4 mr-1" /> },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      technologies: ['Laravel', 'MySQL', 'Redis', 'API'],
      link: '#',
    },
    {
      id: 2,
      title: 'Hotel Booking System',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1568495248636-6432b97bd949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      technologies: ['Laravel', 'PostgreSQL', 'TDD'],
      link: '#',
    },
    {
      id: 3,
      title: 'RESTful API Service',
      category: 'api',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      technologies: ['Laravel', 'API', 'OAuth', 'Docker'],
      link: '#',
    },
    {
      id: 4,
      title: 'Inventory Management',
      category: 'web',
      image: 'https://images.unsplash.com/photo-1664575599618-8f6bd76fc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2670&q=80',
      technologies: ['Laravel', 'Livewire', 'MySQL'],
      link: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-secondary/50">
      <div className="section-container">
        <div className="space-y-4 text-center">
          <h2 className="section-title">{t('portfolio.title')}</h2>
          <p className="section-subtitle mx-auto">{t('portfolio.subtitle')}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center ${
                activeFilter === filter.id
                  ? theme === 'dark' 
                    ? 'bg-laravel text-white' 
                    : 'bg-laravel text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-laravel/20' 
                    : 'bg-white hover:bg-laravel/10'
              }`}
            >
              {filter.icon}
              {filter.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-item rounded-2xl overflow-hidden shadow-md h-[400px] animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="portfolio-overlay">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white text-sm mb-3">{t('portfolio.technologies')} {project.technologies.join(', ')}</p>
                  <a
                    href={project.link}
                    className="inline-flex items-center text-sm font-medium text-white bg-laravel rounded-full px-4 py-2 hover:bg-laravel/90 transition-colors"
                  >
                    {t('portfolio.viewproject')}
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
