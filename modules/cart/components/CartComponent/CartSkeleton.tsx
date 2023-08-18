import { CartItemsSkeleton } from "./CartItems/CartItemsSkeleton/CartItemsSkeleton";
export const CartSkeleton = () => {
  return (
    <div>
      <div className=" mx-2 flex flex-col items-center py-12">
        <div className="mb-2 justify-center border-b border-b-dark-green pb-2 text-center text-lg font-semibold uppercase tracking-widest">
          <h1>ITEMS IN YOUR CART:</h1>
        </div>
        <CartItemsSkeleton />
      </div>
    </div>
  );
};
