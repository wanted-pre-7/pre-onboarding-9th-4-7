import { useState } from "react";
import { ScrollRestoration, useSearchParams } from "react-router-dom";
import Pagination from "../components/pagination/Pagination";
import Table from "../components/table/Table";
import { LIMIT } from "../constants/pagination";
import useInput from "../lib/hooks/useInput";
import usePagination from "../lib/hooks/usePagination";

import useTransactionQuery from "../lib/hooks/useTransactionQuery";
import trimValue from "../lib/utils/trimValue";
import type { ITransaction } from "../types/transaction";

interface IOptions {
  status: string;
  name: string;
  time: string;
  order: string;
}

const Home = () => {
  const { data } = useTransactionQuery();
  let transactions = data as ITransaction[];

  const { order, time, status } = usePagination();
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, onChange] = useInput("");
  // const [value, setValue] = useState("");

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = e.target;

  //   setValue(value);
  //   setSearchParams({ name: value });
  // };

  const name = searchParams.get("name") as string;

  console.log(name);
  console.log(searchParams);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const formData = new FormData(e.currentTarget);
    // const name = formData.get("customer_name") as string;

    setSearchParams({
      name: value,
    });
  };

  switch (status) {
    case "true":
      transactions = transactions.filter(
        (transaction) => transaction.status === true,
      );
      break;
    case "false":
      transactions = transactions.filter(
        (transaction) => transaction.status === false,
      );
      break;
  }

  if (name === value) {
    transactions = transactions.filter((transaction) =>
      trimValue(transaction.customer_name).includes(trimValue(name)),
    );
  }

  switch (time) {
    case "desc":
      transactions = transactions.sort(
        (a, b) =>
          new Date(b.transaction_time).getTime() -
          new Date(a.transaction_time).getTime(),
      );
      break;
    case "asce":
      transactions = transactions.sort(
        (a, b) =>
          new Date(a.transaction_time).getTime() -
          new Date(b.transaction_time).getTime(),
      );
      break;
  }

  switch (order) {
    case "desc":
      transactions = transactions.sort((a, b) => b.id - a.id);
      break;
    case "asce":
      transactions = transactions.sort((a, b) => a.id - b.id);
      break;
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
      <footer className="mb-5">
        <Pagination pageNumber={pageNumber as number} />
        <form
          className="flex justify-center items-center gap-2"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="py-1 px-2 rounded border"
            name="customer_name"
            placeholder="이름 검색"
            onChange={onChange}
            value={value}
          />
          <button
            type="submit"
            disabled={value.length < 1}
            className="disabled:bg-blue-100 rounded-md bg-blue-300 py-1 px-2 text-base text-white"
          >
            검색
          </button>
        </form>
      </footer>
      <ScrollRestoration />
    </div>
  );
};
export default Home;
