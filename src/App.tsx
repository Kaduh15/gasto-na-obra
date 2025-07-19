import { Calculator, ChartPie, TrendingDown, TrendingUp } from 'lucide-react'
import { SummaryCard } from './components/SummaryCard'
import { FormAddExpense } from './components/FormAddExpense'

function App() {

  return (
    <main>
      <div className='flex flex-col items-center justify-center mb-16'>
        <div className='flex items-center justify-center gap-4 mb-8'>
          <Calculator className='w-12 h-12 text-orange-600' />
          <h1 className='text-3xl font-bold text-center'>Controle de Gastos da Obra</h1>
        </div>
        <p className='text-gray-700 text-center'>Mantenha sua reforma organizada e dentro do orçamento</p>
      </div>

      <div className='w-full flex flex-col sm:flex-row gap-4 mb-8'>
        <SummaryCard title='Total Gasto' total={1240.56} icon={TrendingUp} monetary />
        <SummaryCard title='Número de Gastos' total={15} icon={ChartPie} color='blue' />
        <SummaryCard title='Ticket Mádio' total={82.70} icon={TrendingDown} color='green' monetary />
      </div>

      <FormAddExpense />

      <div className='w-full max-w-3xl mx-auto p-6'>
        <h2 className='text-xl font-semibold mb-4'>Lista de Gastos</h2>
        {/* Aqui você pode adicionar a lista de gastos */}
        <p className='text-gray-600'>Nenhum gasto adicionado ainda.</p>
      </div>
    </main>
  )
}

export default App
