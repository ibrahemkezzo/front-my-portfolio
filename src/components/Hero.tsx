
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
              
              <div className="relative z-10 h-full w-full flex items-center justify-center">
                {/* Simple Large Laravel Logo */}
                <svg viewBox="0 0 100 100" className="w-3/4 h-3/4">
                  <g>
                    <path 
                      fill="#FF2D20" 
                      d="M49.626,11.564a.809.809,0,0,1,.028.209V57.936a.8.8,0,0,1-.402.694l-9.209,5.3V39.3a.8.8,0,0,0-.4-.694L20.42,27.2V53.8l-5.88-3.4V23.532a.8.8,0,0,1,.4-.694L25,16.4,39.222,27.2a.8.8,0,0,0,.4.3.755.755,0,0,0,.4-.3L54.247,16.4l5.88,3.389a.8.8,0,0,1,.4.694v26.87L52.116,53.8V27.2l-9.209,5.3V57.936a.794.794,0,0,1-.028.213v-.007a.787.787,0,0,1-.176.391h0l-.045.05a.81.81,0,0,1-.154.124.035.035,0,0,1-.012.01l-.041.024-.012.005-.059.031h0a.823.823,0,0,1-.316.052h-.022a.605.605,0,0,1-.1-.008.8.8,0,0,1-.216-.058l-.038-.013L30.1,49.6l-5.88-3.39a.8.8,0,0,1-.4-.694V23.532a.8.8,0,0,1,.112-.4h0a.781.781,0,0,1,.071-.11l.014-.014a.785.785,0,0,1,.08-.081.766.766,0,0,1,.091-.07l.014-.009q.039-.022.08-.041L34.614,13.9l5.061,2.92a.8.8,0,0,0,.793,0L45.530,13.9,55.7,19.748a.5.5,0,0,1,.095.051.759.759,0,0,1,.092.07.73.73,0,0,1,.079.081l.014.014a.908.908,0,0,1,.07.11h0A.8.8,0,0,1,56.1,20.5V47.611l9.209-5.306V20.449L72,16.4l9.209,5.305V48.585a.8.8,0,0,1-.4.694L56.428,60.364a.8.8,0,0,1-.4.105h-.024a.8.8,0,0,1-.4-.105L30.568,45.7a.8.8,0,0,0-.4-.105h-.024a.8.8,0,0,0-.4.105l-9.209,5.306A.8.8,0,0,1,20,50.5v-2.9l5.88-3.391ZM49.626,81.739a.809.809,0,0,1,.028.209V87.1a.8.8,0,0,1-.402.694l-15.1,8.707a.8.8,0,0,1-.8,0L12.11,79.228a.8.8,0,0,1-.4-.694v-2.9l5.88-3.39v3.388a.8.8,0,0,0,.4.694l10.941,6.282ZM14.6,74.645l5.882-3.389,15.089,8.707V74.516a.8.8,0,0,0-.4-.694L20.481,65.78v3.388a.8.8,0,0,1-.4.694l-5.48,3.161v1.622Zm57.021-.233v1.622l-15.089,8.707a.8.8,0,0,1-.8,0L40.612,76.155a.8.8,0,0,1-.4-.694V70.124a.809.809,0,0,1,.028-.209h0a.787.787,0,0,1,.176-.391h0l.045-.05a.81.81,0,0,1,.154-.124l.012-.01.041-.024.012-.005.059-.031h0a.823.823,0,0,1,.316-.052h.022a.605.605,0,0,1,.1.008.8.8,0,0,1,.216.058l.038.013L60.726,78.395a.8.8,0,0,0,.8,0l9.209-5.306a.8.8,0,0,0,.4-.694V69.005l-5.88-3.39V69a.8.8,0,0,1-.4.694l-10.95,6.316,15.09,8.706a.8.8,0,0,0,.8,0l10.941-6.316a.8.8,0,0,0,.4-.694V74.318l-5.481-3.161a.8.8,0,0,1-.4-.694V67.075l5.88-3.39a.8.8,0,0,1,.8,0l5.888,3.4v2.9a.8.8,0,0,1-.4.694Z"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
