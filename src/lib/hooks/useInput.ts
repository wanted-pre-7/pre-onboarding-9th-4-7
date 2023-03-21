import { useState } from "react";

type OnChange = (e: React.ChangeEvent<HTMLInputElement>) => void;
type UseInput = (initialState: string) => [value: string, OnChange: OnChange];

const useInput: UseInput = (initialState: string) => {
  const [value, setValue] = useState(initialState);

  const onChange: OnChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};
export default useInput;
