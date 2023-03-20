import type { IOrderData } from "../../type/orderDataType";

interface Props {
  orderData: IOrderData;
}

const TableRow = ({ orderData }: Props) => {
  return (
    <tr>
      <td>{orderData.id}</td>
      <td>{orderData.transaction_time}</td>
      <td>{orderData.status}</td>
      <td>{orderData.customer_id}</td>
      <td>{orderData.customer_name}</td>
      <td>{orderData.currency}</td>
    </tr>
  );
};

export default TableRow;
