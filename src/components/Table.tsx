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

  const nameFilteredItems =
    name?.length === 0
      ? items
      : items.filter((item) =>
          item.customer_name.toLowerCase().includes(name as string),
        );

  const offset = (pageNum - 1) * LIMIT;
  const totalPageCount = Math.ceil(items.length / LIMIT);

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
            {nameFilteredItems
              .slice(offset, offset + LIMIT)
              .map((item, idx) => (
                <tr key={idx}>
                  {headers.map((header) => (
                    <td key={header + idx}>
                      {/* todo : fix type error */}
                      {header === "status"
                        ? String(item[header])
                        : item[header]}
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
