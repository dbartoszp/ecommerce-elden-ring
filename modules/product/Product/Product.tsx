"use client";

import { useGetWeaponById } from "@/modules/weapons/useGetWeaponById/hooks/useGetWeaponById";
import React from "react";
import { ProductNotFound } from "../ProductNotFound/ProductNotFound";
import { omitTypenameArray } from "../utils/OmitTypenameArray/OmitTypenameArray";
import { ProductImage } from "../ProductImage/ProductImage";
import { ProductGeneralInfo } from "../ProductGeneralInfo/ProductGeneralInfo";
import { ProductDisclosure } from "../ProductDisclosure/ProductDisclosure";
import { ProductTable } from "../ProductTable/ProductTable";
import { ProductSkeleton } from "../ProductSkeleton/ProductSkeleton";

type ProductProps = {
  id: number;
};

export const Product = ({ id }: ProductProps) => {
  const productData = useGetWeaponById(id);
  if (productData.isLoading) return <ProductSkeleton />;
  if (!productData.data || productData.data.length < 1)
    return <ProductNotFound />;
  const product = productData.data[0];

  const productAttack = omitTypenameArray({ array: product.attack });
  const productDefence = omitTypenameArray({ array: product.defence });
  const productScalesWith = omitTypenameArray({
    array: product.scalesWith,
  });
  const productRequiredAttributes = omitTypenameArray({
    array: product.requiredAttributes,
  });

  return (
    <main className="sm:mt-36 sm:flex sm:flex-col sm:items-center sm:justify-center sm:space-x-12 md:space-x-36">
      <div className="sm:flex sm:flex-row sm:items-center">
        <ProductImage src={product.image} alt={product.name} />
        <ProductGeneralInfo
          name={product.name}
          weight={product.weight}
          id={product.id}
          price={product.price}
          category={product.category}
        />
      </div>
      <div className="mt-12">
        <ProductDisclosure openText={"DESCRIPTION"}>
          <span className="w-full text-dark-green">{product.description}</span>
        </ProductDisclosure>
        <ProductDisclosure openText="ATTACK & SCALING">
          <div className="flex justify-around">
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">ATTACK</label>
              <ProductTable array={productAttack} />
            </div>
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">SCALING</label>
              <ProductTable array={productScalesWith} />
            </div>
          </div>
        </ProductDisclosure>
        <ProductDisclosure openText="DEFENCE & REQUIREMENTS">
          <div className="flex justify-around">
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">DEFENCE</label>
              <ProductTable array={productDefence} />
            </div>
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">
                REQUIREMENTS
              </label>
              <ProductTable array={productRequiredAttributes} />
            </div>
          </div>
        </ProductDisclosure>
      </div>
    </main>
  );
};
