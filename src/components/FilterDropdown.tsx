import { useSearchParams } from "react-router-dom";

const FilterDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <>
      <label htmlFor="status-select">주문 처리 상태</label>

      <select onChange={changeSelectHandler} id="status-select">
        <option value="">-- 전체 상태 --</option>
        <option value="True">True</option>
        <option value="False">False</option>
      </select>
    </>
  );
};

export default FilterDropdown;
