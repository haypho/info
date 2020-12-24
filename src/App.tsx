import React, { useCallback } from "react";
import { ThemeProvider } from "./components/theme";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "./store/selectors/theme.selectors";
import { toggleDarkMode } from "./store/slices/theme.slice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const onChangeTheme = useCallback(() => dispatch(toggleDarkMode()), []);

  return (
    <ThemeProvider theme={theme}>
      <HashRouter basename="/">
        <NavBar onChangeTheme={onChangeTheme} />
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
