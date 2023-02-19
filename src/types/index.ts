import {EXPENSE_CATEGORIES, INCOME_CATEGORIES} from '@dinero/constants';

export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: number;
  timestamp: number;
  description: string;
  category: keyof typeof EXPENSE_CATEGORIES | keyof typeof INCOME_CATEGORIES;
  amount: string;
  type: TransactionType;
};
