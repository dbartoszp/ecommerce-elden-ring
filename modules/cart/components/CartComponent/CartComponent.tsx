import { useGetCart } from "../../hooks/useGetCart/useGetCart";
import { CartItems } from "./CartItems/CartItems";

export const CartComponent = () => {
  const cartWeapons = useGetCart();

  const weaponsIds = cartWeapons.data?.map((cartWeapon) => cartWeapon.weaponId);

  if (cartWeapons.isLoading) return <span>loading</span>;
  if (!weaponsIds) return <div>brak</div>;

  return (
    <div className="mx-2 py-12">
      <div className="mb-2 border-b border-b-dark-green pb-2 text-center text-lg font-semibold uppercase tracking-widest">
        <h1>Items in your cart:</h1>
      </div>
      <CartItems weaponIds={weaponsIds} />
    </div>
  );
};
