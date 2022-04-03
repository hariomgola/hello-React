import React, { useState } from "react";
// importing other component
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_expenses = [
  {
    id: "e1",
    title: "Monitor",
    amount: 10000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Intel-Nuc",
    amount: 50000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e3",
    title: "Iphone",
    amount: 80000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e4",
    title: "MacBook",
    amount: 135000,
    date: new Date(2020, 7, 14),
  },
];
const App = () => {
  // using React state
  const [expenses, setExpenses] = useState(DUMMY_expenses);

  const addExpenseHandler = (expense) => {
    console.log(` - Inside App.js -  `);
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
