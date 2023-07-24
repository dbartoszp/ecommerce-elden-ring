import Link from "next/link";

type ButtonProps = {
  onClick?: () => void;
  size?: string;
  variant?: string;
  to?: string;
  disabled?: boolean;
  children: React.ReactNode;
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
  primary:
    "rounded-xl bg-light-green hover:bg-light-green-lighter text-elden-beige",
  secondary:
    "rounded-xl hover:bg-light-olive-lighter bg-light-olive text-dark-green",
  link: "text-elden-beige rounded-xl bg-transparent hover:bg-transparent hover:underline",
  danger:
    "bg-red-700 text-red-100 hover:bg-red-600 rounded-xl border border-red-50",
};

export function Button({
  onClick,
  size = "md",
  variant = "primary",
  to = "#",
  children,
  disabled = false,
}: ButtonProps) {
  let fullClassName = "font-semibold transition-all duration-300" + " ";

  // fullClassName += "m-6 "; // TESTING

  fullClassName += sizes[size] + " " || "";
  fullClassName += variants[variant] + " " || "";

  if (onClick && to)
    return (
      <Link href={to}>
        <button disabled={disabled} onClick={onClick} className={fullClassName}>
          {children}
        </button>
      </Link>
    );

  if (onClick)
    return (
      <Link href="#">
        <button disabled={disabled} onClick={onClick} className={fullClassName}>
          {children}
        </button>
      </Link>
    );

  return (
    <Link href={to}>
      <button disabled={disabled} className={fullClassName}>
        {children}
      </button>
    </Link>
  );
}
