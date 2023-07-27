import type { Meta, StoryObj } from "@storybook/react";

import { ImageCard as ImageCardComponent } from "./ImageCard";

const meta: Meta<typeof ImageCardComponent> = {
  title: "Image Card",
  component: ImageCardComponent,
};

type Story = StoryObj<typeof ImageCardComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const ImageCard: Story = {
  render: ({ ...args }) => (
    <div className="bg-dark-green p-4 text-elden-beige">
      <ImageCardComponent
        alt={args.alt}
        src="https://i.ytimg.com/vi/0XqySZkOPT8/maxresdefault.jpg"
        title={args.title}
        description={args.description}
        width={args.width}
        height={args.height}
      />
    </div>
  ),
  args: {
    alt: "location leyndell",
    title: "Secondary shop in Leyndell",
    description: "Leyndell Colosseum 22d",
    width: 400,
    height: 400,
  },
};

export default meta;
