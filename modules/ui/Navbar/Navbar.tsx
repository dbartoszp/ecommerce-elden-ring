"use client";
import Link from "next/link";
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
            <Button variant="link" to="/melee">
              MELEE
            </Button>
          </li>
          <li className="hidden md:block">
            <Button variant="link" to="/sorcery">
              SORCERY
            </Button>
          </li>
          <li className="hidden md:block">
            <Button variant="link" to="/all">
              ALL
            </Button>
          </li>
        </ul>

        <div className="absolute left-1/2 -translate-x-1/2 transform">
          <Button to="/" variant="primary">
            <span>(LOGO)</span>
          </Button>
        </div>

        <ul className="flex md:flex-row  md:space-x-6 lg:space-x-8">
          <li className="hidden md:block">
            <Button variant="link" to="/about">
              ABOUT US
            </Button>
          </li>
          <li className="flex items-center">
            <input
              className="hidden w-32 rounded-md bg-dark-green px-1 md:block"
              type="text"
              placeholder="Search..."
            />
          </li>
          <li className="md:hidden">
            <Button size="sm" variant="primary" to="/search">
              <HiMagnifyingGlass size={iconSize} />
            </Button>
            {/* <Link href="2">
              <HiMagnifyingGlass size={iconSize} />
            </Link> */}
          </li>
          <li>
            <Button size="sm" variant="primary" to="/cart">
              <HiShoppingCart size={iconSize} />
            </Button>
            {/* <Link href="2">
              <HiShoppingCart size={iconSize} />
            </Link> */}
          </li>
          <li className="hidden md:block">
            <Button size="sm" variant="primary" to="/user">
              <HiUserCircle size={iconSize} />
            </Button>
            {/* <Link href="2">
              <HiUserCircle size={iconSize} />
            </Link> */}
          </li>
        </ul>
      </nav>
    </>
  );
}
