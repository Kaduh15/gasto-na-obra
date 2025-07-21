import { Header } from './components/Header';
import { Statistics } from './components/Statistics';
import { FormAddExpense } from './components/FormAddExpense';
import { ExpenseStats } from './components/ExpenseStats';
import type { Expense } from './types/Expense';
import { ExpenseChart } from './components/ExpenseChart';
import { ExpenseList } from './components/ExpenseList';

const expenses: Expense[] = [
  {
    id: 1,
    description: "Compra de cimento",
    amount: 150.00,
    category: "material",
    date: "2023-10-01"
  },
  {
    id: 2,
    description: "Serviço de eletricista",
    amount: 200.00,
    category: "eletrica",
    date: "2023-10-02"
  },
  {
    id: 3,
    description: "Aluguel de ferramentas",
    amount: 100.00,
    category: "ferramentas",
    date: "2023-10-03"
  },
  {
    id: 4,
    description: "Compra de tinta",
    amount: 80.00,
    category: "mao_de_obra",
    date: "2023-10-04"
  },
];



function App() {
  return (
    <main className='flex flex-col gap-8 pb-8'>
      <Header />
      <Statistics />
      <FormAddExpense />
      <ExpenseStats expenses={expenses} />
      <ExpenseChart expenses={expenses} />
      <ExpenseList expenses={expenses} onDeleteExpense={() => {}} />
    </main>
  );
}

export default App;
