import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Td,
  Thead,
  Tr,
} from "@chakra-ui/react";
import type { IPropsTable } from "../../types";
import TableHeader from "./TableHeader";

const Table = ({ headers, items }: IPropsTable) => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <TableHeader headers={headers} />
        </Thead>

        <Tbody>
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
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
