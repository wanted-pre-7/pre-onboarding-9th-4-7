import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const useSearchParameters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page =
    searchParams.get("page") && !isNaN(Number(searchParams.get("page")))
      ? Number(searchParams.get("page"))
      : 1;
  const status = searchParams.get("status");
  const sort = searchParams.get("sort");
  const customer = searchParams.get("customer");

  useEffect(() => {
    if (!searchParams.get("page") || isNaN(Number(searchParams.get("page")))) {
      searchParams.set("page", "1");
    }
    if (!searchParams.get("status")) {
      searchParams.set("status", "전체");
    }
    if (!searchParams.get("sort")) {
      searchParams.set("sort", "default");
    }
    if (!searchParams.get("customer")) {
      searchParams.set("customer", "");
    }
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
