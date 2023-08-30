import { useQueryString } from "@/modules/navigation/hooks/useQueryString/useQueryString";
import { Button } from "@/modules/ui/Button/Button";
import { ErrorMessage } from "@/modules/ui/ErrorMessage/ErrorMessage";
import { useGetWeaponCategories } from "@/modules/weapons/useGetWeaponCategories/hooks/useGetWeaponCategories";
import { useSearchParams } from "next/navigation";

export const SearchCategories = () => {
  const searchParams = useSearchParams();
  const categoryQuery = Number(searchParams.get("category")) || 0;

  const categories = useGetWeaponCategories();
  const { createQueryString, pushQueryStringRouter } = useQueryString();

  const handleCategoryChange = (categoryID: number) => {
    pushQueryStringRouter(
      createQueryString([
        { name: "category", value: String(categoryID) },
        { name: "page", value: "1" },
        { name: "filter", value: "" },
        { name: "query", value: "" },
      ]),
    );
  };

  if (!categories.isSuccess)
    return <ErrorMessage>Error loading categories</ErrorMessage>;

  return (
    <div className="mt-6 flex justify-around">
      {categories.data.map((category) => (
        <Button
          rounded={false}
          size="sm"
          onClick={() => handleCategoryChange(category.id)}
          key={category.name}
          variant={categoryQuery === category.id ? "primary" : "secondary"}
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};
