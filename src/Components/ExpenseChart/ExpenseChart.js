import React from "react";
import Chart from "./Chart";

function ExpenseChart(props) {
  const monthlyData = [
    { label: "jan", value: 0 },
    { label: "feb", value: 0 },
    { label: "mar", value: 0 },
    { label: "apl", value: 0 },
    { label: "may", value: 0 },
    { label: "jun", value: 0 },
    { label: "jul", value: 0 },
    { label: "aug", value: 0 },
    { label: "sep", value: 0 },
    { label: "oct", value: 0 },
    { label: "nov", value: 0 },
    { label: "dec", value: 0 },
  ];

  for (let expense of props.expense) {
    let month = expense.date.getMonth();
    monthlyData[month].value += expense.amount;
  }

  return (
    <div className='expense-chart'>
      <Chart dataPoints={monthlyData} />
    </div>
  );
}

export default ExpenseChart;
