import { ProductDisclosure } from "@/modules/product/ProductDisclosure/ProductDisclosure";
import { ProductGeneralInfo } from "@/modules/product/ProductGeneralInfo/ProductGeneralInfo";
import { ProductImage } from "@/modules/product/ProductImage/ProductImage";

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

  return (
    <main className="justify-center sm:mt-72 sm:flex sm:flex-row sm:items-start sm:space-x-12 md:space-x-36">
      <ProductImage src={product.image} alt={product.name} />
      <ProductGeneralInfo
        name={product.name}
        weight={product.weight}
        id={product.id}
        price={product.price}
        category={product.category}
      />

      <div className="mt-10">
        <ProductDisclosure openText={"DESCRIPTION"}>
          <span>{product.description}</span>
        </ProductDisclosure>
        <ProductDisclosure openText="ATTACK & SCALING">
          <span>table1 table2</span>
        </ProductDisclosure>
        <ProductDisclosure openText="DEFENCE & REQUIREMENTS">
          <span>table3 table4</span>
        </ProductDisclosure>
      </div>
    </main>
  );
}
