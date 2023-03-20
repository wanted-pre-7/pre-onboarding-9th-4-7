import { useEffect, useMemo } from "react";
import {
  MdOutlineFirstPage,
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
  MdOutlineLastPage,
} from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import type { Data } from "../types";

type Props = {
  data: Data[];
};

const Pagination = ({ data }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const lastPage = useMemo(() => Math.ceil(data?.length / 50), [data]);

  const currentPage = searchParams.get("page");

  useEffect(() => {
    if (currentPage !== "1" && Number(currentPage) > lastPage)
      searchParams.set("page", String(lastPage));
    setSearchParams(searchParams);
  }, [currentPage, lastPage]);

  const handleClick = (type: string) => {
    let page = "1";
    const prevPage = Number(currentPage) - 1;
    const nextPage = Number(currentPage) + 1;
    switch (type) {
      case "doubleLeft":
        page = "1";
        break;
      case "left":
        page = String(prevPage);
        break;
      case "right":
        page = String(nextPage);
        break;
      case "doubleRight":
        page = String(lastPage);
        break;
    }
    searchParams.set("page", page);
    setSearchParams(searchParams);
  };

  const clickPage = (page: number) => {
    searchParams.set("page", String(page));
    setSearchParams(searchParams);
  };

  return (
    <div className="page-button-wrapper">
      <button
        onClick={() => handleClick("doubleLeft")}
        disabled={Number(currentPage) === 1}
        className="arrow-button"
      >
        <MdOutlineFirstPage />
      </button>
      <button
        onClick={() => handleClick("left")}
        disabled={Number(currentPage) === 1}
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
              Number(currentPage) === idx + 1
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
        disabled={Number(currentPage) === lastPage}
        className="arrow-button"
      >
        <MdOutlineKeyboardArrowRight />
      </button>
      <button
        onClick={() => handleClick("doubleRight")}
        disabled={Number(currentPage) === lastPage}
        className="arrow-button"
      >
        <MdOutlineLastPage />
      </button>
    </div>
  );
};

export default Pagination;
