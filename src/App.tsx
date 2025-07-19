import { Header } from './components/Header';
import { Statistics } from './components/Statistics';
import { FormAddExpense } from './components/FormAddExpense';
import { ExpenseList } from './components/ExpenseList';

function App() {
  return (
    <main>
      <Header />
      <Statistics />
      <FormAddExpense />
      <ExpenseList />
    </main>
  );
}

export default App;
