type AttributeAmount = {
  __typename: string;
  name: string;
  amount: number;
};

type AttributeScaling = {
  __typename: string;
  name: string;
  scaling: string;
};

type OmitTypenameArrayParams = {
  array: (AttributeAmount | AttributeScaling)[];
};
export const omitTypenameArray = ({ array }: OmitTypenameArrayParams) => {
  if (!array) return [];

  const newArray = array.map((item) => {
    if ("amount" in item) {
      const { name, amount } = item as AttributeAmount;
      return { name, amount };
    } else {
      const { name, scaling } = item as AttributeScaling;
      return { name, scaling };
    }
  });
  return newArray;
};
