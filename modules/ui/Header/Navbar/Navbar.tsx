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
import { Drawer } from "../../Drawer/Drawer";
import { Button } from "../../Button/Button";

const iconSize = 30;

export function Navbar() {
  const [toggleMenuMobile, setToggleMenuMobile] = useState(false);

  return (
    <>
      <nav className="fixed left-0 right-0 top-0 flex items-center justify-between border-b border-light-olive bg-light-green  p-3 uppercase text-elden-beige">
        <button
          className="md:hidden"
          onClick={() => setToggleMenuMobile(!toggleMenuMobile)}
        >
          {toggleMenuMobile ? (
            <HiXMark size={iconSize} />
          ) : (
            <HiBars3 size={iconSize} />
          )}
        </button>
        <ul className="hidden md:flex md:flex-row  md:space-x-8 lg:space-x-12">
          <li className="hidden md:ml-8 md:block lg:ml-12">
            <Link href="2">MELEE</Link>
          </li>
          <li className="hidden md:block">
            <Link href="2">SORCERY</Link>
          </li>
          <li className="hidden md:block">
            <Link href="2">OTHER</Link>
          </li>
        </ul>

        <div>
          <span>(LOGO)</span>
        </div>

        <ul className="flex md:flex-row  md:space-x-6 lg:space-x-8">
          <li className="hidden md:block">
            <Link href="2">ABOUT US</Link>
          </li>
          <li>
            <input
              className="hidden w-32 rounded-md bg-dark-green px-1 md:block"
              type="text"
              placeholder="Search..."
            />
          </li>
          <li className="md:hidden">
            <Link href="2">
              <HiMagnifyingGlass size={iconSize} />
            </Link>
          </li>
          <li>
            <Link href="2">
              <HiShoppingCart size={iconSize} />
            </Link>
          </li>
          <li className="hidden md:block">
            <Link href="2">
              <HiUserCircle size={iconSize} />
            </Link>
          </li>
        </ul>
      </nav>
      <Drawer
        iconSize={iconSize}
        onClose={() => setToggleMenuMobile(false)}
        isOpen={toggleMenuMobile}
        belowNavbar={true}
      />

      {/* <div className="bg-dark-green">
        <Button />
      </div> */}
    </>
  );
}
