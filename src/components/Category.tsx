import { ChangeEvent, useState } from "react";

interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
}

function Category({ expenses, setExpenses }: Props) {
  const [selectedExpense, setSelectedExpense] = useState("all");

  let total = 0;
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedExpense(e.target.value);
  };

  const filteredExpense = expenses.filter((expense: Expense) =>
    selectedExpense === "all"
      ? expense.category
      : expense.category === selectedExpense
  );

  filteredExpense.map((obj) => (total += obj.amount));

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const expenseList = filteredExpense.map((obj: Expense) => (
    <tr key={obj.id}>
      <td>{obj.description}</td>
      <td>${obj.amount}</td>
      <td>{obj.category}</td>
      <td>
        <button onClick={() => handleDelete(obj.id)}>Delete</button>
      </td>
    </tr>
  ));

  return (
    <div>
      <select name="expenses" value={selectedExpense} onChange={handleOnChange}>
        <option value="all">All categories</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
      </select>
      <table>
        <th>Description</th>
        <th>Amount</th>
        <th>Category</th>
        <th>Delete</th>
        {expenseList}
        <tr>
          <td>Total</td>
          <td>{total}</td>
        </tr>
      </table>
    </div>
  );
}

export default Category;
