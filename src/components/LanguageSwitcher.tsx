
import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-secondary"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'ES' : 'EN'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
