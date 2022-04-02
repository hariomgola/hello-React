import React from "react";
import "./NewExpense.css";
import ExpeseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (eneteredExpenseData) => {
    const expenseData = {
      ...eneteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    console.log("NewExpense Parent Component ----->", expenseData);
  };
  return (
    <div className="new-expense">
      <ExpeseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
