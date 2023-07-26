import type { Meta, StoryObj } from "@storybook/react";

import { Drawer as DrawerComponent } from "./Drawer";

const meta: Meta<typeof DrawerComponent> = {
  title: "Drawer",
  component: DrawerComponent,
};

type Story = StoryObj<typeof DrawerComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
let isOpen = true;

export const Drawer: Story = {
  render: () => (
    <DrawerComponent
      iconSize={30}
      onClose={() => console.log("koks")}
      isOpen={isOpen}
      belowNavbar={false}
    />
  ),
};

export default meta;
