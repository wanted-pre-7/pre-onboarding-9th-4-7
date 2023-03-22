import { useEffect, useMemo } from "react";
import {
  MdOutlineFirstPage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineLastPage,
} from "react-icons/md";
import useSearchParameters from "../hooks/useSearchParameters";
import type { Data } from "../types";

type Props = {
  data: Data[];
};

const Pagination = ({ data }: Props) => {
  const lastPage = useMemo(() => Math.ceil(data?.length / 50), [data]);
  const { page: currentPage, setParams } = useSearchParameters();

  useEffect(() => {
    if (String(currentPage) !== "1" && Number(currentPage) > lastPage)
      setParams("page", lastPage);
  }, [currentPage, lastPage]);

  const handleClick = (type: string) => {
    let page = 1;
    const prevPage = Number(currentPage) - 1;
    const nextPage = Number(currentPage) + 1;
    switch (type) {
      case "doubleLeft":
        page = 1;
        break;
      case "left":
        page = prevPage;
        break;
      case "right":
        page = nextPage;
        break;
      case "doubleRight":
        page = lastPage;
        break;
    }
    setParams("page", page);
  };

  const clickPage = (page: number) => setParams("page", page);

  return (
    <div className="page-button-wrapper">
      <button
        onClick={() => handleClick("doubleLeft")}
        disabled={currentPage === 1}
        className="arrow-button"
      >
        <MdOutlineFirstPage />
      </button>
      <button
        onClick={() => handleClick("left")}
        disabled={currentPage === 1}
        className="arrow-button"
      >
        <MdOutlineKeyboardArrowLeft />
      </button>
      {Array(lastPage ? lastPage : 0)
        .fill(0)
        .map((_, idx) => (
          <button
            onClick={() => clickPage(idx + 1)}
            className={
              currentPage === idx + 1
                ? "arrow-button page-button active"
                : "arrow-button page-button"
            }
            key={idx}
          >
            {idx + 1}
          </button>
        ))}

      <button
        onClick={() => handleClick("right")}
        disabled={currentPage === lastPage}
        className="arrow-button"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
      <button
        onClick={() => handleClick("doubleRight")}
        disabled={currentPage === lastPage}
        className="arrow-button"
      >
        <MdOutlineLastPage />
      </button>
    </div>
  );
};

export default Pagination;
