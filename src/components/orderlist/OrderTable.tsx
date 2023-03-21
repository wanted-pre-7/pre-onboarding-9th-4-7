import type { IDataResponse } from "../../types";

const OrderTable = ({
  data,
  sortKey,
  sortDir,
  setSortConfig,
}: {
  data: IDataResponse[];
  sortKey: string;
  sortDir: string;
  setSortConfig: (key: string) => void;
}) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th onClick={() => setSortConfig("id")}>
              주문번호
              {sortKey === "id" ? (
                <span>{sortDir === "asc" ? " ⬇︎" : " ⬆︎"}</span>
              ) : null}
            </th>
            <th onClick={() => setSortConfig("transaction_time")}>
              거래일 & 거래시간
              {sortKey === "transaction_time" ? (
                <span>{sortDir === "asc" ? " ⬇︎" : " ⬆︎"}</span>
              ) : null}
            </th>
            <th>주문처리상태</th>
            <th>고객번호</th>
            <th>고객이름</th>
            <th>가격</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.transaction_time}</td>
              <td>{item.status ? "완료" : "미완료"}</td>
              <td>{item.customer_id}</td>
              <td>{item.customer_name}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
