/**
 * ING Bank Design Tokens - JavaScript/TypeScript Export
 *
 * @module ing-design-tokens
 * @description Kompletny system design tokens dla ING Bank
 */

export const colors = {
  brand: {
    primary: {
      orange: '#FF6200',
      orangeAlt: '#FF6600',
    },
    secondary: {
      navyBlue: '#000066',
      deepBlue: '#091C5A',
    },
    neutral: {
      white: '#FFFFFF',
    },
  },
  semantic: {
    text: {
      primary: '#1A1A1A',
      secondary: '#4D4D4D',
      tertiary: '#767676',
      inverse: '#FFFFFF',
      link: '#FF6200',
      linkHover: '#CC4E00',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F5F5F5',
      tertiary: '#E8E8E8',
      brand: '#FF6200',
      brandDark: '#000066',
    },
    border: {
      default: '#D1D1D1',
      hover: '#B3B3B3',
      focus: '#FF6200',
      error: '#D0021B',
    },
    state: {
      success: '#00A03E',
      successLight: '#E6F7ED',
      warning: '#F59E00',
      warningLight: '#FFF4E6',
      error: '#D0021B',
      errorLight: '#FDEAED',
      info: '#0066CC',
      infoLight: '#E6F2FF',
    },
    interactive: {
      default: '#FF6200',
      hover: '#CC4E00',
      active: '#993A00',
      disabled: '#B3B3B3',
    },
  },
  gradients: {
    orangeToDeepOrange: 'linear-gradient(135deg, #FF6200 0%, #CC4E00 100%)',
    blueToNavy: 'linear-gradient(135deg, #091C5A 0%, #000066 100%)',
    orangeToBlue: 'linear-gradient(135deg, #FF6200 0%, #000066 100%)',
  },
};

export const typography = {
  fontFamily: {
    primary: "'ING Me', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    monospace: "'Consolas', 'Monaco', 'Courier New', monospace",
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem',  // 72px
  },
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2,
  },
  letterSpacing: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  textStyles: {
    h1: {
      fontSize: '3.75rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h2: {
      fontSize: '3rem',
      lineHeight: 1.25,
      fontWeight: 700,
      letterSpacing: '-0.025em',
    },
    h3: {
      fontSize: '2.25rem',
      lineHeight: 1.375,
      fontWeight: 600,
      letterSpacing: '-0.025em',
    },
    h4: {
      fontSize: '1.875rem',
      lineHeight: 1.375,
      fontWeight: 600,
      letterSpacing: '0',
    },
    h5: {
      fontSize: '1.5rem',
      lineHeight: 1.5,
      fontWeight: 600,
      letterSpacing: '0',
    },
    h6: {
      fontSize: '1.25rem',
      lineHeight: 1.5,
      fontWeight: 600,
      letterSpacing: '0',
    },
    body: {
      fontSize: '1rem',
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: '0',
    },
    bodyLarge: {
      fontSize: '1.125rem',
      lineHeight: 1.625,
      fontWeight: 400,
      letterSpacing: '0',
    },
    bodySmall: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
      fontWeight: 400,
      letterSpacing: '0',
    },
    button: {
      fontSize: '1rem',
      lineHeight: 1.25,
      fontWeight: 600,
      letterSpacing: '0',
    },
    label: {
      fontSize: '0.875rem',
      lineHeight: 1.25,
      fontWeight: 500,
      letterSpacing: '0',
    },
  },
};

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
};

export const borderRadius = {
  none: '0',
  sm: '0.125rem',   // 2px
  base: '0.25rem',  // 4px
  md: '0.375rem',   // 6px
  lg: '0.5rem',     // 8px
  xl: '0.75rem',    // 12px
  '2xl': '1rem',    // 16px
  full: '9999px',
};

export const borderWidth = {
  none: '0',
  thin: '1px',
  medium: '2px',
  thick: '4px',
};

export const shadows = {
  none: 'none',
  xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  md: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  lg: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  xl: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  orange: '0 4px 14px 0 rgba(255, 98, 0, 0.39)',
  orangeLarge: '0 10px 40px 0 rgba(255, 98, 0, 0.3)',
};

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
  notification: 1080,
};

