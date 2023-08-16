import { ProductDisclosure } from "@/modules/product/ProductDisclosure/ProductDisclosure";
import { ProductGeneralInfo } from "@/modules/product/ProductGeneralInfo/ProductGeneralInfo";
import { ProductImage } from "@/modules/product/ProductImage/ProductImage";
import { ProductTable } from "@/modules/product/ProductTable/ProductTable";
import { omitTypenameArray } from "@/modules/product/utils/OmitTypenameArray/OmitTypenameArray";

const testProduct = {
  id: 219,
  name: "Hand Axe",
  price: 41878,
  weight: 3.5,
  category: "Axe",
  description:
    "Commonly known as a hatchet, this smaller variety of axe is an everyday work tool. Despite its short reach, it is easy to handle, exceling in successive attacks.",
  itemId: "17f69c35d2cl0i1oh7zuqfb3mdvsj",
  image:
    "https://eldenring.fanapis.com/images/weapons/17f69c35d2cl0i1oh7zuqfb3mdvsj.png",
  attack: [
    { __typename: "AttributeEntry", name: "Phy", amount: 113 },
    { __typename: "AttributeEntry", name: "Mag", amount: 0 },
    { __typename: "AttributeEntry", name: "Fire", amount: 0 },
    { __typename: "AttributeEntry", name: "Ligt", amount: 0 },
    { __typename: "AttributeEntry", name: "Holy", amount: 0 },
    { __typename: "AttributeEntry", name: "Crit", amount: 100 },
  ],
  defence: [
    { __typename: "AttributeEntry", name: "Phy", amount: 42 },
    { __typename: "AttributeEntry", name: "Mag", amount: 28 },
    { __typename: "AttributeEntry", name: "Fire", amount: 28 },
    { __typename: "AttributeEntry", name: "Ligt", amount: 28 },
    { __typename: "AttributeEntry", name: "Holy", amount: 28 },
    { __typename: "AttributeEntry", name: "Boost", amount: 28 },
  ],
  scalesWith: [
    { __typename: "ScalingEntry", name: "Str", scaling: "D" },
    { __typename: "ScalingEntry", name: "Dex", scaling: "D" },
  ],
  requiredAttributes: [
    { __typename: "AttributeEntry", name: "Str", amount: 9 },
    { __typename: "AttributeEntry", name: "Dex", amount: 8 },
  ],
};

export default function ProductPage() {
  const product = testProduct;
  const productAttack = omitTypenameArray({ array: product.attack });
  const productDefence = omitTypenameArray({ array: product.defence });
  //!!TUTAJ NAME I SCALING (STRING)
  // const productScalesWith = omitTypenameArray({ array: product.scalesWith });
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
          <span className="w-full">{product.description}</span>
        </ProductDisclosure>
        <ProductDisclosure openText="ATTACK & SCALING">
          <div className="flex justify-around">
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">ATTACK</label>
              <ProductTable array={productAttack} />
            </div>
            <div className="bg-light-green p-2 text-center">
              <label className="font-semibold tracking-wider">SCALING</label>
              <ProductTable array={productAttack} />
              {/* //!!TUTAJ NAME I SCALING (STRING) */}
              {/* <ProductTable array={productDefence} /> */}
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
}
