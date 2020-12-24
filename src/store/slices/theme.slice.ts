import { createSlice } from "@reduxjs/toolkit";
import { DarkTheme, DefaultTheme, ThemeProp } from "../../components/theme";

export interface ThemeState {
  darkModeEnabled: boolean;
  theme: ThemeProp;
}

const initialState: ThemeState = {
  darkModeEnabled: false,
  theme: DefaultTheme,
};

const ThemeSlice = createSlice({
  initialState,
  name: "ThemeSlice",
  reducers: {
    toggleDarkMode(state: ThemeState) {
      state.darkModeEnabled = !state.darkModeEnabled;
      state.theme = state.darkModeEnabled ? DarkTheme : DefaultTheme;
    },
  },
});

export const { toggleDarkMode } = ThemeSlice.actions;
export const { reducer, name } = ThemeSlice;
export default ThemeSlice;
