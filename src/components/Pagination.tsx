import { useMemo } from "react";
import {
  MdOutlineFirstPage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineLastPage,
} from "react-icons/md";
import useSearchParameters from "../hooks/useSearchParameters";
import type { Data } from "../types";
import {
  getPageArrayIndex,
  handlePage,
  sliceArrayByLimit,
} from "../utils/handlePage";

type Props = {
  data: Data[];
};

const Pagination = ({ data }: Props) => {
  const lastPage = useMemo(() => Math.ceil(data?.length / 50), [data]);
  const { page: currentPage, setParams } = useSearchParameters();

  const pageArray = sliceArrayByLimit(lastPage);
  const pageArrayIndex = getPageArrayIndex(currentPage);
  const pages =
    pageArray[pageArrayIndex > pageArray.length - 1 ? 0 : pageArrayIndex];

  const handleClick = (type: string) => {
    setParams("page", handlePage(type, currentPage));
  };

  const clickPage = (p: number) => setParams("page", p);

  return (
    <>
      {data?.length > 0 ? (
        <div className="page-button-wrapper">
          <button
            onClick={() =>
              clickPage(
                pageArray[pageArrayIndex === 0 ? 1 : pageArrayIndex - 1][0] + 1,
              )
            }
            disabled={pageArrayIndex === 0 || currentPage === 1}
            className="arrow-button"
            data-testid="prev-page-button"
          >
            <MdOutlineFirstPage />
          </button>
          <button
            onClick={() => handleClick("left")}
            disabled={currentPage === 1}
            className="arrow-button"
            data-testid="prev-button"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          {pages?.map((n) => (
            <button
              onClick={() => clickPage(n + 1)}
              className={
                currentPage === n + 1
                  ? "arrow-button page-button active"
                  : "arrow-button page-button"
              }
              key={n}
            >
              {n + 1}
            </button>
          ))}

          <button
            onClick={() => handleClick("right")}
            disabled={currentPage === lastPage}
            className="arrow-button"
            data-testid="next-button"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
          <button
            onClick={() =>
              clickPage(
                pageArray[
                  pageArrayIndex > pageArray.length - 1
                    ? 0
                    : pageArrayIndex === pageArray.length - 1
                    ? pageArrayIndex
                    : pageArrayIndex + 1
                ][0] + 1,
              )
            }
            disabled={pageArrayIndex === pageArray.length - 1}
            className="arrow-button"
            data-testid="next-page-button"
          >
            <MdOutlineLastPage />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
