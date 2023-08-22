import { useSearchParams } from "next/navigation";
import { WeaponCard } from "./WeaponCard/WeaponCard";
import { useGetWeaponsByName } from "@/modules/weapons/useGetWeaponsBy/useGetWeaponsByName/hooks/useGetWeaponsByName";

//!!przeniesc do modułu weapons

export const WeaponList = () => {
  const searchParams = useSearchParams();

  const weapons = useGetWeaponsByName(searchParams.get("query") ?? "");

  if (weapons.isLoading) return <div>tu bedzie skeleton ladowania</div>;
  if (!weapons.isSuccess) {
    return <div>tu bedzie error</div>;
  }
  return (
    <>
      <h2 className="mb-4">
        Showing <span className="font-semibold">{weapons.data.length}</span>{" "}
        {`result${weapons.data.length !== 1 ? "s" : ""}`}
      </h2>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 sm:gap-10 lg:gap-16">
        {weapons.data.map((weapon) => {
          return (
            <div key={weapon.id}>
              <WeaponCard weapon={weapon} />
            </div>
          );
        })}
      </div>
    </>
  );
};
