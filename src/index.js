import React from "react";
import ReactDOM from "react-dom";

var today = new Date();
var time = today.getHours();

var greeting = "";

const customStyle = {
  color: "Black"
};

if (time < 12) {
  greeting = "Morning";
  customStyle.color = "Red";
} else if (time < 18) {
  greeting = "Afternoon";
  customStyle.color = "Green";
} else {
  greeting = "Evening";
  customStyle.color = "Blue";
}

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Good {greeting}!</h1>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
