import React, { useState } from "react";
import { addToDb } from "../utility/Fakedb";
import "./SideBar.css";

const SideBar = ({ side }) => {
  const [time, setTime] = useState();
  addToDb(time);

  let name;
  let address;
  let details;
  let weight;
  let height;
  let age;
  let timing = 0;
  for (const singlePlayer of side) {
    name = singlePlayer.name;
    address = singlePlayer.address;
    details = singlePlayer.details;
    weight = singlePlayer.weight;
    height = singlePlayer.height;
    age = singlePlayer.age;
    timing = timing + singlePlayer.timing;
  }

  return (
    <div className="side-bar">
      <h3>Record Holder</h3>
      <div className="player-name">
        <h3>Name: {name}</h3>
        <p>{address}</p>
        <p>{details}</p>
      </div>

      <div className="player-measure">
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

      <div>
        <h4>Add a Break</h4>
        <div>
          <button onClick={() => setTime(10)} className="break-btn">
            10s
          </button>
          <button onClick={() => setTime(20)} className="break-btn">
            20s
          </button>
          <button onClick={() => setTime(30)} className="break-btn">
            30s
          </button>
          <button onClick={() => setTime(40)} className="break-btn">
            40s
          </button>
        </div>
        <div>
          <h4>Timing Details</h4>
          <h5 className="time-break">Timing Total {timing.toFixed(2)}</h5>
          <h5 className="time-break">Break Time {time}s</h5>
        </div>
        <button className="activity-btn">
          <p>Activity Completed</p>
        </button>
      </div>
    </div>
  );
};
export default SideBar;
