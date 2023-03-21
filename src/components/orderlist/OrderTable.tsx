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
    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
        <thead className="bg-gray-50 dark:bg-gray-800">
          <tr className="flex w-full mb-4">
            <th className="p-4 w-1/4" onClick={() => setSortConfig("id")}>
              주문번호
              {sortKey === "id" ? (
                <span>{sortDir === "asc" ? " ⬇︎" : " ⬆︎"}</span>
              ) : null}
            </th>
            <th
              className="p-4 w-1/4"
              onClick={() => setSortConfig("transaction_time")}
            >
              거래일 & 거래시간
              {sortKey === "transaction_time" ? (
                <span>{sortDir === "asc" ? " ⬇︎" : " ⬆︎"}</span>
              ) : null}
            </th>
            <th className="p-4 w-1/4">주문처리상태</th>
            <th className="p-4 w-1/4">고객번호</th>
            <th className="p-4 w-1/4">고객이름</th>
            <th className="p-4 w-1/4">가격</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-96">
          {data?.map((item) => (
            <tr className="flex w-full mb-4" key={item.id}>
              <td className="p-4 w-1/4">{item.id}</td>
              <td className="p-4 w-1/4 text-center">{item.transaction_time}</td>
              <td className="p-4 w-1/4 text-center">
                {item.status ? "완료" : "미완료"}
              </td>
              <td className="p-4 w-1/4 text-center">{item.customer_id}</td>
              <td className="p-4 w-1/4 text-center">{item.customer_name}</td>
              <td className="p-4 w-1/4 text-right">{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
