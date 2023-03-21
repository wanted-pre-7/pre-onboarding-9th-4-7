import { getNumPages } from "../../utils/pageUtil";

const Pagination = ({
  total,
  page,
  setPage,
}: {
  total: number;
  page: string;
  setPage: (value: string) => void;
}) => {
  const numPages = getNumPages(total);

  return (
    <>
      {total > 0 ? (
        <nav className="flex justify-center items-center gap-1 m-4">
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base disabled:cursor-not-allowed "
            onClick={() => setPage(String(Number(page) - 2))}
            disabled={page === "1"}
          >
            &lt;
          </button>
          {Array(numPages)
            .fill(0)
            .map((_, i) => (
              <button
                className="border-none rounded-3xl p-2 m-0  text-black text-base hover:bg-orange-100 aria-selected:bg-orange-100 "
                key={page + (i + 1)}
                onClick={() => setPage(i + "")}
                aria-selected={page == String(i + 1) ? true : false}
              >
                {i + 1}
              </button>
            ))}
          <button
            className="border-none rounded-lg p-2 m-0  text-black text-base  disabled:cursor-not-allowed"
            onClick={() => setPage(page)}
            disabled={page == numPages + ""}
          >
            &gt;
          </button>
        </nav>
      ) : null}
    </>
  );
};
export default Pagination;
