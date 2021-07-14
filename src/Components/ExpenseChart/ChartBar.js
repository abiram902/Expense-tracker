import React from "react";
import "./ChartBar.css";

function ChartBar(props) {
  const barFill = Math.floor((props.value / props.maxValue) * 100) + "%";
  console.log(`barFill=${barFill}`);
  return (
    <div id="bar-container">
      <div className="bar-bar">
        <div
          className="bar-fill"
          style={{ height: props.maxValue > 0 ? barFill : "0%" }}
        ></div>
      </div>
      <div className="bar-label">{props.label}</div>
    </div>
  );
}

export default ChartBar;
