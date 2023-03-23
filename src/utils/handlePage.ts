const handlePage = (type: string, currentPage: number, lastPage: number) => {
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

export default handlePage;
