// crie uma função que adiciona um gasto ao banco de dados usando ExpenseSchema
import { ExpenseSchema, type ExpenseData } from '@/components/AddExpenseForm/useAddExpenseForm';
import { dbPromise } from '../index';

export async function addExpense(expenseData: ExpenseData) {
  const db = await dbPromise;

  // Valida os dados do gasto usando ExpenseSchema
  const parsedData = ExpenseSchema.safeParse(expenseData);
  if (!parsedData.success) {
    throw new Error(`Erro de validação: ${parsedData.error}`);
  }

  // Adiciona o gasto ao banco de dados
  const id = await db.add('expenses', parsedData.data);
  return id;
}