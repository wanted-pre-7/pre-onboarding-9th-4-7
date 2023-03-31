import { useSearchParams } from "react-router-dom";

const useGetSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const pageNum =
    Number(searchParams.get("page")) === 0 || null
      ? 1
      : Number(searchParams.get("page"));
  const name = searchParams.get("name");
  const status = searchParams.get("status");
  const sortOption = searchParams.get("sort");

  return { pageNum, name, status, sortOption, searchParams, setSearchParams };
};

export default useGetSearchParams;
