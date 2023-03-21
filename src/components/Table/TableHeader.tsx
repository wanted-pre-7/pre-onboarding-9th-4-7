import { useSearchParams } from "react-router-dom";
import type { IPropsTableHeader } from "../../types";

const TableHeader = ({ headers }: IPropsTableHeader) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOption = searchParams.get("sort");

  const sortHandler = (header: string) => {
    if (header === sortOption) searchParams.set("sort", "");
    else searchParams.set("sort", header);
    setSearchParams(searchParams);
  };

  return (
    <tr>
      {headers.map((header) => (
        <th key={header}>
          {header === "id" || header === "transaction_time" ? (
            <span onClick={() => sortHandler(header)}>{header}</span>
          ) : (
            header
          )}
        </th>
      ))}
    </tr>
  );
};

export default TableHeader;
