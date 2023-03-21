import { useSearchParams } from "react-router-dom";
import { LIMIT } from "../../constants/pagination";
import usePagination from "../../lib/hooks/usePagination";
import type { ITransaction } from "../../types/transaction";
import Th from "./Th";
import Tr from "./Tr";

export type THeader =
  | "주문번호"
  | "거래시간"
  | "주문상태"
  | "고객번호"
  | "고객이름"
  | "가격";

const THeaders: THeader[] = [
  "주문번호",
  "거래시간",
  "주문상태",
  "고객번호",
  "고객이름",
  "가격",
];
const Table = ({ transactions }: { transactions: ITransaction[] }) => {
  const { order, time, status, offset } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleClickTransactionId = () => {
    setSearchParams({
      page: "1",
      order: order === "asce" ? "desc" : "asce",
    });
  };
  const handleClickTransactionTime = () => {
    setSearchParams({
      page: "1",
      time: time === "asce" ? "desc" : "asce",
    });
  };
  const handleClickStatus = () => {
    setSearchParams({
      page: "1",
      status: status === "true" ? "false" : "true",
    });
  };

  return (
    <table className="min-w-full text-center text-sm font-light">
      <thead className="border-b font-medium">
        <tr>
          {/* {THeaders.map((header) => (
            <Th key={header} header={header} />
          ))} */}

          <th className="px-6 py-4">
            <button onClick={handleClickTransactionId}>주문번호 </button>
            <span className="text-xs font-light text-gray-500">
              {" "}
              {order === "asce"
                ? "▲"
                : order === "desc"
                ? "▼"
                : order === "default" && ""}
            </span>
          </th>
          <th className="px-6 py-4">
            <button onClick={handleClickTransactionTime}>
              거래시간
              <span className="text-xs font-light text-gray-500">
                {" "}
                {time === "asce"
                  ? "▲"
                  : time === "desc"
                  ? "▼"
                  : time === "default" && ""}
              </span>
            </button>
          </th>
          <th className="px-6 py-4">
            <button onClick={handleClickStatus}>주문상태</button>
          </th>
          <th className="px-6 py-4">고객번호</th>
          <th className="px-6 py-4">고객이름</th>
          <th className="px-6 py-4">가격</th>
        </tr>
      </thead>
      <tbody>
        {transactions?.slice(offset, offset + LIMIT)?.map((transaction) => (
          <Tr transaction={transaction} key={transaction.id} />
        ))}
      </tbody>
    </table>
  );
};
export default Table;
