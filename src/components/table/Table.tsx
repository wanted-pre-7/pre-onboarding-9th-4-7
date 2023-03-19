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

  return (
    <table className="min-w-full text-center text-sm font-light">
      <thead className="border-b font-medium">
        <tr>
          {THeaders.map((header) => (
            <Th key={header} header={header} />
          ))}
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
