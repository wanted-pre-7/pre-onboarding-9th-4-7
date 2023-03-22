export interface IDataResponse {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IResponse {
  data: IDataResponse[];
  total: number;
}