export const breakpoints = {
  xs: '0px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

export const container = {
  xs: '480px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
  full: '100%',
};

export const components = {
  button: {
    primary: {
      background: {
        default: '#FF6200',
        hover: '#CC4E00',
        active: '#993A00',
        disabled: '#FFD4B3',
      },
      text: {
        default: '#FFFFFF',
        disabled: '#FFFFFF',
      },
      shadow: {
        default: '0 4px 14px 0 rgba(255, 98, 0, 0.39)',
        hover: '0 6px 20px 0 rgba(255, 98, 0, 0.50)',
      },
      padding: {
        small: '0.5rem 1rem',
        medium: '0.75rem 1.5rem',
        large: '1rem 2rem',
      },
      borderRadius: '0.25rem',
      fontWeight: 600,
    },
    secondary: {
      background: {
        default: '#FFFFFF',
        hover: '#F5F5F5',
        active: '#E8E8E8',
        disabled: '#F5F5F5',
      },
      text: {
        default: '#FF6200',
        hover: '#CC4E00',
        active: '#993A00',
        disabled: '#B3B3B3',
      },
      border: {
        default: '#FF6200',
        hover: '#CC4E00',
        active: '#993A00',
        disabled: '#D1D1D1',
      },
      borderWidth: '2px',
      borderRadius: '0.25rem',
      fontWeight: 600,
    },
  },
  input: {
    background: {
      default: '#FFFFFF',
      focus: '#FFFFFF',
      disabled: '#F5F5F5',
      error: '#FDEAED',
    },
    border: {
      default: '#D1D1D1',
      hover: '#B3B3B3',
      focus: '#FF6200',
      disabled: '#E8E8E8',
      error: '#D0021B',
    },
    borderRadius: '0.25rem',
    padding: {
      small: '0.5rem 0.75rem',
      medium: '0.75rem 1rem',
      large: '1rem 1.25rem',
    },
    height: {
      small: '2rem',
      medium: '2.5rem',
      large: '3rem',
    },
    shadow: {
      focus: '0 0 0 3px rgba(255, 98, 0, 0.1)',
    },
  },
  card: {
    background: '#FFFFFF',
    border: '#E8E8E8',
    borderRadius: '0.5rem',
    padding: {
      small: '1rem',
      medium: '1.5rem',
      large: '2rem',
    },
    shadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
  },
  badge: {
    primary: {
      background: '#FF6200',
      text: '#FFFFFF',
    },
    success: {
      background: '#00A03E',
      text: '#FFFFFF',
    },
    warning: {
      background: '#F59E00',
      text: '#FFFFFF',
    },
    error: {
      background: '#D0021B',
      text: '#FFFFFF',
    },
    borderRadius: '9999px',
    padding: {
      small: '0.125rem 0.5rem',
      medium: '0.25rem 0.75rem',
      large: '0.375rem 1rem',
    },
    fontSize: {
      small: '0.75rem',
      medium: '0.875rem',
      large: '1rem',
    },
    fontWeight: 600,
  },
  alert: {
    success: {
      background: '#E6F7ED',
      text: '#00582A',
      border: '#00A03E',
    },
    warning: {
      background: '#FFF4E6',
      text: '#7A4F00',
      border: '#F59E00',
    },
    error: {
      background: '#FDEAED',
      text: '#68010E',
      border: '#D0021B',
    },
    info: {
      background: '#E6F2FF',
      text: '#003366',
      border: '#0066CC',
    },
    borderRadius: '0.25rem',
    padding: '1rem',
    fontSize: '0.875rem',
  },
};

export const transitions = {
  fast: '0.1s ease-in-out',
  base: '0.2s ease-in-out',
  slow: '0.3s ease-in-out',
  slower: '0.5s ease-in-out',
};

// Export everything as default for convenience
export default {
  colors,
  typography,
  spacing,
  borderRadius,
  borderWidth,
  shadows,
  zIndex,
  breakpoints,
  container,
  components,
  transitions,
};
