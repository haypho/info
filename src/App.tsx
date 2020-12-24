import React from "react";
import { HashRouter, Route } from "react-router-dom";
import NavBar from "./components/nav-bar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App: React.FC = () => (
  <HashRouter basename="/">
    <NavBar />
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Projects} />
  </HashRouter>
);

export default App;
