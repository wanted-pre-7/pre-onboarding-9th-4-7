import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Thead,
} from "@chakra-ui/react";
import type { IPropsTable } from "../../types";
import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

const Table = ({ headers, items }: IPropsTable) => {
  return (
    <TableContainer>
      <ChakraTable variant="simple">
        <Thead>
          <TableHeader headers={headers} />
        </Thead>

        <Tbody>
          <TableBody headers={headers} items={items} />
        </Tbody>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
