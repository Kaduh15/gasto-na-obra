import { categories, type CategoryKey } from "@/types/categories";
import { Minus, Plus, Save } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useAddExpenseForm } from "./useAddExpenseForm";

export function FormAddExpense() {
  const {
    openForm,
    toggleForm,
    description,
    setDescription,
    amount,
    setAmount,
    category,
    setCategory,
    handleSubmit
  } = useAddExpenseForm();

  const formButtonText = openForm ? "Cancelar" : "Adicionar Gasto";
  const ButtonIcon = openForm ? Minus : Plus;

  if (!openForm) {
    return (
      <Button
        onClick={toggleForm}
        className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
      >
        <ButtonIcon className="h-5 w-5 mr-2" />
        {formButtonText}
      </Button>
    )
  }



  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">Adicionar Novo Gasto</CardTitle>
        <CardDescription>
          Registre um novo gasto da sua obra para manter o controle financeiro
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="description" className="text-sm font-medium text-gray-700">
                Descrição do Gasto
              </Label>
              <Textarea
                id="description"
                placeholder="Ex: Cimento, Areia, Pedreiro, etc."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="resize-none h-20"
                required
              />
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
                  Valor (R$)
                </Label>
                <Input
                  id="amount"
                  type="number"
                  step="0.01"
                  placeholder="0,00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.valueAsNumber)}
                  className="text-lg"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category" className="text-sm font-medium text-gray-700">
                  Categoria
                </Label>
                <Select value={category} onValueChange={(value) => setCategory(value as CategoryKey)} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(categories).map(([key, label]) => (
                      <SelectItem key={key} value={key}>
                        {label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Save className="h-5 w-5 mr-2" />
            Salvar Gasto
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}