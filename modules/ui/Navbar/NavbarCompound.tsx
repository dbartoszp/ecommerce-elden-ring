import clsx from "clsx";
import React, { ReactNode, createContext } from "react";

type NavbarProps = {
  onToggleMobileMenu: () => void;
  isOpenMobileMenu: boolean;
  children: ReactNode;
};

const NavbarContext = createContext();

export function Navbar({
  onToggleMobileMenu,
  isOpenMobileMenu,
  children,
}: NavbarProps) {
  const value = { onToggleMobileMenu, isOpenMobileMenu };
  return (
    <NavbarContext.Provider value={value}>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b-2 border-light-olive bg-light-green  p-3 uppercase text-elden-beige">
        {children}
      </nav>
    </NavbarContext.Provider>
  );
}

type GroupProps = {
  children: ReactNode;
};

const Group = ({ children }: GroupProps) => {
  return (
    <ul className="flex list-none flex-row  space-x-8 lg:space-x-12">
      {children}
    </ul>
  );
};

type NavbarGroupItemProps = {
  children: ReactNode;
  visibility: "mobile" | "desktop" | "both";
};

const NavbarGroupItem = ({ children, visibility }: NavbarGroupItemProps) => {
  const className = clsx("", {
    "hidden md:block": visibility === "desktop",
    "block md:hidden": visibility === "mobile",
  });
  return <li className={className}>{children}</li>;
};

type NavbarItemProps = {
  children: ReactNode;
  visibility: "mobile" | "desktop" | "both";
};

const NavbarItem = ({ children, visibility }: NavbarItemProps) => {
  const className = clsx("", {
    "hidden md:block": visibility === "desktop",
    "block md:hidden": visibility === "mobile",
  });
  return <div className={className}>{children}</div>;
};

Navbar.Group = Group;
Navbar.NavbarGroupItem = NavbarGroupItem;
Navbar.NavbarItem = NavbarItem;

export default Navbar;
