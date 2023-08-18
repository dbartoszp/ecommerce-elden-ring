import { Button } from "../../../ui/Button/Button";
import { FormRow } from "../FormRow/FormRow";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSignup } from "@/modules/users/useSignup/useSignup";
import { RegisterFormSchema } from "./RegisterForm.schema";

type FormValues = z.infer<typeof RegisterFormSchema>;

export function RegisterForm() {
  const signup = useSignup();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormValues>({ resolver: zodResolver(RegisterFormSchema) });

  const onSubmit = handleSubmit(
    ({ firstName, lastName, passwordSignup, emailSignup }) => {
      signup.mutate({
        firstName,
        lastName,
        password: passwordSignup,
        email: emailSignup,
      });
    },
  );

  return (
    <>
      <span className="ml-4 border-b border-b-dark-green pb-1 text-3xl font-semibold tracking-wide text-dark-green">
        ...OR CREATE AN ACCOUNT
      </span>
      <form onSubmit={onSubmit} className="mb-32 px-4 py-9">
        <FormRow id="firstName" label="FIRST NAME">
          <input
            type="text"
            id="firstName"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            {...register("firstName", {
              required: true,
            })}
          />
          {errors.firstName?.message && (
            <span className="text-lg font-semibold text-red-700">
              Please provide a valid first name
            </span>
          )}
        </FormRow>
        <FormRow id="lastName" label="LAST NAME">
          <input
            type="text"
            id="lastName"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            {...register("lastName", {
              required: true,
            })}
          />
          {errors.lastName?.message && (
            <span className="text-lg font-semibold text-red-700">
              Please provide a valid last name
            </span>
          )}
        </FormRow>
        <FormRow id="emailSignup" label="EMAIL">
          <input
            type="email"
            id="emailSignup"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            {...register("emailSignup", { required: true })}
          />
          {errors.emailSignup?.message && (
            <span className="text-lg font-semibold text-red-700">
              Please provide a valid email address
            </span>
          )}
        </FormRow>
        <FormRow id="passwordSignup" label="PASSWORD (min 8 characters)">
          <input
            type="password"
            id="passwordSignup"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            {...register("passwordSignup", {
              required: true,
            })}
          />
          {errors.passwordSignup?.message && (
            <span className="text-lg font-semibold text-red-700">
              Password needs to be at least 8 characters long
            </span>
          )}
        </FormRow>
        <FormRow id="passwordConfirm" label="CONFIRM PASSWORD">
          <input
            type="password"
            id="passwordConfirm"
            className="rounded-sm  px-6 py-3 text-dark-green shadow-md"
            {...register("passwordConfirm", {
              required: true,
            })}
          />
          {errors.passwordConfirm?.message && (
            <span className="text-lg font-semibold text-red-700">
              Passwords need to match
            </span>
          )}
        </FormRow>
        <FormRow>
          <Button variant="primary" size="lg" onClick={onSubmit}>
            REGISTER
          </Button>
        </FormRow>
      </form>
    </>
  );
}
