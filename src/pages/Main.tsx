import { useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useData from "../hooks/useData";

const Main = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const query = useData();
  const firstIdx = 50 * (Number(currentPage) - 1);
  const lastIdx = firstIdx + 50;
  const { data, currentData } = useMemo(
    () => ({
      data: query.data?.data,
      currentData: query.data?.data.slice(firstIdx, lastIdx),
    }),
    [query],
  );

  useEffect(() => {
    searchParams.set("page", "1");
    setSearchParams(searchParams);
  }, []);

  return (
    <div className="page-container">
      <Table data={currentData} />
      <Pagination data={data ? data : []} />
    </div>
  );
};

export default Main;
