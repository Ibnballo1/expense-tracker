import { ChangeEvent, useState } from "react";

interface Expense {
  id: string;
  description: string;
  amount: string;
  category: string;
}

interface Props {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
  onDelete: (id: string) => void;
}

function Category({ expenses, onDelete }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  let total = 0;
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const filteredExpense = expenses.filter((expense: Expense) =>
    selectedCategory === "all"
      ? expense.category
      : expense.category === selectedCategory
  );

  filteredExpense.map((obj) => (total += Number(obj.amount)));

  const expenseList = filteredExpense.map((obj: Expense) => (
    <tr key={obj.id}>
      <td>{obj.description}</td>
      <td>${obj.amount}</td>
      <td>{obj.category}</td>
      <td>
        <button
          className="btn btn-outline-danger btn-lg"
          onClick={() => onDelete(obj.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <select
        name="expenses"
        className="form-select form-select-lg mb-3"
        value={selectedCategory}
        onChange={handleOnChange}
      >
        <option value="all">All categories</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        <option value="Groceries">Groceries</option>
      </select>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{expenseList}</tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Category;
