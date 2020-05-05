import React from "react";
import styles from "./Routes.module.scss";
import { Router } from "@reach/router";
import WeatherApi from "../WeatherApi";
import QuestionQuizz from "../QuestionQuizz";
import FootballTeamOrg from "../FootballTeamOrg";

const Routes = () => {
  return (
    <>
      {/* <Router>
        <WeatherApi path="weather-page/" />
        <QuestionQuizz path="quizz-page/" />
        <FootballTeamOrg path="football-page/" />
      </Router> */}
    </>
  );
};

export default Routes;
