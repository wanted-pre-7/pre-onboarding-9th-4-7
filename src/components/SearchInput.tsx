import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("name", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <input
      type="text"
      placeholder="고객 이름 검색"
      onChange={searchInputHandler}
    />
  );
};

export default SearchInput;
