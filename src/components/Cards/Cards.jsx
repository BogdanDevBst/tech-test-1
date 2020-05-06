import React from "react";
import styles from "./Cards.module.scss";
import { useState, useEffect } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

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
  <Card style={{ width: '18rem' }}>
    <Card.Title>{name}</Card.Title>
    <ListGroup variant="flush">
      <ListGroupItem>{`Temperature: ${temperature}`}</ListGroupItem>
      <ListGroupItem>{`Humidity: ${humidity}`}</ListGroupItem>
      <ListGroupItem>{`Min temp: ${minTemp}`}</ListGroupItem>
      <ListGroupItem>{`Max temp: ${maxTemp}`}</ListGroupItem>
    </ListGroup>
  </Card>
</>
  );
};

export default Cards;
