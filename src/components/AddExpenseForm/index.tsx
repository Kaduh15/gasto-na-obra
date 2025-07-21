import { Save } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useAddExpenseForm } from "./useAddExpenseForm";
import { FormButton } from "./FormButton";
import { FormFields } from "./FormFields";
import { FORM_TEXTS } from "./constants";
import type { AddExpenseFormProps } from "./types";

export function FormAddExpense({ onAddExpense = () => {} }: AddExpenseFormProps) {
  const {
    openForm,
    toggleForm,
    description,
    setDescription,
    amount,
    setAmount,
    category,
    setCategory,
    handleSubmit,
  } = useAddExpenseForm({ addSuccess: onAddExpense });

  if (!openForm) {
    return <FormButton openForm={openForm} onClick={toggleForm} />;
  }

  return (
    <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
      <CardHeader>
        <CardTitle className="text-xl text-gray-800">
          {FORM_TEXTS.title}
        </CardTitle>
        <CardDescription>
          {FORM_TEXTS.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <FormFields
            description={description}
            setDescription={setDescription}
            amount={amount}
            setAmount={setAmount}
            category={category}
            setCategory={setCategory}
          />
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <Save className="h-5 w-5 mr-2" />
            {FORM_TEXTS.submitButton}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
