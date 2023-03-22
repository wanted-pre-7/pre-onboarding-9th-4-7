export interface IOrder {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IColumn {
  Header: string;
  accessor: string;
}