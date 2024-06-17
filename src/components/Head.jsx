import React from "react";
import headIcon from "../assets/headIcon.png";
import "../css/Head.css";

const Head = ({ text, Ptext }) => {
  return (
    <div className="head-container">
      <div>
        <img
          src={headIcon}
          style={{
            width: "40px",
          }}
        />
      </div>
      <h3
        style={{
          color: "white",
          fontSize: "40px",

          fontWeight: "100",
        }}
      >
        {text}
      </h3>
      <p
        style={{
          color: "white",
          fontSize: "15px",


        }}
      >
        {Ptext}
      </p>
    </div>
  );
};

export default Head;
