import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getData } from "../api/axios";
import OrderFilters from "../components/orderlist/OrderFilters";
import OrderTable from "../components/orderlist/OrderTable";
import Pagination from "../components/orderlist/Pagination";
import { getPageNumber } from "../utils/pageUtil";

const OrderList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status");
  const customer_name = searchParams.get("customer_name");
  const page = searchParams.get("page");

  const sortKey = searchParams.get("sortKey");
  const sortDir = searchParams.get("sortDir");

  const currentParams = new URLSearchParams(searchParams.toString());

  const { data } = useQuery(
    ["switchwon", status, customer_name, page, sortKey, sortDir],
    getData,
    {
      refetchOnWindowFocus: false,
      refetchInterval: 5000,
      initialData: {
        data: [],
        total: 0,
      },
    },
  );

  const updateStatus = (value: string) => {
    currentParams.set("page", "1");
    if (value) {
      currentParams.set("status", value);
    } else {
      currentParams.delete("status");
    }
    setSearchParams(currentParams);
  };

  const updateCustomerName = (value: string) => {
    currentParams.set("page", "1");
    if (value) {
      currentParams.set("customer_name", value);
    } else {
      currentParams.delete("customer_name");
    }
    setSearchParams(currentParams);
  };

  const setPage = (value: string) => {
    currentParams.set(
      "page",
      (isNaN(Number(value)) ? 1 : parseInt(value) + 1) + "",
    );
    setSearchParams(currentParams);
  };

  const setSortConfig = (key: string) => {
    if (sortKey && sortKey == key) {
      currentParams.set("sortDir", sortDir === "asc" ? "desc" : "asc");
    } else {
      currentParams.set("sortKey", key);
      currentParams.set("sortDir", "asc");
    }
    setSearchParams(currentParams);
  };

  return (
    <section className="container px-4 mx-auto">
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <h2 className="text-2xl font-bold">주문 목록</h2>
            <OrderFilters
              status={status}
              customer_name={customer_name}
              updateStatus={updateStatus}
              updateCustomerName={updateCustomerName}
            />
            <OrderTable
              data={data.data}
              sortKey={sortKey ? sortKey : "id"}
              sortDir={sortDir ? sortDir : "asc"}
              setSortConfig={setSortConfig}
            />
            <Pagination
              total={data.total}
              page={getPageNumber(page)}
              setPage={setPage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderList;
