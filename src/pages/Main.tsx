import { useEffect, useMemo } from "react";
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

  useEffect(() => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="page-container">
      <Pagination data={data ? data : []} />
      <Table data={currentData} />
      <Pagination data={data ? data : []} />
    </div>
  );
};

export default Main;
