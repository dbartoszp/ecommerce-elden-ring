import { Button } from "@/modules/ui/Button/Button";
import { Link } from "@/modules/ui/Button/Link";
import React from "react";
import Skeleton from "react-loading-skeleton";

export const WeaponCardSkeleton = () => {
  return (
    <div className="flex w-44 flex-col items-center justify-center bg-[#f1f1f1] shadow-md  md:w-72 ">
      <Skeleton className="w-full" width={160} height={160} />
      <div className="flex w-full flex-col bg-[#fff] p-2  tracking-wide text-dark-green sm:p-6">
        <span className="font-semibold">
          <Skeleton />
        </span>
        <span>
          <Skeleton />
        </span>
        <span>
          <Skeleton />
        </span>
        <Link variant="primary" size="sm" href="#">
          <span className="text-center">GO TO PRODUCT PAGE</span>
        </Link>
        <Button onClick={() => console.log()} variant="secondary" size="sm">
          QUICK ADD
        </Button>
      </div>
    </div>
  );
};
