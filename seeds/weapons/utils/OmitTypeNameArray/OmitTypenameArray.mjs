const omitTypenameArray = (array) => {
  if (!array) return [];

  const newArray = array.map((item) => {
    if ("amount" in item) {
      const { name, amount } = item;
      return { name, amount };
    } else {
      const { name, scaling } = item;
      return { name, scaling };
    }
  });
  console.log(newArray);
  return newArray;
};
export default omitTypenameArray;
