import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpenseChart from "../ExpenseChart/ExpenseChart";

function Expenses(props) {
  const [selYear, setSelectedYear] = useState("2021");

  const filteredArray = props.expense.filter(
    (item) => item.date.getFullYear().toString() === selYear
  );

  console.log(filteredArray, "filter return");
  const selectedYear = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <ExpenseFilter selectedYear={selectedYear} />
      <ExpenseChart expense={filteredArray} />
      <div className="expenses">
        {filteredArray.map((item) => (
          <ExpenseItem key={item.id} exp={item} />
        ))}
      </div>
    </div>
  );
}

export default Expenses;
