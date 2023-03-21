import { useEffect } from "react";
import type { IPropsPagination } from "../types";

const Pagination = ({
  totalPageCount,
  pageNum,
  searchParams,
  setPageNum,
}: IPropsPagination) => {
  useEffect(() => {
    if (pageNum > totalPageCount) {
      searchParams.set("page", String(totalPageCount));
      setPageNum(searchParams);
    }
  }, [pageNum]);

  const prevBtnHandler = () => {
    searchParams.set("page", String(pageNum - 1));
    setPageNum(searchParams);
  };

  const nextBtnHandler = () => {
    searchParams.set("page", String(pageNum + 1));
    setPageNum(searchParams);
  };

  const numberBtnHandler = (index: number) => {
    searchParams.set("page", String(index + 1));
    setPageNum(searchParams);
  };

  return (
    <>
      <button onClick={prevBtnHandler} disabled={pageNum === 1}>
        이전
      </button>

      {Array(totalPageCount)
        .fill(0)
        .map((_, idx) => (
          <button key={idx + 1} onClick={() => numberBtnHandler(idx)}>
            {idx + 1}
          </button>
        ))}

      <button onClick={nextBtnHandler} disabled={pageNum === totalPageCount}>
        다음
      </button>
    </>
  );
};

export default Pagination;
