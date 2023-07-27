import {
  BaseButton,
  ButtonVariantProps,
} from "@/modules/ui/Button/BaseButton/BaseButton";

type ButtonProps = Omit<ButtonVariantProps, "as">;

export function Button({ variant = "primary", ...rest }: ButtonProps) {
  return (
    <BaseButton {...{ ...rest, variant }} as="button">
      {rest.children}
    </BaseButton>
  );
}
