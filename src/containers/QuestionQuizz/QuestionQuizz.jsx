import React, {useState} from "react";
import styles from "./QuestionQuizz.module.scss";

import Form from 'react-bootstrap/Form';
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const QuestionQuizz = () => {
  const [change, handleChange]= useState();
  const [correct, setCorrect]= useState("");

  const checkAnswer = (answer) =>  answer === "true" || answer === "True" ? setCorrect("That's Correct! Well Done") : setCorrect("That's Incorrect");

  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} md="4">
          <h3>Did Charlie Chaplin came first in a Charlie Chaplin look-alike contest?</h3>
          <Form.Control
            required
            type="text"
            placeholder="True or False"
            onChange={e => handleChange(e.target.value)}
          />
          <p>{correct}</p>
        </Form.Group>
        </Form.Row>
      <Button type="submit" onClick={() => checkAnswer(change)}>Submit Answer</Button>
    </Form>
  )
};

export default QuestionQuizz;
