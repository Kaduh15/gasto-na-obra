import { Header } from './components/Header';
import { Statistics } from './components/Statistics';
import { FormAddExpense } from './components/AddExpenseForm';
import { ExpenseStats } from './components/ExpenseStats';
import type { Expense } from './types/Expense';
import { ExpenseChart } from './components/ExpenseChart';
import { ExpenseList } from './components/ExpenseList';
import { useEffect, useState } from 'react';
import { getAllExpenses } from './database/functions/getAllExpenses';
import { deleteExpense } from './database/functions/deleteExpense';


function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  async function fetchExpenses() {
    const data = await getAllExpenses()

    setExpenses(data);
  }

  async function handleDeleteExpense(id: number) {
    try {
      await deleteExpense(id);
      await fetchExpenses();
    } catch (error) {
      console.error('Erro ao deletar gasto:', error);
    }
  }

  useEffect(() => {
    fetchExpenses();
  }, [])

  return (
    <main className='flex flex-col gap-8 pb-8'>
      <Header />
      <Statistics expenses={expenses} />
      <FormAddExpense onAddExpense={fetchExpenses}/>
      <ExpenseStats expenses={expenses} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </main>
  );
}

export default App;
