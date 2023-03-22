import SearchIcon from "./SearchIcon";

export interface IOrderFiltersProps {
  status: string | null;
  customer_name: string | null;
  updateStatus: (value: string) => void;
  updateCustomerName: (value: string) => void;
}

const OrderFilters = ({
  status,
  customer_name,
  updateStatus,
  updateCustomerName,
}: IOrderFiltersProps) => {
  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateStatus(e.target.value);
  };
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateCustomerName(e.target.value);
  };
  return (
    <div className="mt-1 md:flex md:items-center md:justify-end pb-5">
      <div className="flex mr-2">주문처리상태 : </div>
      <div className="flex bg-white border rounded-lg mr-10">
        <select
          data-testid="test-select"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          onChange={handleChangeSelect}
          value={status ? status : ""}
        >
          <option value=""></option>
          <option value="true">완료</option>
          <option value="false">미완료</option>
        </select>
      </div>
      <div className="relative flex items-center mt-4 md:mt-0">
        <span className="absolute">
          <SearchIcon />
        </span>
        <input
          data-testid="test-input"
          onChange={handleChangeInput}
          placeholder="고객이름"
          className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          defaultValue={customer_name ? customer_name : ""}
        />
      </div>
    </div>
  );
};

export default OrderFilters;
