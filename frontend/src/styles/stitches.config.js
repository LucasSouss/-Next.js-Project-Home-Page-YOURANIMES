import { createStitches } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      // Cores principais
      primary: '#FF6B6B',
      primaryDark: '#FF5252',
      secondary: '#4ECDC4',
      
      // Cores de fundo
      background: '#1A1B1E',
      surface: '#2C2D31',
      surfaceHover: '#3A3B40',
      
      // Cores de texto
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      textMuted: '#6C6C6C',
      
      // Estados
      success: '#4CAF50',
      error: '#F44336',
      warning: '#FFC107',
      
      // Favoritos
      favorite: '#FFD700',
      favoriteHover: '#FFC107',
    },
    space: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '32px',
      '2xl': '48px',
    },
    fontSizes: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
    },
    fonts: {
      body: 'system-ui, -apple-system, sans-serif',
      heading: 'system-ui, -apple-system, sans-serif',
    },
    radii: {
      xs: '4px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      round: '9999px',
    },
  },
  media: {
    sm: '(min-width: 640px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1280px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    marginY: (value) => ({ marginTop: value, marginBottom: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
    paddingY: (value) => ({ paddingTop: value, paddingBottom: value }),
  },
});