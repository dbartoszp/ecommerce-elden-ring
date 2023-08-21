import { Searchbar } from "@/modules/search/Searchbar/Searchbar";
import { WeaponList } from "@/modules/ui/WeaponList/WeaponList";

export default function SearchPage({ params }: { params: { query: string } }) {
  console.log(params.query);
  return (
    <div className="mb-24">
      <Searchbar />
      <div className="flex flex-col items-center justify-center">
        <WeaponList query={params.query} />
      </div>
    </div>
  );
}
