import { z } from "zod";
import { categories } from "@/types/categories";

export const ExpenseSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  amount: z.number().min(0.01, "Valor deve ser maior que zero"),
  category: z.enum(Object.keys(categories) as [keyof typeof categories]),
}).transform((data) => ({
  ...data,
  data: new Date().toISOString().split("T")[0],
}));

export type ExpenseData = z.infer<typeof ExpenseSchema>;

export type AddExpenseFormProps = {
  onAddExpense?: () => void;
};

export type UseAddExpenseFormProps = {
  addSuccess?: () => void;
};
