// importing other component
import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
