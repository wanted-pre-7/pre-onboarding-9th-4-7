import { useSearchParams } from "react-router-dom";
import type { IPropsToOrderAdmin } from "../types";
import Pagination from "./Pagination";

const LIMIT = 50;

const Table = ({ headers, items }: IPropsToOrderAdmin) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNum =
    searchParams.get("page") === null || 0
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");

  const totalPageCount = Math.ceil(items.length / LIMIT);
  const offset = (pageNum - 1) * LIMIT;

  const slicedItems = items.slice(offset, offset + LIMIT);
  const filteredItems = slicedItems.filter((item) =>
    item.customer_name.toLowerCase().includes(name?.toLowerCase() as string),
  );

  return (
    <>
      <main>
        <table>
          <thead>
            <tr>
              {headers.map((header) => (
                <th key={header}>{header}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {filteredItems.map((item, idx) => (
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
      </main>

      <footer>
        <Pagination
          totalPageCount={totalPageCount}
          pageNum={pageNum}
          searchParams={searchParams}
          setPageNum={setSearchParams}
        />
      </footer>
    </>
  );
};

export default Table;
