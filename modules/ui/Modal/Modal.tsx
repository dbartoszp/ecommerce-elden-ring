"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode, useState } from "react";
import { Button } from "../Button/Button";
import { HiXMark } from "react-icons/hi2";

type ModalProps = {
  children: ReactNode;
  openText: string;
  title: string;
  description?: string;
};

export const Modal = ({
  children,
  openText,
  title,
  description,
}: ModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button
          size="md"
          variant="secondary"
          onClick={() => console.log("opened")}
        >
          {openText}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-dark-green opacity-50" />
        <Dialog.Content className="fixed left-1/2 top-1/2 w-10/12 -translate-x-1/2 -translate-y-1/2 rounded-md bg-elden-beige px-10 pb-10 pt-4 shadow-md md:w-7/12 lg:w-5/12">
          <Dialog.Title className="flex w-full justify-between text-2xl font-semibold">
            <span>{title}</span>
            <div>
              <Dialog.Close asChild>
                <Button
                  size="md"
                  variant="secondary"
                  onClick={() => console.log("closed")}
                >
                  <HiXMark />
                </Button>
              </Dialog.Close>
            </div>
          </Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
