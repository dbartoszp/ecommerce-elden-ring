import React from "react";
import { ProductDisclosure } from "../ProductDisclosure/ProductDisclosure";
import Skeleton from "react-loading-skeleton";

export const ProductSkeleton = () => {
  return (
    <main className="sm:mt-36 sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-x-12 md:space-x-36">
      <div className="flex flex-col items-center justify-center space-y-4 pt-12 sm:flex-row sm:space-x-8">
        <Skeleton height={300} width={300} />
        <Skeleton height={50} width={200} />
      </div>
      <div className="mt-12">
        <ProductDisclosure openText={"DESCRIPTION"}>
          <span className="w-full">
            <Skeleton />
          </span>
        </ProductDisclosure>
        <ProductDisclosure openText="ATTACK & SCALING">
          <span className="w-full">
            <Skeleton />
          </span>
        </ProductDisclosure>
        <ProductDisclosure openText="DEFENCE & REQUIREMENTS">
          <span className="w-full">
            <Skeleton />
          </span>
        </ProductDisclosure>
      </div>
    </main>
  );
};
