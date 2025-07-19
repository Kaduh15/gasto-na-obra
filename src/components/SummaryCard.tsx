import { Check, type LucideIcon } from 'lucide-react'

type SummaryCardProps = {
  title: string;
  total?: number | string;
  monetary?: boolean;
  icon?: LucideIcon
  color?: 'orange' | 'blue' | 'green';
}

export function SummaryCard({ title, total = 0, icon: Icon = Check, color = 'orange', monetary = false }: SummaryCardProps) {
  const colorBorderClass = {
    orange: 'border-orange-600',
    blue: 'border-blue-600',
    green: 'border-green-600'
  }[color];

  const colorTextClass = {
    orange: 'text-orange-600',
    blue: 'text-blue-600',
    green: 'text-green-600'
  }[color];

  if (monetary && typeof total === 'number') {
    total = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(total);
  }

  return (
    <div className={`flex flex-col w-full bg-white shadow-md rounded-lg p-6 border-l-4 gap-4 ${colorBorderClass}`}>
      <div className='flex items-center justify-start gap-2 text-gray-600 text-sm'>
        {Icon && <Icon size={20} />}
        <h2 className="font-semibold">{title}</h2>
      </div>
      <p className={`${colorTextClass} font-bold text-xl`}>{total}</p>
    </div>
  );
}