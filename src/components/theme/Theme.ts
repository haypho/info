import { createTheming } from "@callstack/react-theme-provider";
import { DefaultTheme } from "./themes";

export const { ThemeProvider, withTheme, useTheme } = createTheming(
  DefaultTheme
);
