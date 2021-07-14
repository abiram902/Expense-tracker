import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  let maxVal = 0;
  for (let i of props.dataPoints) {
    console.log(i, "i");
    maxVal += i.value;
  }
  console.log(`maxVal=${maxVal}`);
  return (
    <div className="chart-container">
      {props.dataPoints.map((item) => (
        <ChartBar
          id={item.label}
          value={item.value}
          label={item.label}
          maxValue={maxVal}
        />
      ))}
    </div>
  );
}

export default Chart;
