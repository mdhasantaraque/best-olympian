import React, { useEffect, useState } from "react";
import Player from "../player/Player";
import SideBar from "../sideBar/SideBar";
import "./Game.css";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [sideBar, setSideBar] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  const handleAddToExercise = (selectedPlayer) => {
    console.log(selectedPlayer);
    const upDateBar = [...sideBar, selectedPlayer];
    setSideBar(upDateBar);
  };

  return (
    <div className="game">
      <div className="game-container">
        <div>
          <h2 className="title">Select best Athlete</h2>
          <div className="athlete-container">
            {players.map((player) => (
              <Player
                player={player}
                key={player.id}
                handleAddToExercise={handleAddToExercise}
              ></Player>
            ))}
          </div>
        </div>
        <div className="side-container">
          <SideBar sideBar={sideBar}></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Game;
