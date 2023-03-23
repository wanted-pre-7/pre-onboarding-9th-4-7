import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useSearchParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page"));
  const status = searchParams.get("status");
  const sort = searchParams.get("sort");
  const customer = searchParams.get("customer");

  useEffect(() => {
    searchParams.set("page", "1");
    searchParams.set("status", "전체");
    searchParams.set("sort", "default");
    searchParams.set("customer", "");
    setSearchParams(searchParams);
  }, []);

  const setParams = (target: string, value: string | number) => {
    searchParams.set(target, value.toString());
    setSearchParams(searchParams);
  };

  return {
    page,
    status,
    sort,
    customer,
    setParams,
  };
};

export default useSearchParameters;
