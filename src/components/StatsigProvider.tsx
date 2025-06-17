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

const palette = {
  midnightGreen: '#003844',
  caribbeanCurrent: '#006c67',
  amaranthPink: '#f194b4',
  selectiveYellow: '#ffb100',
  dutchWhite: '#ffebc6'
};

const defaultLightColors: ColorConfig = {
  background: palette.dutchWhite,
  foreground: palette.midnightGreen,
  primary: palette.selectiveYellow,
  secondary: palette.amaranthPink,
  accent: palette.caribbeanCurrent,
  cardHover: palette.amaranthPink,
  textSecondary: palette.midnightGreen
};

const defaultDarkColors: ColorConfig = {
  background: palette.midnightGreen,
  foreground: palette.dutchWhite,
  primary: palette.selectiveYellow,
  secondary: palette.caribbeanCurrent,
  accent: palette.amaranthPink,
  cardHover: palette.caribbeanCurrent,
  textSecondary: palette.dutchWhite
};

function hexToRgbString(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(result[3], 16)}`
    : '0 0 0';
}

export const useDynamicColors = (theme: 'light' | 'dark') => {
  const config = useConfig('portfolio');
  useEffect(() => {
    const root = document.documentElement;
    const configObj = config || {};
    const lightColors = configObj.light_theme || defaultLightColors;
    const darkColors = configObj.dark_theme || defaultDarkColors;
    const currentColors = theme === 'light' ? lightColors : darkColors;

    // Set Statsig variables
    root.style.setProperty('--background', hexToRgbString(currentColors.background));
    root.style.setProperty('--foreground', hexToRgbString(currentColors.foreground));
    root.style.setProperty('--primary', hexToRgbString(currentColors.primary));
    root.style.setProperty('--secondary', hexToRgbString(currentColors.secondary));
    root.style.setProperty('--accent', hexToRgbString(currentColors.accent));
    root.style.setProperty('--card-hover', hexToRgbString(currentColors.cardHover));
    root.style.setProperty('--text-secondary', hexToRgbString(currentColors.textSecondary));

    // Set theme variables used by your CSS
    root.style.setProperty('--theme-bg', hexToRgbString(currentColors.background));
    root.style.setProperty('--theme-accent', hexToRgbString(currentColors.accent));
    root.style.setProperty('--theme-text-main', hexToRgbString(currentColors.foreground));
    root.style.setProperty('--theme-text-secondary', hexToRgbString(currentColors.textSecondary));
    root.style.setProperty('--theme-card-hover', hexToRgbString(currentColors.cardHover));
  }, [config, theme]);
};
