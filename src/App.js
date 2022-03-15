// importing other component
import ExpenseItem from "./components/ExpenseItem";

function App() {
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
  return (
    <div>
      <h2>React Expense Tracker</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
