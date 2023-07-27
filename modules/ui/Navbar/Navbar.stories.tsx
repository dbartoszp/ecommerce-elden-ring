import type { Meta, StoryObj } from "@storybook/react";
import { Navbar as NavbarComponent } from "@/modules/ui/Navbar/Navbar";
import { Link } from "../Button/Link";

const meta: Meta<typeof NavbarComponent> = {
  title: "Navbar",
  component: NavbarComponent,
};

type Story = StoryObj<typeof NavbarComponent>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Navbar: Story = {
  render: () => (
    <NavbarComponent>
      <NavbarComponent.Group>
        <NavbarComponent.NavbarGroupItem visibility="mobile">
          <Link href="/">NavbarGroupItem1</Link>
        </NavbarComponent.NavbarGroupItem>
        <NavbarComponent.NavbarGroupItem visibility="desktop">
          <Link href="/">NavbarGroupItem2</Link>
        </NavbarComponent.NavbarGroupItem>
        <NavbarComponent.NavbarGroupItem visibility="both">
          <Link href="/">NavbarGroupItem3</Link>
        </NavbarComponent.NavbarGroupItem>
      </NavbarComponent.Group>

      <NavbarComponent.NavbarItem visibility="both">
        <Link href="/">NavbarItem</Link>
      </NavbarComponent.NavbarItem>

      <NavbarComponent.Group>
        <NavbarComponent.NavbarGroupItem visibility="mobile">
          <Link href="/">NavbarGroupItem1</Link>
        </NavbarComponent.NavbarGroupItem>
        <NavbarComponent.NavbarGroupItem visibility="desktop">
          <Link href="/">NavbarGroupItem2</Link>
        </NavbarComponent.NavbarGroupItem>
        <NavbarComponent.NavbarGroupItem visibility="both">
          <Link href="/">NavbarGroupItem3</Link>
        </NavbarComponent.NavbarGroupItem>
      </NavbarComponent.Group>
    </NavbarComponent>
  ),
};

export default meta;
