import { categories } from "@/types/categories";
import { useState } from "react";
import z from "zod";

export const ExpenseSchema = z.object({
  description: z.string().min(1, "Descrição é obrigatória"),
  amount: z.number().min(0.01, "Valor deve ser maior que zero"),
  category: z.enum(Object.keys(categories) as [keyof typeof categories]),
}).transform((data) => ({
  ...data,
  data: new Date().toISOString().split("T")[0], // Adiciona a data atual no formato YYYY-MM-DD;
}));

export type ExpenseData = z.infer<typeof ExpenseSchema>;

export function useAddExpenseForm() {
  const [openForm, setOpenForm] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<keyof typeof categories>("material");

  const expenseData = {
    description,
    amount: amount,
    category,
  };

  function toggleForm() {
    setOpenForm(!openForm);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const parsedData = ExpenseSchema.safeParse(expenseData);
    if (!parsedData.success) {
      console.error("Erro de validação:", parsedData.error);
      return;
    }
    console.log("Gasto adicionado:", expenseData);
    setOpenForm(false);
  }

  return {
    openForm,
    toggleForm,
    description,
    setDescription,
    amount,
    setAmount,
    category,
    setCategory,
    handleSubmit,
  };
}