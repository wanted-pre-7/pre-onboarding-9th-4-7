import type { IInfo } from "../types/transaction";

const Tr = ({ item }: { item: IInfo }) => {
  return (
    <tr
      key={item.id}
      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
    >
      <td className="whitespace-nowrap px-6 py-4 ">{item.id}</td>
      <td className="whitespace-nowrap px-6 py-4">{item.transaction_time}</td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        {item.status === true ? "✔️" : "❌"}
      </td>
      <td className="whitespace-nowrap px-6 py-4 text-center">
        {item.customer_id}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{item.customer_name}</td>
      <td className="whitespace-nowrap px-6 py-4">{item.currency}</td>
    </tr>
  );
};
export default Tr;
