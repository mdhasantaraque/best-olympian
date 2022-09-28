import React, { useEffect, useState } from "react";
import Player from "../player/Player";
import "./Game.css";

const Game = () => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div className="game">
      <h2>Select best Athlete</h2>
      <div className="game-container">
        <div className="athlete-container">
          {players.map((player) => (
            <Player player={player} key={player.id}></Player>
          ))}
        </div>
        <div className="exercise-container">
          <h1>Excersige</h1>
        </div>
      </div>
    </div>
  );
};

export default Game;
