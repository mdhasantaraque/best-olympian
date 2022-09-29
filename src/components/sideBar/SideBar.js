import React from "react";
import "./SideBar.css";

const SideBar = ({ side }) => {
  //   console.log(side);
  //   let { sideBar } = props;
  //   console.log(sideBar);
  let name;
  let address;
  let details;
  let weight;
  let height;
  let age;
  for (const singlePlayer of side) {
    name = singlePlayer.name;
    address = singlePlayer.address;
    details = singlePlayer.details;
    weight = singlePlayer.weight;
    height = singlePlayer.height;
    age = singlePlayer.age;
  }

  return (
    <div className="side-bar">
      <h3>Player Details</h3>
      <div className="player-name">
        <h3>Name: {name}</h3>
        <p>{address}</p>
      </div>

      <div className="player-mesure">
        <div>
          <p>{weight}kg</p>
          <p>Weight</p>
        </div>
        <div>
          <p>{height}mtr</p>
          <p>Height</p>
        </div>
        <div>
          <p>{age}yrs</p>
          <p>Age</p>
        </div>
      </div>
      <p>{details}</p>
      <div>
        <h4>Add a Break</h4>
      </div>
    </div>
  );
};

export default SideBar;
