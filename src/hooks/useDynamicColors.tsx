import { useConfig } from 'statsig-react';
import { useEffect } from 'react';

interface ColorConfig {
  background: string;
  foreground: string;
  primary: string;
  secondary: string;
  accent: string;
  cardHover: string;
  textSecondary: string;
}

const defaultLightColors: ColorConfig = {
  background: '#ffffff',
  foreground: '#000000', 
  primary: '#fca311',
  secondary: '#e5e5e5',
  accent: '#fca311',
  cardHover: '#e5e5e5',
  textSecondary: '#14213d'
};

const defaultDarkColors: ColorConfig = {
  background: '#14213d',
  foreground: '#e5e5e5',
  primary: '#fca311', 
  secondary: '#000000',
  accent: '#fca311',
  cardHover: '#000000',
  textSecondary: '#ffffff'
};

export const useDynamicColors = (theme: 'light' | 'dark') => {
  // FIX: Use the correct config key (likely 'portfolio', not 'portifolio')
  const config = useConfig('portfolio');
  
  const getRGBValues = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
      ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
      : '0 0 0';
  };

  useEffect(() => {
    const root = document.documentElement;
    
    // Add fallback for missing config
    const configObj = config || {};
    const lightColors = configObj.light_theme || defaultLightColors;
    const darkColors = configObj.dark_theme || defaultDarkColors;
    
    const currentColors = theme === 'light' ? lightColors : darkColors;
    
    // Update CSS custom properties
    root.style.setProperty('--background', getRGBValues(currentColors.background));
    root.style.setProperty('--foreground', getRGBValues(currentColors.foreground));
    root.style.setProperty('--primary', getRGBValues(currentColors.primary));
    root.style.setProperty('--secondary', getRGBValues(currentColors.secondary));
    root.style.setProperty('--accent', getRGBValues(currentColors.accent));
    root.style.setProperty('--card-hover', getRGBValues(currentColors.cardHover));
    root.style.setProperty('--text-secondary', getRGBValues(currentColors.textSecondary));
  }, [config, theme]);
};
