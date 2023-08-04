import { ReactNode } from "react";

type FooterItemProps = {
  children: ReactNode;
};

export function FooterItem({ children }: FooterItemProps) {
  return (
    <div className="border-b border-elden-beige pb-5 md:pb-12">{children}</div>
  );
}
