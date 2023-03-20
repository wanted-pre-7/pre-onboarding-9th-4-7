export const pageLimit = 50;

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
