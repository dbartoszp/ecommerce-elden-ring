import clsx from "clsx";
import Link from "next/link";
import { HiArrowRight, HiXMark } from "react-icons/hi2";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  iconSize: number;
  belowNavbar: boolean;
};

const testingCategories = [
  "Swords",
  "Shields",
  "Sorcery",
  "Fists",
  "Halberds",
  "Bows",
];

const testingMisc = ["Account", "Help"];

export function Drawer({
  isOpen,
  onClose,
  iconSize,
  belowNavbar = false,
}: DrawerProps) {
  return (
    // idk dlaczego ale w ten sposob nie tracking-wider nie daje efektu, tak samo z text-elden-beige
    // <main
    //   className={
    //     "tracking-wider" + belowNavbar
    //       ? "mt-[55px] text-elden-beige"
    //       : "text-elden-beige"
    //   }
    // >
    <main
      className={
        belowNavbar
          ? "mt-[55px] tracking-wider text-elden-beige"
          : "tracking-wider text-elden-beige"
      }
    >
      <section
        className={clsx(
          "delay-400 absolute left-0 h-full w-screen transform bg-light-green-lighter shadow-xl transition-all duration-500 ease-in-out",
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
          {testingCategories?.map((category) => (
            <li
              className="mx-4 border-b border-elden-beige pb-1 pl-8"
              key={category}
            >
              <Link className="flex items-center" href="#">
                <span className="flex-1">{category}</span>
                <div className="pr-3 text-elden-beige">
                  <HiArrowRight size={iconSize * 0.8} />
                </div>
              </Link>
            </li>
          ))}
          {testingMisc?.map((misc) => (
            <li
              className="mx-4 border-b border-elden-beige pb-1 pl-8 capitalize"
              key={misc}
            >
              <Link className="flex items-center" href="#">
                <span className="flex-1">{misc}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
