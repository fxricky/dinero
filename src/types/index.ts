export type TransactionType = 'income' | 'expense';

export type Transaction = {
  id: number;
  timestamp: number;
  description: string;
  category: string;
  amount: string;
  type: TransactionType;
};
