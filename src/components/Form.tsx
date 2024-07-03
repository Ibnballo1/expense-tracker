import { useState } from "react";
import uuid from "react-uuid";

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

function Form({ expenses, setExpenses }: Props) {
  const [inputValue, setInputValue] = useState({
    description: "",
    amount: Number(""),
    category: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newExpense = {
      id: uuid(),
      ...inputValue,
    };
    setExpenses([...expenses, newExpense]);
    setInputValue({ description: "", amount: Number(""), category: "" });
  };
  console.log(expenses);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description">
        Description
        <br />
        <input
          type="text"
          id="description"
          value={inputValue.description}
          onChange={(e) =>
            setInputValue({ ...inputValue, description: e.target.value })
          }
          required
        />
      </label>
      <br />
      <label htmlFor="amt">
        Amount
        <br />
        <input
          type="number"
          id="amt"
          value={inputValue.amount}
          onChange={(e) =>
            setInputValue({ ...inputValue, amount: Number(e.target.value) })
          }
          required
        />
      </label>
      <br />
      <label htmlFor="category">
        Category
        <br />
        <input
          type="text"
          id="category"
          value={inputValue.category}
          onChange={(e) =>
            setInputValue({ ...inputValue, category: e.target.value })
          }
          required
        />
      </label>
      <br />
      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default Form;
