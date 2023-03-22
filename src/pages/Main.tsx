import { useEffect, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useData from "../hooks/useData";
import useSearchParameters from "../hooks/useSearchParameters";

const Main = () => {
  const today = "2023-03-08";
  const dataPerPage = 50;

  const { page, status, customer, setParams } = useSearchParameters();

  const { query, data, currentPageData } = useData(today, dataPerPage);

  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (query.isFetching) setCount(0);
  }, [query]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setParams("status", e.target.value);

  const [name, setName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setParams("customer", name);
    setName("");
  };

  return (
    <div className="page-container">
      <div className="page-title">주문내역 관리</div>
      <div className="section-wrapper">
        <section>
          <div className="select-wrapper">
            <form onSubmit={handleSubmit}>
              <input
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setName(e.target.value)
                }
                value={name}
                className="main-input"
                type="text"
                name="name"
                placeholder="고객명"
              />
              <button className="main-button" type="submit" value="submit">
                검색
              </button>
            </form>
            <p>주문상태</p>
            <select onChange={handleStatus}>
              <option value="전체" selected={status === "전체"}>
                전체
              </option>
              <option value="완료" selected={status === "완료"}>
                완료
              </option>
              <option value="미완료" selected={status === "미완료"}>
                미완료
              </option>
            </select>
            <span className="time-stamp">{count}초 전 업데이트</span>
          </div>
          <p>
            <MdFilterAlt />
            <span>
              {today} {customer && `& ${customer}를 포함한`} 검색 결과
            </span>
          </p>
        </section>
        <section className="pagination-section">
          <Pagination data={data ? data : []} />
        </section>
      </div>
      <Table data={currentPageData} />
      <Pagination data={data ? data : []} />
    </div>
  );
};

export default Main;
