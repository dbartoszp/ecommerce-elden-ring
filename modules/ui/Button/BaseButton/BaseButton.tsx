import { MouseEvent, ReactNode } from "react";
import Link from "next/link";
import clsx from "clsx";

type BaseButtonProps = LinkVariantProps | ButtonVariantProps;

type BaseProps = {
  disabled?: boolean;
  children: ReactNode;
  size?: keyof typeof sizes;
  variant?: string;
};

export type LinkVariantProps = {
  as: "a";
  href: string;
  onClick?: (e?: MouseEvent<HTMLAnchorElement>) => void;
} & BaseProps;
export type ButtonVariantProps = {
  as: "button";
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
} & BaseProps;

type Sizes = {
  sm: string;
  md: string;
  lg: string;
};

type ClassNames = {
  [key: string]: string;
};

const sizes: Sizes = {
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
export const BaseButton = (props: BaseButtonProps) => {
  const { variant = "primary", size = "md" } = props;
  const className = clsx("font-semibold transition-all duration-300", {
    [variants[variant]]: props.variant,
    [sizes[size]]: props.size,
  });
  if (props.as === "a") {
    return (
      <Link {...props} className={className}>
        {props.children}
      </Link>
    );
  }
  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  );
};
