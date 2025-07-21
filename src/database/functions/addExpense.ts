import { ExpenseSchema, type ExpenseData } from '@/components/AddExpenseForm/types';
import { dbPromise } from '../index';

export async function addExpense(expenseData: ExpenseData) {
  const db = await dbPromise;

  const parsedData = ExpenseSchema.safeParse(expenseData);
  if (!parsedData.success) {
    throw new Error(`Erro de validação: ${parsedData.error}`);
  }

  const id = await db.add('expenses', parsedData.data);
  return id;
}