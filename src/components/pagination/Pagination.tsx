import usePagination from "../../lib/hooks/usePagination";
import makeString from "../../lib/utils/makeString";
import PageBtn from "./PageBtn";

const Pagination = ({ pageNumber }: { pageNumber: number }) => {
  const { page, handleClick } = usePagination();

  return (
    <div className="flex justify-center items-center gap-2 my-4 ">
      <PageBtn
        onClick={() => handleClick(makeString(page - 1))}
        className="disabled:bg-blue-100 rounded-md bg-blue-300 py-2 px-3 text-base text-white"
        disabled={page === 1}
      >
        ‹
      </PageBtn>
      {Array(pageNumber)
        .fill(null)
        .map((_, i) => (
          <PageBtn
            key={i + 1}
            onClick={() => handleClick(makeString(i + 1))}
            className={`rounded-md ${
              page === i + 1 ? "bg-blue-400" : "bg-blue-300"
            } py-2 px-3 text-base text-white`}
          >
            {i + 1}
          </PageBtn>
        ))}
      <PageBtn
        onClick={() => handleClick(makeString(page + 1))}
        disabled={page === pageNumber}
        className="disabled:bg-blue-100 rounded-md bg-blue-300 py-2 px-3 text-base text-white"
      >
        ›
      </PageBtn>
    </div>
  );
};
export default Pagination;
