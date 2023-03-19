import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from "./api/transaction";
import Td from "./components/Td";
import Th from "./components/Th";
import Tr from "./components/Tr";

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

const App = () => {
  const { data: info } = useQuery({
    queryKey: ["transaction"],
    queryFn: getTransactionData,
    refetchInterval: 5000,
  });

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium">
                <tr>
                  {THeaders.map((header) => (
                    <Th key={header} header={header} />
                  ))}
                </tr>
              </thead>
              <tbody>
                {info?.slice(0, 50)?.map((item) => (
                  <Tr item={item} key={item.id} />
                  // <tr
                  //   key={id}
                  //   className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
                  // >
                  //   <Td value={id} />
                  //   <Td value={transaction_time} />
                  //   <Td value={status} />
                  //   <Td value={customer_id} />
                  //   <Td value={customer_name} />
                  //   <Td value={currency} />
                  // </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
