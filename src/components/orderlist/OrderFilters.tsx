import { useRef } from "react";

const OrderFilters = ({
  updateStatus,
  updateCustomerName,
}: {
  updateStatus: (value: string) => void;
  updateCustomerName: (value: string) => void;
}) => {
  const custonmerNameRef = useRef<HTMLInputElement>(null);

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(e.target.value);
  };
  const handleClickButton = () => {
    updateCustomerName(
      custonmerNameRef.current?.value ? custonmerNameRef.current?.value : "",
    );
  };
  return (
    <div>
      고객이름 : <input ref={custonmerNameRef} />
      <button onClick={handleClickButton}>검색</button>
      <select className="w150" onChange={handleChangeSelect}>
        <option value=""></option>
        <option value="true">완료</option>
        <option value="false">미완료</option>
      </select>
    </div>
  );
};

export default OrderFilters;
