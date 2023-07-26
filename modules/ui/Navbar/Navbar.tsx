"use client";
import React, { useState } from "react";
import {
  HiBars3,
  HiMagnifyingGlass,
  HiShoppingCart,
  HiUserCircle,
  HiXMark,
} from "react-icons/hi2";
import { Drawer } from "../Drawer/Drawer";
import { Button } from "../Button/Button";
import { Link } from "../Button/Link";

const iconSize = 30;

type NavbarProps = {
  onToggleMobileMenu: () => void;
  isOpenMobileMenu: boolean;
};

export function Navbar({ onToggleMobileMenu, isOpenMobileMenu }: NavbarProps) {
  return (
    <>
      <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between border-b-2 border-light-olive bg-light-green  p-3 uppercase text-elden-beige">
        <button className="md:hidden" onClick={onToggleMobileMenu}>
          {isOpenMobileMenu ? (
            <HiXMark size={iconSize} />
          ) : (
            <HiBars3 size={iconSize} />
          )}
        </button>
        <ul className="hidden md:flex md:flex-row  md:space-x-8 lg:space-x-12">
          <li className="hidden md:ml-8 md:block lg:ml-12">
            <Link href="melee">MELEE</Link>
          </li>
          <li className="hidden md:block">
            <Link href="sorcery">SORCERY</Link>
          </li>
          <li className="hidden md:block">
            <Link href="all">ALL</Link>
          </li>
        </ul>

        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <Link href="/">(LOGO)</Link>
        </div>

        <ul className="flex md:flex-row  md:space-x-6 lg:space-x-8">
          <li className="hidden md:block">
            <Link href="/">ABOUT US</Link>
          </li>
          <li className="flex items-center">
            <input
              className="hidden w-32 rounded-md bg-dark-green px-1 md:block"
              type="text"
              placeholder="Search..."
            />
          </li>
          <li className="md:hidden">
            <Link href="/">
              <HiMagnifyingGlass size={iconSize} />
            </Link>
          </li>
          <li>
            <Link href="/">
              <HiShoppingCart size={iconSize} />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="/">
              <HiUserCircle size={iconSize} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
