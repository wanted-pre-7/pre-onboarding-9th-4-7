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
  const { offset } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams();

  const order = searchParams.get("order") ?? "asce";
  const time = searchParams.get("time") ?? "default";
  const handleClickTransactionId = () => {
    setSearchParams({
      page: "1",
      order: order === "asce" ? "desc" : "asce",
    });
  };

  if (order === "desc") {
    transactions = transactions.sort((a, b) => b.id - a.id);
  } else if (order === "asce") {
    transactions = transactions.sort((a, b) => a.id - b.id);
  }

  const handleClickTransactionTime = () => {
    setSearchParams({
      page: "1",
      time: time === "asce" ? "desc" : "asce",
    });
  };

  if (time === "desc") {
    transactions = transactions.sort(
      (a, b) =>
        new Date(b.transaction_time).getTime() -
        new Date(a.transaction_time).getTime(),
    );
  } else if (time === "asce") {
    transactions = transactions.sort(
      (a, b) =>
        new Date(a.transaction_time).getTime() -
        new Date(b.transaction_time).getTime(),
    );
  } else if (time === "default") transactions;

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
              {order === "asce" ? "▲" : "▼"}
            </span>
          </th>
          <th className="px-6 py-4">
            <button onClick={handleClickTransactionTime}>
              거래시간
              <span className="text-xs font-light text-gray-500">
                {" "}
                {time === "asce" ? "▲" : "▼"}
              </span>
            </button>
          </th>
          <th className="px-6 py-4">주문상태</th>
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
