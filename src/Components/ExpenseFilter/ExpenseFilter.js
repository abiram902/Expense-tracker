import React, { useState } from "react";

import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const [year, setYear] = useState("2021");

  const handleSelect = (e) => {
    setYear(e.target.value);
    props.selectedYear(e.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expenses-filter__control">
        <label>Filter by year </label>
        <select value={year} onChange={handleSelect}>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
