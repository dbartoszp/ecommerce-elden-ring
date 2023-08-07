import clsx from "clsx";
import { HiXMark } from "react-icons/hi2";
import { DrawerItem } from "./DrawerItem/DrawerItem";
import { useRouteChanged } from "@/modules/navigation/hooks/useRouteChanged";
import { isZodError } from "@/modules/errors/type-guards/zod/isZodError";
import { useGetWeaponCategories } from "@/modules/weapons/useGetWeaponCategories/hooks/useGetWeaponCategories";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  iconSize: number;
  belowNavbar: boolean;
};

export function Drawer({
  isOpen,
  onClose,
  iconSize,
  belowNavbar = false,
}: DrawerProps) {
  useRouteChanged(() => onClose());

  const categories = useGetWeaponCategories();
  if (categories.isLoading || categories.isFetching || !categories.data)
    console.log(categories.error);

  if (categories.error && categories.isError && isZodError(categories.error)) {
    return <span>{categories.error?.errors?.at(0)?.message}</span>;
  }

  return (
    <main
      className={
        belowNavbar
          ? "z-50 mt-[55px] tracking-wider text-elden-beige"
          : "z-50 tracking-wider text-elden-beige"
      }
    >
      <section
        className={clsx(
          "delay-400 fixed left-0 z-40 h-full w-screen transform  bg-light-green-lighter shadow-xl transition-all duration-500 ease-in-out",
          { "translate-x-0": isOpen, "-translate-x-full": !isOpen },
        )}
      >
        {!belowNavbar ? (
          <div className="w-full border-b border-light-olive bg-light-green">
            <button className="cursor-pointer p-3" onClick={onClose}>
              <HiXMark size={iconSize} />
            </button>
          </div>
        ) : null}

        <ul className="mt-8 flex flex-col  space-y-8 uppercase ">
          {categories.data?.map((category) => (
            <li
              className="mx-4 border-b border-elden-beige pb-1 pl-8"
              key={category.category}
            >
              <DrawerItem
                iconSize={iconSize}
                category={category.category}
                href={category.category}
              />
            </li>
          ))}
          <li className="mx-4 border-b border-elden-beige pb-1 pl-8 capitalize">
            <DrawerItem
              iconSize={iconSize}
              category="Account"
              href="/account"
            />
          </li>
          <li className="mx-4 border-b border-elden-beige pb-1 pl-8 capitalize">
            <DrawerItem iconSize={iconSize} category="About" href="/" />
          </li>
        </ul>
      </section>
    </main>
  );
}
