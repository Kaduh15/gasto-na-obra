import { Calculator } from 'lucide-react';

export function Header() {
  return (
    <div className='flex flex-col items-center justify-center mb-16'>
      <div className='flex items-center justify-center gap-4 mb-8'>
        <Calculator className='w-12 h-12 text-orange-600' />
        <h1 className='text-3xl font-bold text-center'>Controle de Gastos da Obra</h1>
      </div>
      <p className='text-gray-700 text-center'>Mantenha sua reforma organizada e dentro do orçamento</p>
    </div>
  );
}
