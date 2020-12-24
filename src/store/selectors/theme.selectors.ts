import { createSelector } from "@reduxjs/toolkit";
import { ThemeProp } from "../../components/theme";
import { ThemeState } from "../slices/theme.slice";
import { RootState } from "../store";

const themeStateSelector = (state: RootState): ThemeState => state.ThemeSlice;

export const darkModeEnabledSelector = createSelector(
  themeStateSelector,
  (state: ThemeState): boolean => state.darkModeEnabled
);

export const themeSelector = createSelector(
  themeStateSelector,
  (state: ThemeState): ThemeProp => state.theme
);
