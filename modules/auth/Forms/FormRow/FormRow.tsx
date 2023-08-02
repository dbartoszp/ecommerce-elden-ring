import { FieldError } from "react-hook-form";

type FormRowProps = {
  label?: string;
  children: React.ReactNode;
};

export function FormRow({ label, children }: FormRowProps) {
  return (
    <div className="flex flex-col gap-3 px-0 py-5">
      {label && <label className="text-sm tracking-widest">{label}</label>}
      {children}
    </div>
  );
}
