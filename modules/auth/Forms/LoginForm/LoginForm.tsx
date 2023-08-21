import { FormRow } from "../FormRow/FormRow";
import { Button } from "../../../ui/Button/Button";
import { useLogin } from "@/modules/auth/user/hooks/useLogin/useLogin";
import { useForm } from "react-hook-form";

export function LoginForm() {
  const login = useLogin();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = handleSubmit(({ email, password }) => {
    login.mutate({
      password,
      email,
    });
  });

  return (
    <>
      <span className="ml-4 border-b border-b-dark-green pb-1 text-3xl font-semibold tracking-wide text-dark-green">
        LOGIN
      </span>
      <form onSubmit={onSubmit} className="px-4 py-9 ">
        <FormRow label="EMAIL" id="email">
          <input
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            type="email"
            id="email"
            {...register("email", {
              required: true,
            })}
          />
          {errors.email?.message && (
            <span className="text-lg font-semibold text-red-700">
              Email or password does not match
            </span>
          )}
        </FormRow>
        <FormRow label="PASSWORD" id="password">
          <input
            className="rounded-sm px-6 py-3 text-dark-green shadow-md"
            type="password"
            id="password"
            {...register("password", {
              required: true,
            })}
          />
          {errors.password?.message && (
            <span className="text-lg font-semibold text-red-700">
              Email or password does not match
            </span>
          )}
        </FormRow>
        <FormRow>
          <Button
            disabled={login.isLoading}
            variant="primary"
            size="lg"
            onClick={onSubmit}
          >
            SIGN IN
          </Button>
        </FormRow>
      </form>
    </>
  );
}
