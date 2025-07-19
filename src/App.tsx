import { Header } from './components/Header';
import { Statistics } from './components/Statistics';
import { FormAddExpense } from './components/FormAddExpense';
import { ExpenseStats } from './components/ExpenseStats';
import type { Expense } from './types/Expense';
import { ExpenseChart } from './components/ExpenseChart';

const expenses: Expense[] = [
  { id: 1, description: 'Material', amount: 200, category: 'material', date: new Date().toISOString() },
  { id: 2, description: 'Mão de obra', amount: 500, category: 'maoDeObra', date: new Date().toISOString() },
  { id: 3, description: 'Transporte', amount: 150, category: 'transporte', date: new Date().toISOString() },
  { id: 4, description: 'Equipamento', amount: 300, category: 'equipamento', date: new Date().toISOString() },
  { id: 5, description: 'Serviços', amount: 400, category: 'servicos', date: new Date().toISOString() },
  { id: 6, description: 'Outros', amount: 100, category: 'outros', date: new Date().toISOString() },
  { id: 7, description: 'Material', amount: 250, category: 'material', date: new Date().toISOString() },
  { id: 8, description: 'Mão de obra', amount: 600, category: 'maoDeObra', date: new Date().toISOString() },
  { id: 9, description: 'Transporte', amount: 180, category: 'transporte', date: new Date().toISOString() },
  { id: 10, description: 'Equipamento', amount: 350, category: 'equipamento', date: new Date().toISOString() },
  { id: 11, description: 'Serviços', amount: 450, category: 'servicos', date: new Date().toISOString() },
  { id: 12, description: 'Outros', amount: 120, category: 'outros', date: new Date().toISOString() },
  { id: 13, description: 'Material', amount: 300, category: 'material', date: new Date().toISOString() },
];



function App() {
  return (
    <main>
      <Header />
      <Statistics />
      <FormAddExpense />
      <ExpenseStats expenses={expenses} />
      <ExpenseChart expenses={expenses} />
    </main>
  );
}

export default App;
