import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export const CartItemSkeleton = () => {
  return (
    <div className="flex items-center space-x-3 border-b border-b-dark-green p-2 sm:space-y-12 md:space-y-16">
      <Skeleton width={100} height={100} />
      <div className="flex flex-col space-y-1">
        <span className="border-b border-b-dark-green font-semibold uppercase tracking-wider ">
          <Skeleton width={200} />
        </span>
        <span>
          <Skeleton />
        </span>
        <span>
          <Skeleton />
        </span>
      </div>
      <Skeleton width={50} height={50} />
      <Skeleton width={50} height={50} />
    </div>
  );
};
