import { ChangeEvent } from "react";
import { categories } from "../App";

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
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectedCategory;
