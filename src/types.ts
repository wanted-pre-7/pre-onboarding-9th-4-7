import type { NavigateOptions, URLSearchParamsInit } from "react-router-dom";

export interface IOrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IPropsToOrderAdmin {
  headers: string[];
  items: IOrderData[];
}

export interface IPropsToPagination {
  totalPageCount: number;
  pageNum: number;
  searchParams: URLSearchParams;
  setPageNum: (
    nextInit?:
      | URLSearchParamsInit
      | ((prev: URLSearchParams) => URLSearchParamsInit),
    navigateOpts?: NavigateOptions,
  ) => void;
}
