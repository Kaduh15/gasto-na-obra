import { ChartPie, TrendingDown, TrendingUp } from 'lucide-react';
import { SummaryCard } from './SummaryCard';
import type { Expense } from '@/types/Expense';

type SummaryCardProps = {
  expenses: Expense[]
}

export function Statistics({ expenses }: SummaryCardProps) {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalExpenses = expenses.length;
  const averageTicket = totalExpenses > 0 ? totalAmount / totalExpenses : 0

  return (
    <section className='w-full flex flex-col sm:flex-row gap-4'>
      <SummaryCard title='Total Gasto' total={totalAmount} icon={TrendingUp} monetary />
      <SummaryCard title='Número de Gastos' total={totalExpenses} icon={ChartPie} color='blue' />
      <SummaryCard title='Ticket Médio' total={averageTicket} icon={TrendingDown} color='green' monetary />
    </section>
  );
}
