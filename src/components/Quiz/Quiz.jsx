import React from "react";
import styles from "./Quiz.module.scss";

class Quiz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAnswer: "Your answer",
      isDisabled: "",
      className: "normal",
      buttonValue: "Check answer"
    };

    this.checkAnswer = this.checkAnswer.bind(this);
    this.typeAnswer = this.typeAnswer.bind(this);
  }

  typeAnswer(error) {
    this.setState({ userAnswer: error.target.value });
  }

  checkAnswer(error) {
    error.preventDefault();
    let isCorrect =
      this.state.userAnswer.toLowerCase().trim() ===
      this.props.answer.toLowerCase().trim()
        ? true
        : false;

    if (isCorrect) {
      this.props.incrementCounter();
      this.setState({ isDisabled: "disabled" });
      this.setState({ className: "correct animated rubberBand" });
      this.setState({ buttonValue: "Correct answer!" });
    } else {
      this.setState({ className: "incorrect animated shake" });
      this.setState({ userAnswer: "Try again" });
    }
  }
  
  render() {
    return (
      <form onSubmit={this.checkAnswer} className="set">
        <div className="form-group">
          <label for="q">
            {this.props.question} <br />
            <input
              name="q"
              className={this.state.className}
              value={this.state.userAnswer}
              onChange={this.typeAnswer}
              disabled={this.state.isDisabled ? "disabled" : ""}
            />
          </label>
        </div>
        <input
          type="submit"
          value={this.state.buttonValue}
          disabled={this.state.isDisabled ? "disabled" : ""}
        />
      </form>
    );
  }
}

export default Quiz;
