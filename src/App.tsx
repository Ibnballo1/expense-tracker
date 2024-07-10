import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import "bootstrap/dist/css/bootstrap.css";
import SelectedCategory from "./components/SelectedCategory";

export const selectedOptions = ["Entertainment", "Utilities", "Groceries"];

function App() {
  const [expenses, setExpenses] = useState([
    { id: "0", description: "Milk", amount: "5", category: "Groceries" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const filteredExpense = expenses.filter((expense) =>
    selectedCategory === "all"
      ? expense.category
      : expense.category === selectedCategory
  );

  return (
    <div className="m-3">
      <Form expenses={expenses} setExpenses={setExpenses} />
      <SelectedCategory
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ExpenseList
        setExpenses={setExpenses}
        onDelete={handleDelete}
        filteredExpense={filteredExpense}
      />
    </div>
  );
}

export default App;
