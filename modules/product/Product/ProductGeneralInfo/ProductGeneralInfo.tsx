"use client";
import { useAddToCart } from "@/modules/cart/hooks/useAddToCart/useAddToCart";
import { Modal } from "@/modules/ui/Modal/Modal";
import { ProductGeneralInfoModal } from "./ProductGeneralInfoModal/ProductGeneralInfoModal";
import { useDisclosure } from "@/modules/ui/Modal/useDisclosure/useDisclosure";

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
  const { isOpen, close, changeOpenState } = useDisclosure();

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
      <div className="mt-6 flex justify-center">
        <Modal
          title={`Added ${name} to the cart!`}
          openText={`ADD TO CART`}
          openVariant="primary"
          onOpen={handleAddToCart}
          onClose={close}
          onOpenChange={changeOpenState}
          open={isOpen}
        >
          <ProductGeneralInfoModal onClose={close} />
        </Modal>
      </div>
    </div>
  );
};
