import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { getData } from "../api/axios";
import OrderFilters from "../components/orderlist/OrderFilters";
import OrderTable from "../components/orderlist/OrderTable";

const OrderList = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const status = searchParams.get("status");
  const customer_name = searchParams.get("customer_name");
  const currentParams = new URLSearchParams(searchParams.toString());

  const { data } = useQuery(["switchwon", status, customer_name], getData, {
    refetchInterval: 5000,
    initialData: [],
  });

  const updateStatus = (value: string) => {
    if (value) {
      currentParams.set("status", value);
    } else {
      currentParams.delete("status");
    }
    setSearchParams(currentParams);
  };

  const updateCustomerName = (value: string) => {
    if (value) {
      currentParams.set("customer_name", value);
    } else {
      currentParams.delete("customer_name");
    }
    setSearchParams(currentParams);
  };

  return (
    <div>
      <h2>주문 목록</h2>
      <OrderFilters
        updateStatus={updateStatus}
        updateCustomerName={updateCustomerName}
      />
      <OrderTable data={data} />
    </div>
  );
};

export default OrderList;
