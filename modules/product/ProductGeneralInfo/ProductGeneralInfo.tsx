"use client";
import { useAddToCart } from "@/modules/cart/hooks/useAddToCart/useAddToCart";
import { Button } from "@/modules/ui/Button/Button";
import { Modal } from "@/modules/ui/Modal/Modal";

type ProductGeneralInfoProps = {
  id: number;
  name: string;
  weight: number;
  category: string;
  price: number;
};

export const ProductGeneralInfo = ({
  id,
  name,
  weight,
  category,
  price,
}: ProductGeneralInfoProps) => {
  const addToCart = useAddToCart();

  const handleAddToCart = () => {
    addToCart.mutate({ weaponId: id });
  };

  return (
    <div className="mx-4 mt-6">
      <h2 className="uppercase">
        {category}, WEIGHT: {weight}
      </h2>
      <h1 className="text-lg font-semibold">{name}</h1>
      <h2 className="text-lg font-semibold">
        <span>{price / 100} PLN</span>
      </h2>
      <div className="flex justify-center">
        {/* <Button size="lg" onClick={handleAddToCart}>
          ADD TO CART
        </Button> */}
        <Modal title={`Added ${name} to the cart!`} openText={`ADD TO CART`}>
          koksze
        </Modal>
      </div>
    </div>
  );
};
