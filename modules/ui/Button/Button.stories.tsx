import type { Meta, StoryObj } from "@storybook/react";

import { Link as LinkComponent } from "./Link";
import { Button as ButtonComponent } from "./Button";
import { BaseButton } from "./BaseButton/BaseButton";

const meta: Meta<typeof BaseButton> = {
  title: "Buttons",
  component: LinkComponent,
};

type Story = StoryObj<typeof LinkComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Link: Story = {
  render: () => (
    <div className="bg-slate-800 p-3">
      <LinkComponent size="sm" href="/">
        small
      </LinkComponent>
      ,
      <LinkComponent size="md" href="/">
        medium
      </LinkComponent>
      ,
      <LinkComponent size="lg" href="/">
        large
      </LinkComponent>
      ,
    </div>
  ),
};
export const PrimaryButton: Story = {
  render: () => (
    <div className="space-x-4 bg-slate-800 p-3">
      <ButtonComponent size="sm" onClick={() => console.log("Clicked!")}>
        small
      </ButtonComponent>
      <ButtonComponent size="md" onClick={() => console.log("Clicked!")}>
        medium
      </ButtonComponent>
      <ButtonComponent size="lg" onClick={() => console.log("Clicked!")}>
        large
      </ButtonComponent>
      ,
    </div>
  ),
};
export const SecondaryButton: Story = {
  render: () => (
    <div className="space-x-4 bg-slate-800 p-3">
      <ButtonComponent
        variant="secondary"
        size="sm"
        onClick={() => console.log("Clicked!")}
      >
        small
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        size="md"
        onClick={() => console.log("Clicked!")}
      >
        medium
      </ButtonComponent>
      <ButtonComponent
        variant="secondary"
        size="lg"
        onClick={() => console.log("Clicked!")}
      >
        large
      </ButtonComponent>
      ,
    </div>
  ),
};
export const DangerButton: Story = {
  render: () => (
    <div className="space-x-4 bg-slate-800 p-3">
      <ButtonComponent
        variant="danger"
        size="sm"
        onClick={() => console.log("Clicked!")}
      >
        small
      </ButtonComponent>
      <ButtonComponent
        variant="danger"
        size="md"
        onClick={() => console.log("Clicked!")}
      >
        medium
      </ButtonComponent>
      <ButtonComponent
        variant="danger"
        size="lg"
        onClick={() => console.log("Clicked!")}
      >
        large
      </ButtonComponent>
      ,
    </div>
  ),
};

export default meta;
