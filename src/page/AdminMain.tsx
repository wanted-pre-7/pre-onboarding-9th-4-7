import { getOrderData } from "../api/getOrderData";
import { useQuery } from "@tanstack/react-query";

const AdminMain = () => {
  const { isLoading, data } = useQuery(["orderData"], getOrderData, {
    retry: 0,
    refetchInterval: 5000,
    refetchIntervalInBackground: true,
  });
  console.log(data);
  return <div>hi</div>;
};

export default AdminMain;
