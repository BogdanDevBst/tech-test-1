import React from "react";
import styles from "./Routes.module.scss";
import { Router } from "@reach/router";
import WeatherApi from "../WeatherApi";
import QuestionQuizz from "../QuestionQuizz";
import FootballTeamOrg from "../FootballTeamOrg";

const Routes = () => {
  return (
    <>
      <Router>
        <WeatherApi path="weather" />
        <QuestionQuizz path="quiz" />
        <FootballTeamOrg path="football" />
      </Router>
    </>
  );
};

export default Routes;
