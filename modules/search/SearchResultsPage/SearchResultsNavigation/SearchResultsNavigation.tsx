import { Button } from "@/modules/ui/Button/Button";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi2";
import { getVisiblePageNumbers } from "../../utils/getVisiblePageNumbers/getVisiblePageNumbers";

type SearchResultsNavigationProps = {
  itemsPerPage: number;
  queryCount: number;
};

const VISIBLE_BUTTONS = 3;

export const SearchResultsNavigation = ({
  itemsPerPage,
  queryCount,
}: SearchResultsNavigationProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);
      return params.toString();
    },
    [searchParams],
  );

  const numberOfPages = Math.ceil(queryCount / itemsPerPage);

  const handleGoToPage = (page: number) => {
    router.replace(pathname + "?" + createQueryString("page", String(page)));
  };

  const visiblePageNumbers = getVisiblePageNumbers({
    visibleButtons: VISIBLE_BUTTONS,
    currentPage,
    numberOfPages,
  });

  return (
    <div className="flex flex-row justify-center  text-dark-green">
      <Button
        size="sm"
        variant="secondary"
        rounded={false}
        onClick={() => handleGoToPage(1)}
      >
        <HiChevronDoubleLeft />
      </Button>
      {visiblePageNumbers.map((page) => {
        return (
          <Button
            rounded={false}
            size="sm"
            variant={currentPage === page ? "primary" : "secondary"}
            key={page}
            onClick={() => handleGoToPage(page)}
          >
            {page}
          </Button>
        );
      })}
      <Button
        size="sm"
        variant="secondary"
        rounded={false}
        onClick={() => handleGoToPage(numberOfPages)}
      >
        <HiChevronDoubleRight size={14} />
      </Button>
    </div>
  );
};
