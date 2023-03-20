import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useData from "../hooks/useData";

const Main = () => {
  const today = "2023-03-08";
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const firstIdx = 50 * (Number(currentPage) - 1);
  const lastIdx = firstIdx + 50;

  const query = useData();
  const data = useMemo(
    () =>
      query.data?.data.filter(
        (el) => el.transaction_time.substring(0, 10) === today,
      ),
    [query],
  );
  const currentData = useMemo(() => data?.slice(firstIdx, lastIdx), [data]);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (query.isFetching) setCount(0);
  }, [query]);

  useEffect(() => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="page-container">
      <span className="time-stamp">{count}초 전 업데이트</span>
      <Pagination data={data ? data : []} />
      <Table data={currentData} />
      <Pagination data={data ? data : []} />
    </div>
  );
};

export default Main;
