import type { IList } from "../types";

const descendingComparator = <T>(a: T, b: T, orderBy: keyof T) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

type Order = "asc" | "desc";

export const getComparator = <Key extends keyof IList>(
  order: Order,
  orderBy: Key,
): ((
  a: { [key in Key]: number | string | boolean },
  b: { [key in Key]: number | string | boolean },
) => number) => {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

export const stableSort = (
  array: readonly IList[],
  comparator: (a: IList, b: IList) => number,
) => {
  const stabilizedThis = array.map(
    (el, index) => [el, index] as [IList, number],
  );

  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
};
