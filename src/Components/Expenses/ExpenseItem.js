import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  return (
    <div className="expenseitems">
      <div>
        <ExpenseDate date={props.exp.date} />
      </div>
      <div className="title">{props.exp.title}</div>
      <div className="price">$ {props.exp.amount}</div>
    </div>
  );
}

export default ExpenseItem;
