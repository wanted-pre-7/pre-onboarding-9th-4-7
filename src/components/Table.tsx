import type { IPropsToOrderAdmin } from "../types";

const Table = ({ headers, items }: IPropsToOrderAdmin) => {
  return (
    <table>
      <thead>
        <tr>
          {headers.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>

      <tbody>
        {items.map((item, idx) => (
          <tr key={idx}>
            {headers.map((header) => (
              <td key={header + idx}>{item[header]}</td> // todo : fix type error
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
