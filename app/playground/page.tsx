"use client";
import * as Dialog from "@radix-ui/react-dialog";
import { HiArrowUturnRight } from "react-icons/hi2";
import { useState } from "react";

const PlaygroundPage = () => {
  const [name, setName] = useState("Wielki Szu");

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="mx-auto rounded-md bg-slate-300 p-4">
          Click here
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-500">
          <Dialog.Title className="">Click here</Dialog.Title>
          <Dialog.Description className="">
            Dialog description test
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input
              className="Input"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>

          <div>
            <Dialog.Close asChild>
              <button className="Button green">Close1</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="bg-green-200">
              <HiArrowUturnRight /> Close2
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default PlaygroundPage;
