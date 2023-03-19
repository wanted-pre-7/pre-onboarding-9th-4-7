import type { Data } from "../types";
import Badge from "./Badge";

type Props = {
  data?: Data[];
};

const Table = ({ data }: Props) => {
  const headers = [
    "주문번호",
    "거래시간",
    "고객번호",
    "고객명",
    "가격",
    "주문상태",
  ];

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {headers.map((el, idx) => (
              <th key={idx}>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((el) => (
            <tr key={el.id}>
              <td>{el.id}</td>
              <td>{el.transaction_time}</td>
              <td>{el.customer_id}</td>
              <td>{el.customer_name}</td>
              <td>{el.currency}</td>
              <td>
                <Badge>{el.status ? "완료" : "미완료"}</Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
