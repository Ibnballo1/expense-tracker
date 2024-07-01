import { useState } from "react";
import Category from "./components/Category";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 0, description: "Milk", amount: 5, category: "Groceries" },
    { id: 1, description: "Electricity", amount: 100, category: "Utilities" },
    { id: 2, description: "Eggs", amount: 10, category: "Groceries" },
    { id: 3, description: "Milk", amount: 5, category: "Groceries" },
    {
      id: 4,
      description: "Electric Kettle",
      amount: 40,
      category: "Utilities",
    },
    { id: 5, description: "Movies", amount: 15, category: "Entertainment" },
  ]);

  let total = 0;
  expenses.map((obj) => (total += obj.amount));

  const handleDelete = (idx: number) => {
    setExpenses(expenses.filter((expense, index) => index !== idx));
  };

  const expenseList = expenses.map((obj, index) => (
    <tr key={index}>
      <td>{obj.description}</td>
      <td>${obj.amount}</td>
      <td>{obj.category}</td>
      <td>
        <button onClick={() => handleDelete(index)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <>
      <Category expenseList={expenseList} total={total} />
    </>
  );
}

export default App;
