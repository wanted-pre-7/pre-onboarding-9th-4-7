import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Table from "../components/Table/Table";
import { LIMIT } from "../constants";
import useFetchOrderData from "../hooks/useFetchOrderData";
import type { IOrderData } from "../types";

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNum =
    searchParams.get("page") === null || 0
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");

  const values = Object.values((data as IOrderData[]) || {});
  const headers: string[] = Object.keys(values[0] || {});
  const items: IOrderData[] = Object.values(values || {});

  const totalPageCount = Math.ceil(items.length / LIMIT);
  const offset = (pageNum - 1) * LIMIT;

  const loadingUI = <div>데이터를 로딩 중입니다.</div>;
  if (isLoading) return loadingUI;

  return (
    <>
      <header>
        <SearchInput />
      </header>

      <main>
        <Table headers={headers} items={items} name={name} offset={offset} />
      </main>

      <footer>
        <Pagination
          totalPageCount={totalPageCount}
          pageNum={pageNum}
          searchParams={searchParams}
          setPageNum={setSearchParams}
        />
      </footer>
    </>
  );
};

export default OrderAdmin;
