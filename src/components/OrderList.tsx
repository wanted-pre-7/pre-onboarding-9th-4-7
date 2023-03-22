import OrderService from "../api/service/order";

const OrderList = () => {
  const { data: orders } = OrderService.ReadOrderList();

  return <div>OrderList</div>;
};

export default OrderList;
