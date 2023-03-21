import { LIMIT } from "../../constants";
import type { IPropsTable } from "../../types";
import TableHeader from "./TableHeader";

const Table = ({ headers, items, name, offset }: IPropsTable) => {
  const slicedItems = items.slice(offset, offset + LIMIT);
  const filteredItems = slicedItems.filter((item) =>
    item.customer_name.toLowerCase().includes(name?.toLowerCase() as string),
  );

  return (
    <>
      <table>
        <thead>
          <TableHeader headers={headers} />
        </thead>

        <tbody>
          {(name === null ? slicedItems : filteredItems).map((item, idx) => (
            <tr key={idx}>
              {headers.map((header) => (
                <td key={header + idx}>
                  {/* todo : fix type error */}
                  {String(item[header])}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
