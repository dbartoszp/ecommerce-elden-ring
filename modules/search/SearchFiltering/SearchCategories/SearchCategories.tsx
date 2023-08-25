import { Button } from "@/modules/ui/Button/Button";
import { useGetWeaponCategories } from "@/modules/weapons/useGetWeaponCategories/hooks/useGetWeaponCategories";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

export const SearchCategories = () => {
  const categories = useGetWeaponCategories();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(Array.from(searchParams.entries()));
      params.set(name, value);
      console.log(params.get("category"));
      return params.toString();
    },
    [searchParams],
  );
  const handleCategoryChange = (categoryName: number) => {
    router.replace(
      pathname + "?" + createQueryString("category", String(categoryName)),
    );
  };

  if (!categories.isSuccess) return <div>error z ladowaniem</div>;

  return (
    <div>
      {categories.data.map((category) => (
        <Button
          size="sm"
          onClick={() => handleCategoryChange(category.id)}
          key={category.name}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};
