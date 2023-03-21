import { useEffect, useMemo, useState } from "react";
import { MdFilterAlt } from "react-icons/md";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import Table from "../components/Table";
import useData from "../hooks/useData";

const Main = () => {
  const today = "2023-03-08";
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get("page");
  const status = searchParams.get("status");
  const sort = searchParams.get("sort");
  const customer = searchParams.get("name");
  const firstIdx = 50 * (Number(currentPage) - 1);
  const lastIdx = firstIdx + 50;

  const query = useData();
  let data = useMemo(
    () =>
      query.data?.data.filter(
        (el) => el.transaction_time.substring(0, 10) === today,
      ),
    [query],
  );

  if (status === "완료") data = data?.filter((el) => el.status);
  else if (status === "미완료") data = data?.filter((el) => !el.status);
  else data;

  if (sort === "주문번호") data = data?.sort((a, b) => b.id - a.id);
  else if (sort === "거래시간")
    data = data?.sort(
      (a, b) =>
        new Date(b.transaction_time).getTime() -
        new Date(a.transaction_time).getTime(),
    );
  else data = data?.sort((a, b) => a.id - b.id);

  if (customer !== "")
    data = data?.filter((el) =>
      el.customer_name.toLowerCase().includes(customer!.toLowerCase()),
    );

  const currentData = useMemo(() => data?.slice(firstIdx, lastIdx), [data]);

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
    searchParams.set("page", "1");
    searchParams.set("status", "전체");
    searchParams.set("sort", "default");
    searchParams.set("name", "");
    setSearchParams(searchParams);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const handleStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };
  const [name, setName] = useState<string>("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchParams.set("name", name);
    setSearchParams(searchParams);
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
              <option value="전체">전체</option>
              <option value="완료">완료</option>
              <option value="미완료">미완료</option>
            </select>
            <span className="time-stamp">{count}초 전 업데이트</span>
          </div>
          <p>
            <MdFilterAlt />
            {today} {customer !== "" && `& ${customer}`} 검색 결과
          </p>
        </section>
        <section className="pagination-section">
          <Pagination data={data ? data : []} />
        </section>
      </div>
      <Table data={currentData} />
      <Pagination data={data ? data : []} />
    </div>
  );
};

export default Main;
