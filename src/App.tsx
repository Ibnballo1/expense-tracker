import { useState } from "react";
import ExpenseList from "./components/ExpenseList";
import Form from "./components/Form";
import uuid from "react-uuid";
import "bootstrap/dist/css/bootstrap.css";
import SelectedCategory from "./components/SelectedCategory";

export const categories = ["Entertainment", "Utilities", "Groceries"];

function App() {
  const [expenses, setExpenses] = useState([
    { id: "", description: "", amount: 0, category: "" },
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
      <Form
        onSubmit={(expense) =>
          setExpenses([...expenses, { ...expense, id: uuid() }])
        }
      />
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
