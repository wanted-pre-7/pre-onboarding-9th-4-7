import { Input } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const SearchInput = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchParams.set("name", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <Input
      placeholder="고객 이름 검색"
      onChange={searchInputHandler}
      width="lg"
      mr={8}
      value={(searchParams?.get("name") as string) || ""}
    />
  );
};

export default SearchInput;
