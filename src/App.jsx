import React from "react";
import styles from "./App.module.scss";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import Routes from "./containers/Routes";
import WeatherApi from "./containers/WeatherApi";

const App = () => {
  return (
    <>
      <WeatherApi />
    </>
  );
}

export default App;
