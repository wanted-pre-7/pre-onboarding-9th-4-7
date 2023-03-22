export const pageLimit = 50;
export const limit = 5;

export const getNumPages = (total: number) => {
  return Math.ceil(total / pageLimit);
};

export const getPageNumber = (page: string | null): string => {
  return page && !isNaN(Number(page)) ? page : "1";
};

export const getStartNumber = (page: string | null) => {
  return (Number(getPageNumber(page)) - 1) * pageLimit;
};

export const getEndNumber = (start: number) => {
  return start + pageLimit;
};

export const sliceArrayByLimit = (totalPage: number) => {
  const totalPageArray = Array(totalPage)
    .fill(0)
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill(0)
    .map(() => totalPageArray.splice(0, limit));
};

export const getPageArrayIndex = (page: string) => {
  return Math.floor(Number(page) / 5) - (Number(page) % 5 === 0 ? 1 : 0);
};
