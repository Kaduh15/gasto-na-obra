import { categories } from "@/types/categories";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";


export function FormAddExpense() {
  const [openForm, setOpenForm] = useState(false);

  function toggleForm() {
    setOpenForm(!openForm);
  }

  const formButtonText = openForm ? "Cancelar" : "Adicionar Gasto";
  const ButtonIcon = openForm ? Minus : Plus;

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-3xl mx-auto p-6 mb-8">
      <button onClick={toggleForm} className="flex items-center gap-2 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 text-white px-4 py-2 rounded-xl transition-colors">
        {<ButtonIcon size={20} />}
        {formButtonText}
      </button>

      {openForm && (
        <form className="mt-8 p-6 shadow-md mb-16 bg-white rounded-xl w-full">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Descrição do Gasto</label>
            <textarea className="w-full border h-24 border-gray-300 rounded px-3 py-2" placeholder="Ex: Compra de cimento" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Valor (R$)</label>
            <input type="number" className="w-full border border-gray-300 rounded px-3 py-2" placeholder="Ex: 150.00" />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Categoria</label>
            <select className="w-full border border-gray-300 rounded px-3 py-2">
              <option value="">Selecione uma categoria</option>
              {Object.entries(categories).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-semibold">Data do Gasto</label>
            <input type="date" className="w-full border border-gray-300 rounded px-3 py-2" />
          </div>

          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Adicionar</button>
        </form>
      )}
    </div>
  );
}