import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "./slices/theme.slice";

const rootReducer = combineReducers({
  [ThemeSlice.name]: ThemeSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const getAppState = store.getState;
export const appDispatch = store.dispatch;
export default store;
