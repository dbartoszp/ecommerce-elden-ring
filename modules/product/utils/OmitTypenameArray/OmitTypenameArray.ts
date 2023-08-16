type AttributeAmount = {
  __typename: string;
  name: string;
  amount: number;
};

// type AttributeScaling = {
//   __typename: string;
//   name: string;
//   scaling: string;
// };

type OmitTypenameArrayParams = {
  array: AttributeAmount[];
  // array: (AttributeAmount | AttributeScaling)[];
};
export const omitTypenameArray = ({ array }: OmitTypenameArrayParams) => {
  const newArray = array.map(({ name, amount }) => ({
    name,
    amount,
  }));

  return newArray;
};
