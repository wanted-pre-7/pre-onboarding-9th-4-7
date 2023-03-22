import type { IList } from "../types";

interface HeadCell {
  disablePadding: boolean;
  id: keyof IList;
  label: string;
  numeric: boolean;
}

export const HeadCells: readonly HeadCell[] = [
  {
    id: "id",
    numeric: false,
    disablePadding: true,
    label: "ID",
  },
  {
    id: "transaction_time",
    numeric: true,
    disablePadding: false,
    label: "환전시간",
  },
  {
    id: "status",
    numeric: true,
    disablePadding: false,
    label: "상태",
  },
  {
    id: "customer_id",
    numeric: true,
    disablePadding: false,
    label: "고객ID",
  },
  {
    id: "customer_name",
    numeric: true,
    disablePadding: false,
    label: "고객 이름",
  },
  {
    id: "currency",
    numeric: true,
    disablePadding: false,
    label: "액수",
  },
];
