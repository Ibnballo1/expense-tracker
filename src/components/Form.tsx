import { useState } from "react";
import uuid from "react-uuid";

interface Expense {
  id: string;
  description: string;
  amount: string;
  category: string;
}

interface Props {
  expenses: Expense[];
  setExpenses: (expenses: Expense[]) => void;
}

function Form({ expenses, setExpenses }: Props) {
  const [inputValue, setInputValue] = useState({
    description: "",
    amount: "",
    category: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newExpense = {
      id: uuid(),
      ...inputValue,
    };
    setExpenses([...expenses, newExpense]);
    setInputValue({ description: "", amount: "", category: "" });
  };

  return (
    <form className="row g-3 mb-3" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="description"
          minLength={3}
          value={inputValue.description}
          onChange={(e) =>
            setInputValue({ ...inputValue, description: e.target.value })
          }
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="amt"
          value={inputValue.amount}
          onChange={(e) =>
            setInputValue({ ...inputValue, amount: e.target.value })
          }
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          id="category"
          minLength={3}
          value={inputValue.category}
          onChange={(e) =>
            setInputValue({ ...inputValue, category: e.target.value })
          }
          required
        />
      </div>
      <div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </div>
    </form>
  );
}

export default Form;
