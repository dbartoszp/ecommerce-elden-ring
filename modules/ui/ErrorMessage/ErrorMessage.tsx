import { ReactNode } from "react";

type ErrorMessageProps = {
  children: ReactNode;
};

export const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <div className="rounded-lg border border-red-600 bg-red-100 p-5 text-lg font-semibold text-red-700 sm:p-20 sm:text-3xl">
      {children}
    </div>
  );
};
