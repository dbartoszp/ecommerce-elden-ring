"use client";

import { LoginForm } from "@/modules/ui/Forms/LoginForm/LoginForm";
import { RegisterForm } from "@/modules/ui/Forms/RegisterForm/RegisterForm";

export default function LoginPage() {
  return (
    <main className="justify-center sm:mt-72 sm:flex sm:flex-row sm:items-start sm:space-x-12 md:space-x-36">
      <div className="pt-36 sm:pt-0">
        <LoginForm />
      </div>
      <div className="mt-12 sm:mt-0">
        <RegisterForm />
      </div>
    </main>
  );
}
