"use client";

import { Navbar } from "@/modules/ui/Navbar/Navbar";
import { Navbar as NavbarCompound } from "@/modules/ui/Navbar/NavbarCompound";
import { Drawer } from "@/modules/ui/Drawer/Drawer";
import React, { useState } from "react";
import { Link } from "../ui/Button/Link";
import { Button } from "../ui/Button/Button";
import {
  HiMagnifyingGlass,
  HiShoppingCart,
  HiUserCircle,
  HiXMark,
} from "react-icons/hi2";

const iconSize = 30;

export const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const onMobileToggleMenu = () =>
    setIsOpenMobileMenu((prevState) => !prevState);

  return (
    <header>
      <NavbarCompound
        isOpenMobileMenu={isOpenMobileMenu}
        onToggleMobileMenu={onMobileToggleMenu}
      >
        <NavbarCompound.NavbarItem visibility="mobile">
          <Button onClick={onMobileToggleMenu}>
            <HiXMark size={iconSize} />
          </Button>
        </NavbarCompound.NavbarItem>
        <NavbarCompound.Group>
          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <Link href="/">MELEE</Link>
          </NavbarCompound.NavbarGroupItem>

          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <Link href="/">SORCERY</Link>
          </NavbarCompound.NavbarGroupItem>

          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <Link href="/">ALL</Link>
          </NavbarCompound.NavbarGroupItem>
        </NavbarCompound.Group>

        <NavbarCompound.NavbarItem visibility="both">
          <div className="absolute left-1/2 top-5 -translate-x-1/2 transform">
            <Link href="/">(LOGO)</Link>
          </div>
        </NavbarCompound.NavbarItem>

        <NavbarCompound.Group>
          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <Link href="/">ABOUT US</Link>
          </NavbarCompound.NavbarGroupItem>
          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <input
              className="hidden w-32 rounded-md bg-dark-green px-1 md:block"
              type="text"
              placeholder="Search..."
            />
          </NavbarCompound.NavbarGroupItem>
          <NavbarCompound.NavbarGroupItem visibility="mobile">
            <Link href="/">
              <HiMagnifyingGlass size={iconSize} />
            </Link>
          </NavbarCompound.NavbarGroupItem>
          <NavbarCompound.NavbarGroupItem visibility="both">
            <Link href="/">
              <HiShoppingCart size={iconSize} />
            </Link>
          </NavbarCompound.NavbarGroupItem>
          <NavbarCompound.NavbarGroupItem visibility="desktop">
            <Link href="/">
              <HiUserCircle size={iconSize} />
            </Link>
          </NavbarCompound.NavbarGroupItem>
        </NavbarCompound.Group>
      </NavbarCompound>
      <Drawer
        iconSize={iconSize}
        onClose={() => setIsOpenMobileMenu(false)}
        isOpen={isOpenMobileMenu}
        belowNavbar={true}
      />
    </header>
  );
};
