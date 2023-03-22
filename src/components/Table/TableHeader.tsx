import { Button, Th, Tr } from "@chakra-ui/react";
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
    <Tr>
      {headers.map((header) => (
        <Th key={header} fontFamily="Pretendard Variable">
          {header === "id" || header === "transaction_time" ? (
            <Button onClick={() => sortHandler(header)}>{header}</Button>
          ) : (
            header
          )}
        </Th>
      ))}
    </Tr>
  );
};

export default TableHeader;
