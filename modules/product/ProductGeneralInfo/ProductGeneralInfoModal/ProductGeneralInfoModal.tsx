import { Link } from "@/modules/ui/Button/Link";

export const ProductGeneralInfoModal = () => {
  return (
    <div className="flex flex-col space-y-4 pt-4">
      {/* //TODO zamkniecie modala po nacisnieciu Continue shopping */}
      <Link href="#" size="lg" variant="primary">
        Continue shopping
      </Link>
      <Link href="/cart" size="lg" variant="secondary">
        Go to cart
      </Link>
    </div>
  );
};
