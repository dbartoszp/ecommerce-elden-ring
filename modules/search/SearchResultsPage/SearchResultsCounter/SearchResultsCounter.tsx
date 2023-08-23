type SearchResultsCounterProps = {
  results: number;
  total: number;
};

export const SearchResultsCounter = ({
  results,
  total,
}: SearchResultsCounterProps) => {
  return (
    <h2 className="mb-4">
      Showing <span className="font-semibold">{results}</span>{" "}
      {`out of all ${total} result${results !== 1 ? "s" : ""}`}
    </h2>
  );
};
