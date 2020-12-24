import React, { useCallback } from "react";
import { ThemeProvider } from "./components/theme";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import { useDispatch, useSelector } from "react-redux";
import { themeSelector } from "./store/selectors/theme.selectors";
import { toggleDarkMode } from "./store/slices/theme.slice";
import styled from "styled-components";
import CodingChallenges from "./pages/CodingChallenges";
import Footer from "./components/Footer";
import GlobalStyle from "./styles/global-styles";

const Content = styled.div`
  position: relative;
  min-height: 100%;
  margin: 0 7%;
`;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const theme = useSelector(themeSelector);
  const onChangeTheme = useCallback(() => dispatch(toggleDarkMode()), []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <HashRouter basename="/">
        <NavBar onChangeTheme={onChangeTheme} />
        <Content>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/coding-challenges" component={CodingChallenges} />
        </Content>
      </HashRouter>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
