// buscas todos os gastos usando o database
import type { Expense } from '@/types/Expense';
import { dbPromise} from '../index';
import z from 'zod';
import { ExpenseSchema } from '@/components/AddExpenseForm/useAddExpenseForm';

export async function getAllExpenses() {
  const db = await dbPromise;

  const expenses = await db.getAll('expenses');
  const result = z.array(ExpenseSchema).safeParse(expenses);

  if (!result.success) {
    throw new Error(`Erro de validação: ${result.error}`);
  }

  return expenses as Expense[];
}