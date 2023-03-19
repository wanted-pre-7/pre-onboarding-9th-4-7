import type { ITransaction } from "../../types/transaction";

const Tr = ({ transaction }: { transaction: ITransaction }) => {
  return (
    <tr
      key={transaction.id}
      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 "
    >
      <td className="whitespace-nowrap px-6 py-4 ">{transaction.id}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {transaction.transaction_time}
      </td>
      <td className="whitespace-nowrap px-6 py-4">
        {transaction.status === true ? "✔️" : "❌"}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{transaction.customer_id}</td>
      <td className="whitespace-nowrap px-6 py-4">
        {transaction.customer_name}
      </td>
      <td className="whitespace-nowrap px-6 py-4">{transaction.currency}</td>
    </tr>
  );
};
export default Tr;
