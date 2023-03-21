import type { IPropsTable } from "../../types";
import TableHeader from "./TableHeader";

const Table = ({ headers, items }: IPropsTable) => {
  return (
    <>
      <table>
        <thead>
          <TableHeader headers={headers} />
        </thead>

        <tbody>
          {items.map((item, idx) => (
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
