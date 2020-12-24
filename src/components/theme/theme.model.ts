interface ThemeColors {
  background: string;
  error: string;
  foreground: string;
  muted: string;
  primary: string;
  success: string;
  secondary: string;
  text: string;
}

export default interface Theme {
  colors: ThemeColors;
}
