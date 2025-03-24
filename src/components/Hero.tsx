
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Code, Database, GitBranch } from 'lucide-react';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-laravel/10 text-laravel text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-laravel opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-laravel"></span>
              </span>
              <span>Laravel Expert</span>
            </div>
            
            <div className="space-y-3">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                IBRAHEM KEZZO
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
                {t('hero.title')}
                <span className="text-laravel">.</span>
              </h1>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-lg">
              {t('hero.subtitle')}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary inline-flex items-center">
                {t('hero.cta')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a href="#portfolio" className="btn-outline">
                {t('hero.secondary')}
              </a>
            </div>
          </div>
          
          <div className="relative animate-fade-in-right">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-laravel/20 to-primary/5 rounded-full blur-3xl opacity-50"></div>
              
              <div className="relative z-10 h-full w-full">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <path fill="#FF2D20" d="M40,120 Q50,60 100,80 Q150,100 160,20 Q170,130 120,170 Q70,200 40,120" opacity="0.2"></path>
                </svg>
                
                <div className="absolute top-1/4 left-1/4 glass rounded-2xl p-4 shadow-lg animate-logo-float">
                  <GitBranch className="h-10 w-10 text-laravel" />
                </div>
                
                <div className="absolute top-1/3 right-1/6 glass rounded-2xl p-4 shadow-lg animate-logo-float" style={{ animationDelay: "0.5s" }}>
                  <Code className="h-10 w-10 text-primary" />
                </div>
                
                <div className="absolute bottom-1/4 left-1/6 glass rounded-2xl p-4 shadow-lg animate-logo-float" style={{ animationDelay: "1s" }}>
                  <Database className="h-10 w-10 text-laravel" />
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-48">
                    {/* Redesigned Laravel Logo with API and Git integration */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-full h-full">
                      {/* Background Circle */}
                      <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.1)" className="dark:fill-gray-800/80" />
                      
                      {/* Laravel Symbol - Larger and Centered */}
                      <g transform="translate(20, 20) scale(0.6)">
                        <path fill="#FF2D20" d="M42,18.6c-.2,0-3.6-9.4-3.6-9.4l-4.3,7.2s-15.5-1.5-27.3,10.4c-4.2,4.2-6,10.3-5.1,22.3 0,0 3-5.5,10.2-9.2-.5-1.2-1-2.5-1.2-3.7-.7-4.6.4-8.9,3.1-12.2,4.8-5.9,13.1-7.5,22.9-5.6z" />
                        <path fill="#FF2D20" d="M67.8,24c-3.6-3.1-8.2-4.9-13.2-5-1.4-.1-2.8,0-4.2.1 1.1,1.5,1.9,3.1,2.6,4.8 6.3.2,10.2,3.4,12,9.5 1.3,4.6.4,9.4-2.4,13.6 2,.4,4.1.5,6.2.2 6.5-.8,11.7-4.4,15.4-10.6-1.3-4.8-3.9-9.1-7.7-12.6z" />
                        <path fill="#FF2D20" d="M42,33.8c-.7-.4-7-3.7-7.4-3.8-.4-.1-.8.1-1.1.3l-8,7.7s-4.7-1-7.5,3.1c-1.7,2.5-1.5,5.8.6,8.2 2,2.1,5.2,2.6,7.6,1.3 1.9-1,3.2-3,3.4-5.1.2-1.3-.1-2.6-.9-3.6.7-1.2,1.7-2.3,3-3.2 2.9-2,6.5-2.2,9.4-.6 1.5.9,2.7,2.2,3.4,3.7-2.8-3.4-6.3-6.9-8.2-7.1-2.7-.1-4.2,3.5-1.1,5.5 4.2,2.8,7.9,3.2,12.1,1.6 2.5-1,4.4-3.1,5.1-5.7.5-2-.2-4.2-2-5.6-3.2-2.3-7-2.1-10.2,0 .6.3,1.2.7,1.8,1.2z" />
                      </g>
                      
                      {/* Connecting Nodes for a Network Effect */}
                      <circle cx="25" cy="30" r="3" fill="#FF2D20" className="dark:fill-white" />
                      <circle cx="75" cy="35" r="3" fill="#FF2D20" className="dark:fill-white" />
                      <circle cx="30" cy="75" r="3" fill="#FF2D20" className="dark:fill-white" />
                      <circle cx="70" cy="70" r="3" fill="#FF2D20" className="dark:fill-white" />
                      
                      {/* Connection Lines */}
                      <line x1="25" y1="30" x2="50" y2="50" stroke="#FF2D20" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-white/50" />
                      <line x1="75" y1="35" x2="50" y2="50" stroke="#FF2D20" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-white/50" />
                      <line x1="30" y1="75" x2="50" y2="50" stroke="#FF2D20" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-white/50" />
                      <line x1="70" y1="70" x2="50" y2="50" stroke="#FF2D20" strokeWidth="1" strokeDasharray="2,2" className="dark:stroke-white/50" />
                      
                      {/* API Symbol */}
                      <g transform="translate(15, 20) scale(0.25)">
                        <rect x="10" y="10" width="60" height="40" rx="5" fill="none" stroke="#444" strokeWidth="6" className="dark:stroke-white" />
                        <text x="40" y="35" fontFamily="monospace" fontSize="24" textAnchor="middle" fill="#444" className="dark:fill-white">API</text>
                      </g>
                      
                      {/* Git Symbol */}
                      <g transform="translate(60, 60) scale(0.25)">
                        <circle cx="32" cy="32" r="25" fill="none" stroke="#444" strokeWidth="6" className="dark:stroke-white" />
                        <path d="M30,15 L30,45 M20,35 L40,35" stroke="#444" strokeWidth="6" fill="none" className="dark:stroke-white" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
