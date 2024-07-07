import { useState } from "react";
import Category from "./components/Category";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [expenses, setExpenses] = useState([
    { id: "0", description: "Milk", amount: "5", category: "Groceries" },
    {
      id: "1",
      description: "Electricity",
      amount: "100",
      category: "Utilities",
    },
    { id: "2", description: "Eggs", amount: "10", category: "Groceries" },
    { id: "3", description: "Milk", amount: "5", category: "Groceries" },
    {
      id: "4",
      description: "Electric Kettle",
      amount: "40",
      category: "Utilities",
    },
    { id: "5", description: "Movies", amount: "15", category: "Entertainment" },
  ]);

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  return (
    <div className="m-3">
      <Form expenses={expenses} setExpenses={setExpenses} />
      <Category
        expenses={expenses}
        setExpenses={setExpenses}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
