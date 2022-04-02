// importing other component
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const expenses = [
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

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
