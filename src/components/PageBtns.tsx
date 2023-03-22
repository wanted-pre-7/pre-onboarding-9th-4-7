import React, { useMemo } from "react";
import type { IOrder } from "../types/order";

interface IProps {
  orders?: IOrder[];
  setPageIndex: React.Dispatch<React.SetStateAction<number>>;
  pageIdx: number;
}

const PageBtns = ({ orders, setPageIndex, pageIdx }: IProps) => {
  const maxPage = useMemo(() => {
    if (!orders) return 0;
    return Math.ceil(orders?.length / 50);
  }, []);

  const nextPage = () => {
    if (pageIdx < maxPage) setPageIndex((prev) => prev + 1);
  };

  const prevPage = () => {
    if (pageIdx > 0) setPageIndex((prev) => prev - 1);
  };

  const targetPage = (num: number) => {
    setPageIndex(num);
  };

  return (
    <div>
      <button onClick={prevPage}>prev</button>
      {[
        Array(maxPage)
          ?.fill(1)
          ?.map((_, idx) => (
            <button key={idx + 1} onClick={() => targetPage(idx)}>
              {idx + 1}
            </button>
          )),
      ]}
      <button onClick={nextPage}>next</button>
    </div>
  );
};

export default PageBtns;
