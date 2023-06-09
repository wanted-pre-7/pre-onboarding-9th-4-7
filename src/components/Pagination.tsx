import { useEffect, useMemo } from "react";
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

  useEffect(() => {
    if (
      data &&
      data.length != 0 &&
      String(currentPage) !== "1" &&
      Number(currentPage) > lastPage
    )
      setParams("page", lastPage);
  }, [currentPage, lastPage]);

  const handleClick = (type: string) => {
    setParams("page", handlePage(type, currentPage, lastPage));
  };

  const clickPage = (p: number) => setParams("page", p);

  return (
    <>
      {data?.length > 0 ? (
        <div className="page-button-wrapper">
          <button
            onClick={() => handleClick("doubleLeft")}
            disabled={currentPage === 1}
            className="arrow-button"
            data-testid="first-page-button"
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
            onClick={() => handleClick("doubleRight")}
            disabled={currentPage === lastPage}
            className="arrow-button"
            data-testid="last-page-button"
          >
            <MdOutlineLastPage />
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Pagination;
