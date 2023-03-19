import type { THeader } from "./Table";

const Th = ({ header }: { header: THeader }) => {
  return (
    <th
      key={header}
      className={`px-6 py-4 ${header === ("주문상태" || "고객번호") ? "" : ""}`}
    >
      {header}
    </th>
  );
};
export default Th;
