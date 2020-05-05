import React from "react";
import styles from "./WeatherApi.module.scss";
import Card from "../../components/Card";
import NavBar from "../../components/NavBar";

const WeatherApi = () => {
  return (
    <>
    <div>
      <NavBar />
    </div>
    <div>
      <Card />
    </div>
    </>
  );
};

export default WeatherApi;
