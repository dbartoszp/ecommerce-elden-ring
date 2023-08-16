// type WithScaling = {
//   name: string;
//   scaling: string;
// };

type WithAmount = {
  name: string;
  amount: number;
};

type ProductTableProps = {
  array: WithAmount[];
};

export const ProductTable = ({ array }: ProductTableProps) => {
  const propertyNames = Object.keys(array[0]);
  console.log(propertyNames);

  return (
    <table className="table-fixed ">
      <thead>
        <tr className="space-x-5 text-xs uppercase tracking-wider">
          {propertyNames.map((pn) => (
            <th className="px-3" key={pn}>
              {pn}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {array.map((item) => (
          <tr className=" text-center" key={item.name}>
            {propertyNames.map((pn) => {
              //!! TU MI SIE KEY NIE PODOBA BARDZO
              return (
                <td key={item.name + pn}>{item[pn as keyof typeof item]}</td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
