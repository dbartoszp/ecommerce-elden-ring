import { Button } from "@/modules/ui/Button/Button";
import { Link } from "@/modules/ui/Button/Link";
type ProductGeneralinfoModalProps = {
  onClose: () => void;
};

export const ProductGeneralInfoModal = ({
  onClose,
}: ProductGeneralinfoModalProps) => {
  return (
    <div className="flex flex-col space-y-4 pt-4">
      <Button onClick={onClose} size="lg" variant="primary">
        Continue shopping
      </Button>
      <Link href="/cart" size="lg" variant="secondary">
        Go to cart
      </Link>
    </div>
  );
};
