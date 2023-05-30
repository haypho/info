import "./App.scss";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppFooter from "./app-footer/AppFooter";
import AppHeader from "../components/app-header";
import Jumbotron from "../components/jumbotron";
import WelcomeMessage from "./WelcomeMessage";
import AppContentSection from "../components/app-content-section";
import Projects from "./projects";
import fetchGithubUserByUsername from "../store/thunks/github-user/fetchGithubUserByUsername.thunk";
import CodingChallenges from "./coding-challenges";
import fetchAvailableDailyCodingProblems from "../store/thunks/coding-challenges/fetchAvailableDailyCodingProblems.thunk";
import { RootState } from "../store";
import fetchDailyCodingProblem from "../store/thunks/coding-challenges/fetchDailyCodingProblem.thunk";
import WebProjects from "./web-projects";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const availableDailyCodingProblems = useSelector(
    (state: RootState) => state.codingChallengesReducer.availableProblems
  );
  const currentDailyCodingProblem = useSelector(
    (state: RootState) => state.currentCodingChallengeReducer.currentProblem
  );

  useEffect(() => {
    if (!currentDailyCodingProblem && availableDailyCodingProblems.length > 0) {
      dispatch(fetchDailyCodingProblem(availableDailyCodingProblems[0]));
    }
  }, [dispatch, currentDailyCodingProblem, availableDailyCodingProblems]);

  useEffect(() => {
    dispatch(fetchGithubUserByUsername());
    dispatch(fetchAvailableDailyCodingProblems());
  }, [dispatch]);

  return (
    <>
      <AppHeader title="Hayden Phothong" />
      <Jumbotron title="Personal Portfolio" />
      <div className="app-content">
        <AppContentSection>
          <WelcomeMessage />
        </AppContentSection>
        <AppContentSection>
          <Projects />
        </AppContentSection>
        <AppContentSection>
          <WebProjects />
        </AppContentSection>
        <AppContentSection>
          <CodingChallenges />
        </AppContentSection>
      </div>
      <AppFooter />
    </>
  );
};

export default App;
