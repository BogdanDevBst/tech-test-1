import React from "react";
// import styles from "./WeatherApi.module.scss";
import Cards from "../../components/Cards";
import london from "../../assets/London.jpg";
import bristol from "../../assets/Bristol.jpg";
import rome from "../../assets/Rome.jpg";

const WeatherApi = () => {

  return (
    <>
    <div>
      <Cards location={2643744} image={london}/>
      <Cards location={4749005} image={bristol}/>
      <Cards location={4219762} image={rome}/>
    </div>
    </>
  );
};

export default WeatherApi;
