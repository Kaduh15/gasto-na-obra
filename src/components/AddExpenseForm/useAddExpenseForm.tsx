import { useState, useCallback } from "react";
import { addExpense } from "@/database/functions/addExpense";
import { categories } from "@/types/categories";
import { ExpenseSchema, type UseAddExpenseFormProps } from "./types";
import { DEFAULT_CATEGORY } from "./constants";

export function useAddExpenseForm({
  addSuccess = () => {}
}: UseAddExpenseFormProps = {}) {
  const [openForm, setOpenForm] = useState(false);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState<keyof typeof categories>(DEFAULT_CATEGORY);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleForm = useCallback(() => {
    setOpenForm(prev => !prev);
  }, []);

  const resetForm = useCallback(() => {
    setDescription("");
    setAmount(0);
    setCategory(DEFAULT_CATEGORY);
  }, []);

  const handleSubmit = useCallback(async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (isSubmitting) return;
    
    setIsSubmitting(true);
    
    try {
      const expenseData = { description, amount, category };
      const parsedData = ExpenseSchema.safeParse(expenseData);
      
      if (!parsedData.success) {
        console.error("Erro de validação:", parsedData.error);
        return;
      }

      await addExpense(parsedData.data);
      
      resetForm();
      console.log("Gasto adicionado com sucesso:", parsedData.data);
      addSuccess();
      setOpenForm(false);
    } catch (error) {
      console.error("Erro ao adicionar gasto:", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [description, amount, category, isSubmitting, addSuccess, resetForm]);

  return {
    openForm,
    description,
    amount,
    category,
    isSubmitting,
    toggleForm,
    setDescription,
    setAmount,
    setCategory,
    handleSubmit,
    resetForm,
  };
}
