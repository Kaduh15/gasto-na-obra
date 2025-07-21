import { categories, type CategoryKey } from "@/types/categories";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Textarea } from "../ui/textarea";
import { FORM_LABELS, FORM_PLACEHOLDERS } from "./constants";

type FormFieldsProps = {
  description: string;
  setDescription: (value: string) => void;
  amount: number;
  setAmount: (value: number) => void;
  category: CategoryKey;
  setCategory: (value: CategoryKey) => void;
};

export function FormFields({
  description,
  setDescription,
  amount,
  setAmount,
  category,
  setCategory,
}: FormFieldsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <Label htmlFor="description" className="text-sm font-medium text-gray-700">
          {FORM_LABELS.description}
        </Label>
        <Textarea
          id="description"
          placeholder={FORM_PLACEHOLDERS.description}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="resize-none h-20"
          required
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="amount" className="text-sm font-medium text-gray-700">
            {FORM_LABELS.amount}
          </Label>
          <Input
            id="amount"
            type="number"
            step="0.01"
            placeholder={FORM_PLACEHOLDERS.amount}
            value={amount}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
            className="text-lg"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="category" className="text-sm font-medium text-gray-700">
            {FORM_LABELS.category}
          </Label>
          <Select value={category} onValueChange={(value) => setCategory(value as CategoryKey)} required>
            <SelectTrigger>
              <SelectValue placeholder={FORM_PLACEHOLDERS.category} />
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
  );
}
