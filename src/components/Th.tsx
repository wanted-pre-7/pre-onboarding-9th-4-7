import type { THeader } from "../App";

const Th = ({ header }: { header: THeader }) => {
  return (
    <th
      key={header}
      className={`px-6 py-4 ${
        header === ("주문상태" || "고객번호") ? "text-center" : ""
      }`}
    >
      {header}
    </th>
  );
};
export default Th;
