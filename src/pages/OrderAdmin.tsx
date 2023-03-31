import Layout, {
  FooterWrapper,
  HeaderWrapper,
  MainWrapper,
} from "../components/common/Layout";

import LoadingSpinner from "../components/common/LoadingSpinner";
import FilterDropdown from "../components/OrderAdmin/FilterDropdown";
import Pagination from "../components/OrderAdmin/Pagination";
import SearchInput from "../components/OrderAdmin/SearchInput";
import Table from "../components/Table/Table";

import useFetchOrderData from "../hooks/useFetchOrderData";
import useGetSearchParams from "../hooks/useGetSearchParams";

import type { IOrderData } from "../types";

const LIMIT = 50;

const OrderAdmin = () => {
  const { data, isLoading } = useFetchOrderData();
  const { pageNum, searchParams, setSearchParams } = useGetSearchParams();
  const offset = (pageNum - 1) * LIMIT;

  const headers: string[] = Object.keys({ ...data }[0] || {});
  const items: IOrderData[] = Object.values(data || {});
  const slicedItems = items.slice(offset, offset + LIMIT);

  const totalPageCount = Math.ceil(items.length / LIMIT);

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
