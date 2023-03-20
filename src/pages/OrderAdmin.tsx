import SearchInput from "../components/SearchInput";
import Table from "../components/Table";
import useFetchOrderData from "../hooks/useFetchOrderData";
import type { IOrderData } from "../types";

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();

  const values = Object.values((data as IOrderData[]) || {});
  const headers: string[] = Object.keys(values[0] || {});
  const items: IOrderData[] = Object.values(values || {});

  const loadingUI = <div>데이터를 로딩 중입니다.</div>;
  if (isLoading) return loadingUI;

  return (
    <>
      <SearchInput />
      <Table headers={headers} items={items} />
    </>
  );
};

export default OrderAdmin;
