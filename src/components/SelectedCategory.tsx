import { ChangeEvent } from "react";
import { selectedOptions } from "../App";

interface Props {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const SelectedCategory = ({ selectedCategory, setSelectedCategory }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <div>
      <select
        name="expenses"
        className="form-select form-select-lg mb-3"
        value={selectedCategory}
        onChange={handleOnChange}
      >
        <option value="all">All Categories</option>
        {selectedOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectedCategory;
