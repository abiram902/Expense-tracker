import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [state, setState] = useState({
    title: "",
    amount: "",
    date: "",
  });
  const [hidden, sethidden] = useState(true);
  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  const toggleForm = (e) => {
    sethidden((prev) => !prev);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleAddExpense({
      id: Math.random().toString(),
      title: state.title,
      amount: parseInt(state.amount),
      date: new Date(state.date),
    });
    toggleForm();
  };
  

  if (hidden) {
    return (
      <button className="btn" onClick={toggleForm}>
        Add Expene
      </button>
    );
  }

  return (
    <form id="expense-form" onSubmit={handleSubmit}>
      <div className="form-inputs">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="form-title"
          className="inputs"
          value={state.title}
          onChange={handleChange}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          name="amount"
          id="form-amount"
          className="inputs"
          onChange={handleChange}
          value={state.amount}
        />
      </div>
      <div className="form-inputs">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="form-date"
          className="inputs"
          onChange={handleChange}
          value={state.date}
        />
      </div>
      <div className="form-inputs">
        <button className="btn" onClick={toggleForm}>
          cancel
        </button>
        <button type="submit" className="btn">
          Add Expense
        </button>
      </div>
    </form>
  );
}

export default ExpenseForm;
