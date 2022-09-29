import React from "react";

const SideBar = (props) => {
  //   console.log(props);
  const { name, address, detail } = props.sideBar;
  return (
    <div>
      <h3>Player Details</h3>
      <h3>Name:{name}</h3>
      <p>{address}</p>
      <p>{detail}</p>
    </div>
  );
};

export default SideBar;
