import type { IPropsTableHeader } from "../../types";

const TableHeader = ({ headers }: IPropsTableHeader) => {
  return (
    <tr>
      {headers.map((header) => (
        <th key={header}>{header}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
