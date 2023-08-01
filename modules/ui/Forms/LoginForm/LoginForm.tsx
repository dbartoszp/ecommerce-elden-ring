import { FormEvent, useState } from "react";
import { FormRow } from "../FormRow/FormRow";
import { Button } from "../../Button/Button";
import { useLogin } from "@/modules/users/hooks/useLogin";

export function LoginForm() {
  const [email, setEmail] = useState("drabik@zmitac.com");
  const [password, setPassword] = useState("Mikro123");
  const login = useLogin();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    login.mutate({ email, password });
  };

  return (
    <>
      <span className="ml-4 border-b border-b-dark-green pb-1 text-3xl font-semibold tracking-wide text-dark-green">
        LOGIN
      </span>
      <form onSubmit={handleSubmit} className="px-4 py-9">
        <FormRow label="EMAIL">
          <input
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            type="email"
            id="email"
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={login.isLoading}
          />
        </FormRow>
        <FormRow label="PASSWORD">
          <input
            className="rounded-sm px-6 py-3 text-dark-green shadow-md"
            type="password"
            id="password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={login.isLoading}
          />
        </FormRow>
        <FormRow>
          <Button
            disabled={login.isLoading}
            variant="primary"
            size="lg"
            onClick={handleSubmit}
          >
            SIGN IN
          </Button>
        </FormRow>
      </form>
    </>
  );
}
