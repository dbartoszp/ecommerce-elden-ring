import { Link } from "@/modules/ui/Button/Link";
import { useGetCart } from "../../hooks/useGetCart/useGetCart";
import { CartItems } from "./CartItems/CartItems";
import { CartSkeleton } from "./CartSkeleton";

export const Cart = () => {
  const cartWeapons = useGetCart();
  console.log(cartWeapons.data);
  if (cartWeapons.isInitialLoading) return <CartSkeleton />;
  const weaponsIds = cartWeapons.data?.map((cartWeapon) => cartWeapon.weaponId);
  if (!weaponsIds || weaponsIds?.length < 1)
    return (
      <div className="mx-2 pb-48 pt-64 sm:pb-72">
        <div className="top-1/2 mb-10 pb-2 text-center text-lg font-semibold uppercase tracking-widest">
          <h1>There are currently no items in your cart!</h1>
        </div>
        <div className="flex justify-center">
          <Link variant="primary" size="lg" href="/products">
            GO AND ADD SOME
          </Link>
        </div>
      </div>
    );

  return (
    <div className="mx-2 flex flex-col items-center py-12 pt-36">
      <div className="mb-2 justify-center border-b border-b-dark-green pb-2 text-center text-lg font-semibold uppercase tracking-widest">
        <h1>Items in your cart:</h1>
      </div>
      <CartItems weaponIds={weaponsIds} />
    </div>
  );
};
