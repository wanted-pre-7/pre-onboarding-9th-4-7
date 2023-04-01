import { Td, Tr } from "@chakra-ui/react";
import type { IPropsTable } from "../../types";

const TableBody = ({ headers, items }: IPropsTable) => {
  return (
    <>
      {items.map((item, idx) => (
        <Tr key={idx}>
          {headers.map((header) => (
            <Td key={header + idx}>
              {/* todo : fix type error */}
              {String(item[header])}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  );
};

export default TableBody;
