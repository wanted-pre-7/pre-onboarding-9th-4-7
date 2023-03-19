import type { THeader } from "./Table";

const Th = ({ header }: { header: THeader }) => {
  return <th className="px-6 py-4">{header}</th>;
};
export default Th;
