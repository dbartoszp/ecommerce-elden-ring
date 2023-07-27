"use client";

import { Navbar } from "@/modules/ui/Navbar/Navbar";
import { Drawer } from "@/modules/ui/Drawer/Drawer";
import React, { useState } from "react";
import { Link } from "../ui/Button/Link";
import { Button } from "../ui/Button/Button";
import {
  HiBars3,
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
      <Navbar>
        <Navbar.NavbarItem visibility="mobile">
          <Button onClick={onMobileToggleMenu}>
            {isOpenMobileMenu ? (
              <HiXMark size={iconSize} />
            ) : (
              <HiBars3 size={iconSize} />
            )}
          </Button>
        </Navbar.NavbarItem>

        <Navbar.Group>
          <Navbar.NavbarGroupItem visibility="desktop">
            <Link href="/dsd">MELEE</Link>
          </Navbar.NavbarGroupItem>

          <Navbar.NavbarGroupItem visibility="desktop">
            <Link href="/">SORCERY</Link>
          </Navbar.NavbarGroupItem>

          <Navbar.NavbarGroupItem visibility="desktop">
            <Link href="/">ALL</Link>
          </Navbar.NavbarGroupItem>
        </Navbar.Group>

        <Navbar.NavbarItem visibility="both">
          <div className="absolute left-1/2 top-5 -translate-x-1/2 transform">
            <Link href="/">(LOGO)</Link>
          </div>
        </Navbar.NavbarItem>

        <Navbar.Group>
          <Navbar.NavbarGroupItem visibility="desktop">
            <Link href="/">ABOUT US</Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="desktop">
            <input
              className="hidden w-32 rounded-md bg-dark-green px-1 md:block"
              type="text"
              placeholder="Search..."
            />
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="mobile">
            <Link href="/">
              <HiMagnifyingGlass size={iconSize} />
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="both">
            <Link href="/">
              <HiShoppingCart size={iconSize} />
            </Link>
          </Navbar.NavbarGroupItem>
          <Navbar.NavbarGroupItem visibility="desktop">
            <Link href="/">
              <HiUserCircle size={iconSize} />
            </Link>
          </Navbar.NavbarGroupItem>
        </Navbar.Group>
      </Navbar>
      <Drawer
        iconSize={iconSize}
        onClose={() => setIsOpenMobileMenu(false)}
        isOpen={isOpenMobileMenu}
        belowNavbar={true}
      />
    </header>
  );
};
