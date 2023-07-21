import { IconType } from "react-icons/lib";

type ButtonProps = {
  onClick: () => void;
  size: string;
  variant: string;
  colorScheme: string;
  iconLeft?: IconType;
  iconRight?: IconType;
};

type ClassNames = {
  [key: string]: string;
};

const sizes: ClassNames = {
  sm: "text-sm px-2.5 py-1.5",
  md: "text-md px-3.5 py-2",
  lg: "text-lg px-6 py-3",
};

const variants: ClassNames = {
  solid: "border rounded-xl",
  ghost: "rounded-xl bg-transparent",
  link: "rounded-xl bg-transparent hover:bg-transparent hover:underline",

  danger:
    "bg-red-700 text-red-100 hover:bg-red-800 rounded-xl border border-red-50",
};

const colorSchemes: ClassNames = {
  default:
    "border-dark-green bg-light-green hover:bg-light-green-lighter text-elden-beige",
  olive: "hover:bg-light-olive bg-dark-olive text-dark-",
};

export function Button({
  onClick,
  size = "md",
  iconLeft,
  iconRight,
  variant = "solid",
  colorScheme = "default",
}: ButtonProps) {
  let fullClassName = "transition-all duration-300" + " ";

  fullClassName += "m-6 "; // TESTING

  fullClassName += sizes[size] + " " || "";
  fullClassName += colorSchemes[colorScheme] + " " || "";
  fullClassName += variants[variant] + " " || "";

  return (
    <button className={fullClassName}>
      {iconLeft && iconLeft()}TEXT{iconRight && iconRight()}
    </button>
  );
}
