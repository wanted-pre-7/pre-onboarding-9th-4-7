import { ScrollRestoration } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import Table from "../components/table/Table";
import { LIMIT } from "../constants/pagination";
import useTransactionQuery from "../lib/hooks/useTransactionQuery";
import type { ITransaction } from "../types/transaction";

const Home = () => {
  const { data: transactions, isLoading } = useTransactionQuery();
  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  const pageNumber = transactions && Math.ceil(transactions?.length / LIMIT);

  return (
    <div className="flex flex-col max-w-7xl mx-auto">
      <div className="sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <Table transactions={transactions as ITransaction[]} />
          </div>
        </div>
      </div>
      <footer>
        <Pagination pageNumber={pageNumber as number} />
      </footer>
      <ScrollRestoration />
    </div>
  );
};
export default Home;
