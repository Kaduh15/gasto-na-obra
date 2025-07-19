import { ChartPie, TrendingDown, TrendingUp } from 'lucide-react';
import { SummaryCard } from './SummaryCard';

export function Statistics() {
  return (
    <div className='w-full flex flex-col sm:flex-row gap-4 mb-8'>
      <SummaryCard title='Total Gasto' total={1240.56} icon={TrendingUp} monetary />
      <SummaryCard title='Número de Gastos' total={15} icon={ChartPie} color='blue' />
      <SummaryCard title='Ticket Médio' total={82.70} icon={TrendingDown} color='green' monetary />
    </div>
  );
}
