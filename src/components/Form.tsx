import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { categories } from "../App";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters." })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required." })
    .min(0)
    .max(100_000),
  category: z.enum(["Entertainment", "Utilities", "Groceries"], {
    errorMap: () => ({ message: "Category is required." }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

function Form({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      className="row g-3 mb-3"
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
      <div className="mb">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          {...register("description")}
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb">
        <label htmlFor="amt" className="form-label">
          Amount
        </label>
        <input
          className="form-control form-control-lg"
          type="text"
          {...register("amount", { valueAsNumber: true })}
          id="amt"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select
          className="form-select form-select-lg"
          {...register("category")}
          id="category"
        >
          <option value="all">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>
      <div>
        <input type="submit" className="btn btn-primary btn-lg" />
      </div>
    </form>
  );
}

export default Form;
