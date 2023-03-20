const OrderFilters = ({
  status,
  customer_name,
  updateStatus,
  updateCustomerName,
}: {
  status: string | null;
  customer_name: string | null;
  updateStatus: (value: string) => void;
  updateCustomerName: (value: string) => void;
}) => {
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(e.target.value);
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCustomerName(e.target.value);
  };
  return (
    <div>
      고객이름 :{" "}
      <input
        onChange={handleChangeInput}
        defaultValue={customer_name ? customer_name : ""}
      />
      <select
        className="w150"
        onChange={handleChangeSelect}
        value={status ? status : ""}
      >
        <option value=""></option>
        <option value="true">완료</option>
        <option value="false">미완료</option>
      </select>
    </div>
  );
};

export default OrderFilters;
