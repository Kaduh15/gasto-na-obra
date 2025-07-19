import type { Expense } from "@/types/Expense";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Car, Drill, Package, PaintRoller, Pizza, PlugZap, TrendingUp, Wrench } from "lucide-react";
import { Badge } from "./ui/badge";

export type ExpenseProps = {
  expenses: Expense[];
};

const categoryIcons: Record<string, React.ReactNode> = {
  material: <Package className="h-4 w-4 text-orange-600" />,
  mao_de_Obra: <Wrench className="h-4 w-4 text-blue" />,
  ferramentas: <Drill className="h-4 w-4 text-green-600" />,
  eletrica: <PlugZap className="h-4 w-4 text-yellow-600" />,
  hidraulica: <Package className="h-4 w-4 text-purple-600" />,
  pintura: <PaintRoller className="h-4 w-4 text-pink-600" />,
  acabamento: <Package className="h-4 w-4 text-red-600" />,
  transporte: <Car className="h-4 w-4 text-teal-600" />,
  alimentacao: <Pizza className="h-4 w-4 text-lime-600" />,
  outros: <Package className="h-4 w-4 text-gray-600" />,
};

export function ExpenseStats({ expenses }: ExpenseProps) {
  const ExpensesByCategoties = expenses.reduce<Record<string, number>>((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = expense.amount;
    }

    acc[expense.category]
    return acc;
  }, {});

  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <>
      <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-orange-600" />
            Gastos por Categoria
          </CardTitle>
          <CardDescription>
            Veja onde você está investindo mais dinheiro
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(ExpensesByCategoties).map(([category, amount]) => {
              const percentage = ((amount / totalAmount) * 100).toFixed(1);
              console.log("🚀 ~ {Object.entries ~ percentage:", percentage)
              return (
                <div key={category} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {categoryIcons[category] || <Package className="h-4 w-4" />}
                      <span className="font-medium text-gray-700">{category}</span>
                    </div>
                    <Badge variant={"secondary"} className="bg-blue-50 text-blue-700">
                      {percentage}%
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-4">
                      <div
                        className="bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="font-bold text-gray-800 min-w-fit">
                      R$ {amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
