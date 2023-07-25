"use client";

import { Navbar } from "@/modules/ui/Navbar/Navbar";
import { Drawer } from "@/modules/ui/Drawer/Drawer";
import React, { useState } from "react";

export const Header = () => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const onMobileToggleMenu = () =>
    setIsOpenMobileMenu((prevState) => !prevState);
  return (
    <header>
      <Navbar
        onToggleMobileMenu={onMobileToggleMenu}
        isOpenMobileMenu={isOpenMobileMenu}
      />
      <Drawer
        iconSize={30}
        onClose={() => setIsOpenMobileMenu(false)}
        isOpen={isOpenMobileMenu}
        belowNavbar={true}
      />
    </header>
  );
};
