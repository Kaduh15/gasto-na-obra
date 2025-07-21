import type { CategoryKey } from "./categories";

export type Expense = {
    id: number;
    description: string;
    amount: number;
    category: CategoryKey;
    date: string;
}