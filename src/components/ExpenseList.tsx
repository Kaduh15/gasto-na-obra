import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Trash2, Calendar, DollarSign, Calculator } from "lucide-react";
import type { Expense } from "@/types/Expense";
import { categories, type CategoryValue } from "@/types/categories";

interface ExpenseListProps {
  expenses: Expense[];
  onDeleteExpense: (id: number) => void;
}

const categoryColors: Record<CategoryValue, string> = {
  "Material de Construção": "bg-orange-100 text-orange-800",
  "Mão de Obra": "bg-blue-100 text-blue-800",
  "Ferramentas": "bg-green-100 text-green-800",
  "Elétrica": "bg-yellow-100 text-yellow-800",
  "Hidráulica": "bg-cyan-100 text-cyan-800",
  "Pintura": "bg-purple-100 text-purple-800",
  "Acabamento": "bg-pink-100 text-pink-800",
  "Transporte": "bg-indigo-100 text-indigo-800",
  "Alimentação": "bg-red-100 text-red-800",
  "Outros": "bg-gray-100 text-gray-800"
};

export const ExpenseList = ({ expenses, onDeleteExpense }: ExpenseListProps) => {
  const sortedExpenses = [...expenses].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  if (sortedExpenses.length === 0) {
    return (
      <Card className="bg-white/60 backdrop-blur-sm text-center py-12">
        <CardContent>
          <Calculator className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            Nenhum gasto registrado ainda
          </h3>
          <p className="text-gray-500">
            Comece adicionando seus primeiros gastos da obra para ter controle total dos custos.
          </p>
        </CardContent>
      </Card>
    )
  }


    return (
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">Histórico de Gastos</CardTitle>
          <CardDescription>
            Todos os gastos registrados na sua obra
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {sortedExpenses.map((expense) => (
              <div
                key={expense.id}
                className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Badge className={categoryColors[categories[expense.category]] || categoryColors["Outros"]}>
                      {categories[expense.category]}
                    </Badge>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="h-4 w-4" />
                      {new Date(expense.date).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <p className="text-gray-800 font-medium">{expense.description}</p>
                  <div className="flex items-center gap-1 text-lg font-bold text-green-600">
                    <DollarSign className="h-5 w-5" />
                    R$ {expense.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </div>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    );
  };
