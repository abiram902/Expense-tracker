import React from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props)=>{

  return (
    <div className="expenseitems" onClick={e=>props.removeExpenseHandler(props.exp.id)}>
      <div>
        <ExpenseDate date={props.exp.date} />
      </div>
      <div className="title">{props.exp.title}</div>
      <div className="price">$ {props.exp.amount}</div>
    </div>
  );
}

export default ExpenseItem;
