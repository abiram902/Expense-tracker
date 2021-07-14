import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses(props) {
  return (
    <div className="new-expenses">
      <ExpenseForm handleAddExpense={props.handleAddExpense} />
    </div>
  );
}

export default NewExpenses;
