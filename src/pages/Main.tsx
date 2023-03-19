import { useMemo } from "react";
import Table from "../components/Table";
import useData from "../hooks/useData";

const Main = () => {
  const query = useData();
  const data = useMemo(() => query.data?.data, [query]);

  return (
    <div className="page-container">
      <Table data={data} />
    </div>
  );
};

export default Main;
