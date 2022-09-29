import React from "react";
import "./Player.css";

const Player = (props) => {
  //   console.log(props);
  const { player, handleAddToExercise } = props;
  const { title, name, timing, img, address } = player;

  return (
    <div className="player-container">
      <img src={img} alt="" />
      <div className="player-details">
        <h3>{title}</h3>
        <h4>Athlete: {name}</h4>
        <p>{address}</p>
        <p>Best timing: {timing}s</p>
      </div>

      <button
        onClick={() => handleAddToExercise(player)}
        className="player-add-btn"
      >
        Add to list
      </button>
    </div>
  );
};

export default Player;
