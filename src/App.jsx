import React from "react";
import styles from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "@reach/router";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Routes from "./containers/Routes/Routes";


const App = () => {
  return (
  <>
    <Routes>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Tech Test_01</Navbar.Brand>
          <Nav className="mr-auto">
            <Link to="weather">Weather</Link> 
            <Link to="football">Football</Link>
            <Link to="quiz">Question</Link>
          </Nav>
      </Navbar>
    </Routes>
  </>
  );
}

export default App;
