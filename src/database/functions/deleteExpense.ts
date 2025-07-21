import { dbPromise } from '../index';

export async function deleteExpense(id: number) {
  const db = await dbPromise;
  
  await db.delete('expenses', id);
  
  return true;
}
