import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

type QueryObject = {
  name: string;
  value: string;
};

export const useQueryString = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const pushQueryStringRouter = (queryString: string) => {
    router.replace(pathname + "?" + queryString);
  };

  const createQueryString = useCallback(
    (queryObjects: QueryObject[]) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));

      queryObjects.forEach((qo) => {
        params.set(qo.name, qo.value);
      });
      return params.toString();
    },
    [searchParams],
  );

  return { pushQueryStringRouter, createQueryString };
};
