import React, { useState } from "react";
// importing component
import ExpenseDate from "./ExpenseDate";
// importing css files
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("updated");
  };
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹ {props.amount}/-</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </div>
  );
};

export default ExpenseItem;
