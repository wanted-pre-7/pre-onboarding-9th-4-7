import { MdExpandMore } from "react-icons/md";
import useSearchParameters from "../hooks/useSearchParameters";
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

  const { sort: current, setParams } = useSearchParameters();

  const handleSort = (category: string) => {
    if (current === category) setParams("sort", "default");
    else setParams("sort", category);
  };

  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            {headers.map((el, idx) => (
              <th key={idx}>
                {el === "주문번호" || el === "거래시간" ? (
                  <button className="sort-button">
                    {el}
                    <MdExpandMore
                      onClick={() => handleSort(el)}
                      className={
                        current === el ? "sort-icon" : "sort-icon inactive"
                      }
                    />
                  </button>
                ) : (
                  el
                )}
              </th>
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
