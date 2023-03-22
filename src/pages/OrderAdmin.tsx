import { useSearchParams } from "react-router-dom";
import Layout, {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
} from "../components/common/Layout";

import LoadingSpinner from "../components/common/LoadingSpinner";
import FilterDropdown from "../components/FilterDropdown";
import Pagination from "../components/Pagination";
import SearchInput from "../components/SearchInput";
import Table from "../components/Table/Table";

import { DROPDOWN_OPTIONS, LIMIT } from "../constants";
import useFetchOrderData from "../hooks/useFetchOrderData";

import type { IOrderData } from "../types";

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();
  const [searchParams, setSearchParams] = useSearchParams();

  const headers: string[] = Object.keys({ ...data }[0] || {});
  const items: IOrderData[] = Object.values(data || {});

  const pageNum =
    Number(searchParams.get("page")) === 0 || null
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const sortOption = searchParams.get("sort");

  const totalPageCount = Math.ceil(items.length / LIMIT);
  const offset = (pageNum - 1) * LIMIT;

  let slicedItems = items.slice(offset, offset + LIMIT);
  if (DROPDOWN_OPTIONS.includes(status as string)) {
    slicedItems = slicedItems.filter(
      (v) => v.status === (status === "True" ? true : false),
    );
  }

  if (name) {
    slicedItems = slicedItems.filter((item) =>
      item.customer_name.toLowerCase().includes(name?.toLowerCase() as string),
    );
  }

  if (sortOption === "id") {
    slicedItems = slicedItems.sort((a, b) => b.id - a.id);
  } else if (sortOption === "transaction_time") {
    slicedItems = slicedItems.sort(
      (a, b) => +new Date(b.transaction_time) - +new Date(a.transaction_time),
    );
  }

  if (isLoading) return <LoadingSpinner />;

  return (
    <Layout>
      <HeaderWrapper>
        <SearchInput />
        <FilterDropdown />
      </HeaderWrapper>

      <MainWrapper>
        <Table headers={headers} items={slicedItems} />
      </MainWrapper>

      <FooterWrapper>
        <Pagination
          totalPageCount={totalPageCount}
          pageNum={pageNum}
          searchParams={searchParams}
          setPageNum={setSearchParams}
        />
      </FooterWrapper>
    </Layout>
  );
};

export default OrderAdmin;
