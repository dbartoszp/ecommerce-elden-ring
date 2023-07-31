import { FavoritesItem } from "./FavoritesItem.tsx/FavoritesItem";
import { FavoritesTab } from "./FavoritesTab/FavoritesTab";

export function OurFavorites() {
  return (
    <div className="mt-40 flex flex-col justify-center space-y-4">
      <div className="text-center">
        <h2 className="text-3xl">MAKE YOUR ENEMIES...</h2>
      </div>
      <FavoritesTab />
    </div>
  );
}
