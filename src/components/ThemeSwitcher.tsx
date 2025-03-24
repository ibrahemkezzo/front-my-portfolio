
import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  return (
    <Button 
      variant="ghost" 
      size="sm" 
      onClick={toggleTheme}
      className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium transition-all hover:bg-secondary"
    >
      {theme === 'light' ? (
        <>
          <Moon className="h-4 w-4" />
          <span className="sr-only md:not-sr-only">{t('theme.dark')}</span>
        </>
      ) : (
        <>
          <Sun className="h-4 w-4" />
          <span className="sr-only md:not-sr-only">{t('theme.light')}</span>
        </>
      )}
    </Button>
  );
};

export default ThemeSwitcher;
