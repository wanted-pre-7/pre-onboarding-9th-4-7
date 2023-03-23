const limit = 5;

export const sliceArrayByLimit = (totalPage: number) => {
  const totalPageArray = Array(totalPage)
    .fill(0)
    .map((_, i) => i);
  return Array(Math.ceil(totalPage / limit))
    .fill(0)
    .map(() => totalPageArray.splice(0, limit));
};

export const getPageArrayIndex = (page: number) => {
  return Math.floor(Number(page) / 5) - (Number(page) % 5 === 0 ? 1 : 0);
};

export const handlePage = (
  type: string,
  currentPage: number,
  lastPage: number,
) => {
  let page = currentPage;
  switch (type) {
    case "doubleLeft":
      page = 1;
      break;
    case "left":
      page--;
      break;
    case "right":
      page++;
      break;
    case "doubleRight":
      page = lastPage;
      break;
  }
  return page;
};
