import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import Player from "../player/Player";
import SideBar from "../sideBar/SideBar";
import "./Game.css";

const Game = () => {
  const [players, setPlayers] = useState([]);
  const [side, setSide] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  // useEffect(()=>{
  //   const storedData = getStoredDb()
  // },[])
  const handleAddToExercise = (selectedPlayer) => {
    // console.log(selectedPlayer);
    const upDateBar = [...side, selectedPlayer];
    setSide(upDateBar);
  };

  return (
    <div className="game">
      <div className="game-container">
        <div>
          <h2 className="title">Best Timing</h2>
          <div className="athlete-container">
            {players.map((player) => (
              <Player
                player={player}
                key={player.id}
                handleAddToExercise={handleAddToExercise}
              ></Player>
            ))}
          </div>
          <div className="blog-counter">
            <Blog></Blog>
          </div>
        </div>
        <div className="side-container">
          <SideBar side={side}></SideBar>
        </div>
      </div>
    </div>
  );
};

export default Game;
