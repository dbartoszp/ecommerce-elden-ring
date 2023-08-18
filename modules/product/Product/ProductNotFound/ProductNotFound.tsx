import { Button } from "@/modules/ui/Button/Button";
import { useRouter } from "next/navigation";

export const ProductNotFound = () => {
  const router = useRouter();
  return (
    <div className="pb-48 pt-48 text-center">
      <h1 className="mb-10 font-semibold">
        Whoops, we couldn&apos;t find the item you were looking for!
      </h1>
      <Button onClick={() => router.back()} size="lg">
        Take me back
      </Button>
    </div>
  );
};
