import useOrderDataFetch from "../../hook/uesOrderDataFetch";
import TableRow from "./TableRow";
import type { IOrderData } from "../../type/orderDataType";

const today = "2023-03-08";
let tableHeadList: string[];

const OrderTable = () => {
  const {
    data,
    isLoading,
  }: { data: IOrderData[] | undefined; isLoading: boolean } = useOrderDataFetch(
    { time: today },
  );
  if (data) tableHeadList = Object.keys(data[0]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <table>
          <thead>
            <tr>
              {tableHeadList.map((el, idx) => (
                <th key={idx}>{el}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((el, idx) => (
              <TableRow key={idx} orderData={el} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default OrderTable;
