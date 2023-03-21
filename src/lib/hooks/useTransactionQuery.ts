import { useQuery } from "@tanstack/react-query";
import { getTransactionData } from "../../api/transaction";

const useTransactionQuery = () =>
  useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactionData,
    refetchInterval: 5000,
    suspense: true,
  });

export default useTransactionQuery;
