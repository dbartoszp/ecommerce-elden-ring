import { useQueryString } from "@/modules/navigation/hooks/useQueryString/useQueryString";
import { Button } from "@/modules/ui/Button/Button";
import { ErrorMessage } from "@/modules/ui/ErrorMessage/ErrorMessage";
import { useGetWeaponCategories } from "@/modules/weapons/useGetWeaponCategories/hooks/useGetWeaponCategories";

export const SearchCategories = () => {
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
