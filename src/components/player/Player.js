import React from "react";
import "./Player.css";

const Player = (props) => {
  //   console.log(props);
  const { title, name, timing, img } = props.player;

  return (
    <div className="player-container">
      <img src={img} alt="" />
      <div className="player-details">
        <h3>{title}</h3>
        <h4>Athlete: {name}</h4>
        <p>Best timing: {timing}s</p>
      </div>

      <button
        onClick={() => props.handleAddToExercise(props.player)}
        className="player-add-btn"
      >
        Add to list
      </button>
    </div>
  );
};

export default Player;
