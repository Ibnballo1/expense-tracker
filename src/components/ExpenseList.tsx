interface Expense {
  id: string;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  setExpenses: (expenses: Expense[]) => void;
  onDelete: (id: string) => void;
  filteredExpense: Expense[];
}

function ExpenseList({ onDelete, filteredExpense }: Props) {
  let total = 0;
  filteredExpense.map((obj) => (total += obj.amount));

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

export default ExpenseList;
