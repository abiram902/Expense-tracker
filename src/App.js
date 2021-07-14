import { useState } from "react";
import Expenses from "./Components/Expenses/Expenses";
import NewExpenses from "./Components/NewExpenses/NewExpenses";
function App() {
  const [expense, setExpense] = useState([
    {
      id: "e1",
      title: "medicine",
      amount: 200,
      date: new Date(2019, 6, 5),
    },
    {
      id: "e2",
      title: "oats",
      amount: 175,
      date: new Date(2020, 5, 3),
    },
    {
      id: "e3",
      title: "suplemnet",
      amount: 575,
      date: new Date(2021, 6, 15),
    },
    {
      id: "e4",
      title: "petrol",
      amount: 500,
      date: new Date(2021, 6, 25),
    },
  ]);

  const handleAddExpense = (addValue) => {
    setExpense((prev) => {
      return [...prev, addValue];
    });
  };

  const removeExpenseHandler = (id)=>{
    setExpense(prev=>{
      return prev.filter(item=> item.id !== id)
    })
  }

  return (
    <div className="App">
      <NewExpenses handleAddExpense={handleAddExpense} />
      <Expenses expense={expense} removeExpenseHandler={removeExpenseHandler} />
    </div>
  );
}

export default App;
