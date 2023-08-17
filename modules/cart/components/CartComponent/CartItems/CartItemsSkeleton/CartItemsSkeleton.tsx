import Skeleton from "react-loading-skeleton";
import { CartItemSkeleton } from "../CartItem/CartItemSkeleton";
// import "react-loading-skeleton/dist/skeleton.css";

export const CartItemsSkeleton = () => {
  return (
    <div className="items-center justify-center text-dark-green sm:flex sm:flex-row sm:space-x-12 md:space-x-24">
      <div>
        <CartItemSkeleton />
        <CartItemSkeleton />
        <CartItemSkeleton />
      </div>
      <div>
        <div className="mb-4 mt-3 text-center">
          <span className="text-xl font-semibold">
            <Skeleton />
          </span>
        </div>
        <div className="flex justify-center">
          <Skeleton width={200} height={70} />
        </div>
      </div>
    </div>
  );
};
