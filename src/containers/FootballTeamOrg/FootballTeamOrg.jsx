import React from "react";
import styles from "./FootballTeamOrg.module.scss";
import data from "../../data/football-team.data.json";
import PlayerCard from "../../components/PlayerCard/PlayerCard";

const FootballTeamOrg = () => {
  const players = data.map((player) => player.id)
  console.log(players);

  const selectedPlayers =[];
  
  return (
    <>
      <div className={styles.players}>
        {data.map((player) => (player.position == null ? (player.position = "Coach") : 
        (
          <PlayerCard
          name={player.name}
          position={player.position}
          dateOfBirth={player.dateOfBirth}
          countryOfBirth={player.countryOfBirth}
          nationality={player.nationality}
          id={player.id}
           />
        )
        ))}
      </div>
    </>
  );
};

export default FootballTeamOrg;
