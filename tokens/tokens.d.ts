/**
 * ING Bank Design Tokens - TypeScript Definitions
 */

export interface ColorToken {
  orange: string;
  orangeAlt: string;
}

export interface SecondaryColorToken {
  navyBlue: string;
  deepBlue: string;
}

export interface NeutralColorToken {
  white: string;
}

export interface TextColorToken {
  primary: string;
  secondary: string;
  tertiary: string;
  inverse: string;
  link: string;
  linkHover: string;
}

export interface BackgroundColorToken {
  primary: string;
  secondary: string;
  tertiary: string;
  brand: string;
  brandDark: string;
}

export interface BorderColorToken {
  default: string;
  hover: string;
  focus: string;
  error: string;
}

export interface StateColorToken {
  success: string;
  successLight: string;
  warning: string;
  warningLight: string;
  error: string;
  errorLight: string;
  info: string;
  infoLight: string;
}

export interface InteractiveColorToken {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface GradientToken {
  orangeToDeepOrange: string;
  blueToNavy: string;
  orangeToBlue: string;
}

export interface Colors {
  brand: {
    primary: ColorToken;
    secondary: SecondaryColorToken;
    neutral: NeutralColorToken;
  };
  semantic: {
    text: TextColorToken;
    background: BackgroundColorToken;
    border: BorderColorToken;
    state: StateColorToken;
    interactive: InteractiveColorToken;
  };
  gradients: GradientToken;
}

export interface FontFamilyToken {
  primary: string;
  monospace: string;
}

export interface FontWeightToken {
  light: number;
  regular: number;
  medium: number;
  semibold: number;
  bold: number;
}

export interface FontSizeToken {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
}

export interface LineHeightToken {
  tight: number;
  snug: number;
  normal: number;
  relaxed: number;
  loose: number;
}

export interface LetterSpacingToken {
  tighter: string;
  tight: string;
  normal: string;
  wide: string;
  wider: string;
  widest: string;
}

export interface TextStyle {
  fontSize: string;
  lineHeight: number;
  fontWeight: number;
  letterSpacing: string;
}

export interface TextStylesToken {
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  h5: TextStyle;
  h6: TextStyle;
  body: TextStyle;
  bodyLarge: TextStyle;
  bodySmall: TextStyle;
  button: TextStyle;
  label: TextStyle;
}

export interface Typography {
  fontFamily: FontFamilyToken;
  fontWeight: FontWeightToken;
  fontSize: FontSizeToken;
  lineHeight: LineHeightToken;
  letterSpacing: LetterSpacingToken;
  textStyles: TextStylesToken;
}

export interface SpacingToken {
  0: string;
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
  8: string;
  10: string;
  12: string;
  16: string;
  20: string;
  24: string;
  32: string;
}

export interface BorderRadiusToken {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface BorderWidthToken {
  none: string;
  thin: string;
  medium: string;
  thick: string;
}

export interface ShadowToken {
  none: string;
  xs: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  inner: string;
  orange: string;
  orangeLarge: string;
}

export interface ZIndexToken {
  base: number;
  dropdown: number;
  sticky: number;
  fixed: number;
  modalBackdrop: number;
  modal: number;
  popover: number;
  tooltip: number;
  notification: number;
}

export interface BreakpointToken {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
}

export interface ContainerToken {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  full: string;
}

export interface ButtonStates {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}

export interface ButtonSizes {
  small: string;
  medium: string;
  large: string;
}

export interface ButtonVariant {
  background: ButtonStates;
  text: ButtonStates | { default: string; disabled: string };
  border?: ButtonStates;
  shadow?: { default: string; hover: string };
  padding: ButtonSizes;
  borderRadius: string;
  borderWidth?: string;
  fontWeight: number;
}

export interface InputStates {
  default: string;
  hover?: string;
  focus: string;
  disabled: string;
  error: string;
}

export interface InputComponent {
  background: InputStates;
  border: InputStates;
  borderRadius: string;
  padding: ButtonSizes;
  height: ButtonSizes;
  shadow: { focus: string };
}

export interface CardComponent {
  background: string;
  border: string;
  borderRadius: string;
  padding: ButtonSizes;
  shadow: { default: string; hover: string };
}

export interface BadgeVariant {
  background: string;
  text: string;
}

export interface BadgeComponent {
  primary: BadgeVariant;
  success: BadgeVariant;
  warning: BadgeVariant;
  error: BadgeVariant;
  borderRadius: string;
  padding: ButtonSizes;
  fontSize: ButtonSizes;
  fontWeight: number;
}

export interface AlertVariant {
  background: string;
  text: string;
  border: string;
}

export interface AlertComponent {
  success: AlertVariant;
  warning: AlertVariant;
  error: AlertVariant;
  info: AlertVariant;
  borderRadius: string;
  padding: string;
  fontSize: string;
}

export interface Components {
  button: {
    primary: ButtonVariant;
    secondary: ButtonVariant;
  };
  input: InputComponent;
  card: CardComponent;
  badge: BadgeComponent;
  alert: AlertComponent;
}

export interface TransitionToken {
  fast: string;
  base: string;
  slow: string;
  slower: string;
}

export interface DesignTokens {
  colors: Colors;
  typography: Typography;
  spacing: SpacingToken;
  borderRadius: BorderRadiusToken;
  borderWidth: BorderWidthToken;
  shadows: ShadowToken;
  zIndex: ZIndexToken;
  breakpoints: BreakpointToken;
  container: ContainerToken;
  components: Components;
  transitions: TransitionToken;
}

declare const designTokens: DesignTokens;

export default designTokens;

export const colors: Colors;
export const typography: Typography;
export const spacing: SpacingToken;
export const borderRadius: BorderRadiusToken;
export const borderWidth: BorderWidthToken;
export const shadows: ShadowToken;
export const zIndex: ZIndexToken;
export const breakpoints: BreakpointToken;
export const container: ContainerToken;
export const components: Components;
export const transitions: TransitionToken;
