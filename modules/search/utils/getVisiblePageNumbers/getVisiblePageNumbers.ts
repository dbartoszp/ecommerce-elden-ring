type GetVisiblePageNumbersParams = {
  visibleButtons: number;
  currentPage: number;
  numberOfPages: number;
};

export const getVisiblePageNumbers = ({
  visibleButtons,
  currentPage,
  numberOfPages,
}: GetVisiblePageNumbersParams) => {
  const halfVisibleCount = Math.floor(visibleButtons / 2);
  let start = currentPage - halfVisibleCount;
  let end = currentPage + halfVisibleCount;

  if (start <= 0) {
    start = 1;
    end = Math.min(numberOfPages, visibleButtons);
  }

  if (end > numberOfPages) {
    end = numberOfPages;
    start = Math.max(1, end - visibleButtons + 1);
  }

  return Array.from({ length: end - start + 1 }, (_, index) => start + index);
};
