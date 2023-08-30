import { Button } from "@/modules/ui/Button/Button";
import React from "react";
import Skeleton from "react-loading-skeleton";

export const SearchFiltersSkeleton = () => {
  return (
    <div className="mt-2 flex flex-col space-y-2">
      <Button size="sm" variant="primary" onClick={() => console.log()}>
        <Skeleton width={200} />
      </Button>
      <Button size="sm" variant="primary" onClick={() => console.log()}>
        <Skeleton width={200} />
      </Button>
      <Button size="sm" variant="primary" onClick={() => console.log()}>
        <Skeleton width={200} />
      </Button>
    </div>
  );
};
