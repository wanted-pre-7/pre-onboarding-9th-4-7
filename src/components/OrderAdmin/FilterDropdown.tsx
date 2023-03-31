import styled from "@emotion/styled";
import { useSearchParams } from "react-router-dom";

export const DROPDOWN_OPTIONS = ["True", "False"];

const FilterDropdown = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSelectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    searchParams.set("status", e.target.value);
    setSearchParams(searchParams);
  };

  return (
    <SelectWrapper>
      <select onChange={changeSelectHandler} id="status-select">
        <option value="">-- Status: All --</option>
        {DROPDOWN_OPTIONS.map((option) => (
          <option
            key={option}
            value={option}
            selected={option === searchParams.get("status")}
          >
            {option}
          </option>
        ))}
      </select>
    </SelectWrapper>
  );
};

const SelectWrapper = styled.div`
  border: 1px #9ca3af solid;
`;

export default FilterDropdown;
