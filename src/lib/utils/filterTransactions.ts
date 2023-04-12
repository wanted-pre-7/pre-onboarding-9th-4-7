import type { ITransaction } from "../../types/transaction";
import trimValue from "./trimValue";
interface IOptions {
  status: string;
  name: string;
  time: string;
  order: string;
  value: string;
}
const filterTransactions = (
  transactions: ITransaction[],
  options: IOptions,
): ITransaction[] => {
  const { status, name, time, order, value } = options;

  const filterByStatus = (
    transactions: ITransaction[],
    filteredStatus: boolean,
  ): ITransaction[] =>
    transactions.filter((transaction) => transaction.status === filteredStatus);

  const filterByName = (
    transactions: ITransaction[],
    name: string,
  ): ITransaction[] =>
    transactions.filter((transaction) =>
      trimValue(transaction.customer_name).includes(trimValue(name)),
    );

  const sortByTime = (
    transactions: ITransaction[],
    time: string,
  ): ITransaction[] =>
    transactions.sort((a, b) => {
      const timeA = new Date(a.transaction_time).getTime();
      const timeB = new Date(b.transaction_time).getTime();
      return time === "desc" ? timeB - timeA : timeA - timeB;
    });

  const sortByOrder = (
    transactions: ITransaction[],
    order: string,
  ): ITransaction[] =>
    transactions.sort((a, b) => (order === "desc" ? b.id - a.id : a.id - b.id));

  if (status !== "default") {
    const filteredStatus = status === "true";
    transactions = filterByStatus(transactions, filteredStatus);
  }

  if (name === value) {
    transactions = filterByName(transactions, name);
  }

  if (time !== "default") {
    transactions = sortByTime(transactions, time);
  }

  if (order !== "default") {
    transactions = sortByOrder(transactions, order);
  }

  return transactions;
};

export default filterTransactions;
