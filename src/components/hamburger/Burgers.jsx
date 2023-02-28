import React from "react";
import "./burger.css";

function Burgers(props) {
  return (
    <div
      onClick={props.handleClick}
      className={`icon nav-icon-2 ml-[350%] ${props.clicked ? "open" : ""}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

export default Burgers;
