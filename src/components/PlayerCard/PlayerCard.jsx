import React from "react";
import styles from "./PlayerCard.module.scss";

const PlayerCard = props => {
  const { name, position, dateOfBirth, countryOfBirth, nationality, id } = props;


  return (
    <>
      <div className={styles.cardContent}>
        <h2>{name}</h2>
        <h3>Position: {position}</h3>
        <h3>Date of birth: {dateOfBirth}</h3>
        <h3>Country of birth: {countryOfBirth}</h3>
        <h3>Nationality: {nationality}</h3>
        <button id={id}>Select player</button>
      </div>
    </>
  );
};

export default PlayerCard;
