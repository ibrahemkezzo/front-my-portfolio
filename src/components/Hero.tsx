
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
                {/* Main Profile Image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl backdrop-blur-sm bg-white/10 dark:bg-gray-900/10">
                      <img 
                        src="/lovable-uploads/fdfdb052-714e-4179-9c14-376a7b6efdf4.png" 
                        alt="Ibrahem Kezzo - Laravel Developer"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    {/* Subtle glow effect around the image */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-laravel/10 to-primary/5 blur-xl opacity-30"></div>
                  </div>
                </div>
                
                {/* Floating Tech Icons */}
                <div className="absolute top-1/4 left-1/4 glass rounded-2xl p-4 shadow-lg animate-logo-float">
                  <GitBranch className="h-10 w-10 text-laravel" />
                </div>
                
                <div className="absolute top-1/3 right-1/6 glass rounded-2xl p-4 shadow-lg animate-logo-float" style={{
                  animationDelay: "0.5s"
                }}>
                  <Code className="h-10 w-10 text-primary" />
                </div>
                
                <div className="absolute bottom-1/4 left-1/6 glass rounded-2xl p-4 shadow-lg animate-logo-float" style={{
                  animationDelay: "1s"
                }}>
                  <Database className="h-10 w-10 text-laravel" />
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
