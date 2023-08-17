"use client";
import { Disclosure } from "@headlessui/react";
import clsx from "clsx";
import { ReactNode } from "react";
import { HiChevronDown } from "react-icons/hi2";
type ProductDisclosureProps = {
  children: ReactNode;
  openText: string;
};
//https://headlessui.com/react/disclosure
export const ProductDisclosure = ({
  children,
  openText,
}: ProductDisclosureProps) => {
  return (
    <div className="border-b border-b-elden-beige text-elden-beige sm:w-[500px]">
      <Disclosure as="div" className="bg-light-green">
        {({ open }) => (
          <>
            <Disclosure.Button as="button" className="w-full">
              <div className="flex w-full justify-between bg-light-green py-3 text-left text-elden-beige">
                <span className="ml-6">{openText}</span>
                <HiChevronDown
                  size={20}
                  className={clsx("absolute right-6", {
                    "rotate-180 transform": open,
                  })}
                />
              </div>
            </Disclosure.Button>
            <Disclosure.Panel>
              <div className="bg-light-green-lighter p-2">{children}</div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};
