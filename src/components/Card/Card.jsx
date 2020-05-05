import React, {useEffect} from "react";
import styles from "./Card.module.scss";
import axios from "axios";
import { ListGroup, ListGroupItem } from "react-bootstrap";


// import { CardGroup } from "react-bootstrap";


const Card = () => {
  
//   const apiCall = async () => {
    
//     const API_KEY = "0f33f5c78acf44e7d38b5f6706f6f59d";

//     const url = `https://api.openweathermap.org/data/2.5/weather?id=2643744&appid=${API_KEY}`
    
//     const request = axios.get(url);
//     const response = await request;
//     console.log(response);
    
//   }

//   useEffect(() => {
//     apiCall()
// }, [])

  return (
  <>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
</Card>
  </>
  );
};

export default Card;
