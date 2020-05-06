import React from "react";
// import styles from "./Cards.module.scss";
import { useState, useEffect } from "react";
import { Card, CardGroup } from "react-bootstrap";

const Cards = props => {

  const { location, image } = props;
  const [ name, setName ] = useState();
  const [ temperature, setTemperature] = useState();
  const [ humidity, setHumidity] = useState();
  const [ maxTemp, setMaxTemp] = useState();
  const [ minTemp, setMinTemp] = useState();

  useEffect (() => {
    getLocationDetails(location);
  });

  const getLocationDetails = location => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?id=${location}&units=metric&appid=4f3e737ca0cc4f1674b3f7f786fd7222`
    )
    .then((result) => result.json())
    .then((result) => {
        return (
          setName(result.name),
          setTemperature(result.main.temp),
          setHumidity(result.main.humidity),
          setMinTemp(result.main.temp_min),
          setMaxTemp(result.main.temp_max)
      );
    })
    .catch((err) => console.log(err));
  };

  return (
<>
<CardGroup>
  <Card>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      {`Temperature : ${temperature}`}
      </Card.Text>
      <Card.Text>
      {`Humidity: ${humidity}%`}
      </Card.Text>
      <Card.Text>
      {`Min temp: ${minTemp}`}
      </Card.Text>
      <Card.Text>
      {`Max temp : ${maxTemp}`}
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>  
</>
  );
};

export default Cards;
