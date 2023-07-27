import type { Meta, StoryObj } from "@storybook/react";

import { Separator as SeparatorComponent } from "./Separator";

const meta: Meta<typeof SeparatorComponent> = {
  title: "Separator",
  component: SeparatorComponent,
};

type Story = StoryObj<typeof SeparatorComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Separator: Story = {
  render: () => (
    <SeparatorComponent
      alt=""
      src="https://i.ytimg.com/vi/0XqySZkOPT8/maxresdefault.jpg"
    />
  ),
};

export default meta;
