import React from "react";
import styles from "./App.module.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Routes from "./containers/Routes";
import FootballTeamOrg from "./containers/FootballTeamOrg";
import QuestionQuizz from "./containers/QuestionQuizz/QuestionQuizz";
// import WeatherApi from "./containers/WeatherApi";

const App = () => {
  return (
    <>
      {/* <Routes /> */}
      {/* <FootballTeamOrg /> */}
      <QuestionQuizz />
    </>
  );
}

export default App;
