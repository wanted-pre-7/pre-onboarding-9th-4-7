import type { IDataResponse } from "../../types";
import TableSortAscIcon from "./TableSortAscIcon";
import TableSortDescIcon from "./TableSortDescIcon";

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
          <tr className="flex w-full">
            <th
              scope="col"
              onClick={() => setSortConfig("id")}
              className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <button className="flex items-center gap-x-3 focus:outline-none">
                <span>주문번호</span>
                {sortKey === "id" ? (
                  sortDir === "asc" ? (
                    <TableSortAscIcon />
                  ) : (
                    <TableSortDescIcon />
                  )
                ) : null}
              </button>
            </th>
            <th
              scope="col"
              onClick={() => setSortConfig("transaction_time")}
              className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400"
            >
              <button className="flex items-center gap-x-3 focus:outline-none">
                <span>거래일 & 거래시간</span>
                {sortKey === "transaction_time" ? (
                  sortDir === "asc" ? (
                    <TableSortAscIcon />
                  ) : (
                    <TableSortDescIcon />
                  )
                ) : null}
              </button>
            </th>
            <th className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400">
              주문처리상태
            </th>
            <th className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400">
              고객번호
            </th>
            <th className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400">
              고객이름
            </th>
            <th className="p-4 w-1/4 rtl:text-right text-gray-500 dark:text-gray-400">
              가격
            </th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full h-96">
          {data?.map((item) => (
            <tr className="flex w-full mb-4" key={item.id}>
              <td className="p-4 w-1/4">{item.id}</td>
              <td className="p-4 w-1/4 text-center">{item.transaction_time}</td>
              <td className="p-4 w-1/4 text-center">
                {item.status ? (
                  <span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                    완료
                  </span>
                ) : (
                  <span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                    미완료
                  </span>
                )}
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
