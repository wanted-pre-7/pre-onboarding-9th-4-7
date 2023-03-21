import type { NavigateOptions, URLSearchParamsInit } from "react-router-dom";

export interface IOrderData {
  id: number;
  transaction_time: string;
  status: boolean;
  customer_id: number;
  customer_name: string;
  currency: string;
}

export interface IPropsTable {
  headers: string[];
  items: IOrderData[];
  name?: string | null;
  offset: number;
}

export interface IPropsTableHeader {
  headers: string[];
}

export interface IPropsPagination {
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
